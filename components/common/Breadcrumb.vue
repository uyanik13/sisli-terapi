<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="card my-3 shadow-2xl bg-base-100">
    <div class="card-body py-3 text-center">
      <h1 class="font-semibold text-base-content text-5 lg:text-5">
        {{ $t(title) }}
      </h1>
    </div>
  </div>
</template>

<style></style>
