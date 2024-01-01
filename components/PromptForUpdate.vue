<script setup>
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa.offlineReady)
    console.log('App ready to work offline')
})
</script>

<template>
  <div class="fixed bottom-0 right-0 bg-zinc-100 dark:bg-zinc-900 m-4 shadow-2xl p-4 rounded-md space-y-2"
    v-show="$pwa.needRefresh">
    <p class="text-base">
      有新的内容可用，点击 "刷新" 按钮更新。
    </p>

    <button class="link-button text-sm p-2 dark:bg-gray-700 dark:border-gray-700 bg-gray-300 border-gray-300"
      @click="$pwa.updateServiceWorker()">
      刷新
    </button>
  </div>
</template>