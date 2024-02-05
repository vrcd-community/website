<template>
  <NuxtLink :href="href" target="_blank" class="block h-10 w-fit p-2.5 m-2.5 rounded-lg flex justify-center items-center bg-transparent hover:bg-[#8080804D] transition">
    <div class="text-xl">
      {{ title }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  href: string,
}>()
</script>