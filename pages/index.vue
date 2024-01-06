<template>
    <Title>VRCD - 欢迎</Title>
    <div class="bg-[center_top_-12rem] bg-cover bg-no-repeat home pb-20">
        <div class="lg:w-4/6 w-5/6 mx-auto">
            <div class="mt-24">
                <header>
                    <div>
                        <h2 class="sm:text-6xl text-5xl">共享资源，共创未来</h2>
                        <p class="sm:text-xl mt-2 text-lg text-zinc-400 text-right">——酷酷的老鼠</p>
                    </div>
                </header>
                <div class="flex xl:flex-row flex-col lg:mt-60 mt-10 xl:space-x-4 space-y-4 xl:space-y-0">
                    <InfoCard class="flex-1" title="公告 📢">
                        <div>
                            <p>VPM镜像库现已发布！</p>
                            <p>您可以通过使用此镜像库直接在创作者助手中同步 VRChat SDK 而无需国际网络环境！这是国内 VRChat 内容制作所迈出的一大步。</p>
                            <p>我们也希望更多的国内创作者能够通过此镜像库发挥出更加惊人的创作力和创作热情！</p>
                        </div>
                    </InfoCard>
                    <div class="flex-1 space-y-4">
                        <ButtonCard class="text-emerald-500 dark:text-emerald-400" title="开发者汉化计划"
                            description="共同参与社区汉化工作，让技术无国界" to="/developer-localization-project" />
                        <ButtonCard class="text-cyan-500 dark:text-cyan-400" title="VPM 镜像站" description="体验更快，更简单的 VPM 加载"
                            href="https://vcc.vrczh.org" target="_blank" />
                    </div>
                </div>
                <hr class="my-10" />
            </div>
            <div class="space-y-6">
                <InfoCard title="简介📖">
                    <div>
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
                    <div class="flex md:flex-row flex-col mt-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                        <div class="flex-auto">
                            <NuxtPicture :imgAttrs="{ class: 'size-full rounded-md object-cover' }"
                                src="/images/home/home-1.png" />
                        </div>
                        <div class="flex-auto">
                            <NuxtPicture :imgAttrs="{ class: 'size-full rounded-md object-cover' }"
                                src="/images/home/home-2.jpg" />
                        </div>
                    </div>
                </InfoCard>
                <h2 class="text-4xl font-semibold">更多服务</h2>
                <ButtonCard button-text="敬请期待" target="_blank" class="banner text-white" title="VRChat 中文资讯"
                    description="了解 VRChat 官方的最新中文资讯" />
                <div class="flex md:flex-row flex-col md:space-x-4 space-x-0 space-y-4 md:space-y-0">
                    <ButtonCard class="flex-1 text-fuchsia-400" title="CC 公开讨论板" description="共同制作编辑可视化文档"
                        href="https://pixso.cn/app/share/t/vtV16q4Bg2sLS9S5rrxm7pM6zIskE9u-" target="_blank" />
                    <ButtonCard class="flex-1 text-cyan-500" title="文档库" description="敬请期待" button-text="敬请期待" />
                </div>
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