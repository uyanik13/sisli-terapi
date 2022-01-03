<template>
  <div class="bg-white">
    <main>
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

                <div class="flex mt-10 sm:mt-12 space-x-2">
                  <button class="btn px-8 lg:px-12 bg-indigo-600 border-0">
                    Randevu Al
                  </button>
                  <button class="btn px-8 lg:px-12 border-0">
                    Uzmanlarımız
                  </button>
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
                  src="/assets/images/hero/hero.png"
                  alt="Achieve the dream"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 w-full">
          <img
            class="w-full h-64"
            src="assets/images/hero/bg-style.png"
            alt=""
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
<style>
@import "@/assets/css/skeleton.css";
</style>
