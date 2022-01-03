<template>
  <div
    v-for="m in 1"
    id="name-card-loading"
    :key="m"
    class="
      flex
      items-center
      skeleton-loading-card
      justify-between
      ml-4
      mr-8
      mb-2
      bg-white
      rounded rounded-lg
      shadow-lg
      w-full
      lg:mt-6
    "
  >
    <div class="px-1 pt-2 pb-3 text-center">
      <div class="flex flex-row items-center justify-between 2">
        <a class="flex items-start text-black no-underline">
          <div class="grid mx-3 my-2">
            <div
              class="skeleton-loading-info loading h-5 w-64 lg:w-full my-2"
            />
            <div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2" />
            <div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2" />
            <div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2" />
            <div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2" />
            <div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2" />
            <div class="skeleton-loading-info loading h-5 w-64 lg:w-104 my-2" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup></script>
