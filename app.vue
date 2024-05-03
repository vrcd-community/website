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
    { defer: true, src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "cf7468e96d2c4fed8908c87ed5eb24aa"}' }
  ]
})
</script>