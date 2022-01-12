<script setup lang="ts">
import Employeer from "@/interfaces/Employeer";
import Service from "@/interfaces/Service";

const employeers = ref<Array<Employeer>>([
  {
    id: 1,
    name: "Orhan Taruk",
    title: "Uzman Klinik Psikolog",
    slug: "orhan-taruk",
    avatar:
      "https://i1.wp.com/sisliterapi.com/wp-content/uploads/2020/07/GEA_8983-scaled.jpg?w=1775&ssl=1",
  },
  {
    id: 2,
    name: "Atacan Küçükoğlu",
    title: "Uzman Klinik Psikolog",
    slug: "atacan-kucukoglu",
    avatar:
      "https://i2.wp.com/sisliterapi.com/wp-content/uploads/2021/12/Psikolog-Atacan-Kucukoglu.jpg?w=810&ssl=1",
  },
]);
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
  <div class="bg-white">
    <main>
      <!-- Hero Section-->
      <div
        class="relative bg-gradient-to-t from-color1 via-[#d3cbcb] to-color1 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden min-h-max"
      >
        <div class="mx-auto max-w-7xl lg:px-8 h-104">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
            >
              <div class="lg:py-12 w-full px-2">
                <h1
                  class="pt-8 text-8 text-center lg:text-left tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text block"
                >
                  Şişli Terapi Enstitüsü
                </h1>

                <p
                  class="mt-3 text-center lg:text-left text-gray-700 sm:mt-5 sm:text-xl xl:text-xl font-bold"
                >
                  İstanbul Beşiktaş'ta Uzman Psikologlarımızdan Destek Almak
                  İçin Bize Ulaşabilirsiniz
                </p>

                <div
                  class="flex justify-center lg:justify-start mt-10 sm:mt-12 space-x-2"
                >
                  <nuxt-link
                    to="/randevu-iletisim"
                    class="btn px-8 lg:px-12 bg-greenS border-0 ml-4 lg:ml-0"
                  >
                    Randevu Al
                  </nuxt-link>
                  <nuxt-link
                    to="/uzmanlarimiz"
                    class="btn hover:bg-greenS px-8 lg:px-12 border-0"
                  >
                    Uzmanlarımız
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div
                class="bg-contain mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
              >
                <img
                  class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:mt-24 lg:h-10/12 lg:w-auto lg:max-w-none rounded-lg"
                  src="@/assets/images/hero/hero.png"
                  alt="Achieve the dream"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 w-full">
          <!-- <IconBgborderblue /> -->
        </div>
      </div>

      <!-- Services Section-->
      <div
        class="relative bg-gradient-to-b from-color1 via-color2 to-white sm:pt-16 py-16 lg:pt-8 lg:pb-14 lg:overflow-hidden min-h-max"
      >
        <div class="mx-auto max-w-full lg:px-4">
          <div class="px-2 py-6">
            <h2
              class="text-8 text-center lg:text-center tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text block"
            >
              Çalışma Alanlarımız
            </h2>
          </div>
          <div id="service-list">
            <div
              v-if="services.length"
              class="flex flex-wrap items-center justify-center lg:space-x-4 lg:mx-auto"
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

      <!-- CTO Section-->
      <div
        class="bg-greenS py-4 lg:pt-8 lg:pb-14 lg:overflow-hidden min-h-max h-48"
      >
        <div class="mx-auto max-w-full">
          <div class="mx-auto max-w-7xl lg:px-8 h-104">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
              >
                <div
                  class="py-2 lg:py-4 flex flex-col items-center justify-center"
                >
                  <p class="text-6 lg:text-7 font-semibold text-white">
                    Online Terapi
                  </p>
                  <p class="text-gray-300 text-4.5 lg:text-5 text-center">
                    Uzman Psikologlarımızdan Online Olarak Destek Alabilirsiniz
                  </p>
                </div>
              </div>
              <div class="flex justify-center items-center">
                <nuxt-link
                  to="/randevu-iletisim"
                  class="btn hover:bg-color1 px-8 lg:px-12 border-0"
                >
                  Randevu Al
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Employeers Section-->
      <div
        class="relative bg-gradient-to-b from-color1 via-green-200 to-white sm:pt-16 py-16 lg:pt-8 lg:pb-14 lg:overflow-hidden min-h-max"
      >
        <div class="mx-auto max-w-full lg:px-4">
          <div class="px-2 py-6">
            <h2
              class="text-8 text-center lg:text-center tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text block"
            >
              Uzmanlarımız
            </h2>
          </div>
          <div id="employeer-list">
            <div
              v-if="employeers.length"
              class="flex flex-wrap items-center justify-center lg:space-x-4 lg:mx-auto"
            >
              <div
                v-for="(item, index) in employeers"
                :key="index"
                class="my-3 overflow-hidden bg-white rounded rounded-lg shadow-lg mx-2 w-full lg:w-72 h-full"
              >
                <img
                  :src="item.avatar"
                  class="object-cover w-full lg:w-72 h-96 lg:h-72"
                />
                <div class="px-3 pt-2 pb-3 text-center">
                  <div class="flex flex-row items-center justify-between">
                    <div
                      class="flex items-start justify-center text-black no-underline"
                    >
                      <div class="grid text-left">
                        <span class="font-bold text-md text-gray-800">
                          {{ item.name }}
                        </span>
                        <span class="font-light text-md text-gray-600">
                          {{ item.title }}
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
                class="skeleton-loading-card my-3 overflow-hidden bg-white rounded rounded-lg shadow"
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
    </main>
  </div>
</template>

<style>
@import "@/assets/css/skeleton.css";
</style>
