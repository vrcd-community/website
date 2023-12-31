<template>
  <NuxtLink :href="href" :target="target" :to="to"
    class=" block w-full p-4 font-semibold text-center text-xl no-underline border-2 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-300/10">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  href?: string
  target?: string,
  to?: string
}>()
</script>