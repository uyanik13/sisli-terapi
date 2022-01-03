<template>
  <div
    class="
      flex
      items-center
      justify-between
      max-w-lg
      px-4
      mt-12
      mb-4
      bg-white
      rounded rounded-lg
      shadow-lg
      skeleton-loading-card
      z-40
    "
  >
    <div class="max-w-screen-sm pb-2 mx-4 my-5">
      <div class="skeleton-loading-info loading h-4 w-48 my-2" />
      <div v-for="m in 2" :key="m" class="flex items-start justify-start my-2">
        <div class="flex-shrink-0">
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
        <div class="flex-1 px-2 leading-relaxed border rounded-lg sm:px-3">
          <div class="skeleton-loading-info loading h-5 w-64 my-2" />
          <div class="skeleton-loading-info loading h-5 w-64 my-2" />
          <div class="skeleton-loading-info loading h-5 w-32 my-2" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
