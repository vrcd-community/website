<script setup lang="ts">
defineProps<{
  result: SearchHit
}>()
</script>

<template>
  <NuxtLink target="_blank" :to="result.uri" class="block">
    <div class="bg-white/50 dark:bg-neutral-900/40 shadow-sm rounded-md p-4 transition">
      <h2 class="text-2xl font-semibold">{{ result.title }} > {{ result.chunkTitle }}</h2>
      <MDC
        class="prose prose-sm dark:prose-invert prose-li:marker:text-current prose-hr:border-current mt-2 max-w-none whitespace-normal pointer-events-none"
        :value="result.chunkContent.replace(/!\[.+\]\(.+\)/g, '')" />
    </div>
  </NuxtLink>
</template>