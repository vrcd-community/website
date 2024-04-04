<script setup lang="ts">
const props = defineProps<{
  result: Hit
}>()
</script>

<template>
  <NuxtLink target="_blank"
    :to="'https://docs.vrczh.org/' + result._source.extra.path.replace('.md', '') + '#' + result._source.chunk.title.replace(/ |\./g, '-').replace(/\?/, '').toLowerCase()"
    class="block">
    <div class="bg-white/50 dark:bg-neutral-900/40 shadow-sm rounded-md p-4 transition">
      <h2 class="text-2xl font-semibold">{{ result._source.title }} > {{ result._source.chunk.title }}</h2>
      <MDC
        class="prose prose-sm dark:prose-invert prose-li:marker:text-current prose-hr:border-current mt-2 max-w-none whitespace-pre-wrap pointer-events-none"
        :value="result._source.chunk.content.replace(/!\[.+\]\(.+\)/g, '')" />
    </div>
  </NuxtLink>
</template>