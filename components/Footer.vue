<template>
  <div class="bg-[#ffffff] dark:bg-[#161718] flex flex-col items-center py-16 transition">
    <ClientOnly>
      <IconsVRCD />
    </ClientOnly>
    <div class="flex space-x-12 mt-4">
      <NuxtLink class="flex-auto" to="/terms/community-regulations/">社区规章</NuxtLink>
      <!-- <NuxtLink class="flex-auto">隐私政策</NuxtLink> -->
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