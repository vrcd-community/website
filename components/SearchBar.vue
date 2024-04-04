<script setup lang="ts">
const props = defineProps<{
  jumpToSearch?: boolean
}>()

const keyword = defineModel<string>()

const router = useRouter()

function toSearch() {
  if (keyword.value === '') return

  if (!props.jumpToSearch) {
    return
  }

  router.push({ path: 'search', query: { keyword: keyword.value } })
}
</script>

<template>
  <div class="flex bg-white/20 rounded-full overflow-hidden shadow-2xl">
    <Icon class="my-auto ml-2 text-3xl" name="mdi:magnify" />
    <input v-model="keyword" placeholder="搜索所有 VRCD 服务内容..." class="ml-1 flex-1 h-10 outline-none bg-transparent"
      type="text" @keypress.enter="toSearch()" />
    <button @click="toSearch()" class="bg-white text-black w-20 rounded-full">
      搜索
    </button>
  </div>
</template>