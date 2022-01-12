<template>
  <div
    class="fixed bottom-0 z-40 py-2 flex-row justify-center block w-full bg-white h-15 sm:block md:block lg:hidden shadow-2xl"
  >
    <div class="container">
      <nav class="w-full">
        <ul
          class="flex items-center justify-center px-10 mx-auto pb-1 list-none"
        >
          <nuxt-link :to="item.slug" v-for="item in menuItems" :key="item.id">
            <div class="grid text-secondary mx-3">
              <div class="flex flex-col justify-center items-center">
                <Icon
                  :icon="item.icon.name"
                  :class="
                    `fill-current
                w-${item.icon.w}` +
                    ` h-${item.icon.h} ` +
                    `${
                      $route.name == item.slug ? `text-color1` : item.icon.color
                    } `
                  "
                />
              </div>
            </div>
          </nuxt-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Menu from "@/interfaces/Menu";

const menuItems = ref<Array<Menu>>([
  {
    id: 1,
    title: "Anasayfa",
    slug: "/",
    featured: null,
    submenu: [],
    icon: {
      name: "bx:bxs-home",
      h: 10,
      w: 10,
      color: "text-greenS",
    },
  },
  {
    id: 2,
    title: "Uzmanlarımız",
    slug: "uzmanlarimiz",
    featured: null,
    submenu: [],
    icon: {
      name: "vaadin:specialist",
      h: 10,
      w: 10,
      color: "text-greenS",
    },
  },
  {
    id: 3,
    title: "Çalışma Alanlarımız",
    slug: "calisma-alanlarimiz",
    featured: null,
    submenu: [],
    icon: {
      name: "healthicons:social-work",
      h: 12,
      w: 12,
      color: "text-greenS",
    },
  },
  {
    id: 4,
    title: "Blog",
    slug: "blog",
    featured: null,
    submenu: [],
    icon: {
      name: "ant-design:read-filled",
      h: 12,
      w: 12,
      color: "text-greenS",
    },
  },
  {
    id: 5,
    title: "Randevu/İletişim",
    slug: "randevu-iletisim",
    featured: null,
    submenu: [],
    icon: {
      name: "fluent:contact-card-16-filled",
      h: 12,
      w: 12,
      color: "text-greenS",
    },
  },
]);
// const getClass = (item) => {
//     const customClass = {
//       color : 'text-color1',
//       w:'8',
//       h:'8',
//       active:false,
//     }

//     customClass.color = item.icon

//     return customClass
// }
</script>
