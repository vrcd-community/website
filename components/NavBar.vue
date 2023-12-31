<template>
  <div class="fixed flex items-center h-14 w-full bg-zinc-100 dark:bg-zinc-900 px-12">
    <div class="h-full py-4">
      <NuxtLink to="/">
        <NuxtImg class="h-full" :src="isDark ? '/images/vrcd-main-white-h.png' : '/images/vrcd-main-black-h.png'" />
      </NuxtLink>
    </div>
    <div class="space-x-4 text-lg ml-4">
      <NuxtLink to="/developer-localization-project" class="hover:bg-gray-500/30 p-2 rounded-md">
        开发者汉化计划
      </NuxtLink>
    </div>
    <div class="flex-auto">
      <!-- For NavBar Blank -->
    </div>
    <div class="space-x-4 text-lg">
      <NuxtLink href="https://docs.vrczh.org" target="_blank" class="hover:bg-gray-500/30 p-2 rounded-md">VRChat
        汉化文档中心</NuxtLink>
      <NuxtLink href="https://vcc.vrczh.org/" target="_blank" class="hover:bg-gray-500/30 p-2 rounded-md">VPM 镜像站
      </NuxtLink>
      <button @click="isDark = !isDark" class="hover:bg-gray-500/30 w-8 h-8 rounded-md">
        <Icon :name="isDark ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
      </button>
    </div>
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
</script>