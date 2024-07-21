<script setup lang="ts">
import type { Blog } from '~/types/post';

const blogs = await useAsyncData('blogs', queryContent<Blog>('/blogs').only(['title', '_path', 'date', 'description', 'category', 'author']).sort({
  date: -1
}).find)
</script>

<template>
  <div class="max-w-6xl mx-auto pt-32 pb-12 px-12 min-h-screen">
    <div class="space-y-8">
      <h1 class="text-6xl font-bold">博客</h1>
      <p>我们的周报，重大发表，技术博客又或是其他东西... 反正什么都可能写在这里。</p>
    </div>
    <div class="space-x-4 mt-12">
      <NuxtLink v-for="blog in blogs.data.value" :to="blog._path">
        <div
          class="bg-gray-200/20 hover:bg-gray-200/40 border-gray-100/20 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 dark:border-gray-700/20 transition-colors border-2 p-5 rounded-md">
          <div class="flex gap-2 text-sm">
            <div class="flex gap-1 items-center">
              <Icon name="mdi-tag" />
              <span>{{ blog?.category }}</span>
            </div>
            <div class="flex gap-1 items-center">
              <Icon name="mdi-calendar-clock-outline" />
              <NuxtTime :datetime="blog?.date" date-style="long" time-style="medium" />
            </div>
          </div>
          <h2 class="text-3xl font-semibold">{{ blog?.title }}</h2>
          <div class="flex gap-1 mt-2 text-sm">
            <span>由 </span>
            <span v-for="author in blog?.author" :key="author">@{{ author }}</span>
            <span>编写</span>
          </div>
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