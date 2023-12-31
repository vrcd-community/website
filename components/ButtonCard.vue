<template>
  <div class="flex flex-col sm:flex-row p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 sm:items-center items-start">
    <div class="flex-auto">
      <h2 class="inline-block font-semibold text-3xl border-b-2 border-current mb-1 pb-1">
        {{ title }}
      </h2>
      <p>{{ description }}</p>
    </div>
    <NuxtLink :to="to" :href="href" :target="target"
      class="bg-current px-4 py-3 rounded-md font-medium w-full sm:w-auto text-center sm:text-left mt-2 sm:mt-0">
      <span class="text-black text-lg">{{ buttonText === undefined ? '了解更多' : buttonText }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  buttonText?: string,
  description: string,
  href?: string,
  to?: string,
  target?: string
}>()
</script>