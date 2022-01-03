<template>
  <header class="block bg-color1 text-white">
    <div id="header" class="w-auto lg:w-full h-15">
      <div
        class="
          container
          flex
          items-center
          justify-between
          py-4
          mx-auto
          border-gray-300 border-b-default
          lg:border-none
        "
      >
        <!-- LOGO -->
        <a :href="localePath('/')">
          <div id="logo" class="flex w-64 mx-2 lg:mx-8 lg:w-64">
            <img class="w-12 h-12" src="@/assets/images/logo/favicon.png" />
            <p class="mt-2 ml-2 text-5 lg:text-5 font-sans font-bold">
              Şişli Terapi Enstitüsü
            </p>
          </div>
        </a>

        <div id="menu" class="flex mx-2 lg:w-10/12 sm:w-full">
          <ul
            class="
              items-center
              flex-grow
              block
              w-full
              mt-8
              font-bold
              tracking-wide
              lg:flex lg:flex-initial lg:w-auto lg:mt-0
            "
            :class="menuOpen ? 'block' : 'hidden'"
          >
            <li
              v-for="item in menuItems"
              :key="item.id"
              class="mx-6 mb-6 lg:mb-0"
            >
              <CommonHeaderMegamenu :menu="item" />
            </li>
          </ul>
        </div>

        <div id="language" class="lg:block w-3/12 lg:w-3/12" v-if="false">
          <div class="group inline-block">
            <button
              :class="type == 'xs' ? `px-3.5` : ``"
              class="
                outline-none
                text-white
                focus:outline-none
                border
                lg:px-3
                py-2
                bg-primary
                rounded-lg
                flex
                items-center
                lg:w-32
              "
            >
              <span class="pr-1 font-semibold flex-1">{{
                type == "xs" ? $i18n.locale : getLocale($i18n.locale)
              }}</span>
              <span>
                <svg
                  class="
                    fill-current
                    h-4
                    w-4
                    transform
                    group-hover:-rotate-180
                    transition
                    duration-150
                    ease-in-out
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="
                bg-white
                border
                rounded-sm
                transform
                scale-0
                group-hover:scale-100
                absolute
                transition
                duration-150
                ease-in-out
                origin-top
                z-90
              "
            >
              <li
                v-for="locale in $i18n.availableLocales"
                :key="locale.code"
                class="py-1 rounded-md shadow-xs"
              >
                <a
                  class="
                    block
                    px-2
                    lg:px-4
                    py-2
                    text-sm
                    leading-5
                    text-gray-700
                    transition
                    duration-150
                    ease-in-out
                    hover:bg-gray-200
                    focus:outline-none focus:bg-gray-100
                  "
                  role="menuitem"
                >
                  <button
                    class="mx-1 lg:mx-2 text-indigo-600"
                    @click="$i18n.locale = locale"
                  >
                    {{ locale }}
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="type == 'xs'">
      <CommonMobilebottommenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import Menu from "@/interfaces/Menu";
const { width, type } = useBreakPoints();

const menuItems = ref<Array<Menu>>([
  {
    id: 1,
    title: "Uzmanlarımız",
    slug: "/uzmanlarimiz",
    featured: null,
    submenu: [],
    icon: null,
  },
  {
    id: 2,
    title: "Çalışma Alanlarımız",
    slug: "/calisma-alanlarimiz",
    featured: null,
    submenu: [],
    icon: null,
  },
  {
    id: 3,
    title: "Blog",
    slug: "/blog",
    featured: null,
    submenu: [],
    icon: null,
  },
  {
    id: 4,
    title: "Randevu/İletişim",
    slug: "/randevu-iletisim",
    featured: null,
    submenu: [],
    icon: null,
  },
]);
const menuOpen = ref(false);

// const getLocale = (locale) => {
//   locale = locales.filter((i) => i.code == locale);
//   if (locale.length > 0) {
//     return locale[0].name;
//   } else {
//     return "Türkçe";
//   }
// };

const localePath = (val) => {
  return val;
};
</script>

<style>
/* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
