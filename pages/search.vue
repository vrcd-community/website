<template>
  <div class="flex pt-40 pb-16   max-w-7xl mx-auto space-x-4 transition">
    <div class="w-72 bg-white/50 dark:bg-neutral-900/40 shadow-sm h-min p-4 rounded-md">
      <h2 class="text-2xl font-semibold">筛选</h2>
      <h3 class=" font-semibold mt-2">TODO</h3>
      <!-- <input type="checkbox">VRChat 文档汉化中心</input> -->
      <!-- <h3 class="text-xl">标签</h3> -->
    </div>
    <div class="flex-1">
      <SearchBar class="mb-4" v-model="keyword" />
      <div class="space-y-4">
        <SearchResultItem v-for="result in searchResult?.hits" :result="result" />
      </div>
      <p class="text-neutral-700/60 dark:text-neutral-300/80 text-center mt-12 select-none">———— End ————</p>
    </div>
  </div>
  <div class="home h-screen w-screen fixed top-0 left-0 bg-center z-[-10]"></div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const keyword = ref(route.query.keyword as string | null | undefined ?? '')

watch(keyword, () => {
  router.replace({ query: { keyword: keyword.value } })
})

const actualKeyword = ref(keyword.value)

const { data: searchResult, pending: loading } = await useFetch<SearchResult>('/api/search', {
  query: {
    query: actualKeyword
  },
  lazy: true,
  server: false,
})

let lastTypeTime = Date.now()
let searchRateLimitLock = false

watch(keyword, () => {
  lastTypeTime = Date.now()

  if (keyword.value === '') {
    router.replace({ query: {} })
  } else {
    router.replace({ query: { keyword: keyword.value } })
  }

  if (!process.client) {
    return
  }

  if (!searchRateLimitLock) {
    tryInvokeSearch()
  }
})

async function tryInvokeSearch() {
  searchRateLimitLock = true
  const timeout = Date.now() - lastTypeTime

  if (timeout > 200) {
    actualKeyword.value = keyword.value
    searchRateLimitLock = false
  } else {
    setTimeout(tryInvokeSearch, 100)
  }
}
</script>

<style scoped>
.home {
  background-image: url('/images/home/background-cover.png');
}
</style>