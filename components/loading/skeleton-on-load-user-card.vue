<template>
  <div
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
        h-96
        skeleton-loading-order-products-item-thumbnail
        loading
      "
    />
    <div class="px-3 pt-2 pb-3 text-center">
      <div class="flex flex-row items-center justify-between">
        <div class="flex items-start justify-center text-black no-underline">
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
            <div class="skeleton-loading-info loading h-4 w-64 my-2" />
            <div class="skeleton-loading-info loading h-4 w-32 my-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
