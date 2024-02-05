<template>
  <NuxtLink :href="href" target="_blank" class="h-10 w-10 p-1 m-1 rounded-lg flex justify-center items-center bg-transparent hover:bg-[#8080804D] transition fill-[#FF0000] dark:fill-[#ffffff]">
    <img :src="src" class="block h-5 w-5"></img>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  src?: string,
  href?: string,
}>()
</script>