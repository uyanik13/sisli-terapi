<script setup lang="ts">
import Post from "@/interfaces/Post";
import { Icon } from "@iconify/vue";
const posts = ref<Array<Post>>([
  {
    id: 1,
    title: "Build Your New Idea with Laravel Freamwork",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    slug: "orhan-taruk",
    tag: "laravel",
    author: {
      name: "Sisli Terapi",
      avatar:
        "https://i1.wp.com/sisliterapi.com/wp-content/uploads/2020/07/GEA_8983-scaled.jpg?w=1775&ssl=1",
    },
    image:
      "https://i1.wp.com/sisliterapi.com/wp-content/uploads/2020/07/GEA_8983-scaled.jpg?w=1775&ssl=1",
    createdAt: "Jun 1, 2020",
  },
]);

const searchQuery = ref("");
const searchResult = ref([]);
const search = () => {
  if (searchQuery.value.length > 3) {
    searchResult.value.push({
      id: 1,
      title: "Build Your New Idea with Laravel Freamwork",
      image:
        "https://i1.wp.com/sisliterapi.com/wp-content/uploads/2020/07/GEA_8983-scaled.jpg?w=1775&ssl=1",
    });
  }
};
</script>
<template>
  <main>
    <div
      class="bg-gradient-to-t from-color1 via-[#ffffff] to-color1 sm:pt-16 lg:pt-8 lg:pb-14"
    >
      <div class="px-6 py-8">
        <div class="lg:container flex justify-between mx-auto">
          <div class="w-full lg:w-8/12">
            <div class="flex items-center justify-between">
              <h1
                class="text-8 text-center lg:text-left tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl bg-clip-text block"
              >
                Blog
              </h1>
              <div>
                <select
                  class="select select-bordered select-primary w-36 lg:w-32 max-w-xs"
                >
                  <option selected="selected">Latest</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
            <div class="mt-6" v-for="(item, index) in posts" :key="index">
              <div
                class="w-full lg:max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md"
              >
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-3.5 text-gray-600">{{
                    item.createdAt
                  }}</span
                  ><nuxt-link
                    :to="item.tag"
                    class="px-2 py-1 font-bold text-gray-100 bg-color1 rounded-lg hover:bg-gray-500"
                    >{{ item.tag }}</nuxt-link
                  >
                </div>
                <div class="mt-2">
                  <nuxt-link
                    :to="item.slug"
                    class="text-2xl font-bold text-gray-700"
                    >{{ item.title }}</nuxt-link
                  >
                  <p class="mt-2 text-gray-600">
                    {{ item.description }}
                  </p>
                </div>
                <div class="flex items-center justify-between mt-4">
                  <nuxt-link :to="item.slug" class="btn bg-color1 border-none"
                    >Read more</nuxt-link
                  >
                  <div>
                    <a href="#" class="flex items-center"
                      ><img
                        :src="item.author.avatar"
                        alt="avatar"
                        class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 class="font-bold text-gray-700 hover:underline">
                        {{ item.author.name }}
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden w-4/12 lg:block">
            <div class="px-4">
              <div class="flex justify-center p-4 px-3 pb-10">
                <div class="w-full max-w-md">
                  <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div
                      class="block text-gray-700 text-lg font-semibold py-2 px-2"
                    >
                      Search
                    </div>
                    <div class="flex items-center bg-gray-200 rounded-md">
                      <div class="pl-2">
                        <Icon icon="bi:search" class="fill-current h-6 w-6" />
                      </div>
                      <input
                        class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                        id="search"
                        type="text"
                        v-model="searchQuery"
                        @input="search"
                        placeholder="Search Post"
                      />
                    </div>
                    <div class="py-3 text-sm" v-if="searchResult">
                      <nuxt-link
                        v-for="(item, index) in searchResult"
                        :key="index"
                        to=""
                        class="flex items-center justify-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
                      >
                        <img
                          :src="item.image"
                          class="w-12 h-10 rounded-full"
                          alt=""
                        />
                        <div class="flex-grow font-medium px-2 truncate">
                          {{ item.title }}
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
<style>
@import "@/assets/css/skeleton.css";
</style>
