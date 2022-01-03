<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <NuxtLink
      :to="menu.slug"
      class="
        py-6
        font-bold
        text-base-100 text-4
        border-white
        font-sans
        hover:text-green-500
        border-b-3
        hover:border-blue-600
      "
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <div v-if="!menu.icon">
        <p class="truncate">
          {{ $t(menu.title) }}
        </p>
      </div>
      <div v-else>
        <img :src="menu.icon" class="w-5 h-5" />
      </div>
    </NuxtLink>

    <div class="absolute w-full">&nbsp;</div>

    <transition name="mega-menu-fade shadow-lg  ">
      <div
        v-show="isVisible & (menu.submenu.length > 0)"
        class="absolute z-10 mt-6 overflow-hidden bg-white rounded-sm shadow-md"
      >
        <div class="flex flex-col lg:flex-row">
          <ul class="w-full">
            <li
              v-for="submenu in menu.submenu"
              :key="submenu.id"
              class="w-full py-1 border-gray-300 border-b-1"
            >
              <NuxtLink
                :to="submenu.slug"
                class="flex mr-4 group text-4 uppercase"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent=""
              >
                <div
                  class="
                    flex
                    items-center
                    py-2
                    pl-4
                    pr-10
                    font-normal
                    text-gray-900
                    font-sans
                    group-hover:text-blue-600
                    whitespace-nowrap
                  "
                >
                  <img
                    v-if="submenu.icon"
                    :src="submenu.icon"
                    class="w-5 h-5 mr-2"
                  />
                  <span>{{ $t(submenu.title) }}</span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    };
  },
  mounted() {
    this.menuItems = document.querySelectorAll(".mega-menu a");
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
      this.focusedIndex = 0;
    },
    startArrowKeys() {
      this.menuItems[0].focus();
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1;

      if (isArrowKey) {
        this.focusItem();
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus();
    },
  },
};
</script>

<style scoped>
.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.mega-menu-fade-enter,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
