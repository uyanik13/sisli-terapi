<template>
  <div
    class="
      flex flex-wrap
      items-center
      justify-start
      p-2
      mx-auto
      mt-6
      mb-4
      bg-white
      rounded-lg
      shadow-lg
      lg:w-9/12
      skeleton-loading-card
      z-40
    "
  >
    <h2 class="px-4 pt-3 pb-2 text-lg text-gray-800">
      <div class="skeleton-loading-info loading h-4 w-48 my-2" />
    </h2>
    <div class="w-full px-3 mt-2 mb-2 md:w-full">
      <div class="skeleton-loading-info loading h-12 w-full my-2" />
    </div>
    <div class="flex items-start justify-end w-full px-3 md:w-full">
      <div class="-mr-1">
        <div class="skeleton-loading-info loading h-8 w-24 my-2" />
      </div>
    </div>
  </div>
</template>

<script setup></script>
