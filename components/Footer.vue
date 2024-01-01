<template>
  <div class="bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center py-16">
    <ClientOnly>
      <img class="h-6" :src="isDark ? '/images/vrcd-main-white-h.png' : '/images/vrcd-main-black-h.png'" />
    </ClientOnly>
    <div class="flex space-x-12 mt-4">
      <NuxtLink class="flex-auto">服务条款</NuxtLink>
      <NuxtLink class="flex-auto">隐私政策</NuxtLink>
    </div>
    <p class="text-gray-600 mt-10">© 2023{{ currentYear !== 2023 ? '-' + currentYear : '' }} VRCD</p>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const currentYear = new Date(Date.now()).getFullYear()
</script>