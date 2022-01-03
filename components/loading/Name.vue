<template>
  <div class="z-40">
    <div
      v-for="m in 1"
      id="name-card-loading"
      :key="m"
      class="
        flex
        items-center
        skeleton-loading-card
        justify-between
        mx-auto
        mb-2
        bg-white
        rounded rounded-lg
        shadow-lg
        lg:w-9/12 lg:mt-12
      "
    >
      <div class="my-3 overflow-hidden border-gray-200">
        <div class="px-3 pt-2 pb-3 text-center">
          <div class="flex flex-row items-center justify-between">
            <a class="flex items-start text-black no-underline">
              <div class="grid">
                <div
                  class="
                    block
                    skeleton-loading-order-products-item-thumbnail
                    loading
                    w-24
                    h-24
                    rounded-full
                  "
                />
              </div>

              <div class="grid mx-3 my-2">
                <div class="skeleton-loading-info loading h-5 w-32 my-2" />
                <div class="skeleton-loading-info loading h-5 w-32 my-2" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="mx-2">
        <div
          class="
            block
            skeleton-loading-order-products-item-thumbnail
            loading
            w-8
            h-8
            rounded-full
            my-2
          "
        />
        <div
          class="
            block
            skeleton-loading-order-products-item-thumbnail
            loading
            w-8
            h-8
            rounded-full
            my-2
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup></script>
