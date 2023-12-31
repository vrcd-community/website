<template>
  <div class="border-2 rounded-md p-5 space-y-3">
    <h2 class="text-3xl font-bold">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>