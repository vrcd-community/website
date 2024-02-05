<!--顶栏-->
<template>
  <div class="xl:p-2.5 fixed h-20 w-full py-2.5 z-10 flex justify-between items-center bg-[#ffffff] dark:bg-[#161718]">
    <!--左半侧-->
    <div class="h-10 w-fit xl:mx-16 mx-[6vw] flex flex-row justify-start items-center">
      <NuxtLink href="https://www.vrcd.org.cn/" class="h-10 w-auto pr-5 rounded-lg flex justify-center items-center">
        <img :src="isDark ? '/svg/vrcd.svg' : '/svg/vrcd-black.svg'"></img>
      </NuxtLink>
      <div class="hidden xl:flex">
        <TextButton1 title="资讯" href="/"></TextButton1>
        <TextButton1 title="VPM 镜像库" href="https://vcc.vrczh.org/"></TextButton1>
        <TextButton1 title="VRChat 汉化文档中心" href="https://docs.vrczh.org/"></TextButton1>
      </div>
      
    </div>
    <!--右半侧-->
    <div class="hidden xl:flex h-10 w-fit mx-16 flex-row justify-end items-center">
      <NuxtLink @click="isDark = !isDark" class="h-10 w-10 p-2.5 m-2.5 rounded-lg flex justify-center items-center bg-transparent hover:bg-[#8080804D] transition">
        <img :src="isDark ? '/svg/dark.svg' : '/svg/bright.svg'"></img>
      </NuxtLink>
      <SvgButton1 :src="isDark ? '/svg/github.svg' : '/svg/github-black.svg'" href="https://github.com/vrcd-community" ></SvgButton1>
      <SvgButton1 :src="isDark ? '/svg/kook-white.svg' : 'svg/kook-black.svg'" href="https://kook.top/lGrpqQ"></SvgButton1>
      <SvgButton1 :src="isDark ? '/svg/qq.svg' : 'svg/qq-black.svg'" href="https://qm.qq.com/cgi-bin/qm/qr?k=giJOizm4gtgi0LkW8jOguFcDItINIy6n&jump_from=webapi&authKey=VijnIKfoJvsmMu/KXsMCwaNUmCVNv7TC32iKvZnmfKKPAWHuUS0RH1yjIhjv4tB7"></SvgButton1>
    </div>
    <NuxtLink @click="isMenuOpen = !isMenuOpen" class="xl:hidden xl:mx-20 mx-[6vw] h-10 w-10 p-2.5 m-2.5 rounded-lg flex justify-center items-center bg-transparent hover:bg-[#8080804D] transition fill-[#FF0000] dark:fill-[#ffffff]">
      <img :src="isDark ? '/svg/menu-icon.svg' : '/svg/menu-black.svg'" class="block h-5 w-5"></img>
    </NuxtLink>
  </div>
  <!--悬浮栏-->
  <Teleport v-if="isMenuOpen" to="body">
    <div class="fixed top-0 left-0 h-screen w-screen" @click="isMenuOpen = false"></div>
    <div class="fixed z-10 p-2 pr-4 m-2 flex flex-col top-14 xl:right-20 right-[5vw] shadow-2xl border-2 dark:border-zinc-800 border-zinc-300 bg-[#ffffff] dark:bg-[#161718] rounded-lg" @click="isMenuOpen = false">
      <TextButton2 title="资讯" href="/"></TextButton2>
      <TextButton2 title="VPM 镜像库" href="https://vcc.vrczh.org/"></TextButton2>
      <TextButton2 title="VRChat 汉化文档中心" href="https://docs.vrczh.org/"></TextButton2>
      <hr class="m-2 dark:border-zinc-800 border-zinc-300" />
      <div class="flex space-x-1 justify-between">
        <div class="flex">
          <NuxtLink @click="isDark = !isDark" class="h-10 w-10 p-1 m-1 rounded-lg flex justify-center items-center bg-transparent hover:bg-[#8080804D] transition">
            <img :src="isDark ? '/svg/dark.svg' : '/svg/bright.svg'"></img>
          </NuxtLink>
        </div>
        <div class="flex flex-row justify-end w-fit">
          <SvgButton2 :src="isDark ? '/svg/github.svg' : '/svg/github-black.svg'" href="https://github.com/vrcd-community" ></SvgButton2>
          <SvgButton2 :src="isDark ? '/svg/kook-white.svg' : 'svg/kook-black.svg'" href="https://kook.top/lGrpqQ"></SvgButton2>
          <SvgButton2 :src="isDark ? '/svg/qq.svg' : 'svg/qq-black.svg'" href="https://qm.qq.com/cgi-bin/qm/qr?k=giJOizm4gtgi0LkW8jOguFcDItINIy6n&jump_from=webapi&authKey=VijnIKfoJvsmMu/KXsMCwaNUmCVNv7TC32iKvZnmfKKPAWHuUS0RH1yjIhjv4tB7"></SvgButton2>
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

const isMenuOpen = ref(false)
</script>

<style scoped>
.nav-button {
  @apply hover:bg-gray-500/30 p-2 rounded-md;
}
</style>