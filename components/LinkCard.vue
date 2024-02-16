<!--链接卡片-->
<template>
  <NuxtLink :to="to" :href="href" :target="target"
    class="rounded-lg flex justify-start items-center transition hover:drop-shadow-[0px_0px_8px_#00000020] dark:hover:drop-shadow-[0px_0px_8px_#ffffff20]">
    <div class="py-4 min-w-64 px-4 rounded-md flex-1 justify-center bg-zinc-100/90 dark:bg-zinc-900/90">
      <h2 class="text-2xl font-semibold">
        {{ title }}
      </h2>
      <div class="text-sm">
        {{ info }}
      </div>
    </div>
    <span class="ml-3 sm:hidden flex text-base font-semibold text-zinc-100/90 dark:text-zinc-900/90">
      了解更多
    </span>
    <Icon class="text-xl mx-1 text-white dark:text-black" name="material-symbols:arrow-forward-ios-rounded" />
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
  href?: string,
  target?: string
}>()
</script>