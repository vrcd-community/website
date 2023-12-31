// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "nuxt-icon-tw"
  ],
  css: [
    '/assets/css/main.css'
  ],
  site: {
    url: 'https://vrcd.org.cn',
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  devtools: { enabled: true }
})