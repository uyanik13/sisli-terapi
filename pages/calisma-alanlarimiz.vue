<script setup lang="ts">
import Service from "@/interfaces/Service";
const services = ref<Array<Service>>([
  {
    id: 1,
    title: "Çocuk Danışmanlığı",
    description:
      "Çocuk terapisi genel olarak, çocuğun sosyal işlevlerinin olumsuz etkilendiği (okul başarısı, akran ilişkileri, aile ilişkileri vb.), fiziksel ihtiyaçlarının düzeninin",
    slug: "orhan-taruk",
    image: "assets/images/content/kid-therapy.jpg",
  },
  {
    id: 1,
    title: "Ergen Danışmanlığı",
    description:
      "Günümüzün genç ergen bireyleri önceki kuşakların ergenlerinden daha fazla stres altındadır. Günümüzde ergenleri etkileyen akademik, sosyal, aile içi stres etkenleri oldukça fazladır. ",
    slug: "orhan-taruk",
    image: "assets/images/content/kid-therapy.jpg",
  },
]);
</script>
<template>
  <div class="flex flex-col">
    <div
      class="bg-gradient-to-t from-color1 via-[#ffffff] to-color1 sm:pt-16 lg:pt-8 pb-14"
    >
      <div class="mx-auto max-w-8xl lg:px-8">
        <div class="py-5 lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
          >
            <div class="w-full px-2">
              <h1
                class="text-8 text-center lg:text-left tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text block"
              >
                Çalışma Alanlarımız
              </h1>
            </div>
          </div>
        </div>

        <div id="service-list" class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            v-if="services.length"
            class="flex flex-wrap items-center justify-start lg:space-x-4 lg:mx-auto"
          >
            <div
              v-for="(item, index) in services"
              :key="index"
              class="my-3 overflow-hidden bg-white rounded rounded-lg shadow-lg mx-2 w-full lg:w-72 lg:h-96"
            >
              <img
                :src="item.image"
                class="object-cover w-full lg:w-72 h-96 lg:h-72"
              />
              <div class="px-3 pt-2 pb-3 text-center">
                <div class="flex flex-row items-center justify-between">
                  <div
                    class="flex items-start justify-center text-black no-underline"
                  >
                    <div class="grid text-left">
                      <span class="font-bold text-md text-gray-800">
                        {{ item.title }}
                      </span>
                      <span
                        class="font-light text-md text-gray-600 word-breaks"
                      >
                        {{ item.description }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="flex flex-wrap items-center justify-center lg:space-x-4 lg:mx-auto"
          >
            <div
              v-for="(item, index) in 4"
              :key="index"
              class="skeleton-loading-card my-3 overflow-hidden bg-white rounded rounded-lg shadow mx-2 w-full lg:w-72 h-full"
            >
              <div
                class="object-cover w-full h-60 lg:h-72 skeleton-loading-order-products-item-thumbnail loading"
              />
              <div class="px-3 pt-2 pb-3 text-center">
                <div class="flex flex-row items-center justify-between">
                  <div
                    class="flex items-start justify-center text-black no-underline"
                  >
                    <div
                      class="block skeleton-loading-order-products-item-thumbnail loading w-16 h-16 rounded-full"
                    />
                    <div class="grid ml-2">
                      <div
                        class="skeleton-loading-info loading h-4 w-64 my-2"
                      />
                      <div
                        class="skeleton-loading-info loading h-4 w-32 my-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/skeleton.css";
</style>
