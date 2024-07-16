---
author: [ "Misaka-L" ]
description: "总而言之，我们有了个博客。"
category: "我不知道应该怎么分类"
date: 1721157722000
---

## Why?

随着 VRCD 的对象服务规模不断扩大，我们产生了需要一个方便发布、管理和查阅渠道向大家公布我们的近期工作进展和其他事项、也有可能只是一些在运营 VRCD 中的一些经验分享（比如说：如何组织活动，活动地图制作中经验，网络服务开发建设中踩的坑）。

不过以上都是写这部分代码的人在凌晨 3 点半临时写的，他自己也不知道他在写什么。

## How?

目前我们的官网前端使用的是 Nuxt，所以顺理成章的我们使用了 Nuxt 官方的 [Nuxt Content](https://content.nuxt.com/) 模块来实现我们的博客。

> 注：接下来的内容可能会没啥营养，主要是我没想到啥能写的。

### 开始上手

首先当然是... 在你的 Nuxt 项目里安装 Nuxt Content 的包并把它添加到你的 `nuxt.config.ts`。

1. 使用你项目使用的包管理器安装 `@nuxt/content` 包，如：`yarn add --dev @nuxt/content`。
2. 在你的 `nuxt.config.ts` 的 `modules` 部分添加 `@nuxt/content` 模块，如：
   ```ts
   export default defineNuxtConfig({
    modules: [
      "@nuxt/content",
    ]
   })
   ```

当然你也可以使用 Nuxt 官方的 CLI 一行命令完成这些操作：

```shell
npx nuxi@latest module add content
```

### 编写内容

1. 首先在你的项目根目录创建一个 `content` 文件夹。
2. 按照你的文章的路径在 `content` 文件夹创建一个 markdown 文件，如：`/blogs/the-beginning` 对应的文件就是 `/content/blogs/the-beginning.md`。

此时你的项目目录看起来大概像这个样子：

```
- components
- assets
- pages
- public
- server
- pages
  - blogs
    - the-beginning.md
- .env
- ....
```

> 注：你可以按照官方文档的说明自定义这些路径，这里只是一个例子。

### 拉取和查询文章

通过 Nuxt Content 提供的 [`queryContent()`](https://content.nuxt.com/composables/query-content) API，我们可以使用 query 语法  拉取和查询文章内容。具体参数详见[官方文档](https://content.nuxt.com/composables/query-content#query-builder)。

```ts
// 查询所有在 /content 目录下的文章
const contentQuery = queryContent()

// 查询所有在 /content/articles 目录下的文章
const contentQuery = queryContent('articles')

// 查询所有在 content/articles/nuxt3 目录下的文章
const contentQuery = queryContent('articles', 'nuxt3')
```

请注意：这是一个异步操作，请用 [`useAsyncData()`](https://nuxt.com/docs/api/composables/use-async-data) 把它包裹起来。就像这样子：

```vue
<script setup lang="ts">
const contents = await useAsyncData('contents', queryContent().find)
</script>
```

### 实现文章页面

1. 在你的项目的 `pages` 文件夹中创建一个 `[...slug].vue` 文件。（你不一定要在 `pages` 的根目录下创建，比如说我们的博客的文章页面是在 `pages/blogs/` 下）
2. 在文件中添加以下内容
   ```vue
    <template>
     <main>
       <ContentDoc />
     </main>
   </template>
   ```
3. 在你的浏览器打开 `/{你创建的文章的文件名}`，比如说 `/blogs/the-beginning`。
4. 🎉你的文章就会被显示出来了！

但是你可能会发现一件事：这样式好像不太对劲啊。

Nuxt Content 默认不会对渲染出的 markdown 内容添加样式。你可以寻找现成的 CSS 样式或者自己编写一个。由于我们的项目使用的是 [Tailwind CSS](https://tailwindcss.com/)，所以我们直接使用了 Tailwind CSS 的官方插件 [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)。

直接在渲染 Markdown 内容的元素上添加以下 class：`prose dark:prose-invert`。然后你就有一个样式正常的文章页面了！更多相关设置请查阅 Tailwind CSS Typography 仓库。

> 注意：Tailwind CSS 的 prose 样式默认会给元素添加一个 `max-width: 65ch` 的 CSS 属性，导致最大宽度被限制在 `65ch`，你可以通过添加 `max-w-none` 整个 class 来解决。

#### 觉得太简单了？

你可能会想问：这个页面也太简单了吧？如果我想自定义一些东西怎么办？

使用 [ContentDoc](https://content.nuxt.com/components/content-doc) 组件的 slot 即可！

```vue
<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>
```

通过配合 [拉取和查询文章](#拉取和查询文章) 中提到的 [`queryContent()`](https://content.nuxt.com/composables/query-content) API 和 [ContentRenderer](https://content.nuxt.com/components/content-renderer) 组件，也可以实现对文章页面的完全控制权。

以下是一个简单的示例：

```vue
<script setup lang="ts">
const { data: page } = await useAsyncData('page', queryContent().findOne)
</script>

<template>
  <h2 class="text-2xl font-bold">{{ page.value.title }}</h2>
  <article>
    <ContentRenderer :value="page"  class="prose dark:prose-invert max-w-none" />
  </article>
</template>
```

## 实现文章列表页面

TODO

## 代码高亮

TODO

## 文章元数据

TODO

### TypeScript

TODO