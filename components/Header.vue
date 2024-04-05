<template>
  <div class="fixed w-full z-10">
    <div class="text-center bg-orange-800 text-white p-2">VRCD 官网目前处于开发阶段，内容仅供参考。实际内容请以官方社交媒体账号公布信息和管理人员通告为准。</div>
    <div
      class="transition px-4 fixed h-20 w-full flex justify-between items-center bg-white/50 dark:bg-neutral-900/80 backdrop-blur-3xl">
      <div class="space-x-4 flex">
        <NuxtLink to="/" class="pl-4 h-10 w-auto rounded-lg flex justify-center items-center">
          <IconsVRCD />
        </NuxtLink>
        <div class="hidden xl:flex">
          <NuxtLink v-for="navLink in navLinks" :to="navLink.to" :href="navLink.href" :target="navLink.target"
            class="text-xl px-4 py-2 rounded-lg hover:bg-[#8080804D]">
            {{ navLink.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="hidden xl:flex">
        <NuxtLink @click="isDark = !isDark" class="p-3 rounded-lg hover:bg-[#8080804D]">
          <Icon class="text-2xl" :name="isDark ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
        </NuxtLink>
        <NuxtLink v-for="item in socialItems" :to="item.to" :href="item.href" :target="item.target"
          class="p-3 rounded-lg hover:bg-[#8080804D]">
          <Icon v-if="item.icon !== undefined" class="text-2xl" :name="item.icon" />
          <component :is="item.componentIcon" />
        </NuxtLink>
      </div>
      <button @click="isMenuOpen = !isMenuOpen" class="p-3 xl:hidden rounded-lg hover:bg-[#8080804D]">
        <Icon name="mdi:menu" class="text-2xl" />
      </button>
    </div>
  </div>

  <Teleport v-if="isMenuOpen" to="body">
    <div class="fixed top-0 left-0 h-screen w-screen" @click="isMenuOpen = false"></div>
    <div
      class="fixed z-10 p-2 pr-4 m-2 flex flex-col top-14 xl:right-20 right-[5vw] shadow-2xl border-2 dark:border-zinc-800 border-zinc-300 bg-[#ffffff] dark:bg-[#161718] rounded-lg"
      @click="isMenuOpen = false">
      <NuxtLink v-for="navLink in navLinks" :to="navLink.to" :href="navLink.href" :target="navLink.target"
        class="px-4 py-2 text-xl rounded-lg hover:bg-[#8080804D]">
        {{ navLink.title }}
      </NuxtLink>

      <hr class="m-2 dark:border-zinc-800 border-zinc-300" />
      <div class="flex space-x-1 justify-between">
        <div class="flex">
          <NuxtLink @click="isDark = !isDark" class="p-3 rounded-lg hover:bg-[#8080804D]">
            <Icon class="text-2xl" :name="isDark ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
          </NuxtLink>
        </div>
        <div class="flex flex-row justify-end w-fit">
          <NuxtLink v-for="item in socialItems" :to="item.to" :href="item.href" :target="item.target"
            class="p-3 rounded-lg hover:bg-[#8080804D]">
            <Icon v-if="item.icon !== undefined" class="text-2xl" :name="item.icon" />
            <component :is="item.componentIcon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import IconsKOOK from '@/components/Icons/KOOK.vue'

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

const navLinks = [
  {
    title: '资讯',
    to: '/',
    href: undefined,
    target: undefined
  },
  {
    title: '开发者汉化计划',
    to: '/developer-localization-project',
    href: undefined,
    target: undefined
  },
  {
    title: 'VRChat 汉化文档中心',
    href: 'https://docs.vrczh.org/',
    target: '_blank'
  },
  {
    title: 'VPM 镜像站',
    href: 'https://vcc.vrczh.org',
    target: '_blank'
  }
]

const socialItems = [
  {
    icon: 'mdi:github',
    tooltip: 'Github',
    href: 'https://github.com/vrcd-community',
    target: '_blank',
    to: undefined
  },
  {
    icon: 'mdi:qqchat',
    tooltip: 'QQ 群',
    href: 'https://qm.qq.com/cgi-bin/qm/qr?k=giJOizm4gtgi0LkW8jOguFcDItINIy6n&jump_from=webapi&authKey=VijnIKfoJvsmMu/KXsMCwaNUmCVNv7TC32iKvZnmfKKPAWHuUS0RH1yjIhjv4tB7',
    target: '_blank',
    to: undefined
  },
  {
    icon: undefined,
    componentIcon: IconsKOOK,
    tooltip: 'KOOK',
    href: 'https://kook.top/PCMwFB',
    target: '_blank',
    to: undefined
  }
]

//   < !-- <SvgButton1 SvgButton1 : src = "isDark ? '/svg/github.svg' : '/svg/github-black.svg'" href = "" >
//     </SvgButton1>
//     <SvgButton1 SvgButton1 : src = "isDark ? '/svg/kook-white.svg' : 'svg/kook-black.svg'" href = "https://kook.top/lGrpqQ" >
//       </SvgButton1>
//       <SvgButton1 SvgButton1 : src = "isDark ? '/svg/qq.svg' : 'svg/qq-black.svg'"
// href = "" >
//   </SvgButton1> -->
</script>