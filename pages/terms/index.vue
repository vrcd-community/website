<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { PostBase } from '~/types/post';

const termData = await useAsyncData('terms', queryContent<PostBase>('/terms').only(['title', '_path', 'date', 'description']).find)

const terms = computed(() => {
  const group: Record<string, Pick<PostBase, "_path" | "title" | "date" | "description">[]> = {}

  termData.data.value?.forEach(term => {
    const { _path } = term
    const regex = /terms\/(.+)\//

    if (!_path)
      return group

    const regexResult = regex.exec(_path)
    const termType = regexResult?.[0]

    if (!termType) {
      return group
    }

    if (!group[termType])
      group[termType] = []

    group[termType].push(term)
  })

  const result: Pick<PostBase, "_path" | "title" | "date" | "description">[] = []

  Object.keys(group).forEach(key => {
    result.push(group[key].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })[0])
  })

  return result
})
</script>

<template>
  <div class="max-w-6xl mx-auto pt-32 pb-12 px-12 min-h-screen">
    <div class="space-y-8">
      <h1 class="text-6xl font-bold">条款</h1>
      <p>社区规章、隐私政策等...</p>
    </div>
    <div class="space-x-4 mt-12">
      <NuxtLink v-for="blog in terms" :to="blog._path">
        <div
          class="bg-gray-200/20 hover:bg-gray-200/40 border-gray-100/20 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 dark:border-gray-700/20 transition-colors border-2 p-5 rounded-md">
          <div class="flex gap-1 text-sm items-center">
            <Icon name="mdi-calendar-clock-outline" />
            <span>最后更新于</span>
            <NuxtTime :datetime="blog?.date" date-style="long" time-style="medium" />
          </div>
          <h2 class="text-3xl font-semibold">{{ blog?.title }}</h2>
          <p class="text-gray-800 dark:text-gray-300 text-sm mt-1">{{ blog?.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
  <div class="home h-screen w-screen fixed top-0 left-0 bg-center z-[-10]"></div>
</template>

<style scoped>
.home {
  background-image: url('/images/home/background-cover.png');
}
</style>