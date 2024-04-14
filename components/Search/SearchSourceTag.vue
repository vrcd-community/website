<script setup lang="ts">
import DocsLoc from '../Icons/DocsLoc.vue';
import VRCDDoc from '../Icons/VRCDDoc.vue';

const props = defineProps<{
  source: string
}>()

const logos: Logos = {
  bookstack: {
    component: VRCDDoc,
    text: '文档库',
    backgroundColor: '#6a6aa0',
    color: '#ffffff',
  },
  'creators.vrchat.com': {
    component: DocsLoc,
    text: '创作者文档',
    backgroundColor: '#31c2a1',
    color: '#000000',
  },
  'docs.vrchat.com': {
    component: DocsLoc,
    text: 'VRChat 帮助文档',
    backgroundColor: '#31c2a1',
    color: '#000000',
  },
  'vcc.docs.vrchat.com': {
    component: DocsLoc,
    text: '创作者助手文档',
    backgroundColor: '#31c2a1',
    color: '#000000',
  },
  'udonsharp.docs.vrchat.com': {
    component: DocsLoc,
    text: 'UdonSharp 文档',
    backgroundColor: '#31c2a1',
    color: '#000000',
  },
  'clientsim.docs.vrchat.com': {
    component: DocsLoc,
    text: 'ClientSim 文档',
    backgroundColor: '#31c2a1',
    color: '#000000',
  },
}

const logo = computed(() => {
  return logos[props.source] || {
    component: null,
    text: props.source,
    backgroundColor: '#000000',
  }
})

interface Logos {
  [key: string]: Logo
}

interface Logo {
  component: any
  backgroundColor: string
  color: string
  text: string
}
</script>

<template>
  <div class="flex items-center w-min rounded-full px-2 space-x-1 my-1"
    :style="(logo.backgroundColor ? `background-color: ${logo.backgroundColor};` : '') + (logo.color ? `color: ${logo.color};` : '')">
    <component :is="logo.component" class="h-4 w-min" />
    <span class="text-nowrap">{{ logo.text }}</span>
  </div>
</template>