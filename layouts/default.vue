<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const ClientReloadPrompt =
  typeof window !== "undefined"
    ? defineAsyncComponent(() => import("../components/ReloadPrompt.vue"))
    : null;
</script>
<template>
  <div class="flex flex-col bg-base-200">
    <CommonHeader />
    <div class="flex-1 min-h-screen">
      <slot />
    </div>
    <CommonFooter />
    <template v-if="ClientReloadPrompt">
      <ClientReloadPrompt />
    </template>
  </div>
</template>
