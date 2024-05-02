<template>
  <ConsoleEasterEgg />
  <NuxtPwaManifest />
  <ClientOnly>
    <PromptForUpdate />
  </ClientOnly>
  <header>
    <Header />
  </header>
  <div class="">
    <main>
      <NuxtPage />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'VRCD',
  script: [
    { defer: true, src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "0f994579ee6148399fc27afea23abec3"}' }
  ]
})
</script>