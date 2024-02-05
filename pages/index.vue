<template>
  <Title>VRCD - 欢迎</Title>
  <!--世界,不要动-->
  <div>
    <!--主块,竖排，-->
    <div class="h-auto w-full flex flex-col justify-center items-center bg-[#EAEBEC] dark:bg-[#131415]">
      <!--封皮，竖向嵌套（晾着）-->
      <div class="mt-20 h-lvh w-fit justify-center items-center flex flex-col">
        <!--背景嵌套-->
        <div class="h-full w-full flex bg-center bg-contain bg-no-repeat justify-center items-center home">
          <!--封皮，横向嵌套，自适应竖向(标题，链接块)-->
          <div class="h-fit w-fit 2xl:w-[1420px] gap-5 justify-between lg:items-start sm:items-center items-start flex 2xl:flex-row flex-col">
            <!--封皮标题-->
            <div class="h-fit w-fit gap-5 flex flex-col justify-start items-start">
              <div class="lg:text-7xl sm:text-5xl text-4xl font-semibold">
              共享资源，共创未来。
              </div>
              <div class="text-lg text-[#13141580] dark:text-[#ffffff80]">
                ————酷酷的鼠鼠
              </div>
              <!--公告-->
              <div class="h-fit lg:w-[700px] sm:w-[532px] w-[400px] rounded-lg bg-[#ffffff80] dark:bg-[#13141580]">
                <div class="px-2 py-0.5 rounded-lg text-lg font-semibold bg-[#ffffff] dark:bg-[#131415]">
                  公告
                </div>
                <div class="p-2 text-base font-normal">
                  VPM镜像库现已发布！
                  您可以通过使用此镜像库直接在创作者助手中同步 VRChat SDK 而无需国际网络环境！这是国内 VRChat 内容制作所迈出的一大步。
                </div>
              </div>
              <div class="lg:h-16 sm:h-8 h-0"></div>
            </div>
            <!--封皮链接块-->
            <div class="h-fit 2xl:w-[532px] lg:w-[820px] sm:w-[532px] w-[400px] gap-5 flex flex-wrap justify-start items-center">
              <LinkCard 
              class="bg-[#24C29F] text-[#24C29F]" 
              title="开发者汉化计划" 
              info="共同参与汉化工作，让技术无国界" 
              to="https://www.vrcd.org.cn/developer-localization-project"></LinkCard>
              <LinkCard 
              class="bg-[#24C29F] text-[#24C29F]" 
              title="VRChat 汉化文档中心" 
              info="共同参与汉化工作，让技术无国界" 
              to="https://docs.vrczh.org/"></LinkCard>
              <LinkCard 
              class="bg-[#35B6D6] text-[#35B6D6]" 
              title="VPM 镜像库" 
              info="体验更快、更便捷的VPM加载" 
              to="https://vcc.vrczh.org/"></LinkCard>
              <LinkCard 
              class="bg-[#0065CA] text-[#0065CA]" 
              title="VRChat 中文资讯" 
              info="了解 VRChat 官方的最新中文资讯" 
              to="/"></LinkCard>
              <LinkCard 
              class="bg-[#9091F7] text-[#9091F7]" 
              title="文档库" 
              info="敬请期待"
              to="/"
              ></LinkCard>
            </div>
          </div>
        </div>
        <!--封皮横向嵌套-->
        <div class="h-fit w-[1420px] justify-center alight-center flex flex-row">
        </div> 
      </div>
      <div class="sm:h-0 h-20">
      </div>
      <!--简介-->
      <div class="h-fit 2xl:w-[1420px] lg:w-[820px] sm:w-[540px] w-[400px] flex flex-col justify-start items-start rounded-lg bg-[#ffffff80] dark:bg-[#13141580]">
        <div class="w-full px-2 py-0.5 rounded-lg text-lg font-semibold bg-[#ffffff] dark:bg-[#131415]">
          简介
        </div>
        <div class="px-2 py-0.5 text-base font-normal">
          <p>
            虚拟现实中文开发者社区（Virtual Reality Chinese Developer）是一个刚刚起步的面向玩家，初高级开发者，内容创作者的共创开源社区，在这里，您可以找到一众优秀的 VR
            内容创作者与热心好学的新兴创作力量。
          </p>
          <p>
            VRCD 为新手提供必要的入门资源，为创作者们提供创作扶持，让大家获得更丰富和谐的内容创作环境。
          </p>
          <p>
            与此同时，VRCD 也提供与众不同的，精彩的创作者活动和资讯，例如来自 VRChat 官方的最新资讯和活动，您也可以在这里参与汉化相关的活动，如 VRChat 开发者汉化，VR
            文档汉化等，让您可以为 VR 的中文化做出贡献，以享受更多的 VR 内容。
          </p>
          <p>
            VRCD 欢迎您的加入，让我们一起参加活动，共同推动社区发展！您的帮助和支持也许会带来意想不到的影响和效果！
          </p>
        </div>
        <div class="p-2 flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <div class="flex-auto">
            <NuxtPicture :imgAttrs="{ class: 'size-full rounded-md object-cover' }"
            src="/images/home/home-1.png" />
          </div>
          <div class="flex-auto">
            <NuxtPicture :imgAttrs="{ class: 'size-full rounded-md object-cover' }"
            src="/images/home/home-2.jpg" />
          </div>
        </div>
      </div>
      <div class="sm:h-40 h-8">
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
    background-image: url('/images/home/background-cover.png');
}

.banner {
    background-image: url('/images/home/banner.png');
}
</style>