import Icons from "./public/icons/icons.json"

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/robots",
    "nuxt-icon-tw",
    "@vite-pwa/nuxt",
    "nuxt-time",
    "@nuxtjs/sitemap",
  ],
  runtimeConfig: {
    searchEndpoint: "",
    searchApiKey: "",
  },
  routeRules: {
    "/": { isr: true },
    "/*": { isr: true },
    "/search": { ssr: false },
    "*": {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    },
  },
  css: ["/assets/css/main.css"],
  site: {
    url: "https://vrcd.org.cn",
  },
  sitemap: {
    strictNuxtContentPaths: true,
    sources: ["/api/__sitemap__/urls"],
  },
  devtools: { enabled: true },
  image: {
    quality: 80,
    format: ["avif", "webp", "png", "jpg"],
  },
  content: {
    highlight: {
      langs: [
        "vue",
        "typescript",
        "javascript",
        "json",
        "css",
        "html",
        "c#",
        "shaderlab",
        "shell",
        "mdc",
        "md",
        "yaml",
      ],
      theme: {
        default: "github-dark-default",
        light: "github-light-default",
      },
    },
  },
  pwa: {
    workbox: {
      cleanupOutdatedCaches: true,
    },
    manifest: {
      name: "VRCD",
      short_name: "VRCD",
      description: "VRCD 官方网站",
      theme_color: "#000000",
      start_url: "/",
      icons: Icons,
      shortcuts: [
        {
          name: "首页",
          url: "/",
          icons: Icons,
        },
        {
          name: "开发者汉化计划",
          url: "/developer-localization-project",
          icons: [
            {
              src: "/images/developer-localization-project/icon.png",
              sizes: "320x320",
              type: "image/png",
            },
          ],
        },
        {
          name: "VRChat 汉化文档中心",
          url: "https://docs.vrczh.org",
          icons: [
            {
              src: "/images/developer-localization-project/icon.png",
              sizes: "320x320",
              type: "image/png",
            },
          ],
        },
        {
          name: "VRCD 论坛",
          url: "https://bbs.vrcd.org.cn",
          icons: Icons,
        },
      ],
    },
  },
  compatibilityDate: "2024-07-21",
})
