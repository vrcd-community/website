<template>
  <div class="flex pt-40 pb-16   max-w-7xl mx-auto space-x-4 transition">
    <div class="w-72 bg-white/50 dark:bg-neutral-900/40 shadow-sm h-min p-4 rounded-md">
      <h2 class="text-2xl font-semibold">筛选</h2>
      <h3 class=" font-semibold mt-2">TODO</h3>
      <!-- <input type="checkbox">VRChat 文档汉化中心</input> -->
      <!-- <h3 class="text-xl">标签</h3> -->
    </div>
    <div class="flex-1">
      <SearchBar @search="search()" class="mb-4" v-model="keyword" />
      <div v-if="!loading">
        <div class="space-y-4">
          <SearchResultItem v-for="result in searchResult?.hits" :result="result" />
        </div>
        <p class="text-neutral-700/60 dark:text-neutral-300/80 text-center mt-12 select-none">———— End ————</p>
      </div>
      <div v-else>
        <p class="text-neutral-700/60 dark:text-neutral-300/80 text-center mt-12 select-none">Loading...</p>
      </div>
    </div>
  </div>
  <div class="home h-screen w-screen fixed top-0 left-0 bg-center z-[-10]"></div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const keyword = ref(route.query.keyword as string | null | undefined ?? '')

const actualKeyword = ref(keyword.value)

const { data: searchResult, pending: loading } = await useFetch<SearchResult>('/api/search', {
  query: {
    query: actualKeyword
  },
  lazy: true,
  server: false,
})

function search() {
  actualKeyword.value = keyword.value
}

watch(actualKeyword, () => {
  router.replace({ query: { keyword: actualKeyword.value } })
})
</script>

<style scoped>
.home {
  background-image: url('/images/home/background-cover.png');
}
</style>