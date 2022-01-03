<template>
  <div class="bg-white">
    <main>
      <div
        class="
          pt-10
          bg-gradient-to-t
          from-green-500
          via-green-600
          to-color1
          sm:pt-16
          lg:pt-8 lg:pb-14 lg:overflow-hidden
        "
      >
        <div class="mx-auto max-w-7xl lg:px-8">
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
              <div class="lg:py-12">
                <h1
                  class="
                    mt-4
                    text-8
                    tracking-tight
                    font-extrabold
                    text-white
                    sm:mt-5 sm:text-6xl
                    lg:mt-6
                    xl:text-6xl
                  "
                >
                  <span
                    class="
                      bg-clip-text
                      text-transparent
                      bg-gradient-to-r
                      from-green-200
                      to-green-400
                      block
                    "
                    >Şişli Terapi Enstitüsü</span
                  >
                </h1>
                <p
                  class="
                    mt-3
                    text-base text-gray-300
                    sm:mt-5 sm:text-xl
                    lg:text-lg
                    xl:text-xl
                  "
                >
                  Stop being overwhelmed by all the things you need to do. Learn
                  how to make time for the things you
                  <strong>want to do</strong>.
                </p>
                <p
                  class="
                    mt-3
                    text-base text-gray-300
                    sm:mt-5 sm:text-xl
                    lg:text-lg
                    xl:text-xl
                  "
                >
                  <strong>Coming soon:</strong> a two-week life-changing course.
                </p>
                <div class="mt-10 sm:mt-12">
                  <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div class="sm:flex">
                      <div class="min-w-0 flex-1">
                        <label for="email" class="sr-only">Email address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          class="
                            block
                            w-full
                            px-4
                            py-3
                            rounded-md
                            border-0
                            text-base text-gray-900
                            placeholder-gray-500
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-cyan-400
                            focus:ring-offset-gray-900
                          "
                        />
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          class="
                            block
                            w-full
                            py-3
                            px-4
                            rounded-md
                            shadow
                            bg-gradient-to-r
                            from-teal-500
                            to-cyan-600
                            text-white
                            font-medium
                            hover:from-teal-600 hover:to-cyan-700
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-2
                            focus:ring-cyan-400
                            focus:ring-offset-gray-900
                          "
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                    <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                      Next live session is launching March 15, 2021.
                    </p>
                  </form>
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
                  src="/assets/images/hero/3918492.png"
                  alt="Achieve the dream"
                />
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
