<script setup lang="ts">
import { artMaker } from "~~/server/Service/ApiService";
const { createAlphanumericString } = useRandomString();
const styles = ref([
  {
    id: 1,
    name: "Hotpot Art 1",
    value: "hotpotArt1",
    subStyles: [],
  },
  {
    id: 2,
    name: "Hotpot Art 2",
    value: "hotpotArt2",
    subStyles: [],
  },
  {
    id: 3,
    name: "Hotpot Art 3",
    value: "hotpotArt3",
    subStyles: [],
  },
  {
    id: 4,
    name: "Painting",
    value: "painting",
    subStyles: [
      {
        id: 1,
        name: "Oil painting",
        value: "oil",
      },
      {
        id: 2,
        name: "Paul Cezanne",
        value: "cezanne",
      },
      {
        id: 3,
        name: "Claude Monet",
        value: "monet",
      },
      {
        id: 4,
        name: "Van Gogh",
        value: "vanGogh",
      },
      {
        id: 5,
        name: "Salvador Dali",
        value: "dali",
      },
      {
        id: 6,
        name: "Huang Gongwang",
        value: "huangGongwang",
      },
      {
        id: 7,
        name: "Custom",
        value: "custom",
      },
    ],
  },
  {
    id: 5,
    name: "Watercolor",
    value: "watercolor",
    subStyles: [],
  },
  {
    id: 6,
    name: "Portrait",
    value: "portrait",
    subStyles: [
      {
        id: 1,
        name: "Hotpot Portrait 1",
        value: "hotpotPortrait1",
      },
      {
        id: 2,
        name: "Hotpot Portrait 2",
        value: "hotpotPortrait2",
      },
      {
        id: 3,
        name: "Hotpot Portrait 3",
        value: "hotpotPortrait3",
      },
    ],
  },
  {
    id: 7,
    name: "Photorealistic",
    value: "photorealistic",
    subStyles: [
      {
        id: 1,
        name: "Unreal Engine",
        value: "unreal",
      },
      {
        id: 2,
        name: "Volumetric lighting",
        value: "volumetric",
      },
      {
        id: 3,
        name: "Photo taken on an iPhone",
        value: "iphone",
      },
      {
        id: 4,
        name: "Photo taken with Fujifilm Superia",
        value: "fugifilm",
      },
      {
        id: 5,
        name: "Photo taken in high-definition",
        value: "highDef",
      },
    ],
  },
  {
    id: 8,
    name: "Graffiti",
    value: "graffiti",
    subStyles: [],
  },
  {
    id: 9,
    name: "Anime",
    value: "anime",
    subStyles: [
      {
        id: 1,
        name: "Beautiful",
        value: "beautiful",
      },
      {
        id: 1,
        name: "Black & White",
        value: "blackWhite",
      },
      {
        id: 1,
        name: "Berserk",
        value: "berserk",
      },
    ],
  },
  {
    id: 10,
    name: "Japanese Art",
    value: "ukiyoe",
    subStyles: [],
  },
  {
    id: 11,
    name: "Acrylic Art",
    value: "acrylicArt",
    subStyles: [],
  },
  {
    id: 12,
    name: "Pencil Sketch",
    value: "pencilSketch",
    subStyles: [],
  },
  {
    id: 13,
    name: "Black &amp; White 3D",
    value: "bw3D",
    subStyles: [],
  },
  {
    id: 14,
    name: "Custom",
    value: "custom",
    subStyles: [],
  },
  {
    id: 15,
    name: "Pixel Art",
    value: "pixelArt",
    subStyles: [],
  },
]);
const resolutions = ref([
  { id: 1, name: "256x256", value: "256" },
  { id: 2, name: "512x512", value: "512" },
  { id: 3, name: "736x736", value: "736" },
]);
const selectedResolution = ref(null);
const selectedStyle = ref({
  id: 1,
  name: "Hotpot Art 1",
  value: "hotpotArt1",
  subStyles: [],
});
const selectedSubStyle = ref(null);
const outputText = ref("");
const { _imageEncode, fixedImage } = useUploadImage();

const onLoading = ref(false);
const searchText = computed(() =>
  selectedSubStyle.value ? selectedSubStyle.value : selectedStyle.value.name
);

const form = computed(() => {
  return {
    requestId: createAlphanumericString(5),
    outputWidth: selectedResolution.value,
    numIterations: 800,
    waitTime: "premium",
    seedImage: null,
    inputText: setInputText.value,
  };
});

const setInputText = computed(() => {
  let type = selectedStyle.value.value;
  let styleModifier = searchText.value ? searchText.value : "";
  let inputText = outputText.value;
  if (type === "hotpotArt1") {
    inputText +=
      " with harmonic colors created by subtle brush strokes trending on Instagram";
  } else if (type === "hotpotArt2") {
    inputText =
      "Beautiful artistic painting of " +
      inputText +
      " with vibrant colors and a happy palette";
  } else if (type === "hotpotArt3") {
    inputText = "Stunning art of " + inputText + " rendered from glass";
  } else if (type === "anime" && styleModifier === "Beautiful") {
    inputText =
      "Beautiful illustration with vibrant colors of " +
      inputText +
      " in the style of Japanese anime";
  } else if (type === "anime" && styleModifier === "Black & White") {
    inputText =
      "Stunning black & white illustration of " +
      inputText +
      " in the style of Japanese manga";
  } else if (type === "anime" && styleModifier === "Berserk") {
    inputText =
      "Gorgeous illustration of " +
      inputText +
      " in the style of the anime genre, Berserk";
  } else if (type === "portrait" && styleModifier === "Hotpot Portrait 1") {
    inputText = `Enchanting and creative portrait of ${inputText}, painted with unique brushstrokes in a distinctive style`;
  } else if (type === "portrait" && styleModifier === "Hotpot Portrait 2") {
    inputText = `Scary portrait of ${inputText}, painted with dark and foreboding colors`;
  } else if (type === "portrait" && styleModifier === "Hotpot Portrait 3") {
    inputText = `Gorgeous portrait of ${inputText}, painted with vivid and harmonious colors`;
  } else if (styleModifier) {
    inputText += " in the style of " + styleModifier;
  }
  return inputText;
});

const submit = async () => {
  onLoading.value = true;
  const formData = new FormData();
  formData.append("requestId", form.value.requestId);
  formData.append("outputWidth", form.value.outputWidth);
  formData.append("numIterations", form.value.numIterations);
  formData.append("inputText", form.value.inputText);
  //formData.append("waitTime", form.value.waitTime);
  await artMaker(formData).then((res) => {
    _imageEncode(res);
    onLoading.value = false;
  });
};
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="bg-base-200">
      <CommonBreadcrumb :title="`Text To Art`" />
      <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-4">
        <div class="card lg:w-4/12 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ $t("Style") }}</span>
              </label>
              <select
                v-model="selectedStyle"
                class="select select-bordered w-full max-w-xs"
              >
                <option
                  v-for="item in styles"
                  :key="item.id"
                  :value="item"
                  :selected="item.id == 1 ? selected : false"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ $t("Sub Style") }}</span>
              </label>
              <select
                :disabled="selectedStyle.subStyles.length < 1 ? true : false"
                v-model="selectedSubStyle"
                class="select select-bordered w-full max-w-xs"
              >
                <option
                  v-for="item in selectedStyle.subStyles"
                  :key="item.id"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ $t("Resolution") }}</span>
              </label>
              <select
                v-model="selectedResolution"
                class="select select-bordered w-full max-w-xs"
              >
                <option
                  v-for="item in resolutions"
                  :key="item.id"
                  :value="item.value"
                  :selected="item.id == 1 ? selected : false"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Output</span>
              </label>
              <textarea
                v-model="outputText"
                class="textarea h-24 textarea-bordered textarea-primary"
                placeholder="What do you want to see?"
              ></textarea>
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
          <div class="card-body">
            <div class="avatar flex space-x-4">
              <div
                v-if="onLoading || fixedImage"
                class="
                  rounded-box
                  w-full
                  ring ring-primary ring-offset-base-100 ring-offset-2
                "
              >
                <LoadingArt v-if="onLoading" />
                <div
                  @click="download"
                  class="
                    rounded-box
                    lg:w-full lg:h-104
                    ring ring-primary ring-offset-base-100
                  "
                  v-if="fixedImage"
                >
                  <img class="w-76 h-40" :src="fixedImage" />
                </div>
              </div>
              <div class="bg-base-300 p-2 rounded-lg" v-else>
                <p>Please Select the options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
