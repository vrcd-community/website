<template>
  <NuxtPwaManifest />
  <Title>VRCD</Title>
  <ClientOnly>
    <PromptForUpdate />
  </ClientOnly>
  <nav>
    <NavBar />
  </nav>
  <div class="pt-14">
    <main>
      <NuxtPage />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>