<template>
  <div class="fixed flex items-center h-14 w-full bg-zinc-100 dark:bg-zinc-900 px-12">
    <div class="h-full py-4">
      <NuxtLink to="/">
        <NuxtImg class="h-full" :src="isDark ? '/images/vrcd-main-white-h.png' : '/images/vrcd-main-black-h.png'" />
      </NuxtLink>
    </div>
    <div class="space-x-4 text-lg ml-4 hidden lg:flex">
      <NuxtLink v-for="item in leftNavLinks" :to="item.to" :target="item.target" :href="item.href" class="nav-button">
        {{ item.title }}
      </NuxtLink>
    </div>
    <div class="flex-auto">
      <!-- For NavBar Blank -->
    </div>
    <div class="items-center space-x-4 text-lg hidden lg:flex">
      <NuxtLink v-for="item in rightNavLinks" :href="item.href" :to="item.to" :target="item.target" class="nav-button">
        {{ item.title }}
      </NuxtLink>
      <button @click="isDark = !isDark" class="nav-button rounded-md">
        <Icon :name="isDark ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
      </button>
      <div class="flex space-x-2">
        <NuxtLink class="nav-button"
          href="https://qm.qq.com/cgi-bin/qm/qr?k=giJOizm4gtgi0LkW8jOguFcDItINIy6n&jump_from=webapi&authKey=VijnIKfoJvsmMu/KXsMCwaNUmCVNv7TC32iKvZnmfKKPAWHuUS0RH1yjIhjv4tB7"
          target="_blank">
          <Icon name="mdi:qqchat" />
        </NuxtLink>
        <NuxtLink class="nav-button" href="https://discord.gg/UUEyKm2n" target="_blank">
          <Icon name="mdi:discord" />
        </NuxtLink>
        <NuxtLink class="nav-button" href="https://kook.top/lGrpqQ" target="_blank">
          <svg class="inline-block" width="1em" height="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="path"
              d="M75.581 3.65817C74.9714 5.79211 57.6 87.1867 37.181 184.738L0 361.855L15.8476 391.121L31.6953 420.691L122.21 420.691L212.724 420.691L234.362 461.236L255.695 501.476L279.771 501.476L303.543 501.476L310.857 467.942C314.514 449.347 318.476 431.361 319.391 427.702C320.914 420.996 321.829 420.691 379.429 420.081L437.943 419.167L476.038 239.306L513.829 59.4454L497.981 29.5703L481.829 0L279.467 0C120.076 0 76.4952 0.914551 75.581 3.65817ZM248.381 47.2515C249.295 48.1661 246.857 64.3231 242.591 82.9188C238.629 101.515 235.886 117.976 236.191 119.501C236.8 121.33 252.343 105.173 270.629 84.1382L303.848 45.7273L350.476 45.7273C403.505 45.7273 400.152 43.5934 393.752 73.4685C390.705 88.1012 385.524 94.8079 337.676 149.376L284.952 209.431L313.6 263.084L342.552 316.738L338.591 332.895L334.629 349.052L291.352 349.966L248.076 350.881L229.791 316.433C202.057 263.999 204.191 264.913 195.962 303.629C184.99 355.758 191.391 350.576 138.362 350.576C113.371 350.576 92.0381 349.661 91.4286 348.137C90.8191 346.918 103.01 285.643 118.552 211.87C134.095 138.096 148.419 70.42 150.248 61.5794L153.6 45.7273L200.229 45.7273C225.829 45.7273 247.467 46.337 248.381 47.2515Z"
              fill-rule="nonzero" fill="currentColor" />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <button class="nav-button block lg:hidden" @click="isMenuOpen = !isMenuOpen">
      <Icon name="mdi:menu" />
    </button>
  </div>
  <Teleport v-if="isMenuOpen" to="body">
    <div class="fixed top-0 left-0 h-screen w-screen" @click="isMenuOpen = false"></div>
    <div
      class="fixed flex flex-col top-14 right-0 shadow-2xl border-2 dark:border-zinc-800 border-zinc-300 bg-zinc-100 dark:bg-zinc-900 z-10 p-5 m-5 text-2xl space-y-2 rounded-lg"
      @click="isMenuOpen = false">
      <NuxtLink v-for="item in leftNavLinks" :to="item.to" :target="item.target" :href="item.href" class="nav-button">
        {{ item.title }}
      </NuxtLink>
      <hr class="dark:border-zinc-800 border-zinc-300" />
      <NuxtLink v-for="item in rightNavLinks" :to="item.to" :target="item.target" :href="item.href" class="nav-button">
        {{ item.title }}
      </NuxtLink>
      <hr class="dark:border-zinc-800 border-zinc-300" />
      <div class="flex space-x-1 items-center">
        <button @click="isDark = !isDark" class="nav-button rounded-md">
          <Icon :name="isDark ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
        </button>
        <div class="flex-1"></div>
        <div>
          <NuxtLink class="nav-button"
            href="https://qm.qq.com/cgi-bin/qm/qr?k=giJOizm4gtgi0LkW8jOguFcDItINIy6n&jump_from=webapi&authKey=VijnIKfoJvsmMu/KXsMCwaNUmCVNv7TC32iKvZnmfKKPAWHuUS0RH1yjIhjv4tB7"
            target="_blank">
            <Icon name="mdi:qqchat" />
          </NuxtLink>
          <NuxtLink class="nav-button" href="https://discord.gg/UUEyKm2n" target="_blank">
            <Icon name="mdi:discord" />
          </NuxtLink>
          <NuxtLink class="nav-button" href="https://kook.top/lGrpqQ" target="_blank">
            <svg class="inline-block" width="1em" height="1em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <path id="path"
                d="M75.581 3.65817C74.9714 5.79211 57.6 87.1867 37.181 184.738L0 361.855L15.8476 391.121L31.6953 420.691L122.21 420.691L212.724 420.691L234.362 461.236L255.695 501.476L279.771 501.476L303.543 501.476L310.857 467.942C314.514 449.347 318.476 431.361 319.391 427.702C320.914 420.996 321.829 420.691 379.429 420.081L437.943 419.167L476.038 239.306L513.829 59.4454L497.981 29.5703L481.829 0L279.467 0C120.076 0 76.4952 0.914551 75.581 3.65817ZM248.381 47.2515C249.295 48.1661 246.857 64.3231 242.591 82.9188C238.629 101.515 235.886 117.976 236.191 119.501C236.8 121.33 252.343 105.173 270.629 84.1382L303.848 45.7273L350.476 45.7273C403.505 45.7273 400.152 43.5934 393.752 73.4685C390.705 88.1012 385.524 94.8079 337.676 149.376L284.952 209.431L313.6 263.084L342.552 316.738L338.591 332.895L334.629 349.052L291.352 349.966L248.076 350.881L229.791 316.433C202.057 263.999 204.191 264.913 195.962 303.629C184.99 355.758 191.391 350.576 138.362 350.576C113.371 350.576 92.0381 349.661 91.4286 348.137C90.8191 346.918 103.01 285.643 118.552 211.87C134.095 138.096 148.419 70.42 150.248 61.5794L153.6 45.7273L200.229 45.7273C225.829 45.7273 247.467 46.337 248.381 47.2515Z"
                fill-rule="nonzero" fill="currentColor" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const leftNavLinks = [
  {
    title: '开发者汉化计划',
    to: '/developer-localization-project',
    href: undefined,
    target: undefined
  }
]

const rightNavLinks = [
  {
    title: 'VRChat 汉化文档中心',
    to: undefined,
    href: 'https://docs.vrczh.org/',
    target: '_blank'
  },
  {
    title: 'VPM 镜像站',
    href: 'https://vcc.vrczh.org',
    target: '_blank'
  },
  {
    title: '论坛',
    href: 'https://bbs.vrcd.org.cn',
    target: '_blank'
  }
]

const isMenuOpen = ref(false)
</script>

<style scoped>
.nav-button {
  @apply hover:bg-gray-500/30 p-2 rounded-md;
}
</style>