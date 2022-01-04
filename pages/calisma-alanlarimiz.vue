<template>
  <div class="bg-white">
    <main>
      <!-- Services Section-->
      <div
        class="
          relative
          bg-gradient-to-b
          from-color1
          via-color2
          to-white
          sm:pt-16
          py-16
          lg:pt-8 lg:pb-14 lg:overflow-hidden
          min-h-max
        "
      >
        <div class="mx-auto max-w-full lg:px-4">
          <div class="px-2 py-6">
            <h2
              class="
                text-8 text-center
                lg:text-center
                tracking-tight
                font-extrabold
                text-white
                sm:mt-5 sm:text-6xl
                lg:mt-6
                xl:text-6xl
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-gray-800
                to-gray-600
                block
              "
            >
              Çalışma Alanlarımız
            </h2>
          </div>
          <div
            class="
              flex flex-wrap
              items-center
              justify-center
              lg:space-x-4 lg:mx-auto
            "
          >
            <div
              v-for="(item, index) in 4"
              :key="index"
              class="
                skeleton-loading-card
                my-3
                overflow-hidden
                bg-white
                rounded rounded-lg
                shadow
              "
            >
              <div
                class="
                  object-cover
                  w-full
                  h-60
                  lg:h-72
                  skeleton-loading-order-products-item-thumbnail
                  loading
                "
              />
              <div class="px-3 pt-2 pb-3 text-center">
                <div class="flex flex-row items-center justify-between">
                  <div
                    class="
                      flex
                      items-start
                      justify-center
                      text-black
                      no-underline
                    "
                  >
                    <div
                      class="
                        block
                        skeleton-loading-order-products-item-thumbnail
                        loading
                        w-16
                        h-16
                        rounded-full
                      "
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
    </main>
  </div>
</template>

<script setup lang="ts"></script>
<style>
@import "@/assets/css/skeleton.css";
</style>
