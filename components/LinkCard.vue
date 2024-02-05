<!--链接卡片-->
<template>
  <NuxtLink :to="to" target="_blank" class="h-fit sm:w-64 w-full p-0 rounded-lg flex flex-row justify-start items-center transition hover:drop-shadow-[0px_0px_8px_#00000020] dark:hover:drop-shadow-[0px_0px_8px_#ffffff20]">
    <div class="h-16 w-56 p-2 rounded-md flex flex-col justify-center bg-[#EAEBECee] dark:bg-[#161718ee]">
      <div class="text-xl font-semibold">
        {{ title }}
      </div>
      <div class="h-[4px]"></div>
      <div class="text-xs">
        {{ info }}
      </div>
    </div>
    <div class="ml-12 sm:hidden flex text-base font-semibold text-[#EAEBECee] dark:text-[#161718ee]">
      了解更多
    </div>
    <img :src="isDark ? '/svg/arrow.svg' : 'svg/arrow-white.svg'" class="h-4 w-2 mx-2.5"></img>
  </NuxtLink>
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

defineProps<{
  title: string,
  info: string,
  to?: string,
}>()
</script>