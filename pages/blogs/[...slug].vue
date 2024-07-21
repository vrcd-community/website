<template>
  <div class="max-w-6xl mx-auto pt-32 pb-12 px-12">
    <ContentDoc>
      <template v-slot="{ doc }">
        <div>
          <div class="flex gap-2">
            <div class="flex gap-1 items-center">
              <Icon name="mdi-tag" />
              <span>{{ doc?.category }}</span>
            </div>
            <div class="flex gap-1 items-center">
              <Icon name="mdi-calendar-clock-outline" />
              <NuxtTime :datetime="doc?.date" date-style="long" time-style="medium" />
            </div>
          </div>
          <h1 class="text-6xl font-bold mt-2"># {{ doc.title ?? '无标题' }}</h1>
          <div class="flex gap-1 mt-1 text-sm">
            <span>由 </span>
            <span v-for="author in doc?.author" :key="author">@{{ author }}</span>
            <span>编写</span>
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