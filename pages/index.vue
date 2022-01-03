<template>
  <div class="bg-white">
    <main>
      <!-- Hero Section-->
      <div
        class="
          relative
          bg-gradient-to-t
          from-green-500
          via-green-600
          to-color1
          sm:pt-16
          lg:pt-8 lg:pb-14 lg:overflow-hidden
          min-h-max
        "
      >
        <div class="mx-auto max-w-7xl lg:px-8 h-104">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="
                mx-auto
                max-w-md
                px-4
                sm:max-w-2xl sm:px-6 sm:text-center
                lg:px-0 lg:text-left lg:flex lg:items-center
              "
            >
              <div class="lg:py-12 w-full px-2">
                <h1
                  class="
                    pt-8
                    text-8 text-center
                    lg:text-left
                    tracking-tight
                    font-extrabold
                    text-white
                    sm:mt-5 sm:text-6xl
                    lg:mt-6
                    xl:text-6xl
                    bg-clip-text
                    text-transparent
                    bg-gradient-to-r
                    from-green-200
                    to-green-400
                    block
                  "
                >
                  Şişli Terapi Enstitüsü
                </h1>
                <p
                  class="
                    mt-3
                    text-center
                    lg:text-left
                    text-gray-300
                    sm:mt-5 sm:text-xl
                    xl:text-xl
                  "
                >
                  İstanbul Beşiktaş'ta Uzman Psikologlarımızdan Destek Almak
                  İçin Bize Ulaşabilirsiniz
                </p>

                <div
                  class="
                    flex
                    justify-center
                    lg:justify-start
                    mt-10
                    sm:mt-12
                    space-x-2
                  "
                >
                  <nuxt-link
                    to="/randevu-iletisim"
                    class="
                      btn
                      px-8
                      lg:px-12
                      bg-indigo-600
                      border-0
                      ml-4
                      lg:ml-0
                    "
                  >
                    Randevu Al
                  </nuxt-link>
                  <nuxt-link
                    to="/uzmanlarimiz"
                    class="btn px-8 lg:px-12 border-0"
                  >
                    Uzmanlarımız
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div
                class="
                  mx-auto
                  max-w-md
                  px-4
                  sm:max-w-2xl sm:px-6
                  lg:max-w-none lg:px-0
                "
              >
                <img
                  class="
                    w-full
                    lg:absolute
                    lg:inset-y-0
                    lg:left-0
                    lg:mt-24
                    lg:h-10/12
                    lg:w-auto
                    lg:max-w-none
                    rounded-lg
                  "
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
        class="
          relative
          bg-gradient-to-t
          from-color1
          via-blue-900
          to-green-500
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
                from-green-200
                to-green-400
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

      <!-- CTO Section-->
      <div
        class="
          bg-green-500
          py-4
          lg:pt-8 lg:pb-14 lg:overflow-hidden
          min-h-max
          h-48
        "
      >
        <div class="mx-auto max-w-full">
          <div class="mx-auto max-w-7xl lg:px-8 h-104">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                class="
                  mx-auto
                  max-w-md
                  px-4
                  sm:max-w-2xl sm:px-6 sm:text-center
                  lg:px-0 lg:text-left lg:flex lg:items-center
                "
              >
                <div
                  class="py-2 lg:py-4 flex flex-col items-center justify-center"
                >
                  <p class="text-6 lg:text-7 font-semibold text-white">
                    Online Terapi
                  </p>
                  <span class="text-gray-300 text-4.5 lg:text-5"
                    >Uzman Psikologlarımızdan Online Olarak Destek
                    Alabilirsiniz</span
                  >
                </div>
              </div>
              <div class="flex justify-center items-center">
                <nuxt-link
                  to="/randevu-iletisim"
                  class="btn px-8 lg:px-12 bg-indigo-600 border-0 ml-4 lg:ml-0"
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
        class="
          relative
          bg-gradient-to-b
          from-color1
          via-green-200
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
                from-green-200
                to-green-400
                block
              "
            >
              Uzmanlarımız
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
