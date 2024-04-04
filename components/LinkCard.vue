<!--链接卡片-->
<template>
  <NuxtLink :to="to" :href="href" :target="target"
    class="rounded-lg flex justify-start items-center transition vrcd-link-button shadow-xl">
    <div
      class="py-4 min-w-64 px-4 rounded-md flex-1 justify-center bg-zinc-100/90 dark:bg-zinc-900/90 vrcd-link-button-content shadow-sm">
      <h2 class="text-2xl font-semibold">
        {{ title }}
      </h2>
      <div class="text-sm dark:opacity-60 opacity-90">
        {{ info }}
      </div>
    </div>
    <span class="ml-3 sm:hidden flex text-base font-semibold text-zinc-100/90 dark:text-zinc-900/90">
      了解更多
    </span>
    <Icon class="text-xl mx-1 text-white dark:text-black vrcd-link-button-icon"
      name="material-symbols:arrow-forward-ios-rounded" />
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

<style scoped>
.vrcd-link-button .vrcd-link-button-icon {
  transition: all .2s ease-in-out;
  width: 20px;
}

.vrcd-link-button:hover .vrcd-link-button-icon {
  width: 30px;
}
</style>