<template>
  <div class="bg-zinc-900 p-4 rounded-lg">
    <h2 class="font-semibold text-3xl border-b-2 border-current mb-4 pb-2 inline-block">{{ title }}</h2>
    <div class="text-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>