<template>
  <div class="relative">
    <div class="relative w-full">
      <input
        ref="search"
        v-model="query"
        type="text"
        :placeholder="$t('Search a name')"
        class="
          z-30
          w-full
          lg:px-10
          py-3
          lg:py-4
          pl-10
          text-sm
          border-gray-400
          rounded-lg
          border-1
          focus:outline-none focus:ring-1 focus:indigo-500
        "
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="softReset"
        @keyup="performSearch"
        @keydown.up.prevent="highlightPrevious"
        @keydown.down.prevent="highlightNext"
        @keydown.enter="gotoLink"
      />

      <div class="absolute top-0 ml-3">
        <svg
          fill="currentColor"
          class="w-5 h-5 text-gray-500 mt-4"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            class="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          ></path>
        </svg>
      </div>

      <div
        v-if="query.length > 0"
        class="
          absolute
          top-0
          right-0
          mr-5
          text-gray-600
          cursor-pointer
          text-5
          hover:text-gray-800
        "
        style="top: 2px"
        @click="reset"
      >
        &times;
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="query.length > 0 && searchResultsVisible"
        class="
          absolute
          left-0
          right-0
          z-10
          mt-2
          mb-4
          overflow-hidden overflow-y-auto
          text-left
          normal-case
          bg-white
          border
          rounded-lg
          shadow
          w-108
        "
        style="max-height: 32rem"
      >
        <div ref="results" class="flex flex-col">
          <nuxt-link
            v-for="(item, index) in searchResults"
            :key="index"
            :to="localePath({ name: 'name-slug', params: { slug: item.slug } })"
            class="
              p-4
              text-xl
              border-b border-gray-400
              cursor-pointer
              hover:bg-blue-100
            "
            :class="{ 'bg-blue-100': index === highlightedIndex }"
            @mousedown.prevent="searchResultsVisible = true"
          >
            {{ item.title }}
            <div class="flex">
              <img
                v-if="item.image"
                class="w-16 lg:w-16 h-16 mx-1 rounded-full"
                :src="item.image"
              />
              <img
                v-else
                class="w-24 h-16 mx-1 rounded-full"
                :src="`~/assets/images/baby-images/boy/e-11.jpg`"
              />
              <div class="grid">
                <span class="mx-1 my-1 text-sm font-normal">{{
                  item.name
                }}</span>
                <span class="flex mx-2">
                  <p class="mx-1 text-sm text-gray-800">
                    {{ item.mean[$i18n.locale] }}
                  </p>
                </span>
              </div>
            </div>
          </nuxt-link>

          <div
            v-if="searchResults.length === 0"
            class="w-full p-4 font-normal border-b shadow-lg cursor-pointer"
          >
            <p class="my-0">
              {{ $t("No results for ") }}'<strong>{{ query }}</strong
              >'
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      query: "",
      searchResultsVisible: false,
      searchResults: [],
      highlightedIndex: 0,
    };
  },
  computed: {
    // onSearchFocus: function () {
    //   return this.$store.state.setting.onSearchFocus;
    // },
  },
  watch: {
    // whenever question changes, this function will run
    // onSearchFocus: function (newVal) {
    //   this.$refs.search.focus();
    // },
  },
  created() {},
  methods: {
    reset() {
      this.query = "";
      this.highlightedIndex = 0;
    },
    softReset() {
      this.searchResultsVisible = true;
      this.highlightedIndex = 0;
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
    performSearch() {
      if (this.query.length < 2) return false;
      this.$axios
        .get(`/api/search-name/${this.query.toLowerCase()}`)
        .then((response) => {
          this.searchResults = response.data.filter((item) =>
            item.name.toLowerCase().includes(this.query.toLowerCase())
          );
        });
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.slug;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
