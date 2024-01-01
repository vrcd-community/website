<template>
  <div class="text-emerald-500 dark:text-emerald-400">
    <NuxtPicture class="absolute h-[400px] w-full object-cover -z-10 hidden xl:block"
      src="/images/developer-localization-project/banner.png" />
    <div class="banner-cover xl:h-[400px] h-auto">
      <div class="flex flex-col xl:flex-row items-center xl:items-stretch max-w-6xl m-auto py-16">
        <div class="flex-1 space-y-3 text-center xl:text-left">
          <h1 class="font-bold text-6xl xl:text-8xl leading-snug">开发者<br />汉化计划</h1>
          <h2 class="font-bold text-4xl xl:text-5xl">Developer Localization Project</h2>
        </div>
        <div class="w-80 mt-12 xl:mt-0">
          <NuxtPicture class="h-full mx-auto object-contain" src="/images/developer-localization-project/icon.png" />
        </div>
      </div>
    </div>
  </div>
  <div class="lg:w-4/6 w-5/6 mx-auto mt-16">
    <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0">
      <InfoBorderCard title="来的好哇！🚀" class="flex-1 border-amber-500 bg-amber-500/5">
        <p>欢迎来到开发者汉化计划 ！</p>
        <p>这是一个完全公益的开发文档汉化项目，此计划目的在于降低开发者的语言门槛，引导更多玩家和创作者接触虚拟现实内容创作，并辅助国内VR内容质量的提升。🎉🎉</p>
        <p>您可以在这里找到各位由创作者提出的汉化项目。</p>
      </InfoBorderCard>
      <InfoBorderCard title="目前正在进行🔥🔥🔥" class="flex-1 border-emerald-400 bg-emerald-400/5">
        <ul>
          <li>
            <NuxtLink href="https://docs.qq.com/doc/DQm1STHlua2tkVVh2?scene=8e31b4fa6c08283dc85c2622YK75r1"
              target="_blank">
              VRChat汉化文档中心</NuxtLink>
          </li>
          <li>
            <NuxtLink href="https://docs.qq.com/doc/DQkxOVXFtS3d0elVm?scene=b833246a3e2c9576a6839997NN75r1"
              target="_blank">
              开发者汉化术语对照表</NuxtLink>
          </li>
        </ul>
      </InfoBorderCard>
    </div>
    <hr class="my-24 divider" />
    <div class="columns-1 sm:columns-2 gap-4 space-y-4">
      <InfoCard title="VRChat 汉化文档中心">
        <div class="full-prose">
          <NuxtPicture class="w-full" src="/images/developer-localization-project/vrc-docs-screenshot.png" />
          <h3>简介</h3>
          <p>VRChat 汉化文档中心是面向 VRChat 玩家/创作者的针对 VRChat 官方文档的本地化项目，致力于让更多中文母语者能通过计划更加深入接触 VRChat 开发的种种技术细节。</p>
          <NuxtLink class="not-prose link-button text-emerald-500 dark:text-emerald-40 divider"
            href="https://docs.vrczh.org" target="_blank">
            VRChat 汉化文档中心
          </NuxtLink>
        </div>
      </InfoCard>
      <InfoCard title="开发者汉化术语对照表">
        <div class="full-prose">
          <h3>简介</h3>
          <p>开发者汉化术语对照表是面向制定 VR 开发领域对词汇的诠释和翻译标准的项目，让翻译本身更加贴合开发者需求和术语标准的对照表项目。目前开发者汉化术语对照表由 VRCD 维护。</p>
          <h3>参与方式</h3>
          <p>您可以随时在 VRCD 创作者社区群内了解有关开发者汉化术语对照表的详情，讨论和交流技术细节，在腾讯文档中做出贡献。</p>
          <p>您也可以直接访问进入开发者汉化术语对照表文档：</p>
          <NuxtLink class="not-prose link-button text-cyan-500 dark:text-cyan-400 border-cyan-500 dark:border-cyan-400"
            href="https://docs.qq.com/doc/DQm1STHlua2tkVVh2?scene=8e31b4fa6c08283dc85c2622YK75r1" target="_blank">
            开发者汉化术语对照表文档
          </NuxtLink>
        </div>
      </InfoCard>
      <InfoCard title="VRChat 中文资讯">
        <div class="full-prose">
          <h3>简介</h3>
          <p>VRChat 有着多种渠道和媒体形式用于发布更新信息和社区公告，是时候将这些信息进行整合，发布，让各位创作者和玩家能够及时了解到VRChat官方的最新中文动态了！</p>
          <h3>参与方式</h3>
          <p>目前暂未开始进行，您可以在创作者社区了解到最新规划进度。</p>
        </div>
      </InfoCard>
      <InfoCard title="LTCGI 文档汉化翻译">
        <div class="full-prose">
          <h3>简介</h3>
          <p>LTGCI 一直都是在各种 VRChat 光影地图中常用到的出色插件，对于快速提升地图观赏度来说简直是得手利器，但是有不少国内创作者因为 LTCGI 官方文档英文的门槛望而却步，实在是可惜。</p>
          <p>为什么我们不试着去翻译那些信息呢？也许我们真的可以这么做，但这个项目开工可能需要花上那么一点时间。</p>
          <h3>参与方式</h3>
          <p>目前暂未开始进行，您可以在创作者社区了解到最新规划进度。</p>
        </div>
      </InfoCard>
      <InfoCard title="开发者汉化集会">
        <div class="full-prose">
          <NuxtPicture class="w-full" src="/images/developer-localization-project/meeting-banner.png" />
          <h2>简介</h2>
          <p>
            开发者汉化集会活动意在于为开发者们解决和讨论汉化过程中遇到的问题，难题，与此同时为大家提供更加便利友好多元多彩的讨论环境。
            开发者汉化集会每隔两周，每举办周的星期六晚 9pm-10pm 进行。
          </p>
          <NuxtLink class="not-prose link-button text-cyan-500 dark:text-cyan-400 border-cyan-500 dark:border-cyan-400"
            href="https://docs.qq.com/aio/DQkFBSlpWZFdHalp6" target="_blank">
            腾讯文档
          </NuxtLink>
          <h2>参与方式</h2>
          <p>通过加入 VRChat 中的 VRCD 群组，您可以获得加入集会的权限。</p>
          <NuxtLink href="https://vrchat.com/home/group/grp_129971e7-3f5f-4102-aa95-f6b958279ad0" target="_blank">VRCD
            VRChat Group</NuxtLink>
        </div>
      </InfoCard>
    </div>
    <hr class="my-12 divider" />
    <NuxtPicture src="/images/developer-localization-project/divider.png" class="w-full object-contain" />
    <InfoBorderCard title="想来点投稿？✨" class="flex-1 border-purple-500 bg-purple-500/5 my-4">
      <p>
        您是否也有着希望通过共同的努力回馈社区的汉化计划或者项目？</p>
      <p>您随时可以联系该计划管理员，将该项目的简介，参与方式，注意事项打包发送过去，管理员将在项目审核后把这些信息展示在该计划文档下。</p>

      <p>管理员联系方式：</p>
      <p>QQ：（管理员空位，目前请暂时直接联系VRCD创作者社区管理员）</p>
    </InfoBorderCard>
    <NuxtPicture src="/images/developer-localization-project/divider.png" class="w-full object-contain mb-10" />
  </div>
</template>

<style scoped>
.divider {
  @apply border-emerald-500 dark:border-emerald-400;
}

.banner-cover {
  --banner-cover-color-1: rgb(223, 223, 238);
  --banner-cover-color-2: rgba(197, 209, 221, 0.73);
  --banner-cover-color-3: rgb(220, 232, 245);

  background-image: linear-gradient(0deg, var(--banner-cover-color-1) 0%, var(--banner-cover-color-2) 47%, var(--banner-cover-color-3) 100%);
}

.dark-mode .banner-cover {
  --banner-cover-color-1: rgb(13, 13, 14);
  --banner-cover-color-2: rgba(18, 19, 20, 0.73);
  --banner-cover-color-3: rgb(19, 20, 21);
}
</style>