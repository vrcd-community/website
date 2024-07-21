<script setup lang="ts">
import type { PostBase } from '~/types/post';

definePageMeta({
  middleware: 'terms'
})

const route = useRoute()
const router = useRouter()

const termType = computed(() => {
  return /terms\/(.+)\//.exec(route.path)?.[1]
})

const versionData = await useAsyncData('versions', queryContent<PostBase>('/terms/' + termType.value).only(['title', 'date', '_path']).sort({
  date: 1
}).find)

const selectedVersion = computed({
  get() {
    return route.path
  },
  set(newValue) {
    router.push(newValue)
  }
})

if (versionData.data.value?.findIndex(version => version._path === route.path) === -1) {
  if (versionData.data.value[0]?._path) {
    router.push(versionData.data.value[0]?._path)
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto pt-32 pb-12 px-12">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div class="flex">
          <div class="flex-1">
            <div class="flex gap-1 items-center">
              <Icon name="mdi-calendar-clock-outline" />
              <NuxtTime v-if="doc?.date" :datetime="doc?.date" date-style="long" />
              <span v-else>最后更新日期未知</span>
            </div>
            <h1 class="text-6xl font-bold mt-2"># {{ doc.title ?? '无标题' }}</h1>
          </div>
          <div class="flex items-end">
            <select v-model="selectedVersion" class="bg-transparent">
              <option v-for="version in versionData.data.value" :key="version._path" :value="version._path"
                class="flex gap-2 bg-black text-white">
                <span>{{ version.title ?? '无标题' }}</span>
                <span v-if="version.date"> / 最后更新于
                  <NuxtTime :datetime="version.date" date-style="long" time-style="medium" />
                </span>
                <span v-else> / 最后更新日期未知</span>
              </option>
            </select>
          </div>
        </div>
        <article class="mt-8 mb-12">
          <ContentRenderer :value="doc"
            class="prose dark:prose-invert prose-headings:my-2 prose-a:prose-headings:no-underline max-w-none" />
        </article>
        <p class="text-center text-gray-600/40 dark:text-gray-400/80 font-semibold text-xl select-none">The End</p>
      </template>
      <template #not-found>
        NotFound
      </template>
    </ContentDoc>
  </div>
  <div class="home h-screen w-screen fixed top-0 left-0 bg-center z-[-10]"></div>
</template>

<style scoped>
.home {
  background-image: url('/images/home/background-cover.png');
}
</style>