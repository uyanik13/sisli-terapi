<script setup lang="ts">
import Employeer from "@/interfaces/Employeer";
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
</script>
<template>
  <div class="flex flex-col">
    <div
      class="bg-gradient-to-t from-color1 via-[#ffffff] to-color1 sm:pt-16 lg:pt-8 lg:pb-14"
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
                Uzmanlarımız
              </h1>

              <h2 class="text-gray-700">
                Psikolojik Destek Almak İstediğiniz Uzman Psikolog Hakkında
                Bilgi Edinin
              </h2>
            </div>
          </div>
        </div>

        <div id="employeer-list" class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            v-if="employeers.length"
            class="flex flex-wrap items-center justify-start lg:space-x-4 lg:mx-auto"
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

    <div class="bg-[#50D4A2] mb-16 lg:pt-8 lg:pb-14" my-2>
      <div class="mx-auto max-w-full">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="p-2 lg:py-4 flex flex-col items-center justify-center">
            <p class="text-gray-100 text-4 lg:text-4">
              "Şişli Terapi Enstitüsü, alanında kendisini yetiştirmiş uzman bir
              kadroyu bünyesinde barındırmaktadır. Uzmanlarımız çalışma
              alanlarında sürekli olarak kendisini geliştiren, kendi
              terapi/analiz süreçlerinden geçmiş ya da geçmektedirler.
              Uzmanlarımız psikoterapi sürecinin bir parçası olarak süpervizyon
              süreçlerine de devam etmektedirler. Depresyon, Kaygı Bozuklukları,
              Sosyal Fobi, Obsesif Kompulsif Bozukluklar, Travmatik Yaşantılar,
              İlişkisel Problemler, Çocuk Oyun Terapileri, Çift Terapisi,
              Bağımlılık Terapisi, Cinsel Terapi, Kişilik Bozuklukları
              alanlarında çalışmalarına devam etmektedirler."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/skeleton.css";
</style>
