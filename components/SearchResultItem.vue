<script setup lang="ts">
const props = defineProps<{
  result: SearchHit
}>()

// https://github.com/mdit-vue/mdit-vue/blob/d493d4ca4cf5af4c54cca56a04b4bae5b8700f0e/packages/shared/src/slugify.ts
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;

function slugify(str: string): string {
  return str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // Remove continuos separators
    .replace(/-{2,}/g, '-')
    // Remove prefixing and trailing separators
    .replace(/^-+|-+$/g, '')
    // ensure it doesn't start with a number (#121)
    .replace(/^(\d)/, '_$1')
    // lowercase
    .toLowerCase();
}
</script>

<template>
  <NuxtLink target="_blank"
    :to="'https://docs.vrczh.org/' + result.uri.replace('.md', '') + '#' + slugify(result.chunkTitle)" class="block">
    <div class="bg-white/50 dark:bg-neutral-900/40 shadow-sm rounded-md p-4 transition">
      <h2 class="text-2xl font-semibold">{{ result.title }} > {{ result.chunkTitle }}</h2>
      <MDC
        class="prose prose-sm dark:prose-invert prose-li:marker:text-current prose-hr:border-current mt-2 max-w-none whitespace-normal pointer-events-none"
        :value="result.chunkContent.replace(/!\[.+\]\(.+\)/g, '')" />
    </div>
  </NuxtLink>
</template>