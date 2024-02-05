<template>
  <NuxtPwaManifest />
  <Title>VRCD</Title>
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