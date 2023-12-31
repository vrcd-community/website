<template>
  <div class="max-w-6xl mx-auto my-10">
    <ContentDoc>
      <template v-slot="{ doc }">
        <InfoCard :title="title">
          <article>
            <ContentRenderer :value="doc" class="full-prose" />
          </article>
        </InfoCard>
      </template>
      <template #not-found>
        NotFound
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('page', queryContent().findOne)

const title = computed(() => page.value !== null && page.value.title !== undefined ? page.value.title : '未命名文档')
</script>