---
author: [ "Misaka-L" ]
description: "总而言之，我们有了个博客。"
category: "我不知道应该怎么分类"
date: 1721157722000
---

## Why?

随着 VRCD 社区的发展，我们对一个方便发布、管理和他人查阅内容的内容管理系统的需求越来越大。这些内容可能是我们近期的工作进度、一些在运营社区、内容开发、软件开发等活动的经验分享，也有可能只是想写点啥...

总而言之，我们现在需要一个 CMS。

在远古时期，我们的官网实际上是由 WordPress 搭建的，WordPress 本身就是一个 CMS。但是它有以下种种问题（当然你也可以说是我们的问题）...

- **维护成本高**：需要去购买和维护一个服务器用来运行 WordPress
  - 会对我们的经费造成压力
  - 我们内部有运维服务器经验的人极少
  - 要花费大量精力去伺候服务器
  - 虽然说理论上可以将 [WordPress 部署到 Serverless 平台](https://github.com/mitchmac/ServerlessWP)，但 WordPress 本身并不是为 Serverless 架构构建的，部署到 Serverless 带来的问题可能远超过其带来的收益
- **第三方插件和主题带来的额外维护压力**
  - 想要找出合适的插件和主题并不是个容易的事。
  - 需要摸清楚第三方插件和主题的一些怪癖（大部分不开源，主要依靠猜）
  - 怎么都要付费！？
  - WordPress 的第三方插件和主题是出了名的容易爆漏洞。
  - 除了更新和维护 WordPress 核心，我们还需要对第三方插件和主题进行更新和排故（往往会浪费大量时间）
- **这玩意好慢**
  - 在安装了一大堆插件和自定义和，整个网站的性能达到了令人堪忧的水平
  - 需要花费大量时间精力优化，而且可能没效果
  - 纯服务端渲染应用

于是你们便看到了... 我们将官网用 [Nuxt](https://nuxt.com/) 重新编写了一遍。虽然说这次要自己写代码了，但是好过与以上问题搏斗。

但是长期以来我们的新官网并没有提供 CMS 功能，CMS 的需求是通过另外使用 [wiki.js](https://js.wiki/) 部署的 [VRCD Wiki](https://wiki.vrcd.org.cn/) 这种奇葩操作满足的（官网被架空了）。

于是我们开始给官网添加 CMS 功能...

## How?

目前我们的官网前端使用的是 Nuxt，所以顺理成章的我们使用了 Nuxt 官方的 [Nuxt Content](https://content.nuxt.com/) 模块来实现我们的 CMS。

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