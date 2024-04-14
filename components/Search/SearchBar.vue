<script setup lang="ts">
const props = defineProps<{
  jumpToSearch?: boolean,
  loading?: boolean
}>()

const emits = defineEmits(['search'])

const keyword = defineModel<string>()

const router = useRouter()

function toSearch() {
  if (keyword.value === '' || keyword.value === undefined || keyword.value === null) return

  emits('search')

  if (!props.jumpToSearch) {
    return
  }

  router.push({ path: '/search', query: { keyword: keyword.value } })
}
</script>

<style scoped>
@keyframes loading-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  /* 按钮内转圈 */
  opacity: 0.8;
  position: relative;
  cursor: pointer;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #000;
  border-top-color: transparent;
  animation: loading-animation 0.6s linear infinite;
}
</style>

<template>
  <div class="flex bg-white/20 rounded-full overflow-hidden shadow-2xl">
    <Icon class="my-auto ml-2 text-3xl" name="mdi:magnify" />
    <input v-model="keyword" placeholder="搜索所有 VRCD 服务内容..." class="ml-1 flex-1 h-10 outline-none bg-transparent"
      type="text" @keypress.enter="toSearch()" />
    <button v-if="!props.loading" @click="toSearch()" class="bg-white text-black w-20 rounded-full">
      搜索
    </button>
    <div v-if="props.loading === true" class="loading bg-white text-black w-20 rounded-full"></div>
  </div>
</template>