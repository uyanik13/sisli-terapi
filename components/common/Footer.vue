<template>
  <footer class="items-center p-4 footer bg-primary text-neutral-content">
    <div class="items-center grid-flow-col">
      <p>Copyright © 2021 - All right reserved</p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://github.com/uyanik13" target="_blank">
        <Icon
          :icon="`akar-icons:github-fill`"
          :class="`text-base-content`"
          class="fill-current h-10 w-10"
        />
      </a>
      <a href="mailto:ogur.uyanik@gmail.com" target="_blank">
        <Icon
          :icon="`flat-ui:mail`"
          :class="`text-base-content`"
          class="fill-current h-10 w-10"
        />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
