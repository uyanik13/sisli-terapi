<script setup lang="ts">
import { colorizePhoto } from "~~/server/Service/ApiService";
const { createAlphanumericString } = useRandomString();
const {
  selectedImage,
  selectedImageBase64,
  onUploadFiles,
  _imageEncode,
  fixedImage,
} = useUploadImage();

const onLoading = ref(false);

const colorizations = ref([
  { id: 1, name: "12" },
  { id: 2, name: "15" },
  { id: 3, name: "18" },
  { id: 4, name: "20" },
  { id: 5, name: "25" },
]);
const selectedColorization = ref(12);

const form = computed((image) => {
  return {
    requestId: createAlphanumericString(5),
    image: selectedImage.value,
    renderFactor: selectedColorization.value,
  };
});

const submit = async () => {
  onLoading.value = true;
  if (!selectedImage.value) return false;
  const formData = new FormData();
  formData.append("requestId", form.value.requestId);
  formData.append("image", form.value.image);
  formData.append("renderFactor", form.value.renderFactor);
  await colorizePhoto(formData).then((res) => {
    _imageEncode(res);
    onLoading.value = false;
  });
};
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="bg-base-200">
      <CommonBreadcrumb :title="`Image Colorize`" />
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-4">
        <div class="card lg:w-4/12 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label
                class="
                  w-full
                  flex flex-col
                  items-center
                  px-4
                  py-6
                  bg-base-100
                  text-base-content
                  rounded-lg
                  shadow-lg
                  tracking-wide
                  uppercase
                  border-1 border-base-200
                  cursor-pointer
                  hover:bg-blue
                "
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                  />
                </svg>
                <span class="mt-2 text-base leading-normal">Select a file</span>
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  @change="onUploadFiles"
                  class="hidden"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ $t("Colorization Factor") }}</span>
              </label>
              <select
                v-model="selectedColorization"
                class="select select-bordered w-full max-w-xs"
              >
                <option
                  v-for="item in colorizations"
                  :key="item.id"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="form-control mt-6">
              <button
                :disabled="onLoading"
                class="btn btn-primary"
                @click="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="card lg:w-8/12 shadow-2xl bg-base-100">
          <div class="p-5 bg-base-200">
            <div class="p-1 avatar flex space-x-4" v-if="selectedImage">
              <div
                v-if="selectedImageBase64"
                class="
                  rounded-box
                  w-1/2
                  h-full
                  lg:w-1/2 lg:h-80
                  ring ring-primary ring-offset-base-100
                "
              >
                <img class="w-76 h-40" :src="selectedImageBase64" />
              </div>
              <div
                v-if="onLoading || fixedImage"
                class="
                  rounded-box
                  w-1/2
                  h-full
                  lg:w-1/2 lg:h-80
                  ring ring-primary ring-offset-base-100
                "
              >
                <div v-if="onLoading" class="w-full h-full lg:w-full lg:h-80">
                  <div>
                    <LoadingRestorephoto />
                  </div>
                </div>
                <div v-else>
                  <div
                    @click="download"
                    class="
                      rounded-box
                      lg:w-full lg:h-80
                      ring ring-primary ring-offset-base-100
                    "
                    v-if="fixedImage"
                  >
                    <img class="w-76 h-40" :src="fixedImage" />
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-base-300 p-2 rounded-lg" v-else>
              <p>Please Select an Image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
