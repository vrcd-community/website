---
author: [ "Misaka-L" ]
title: "关于近期 VPM 镜像站提供包版本过老、安装包出现 429 错误和无法连接到镜像站的后续调查"
description: "问题的根源和我们是如何解决的"
category: "服务故障"
date: 1725035560000
---

## 发生什么事了？

在 2024/8/26 当晚，有多个用户报告以下问题：

- [镜像站的 `curated` 源中的 `dev.vrlabs.av3manager` 落后于上游多个版本。](#curated-源中的-devvrlabsav3manager-落后于上游多个版本)
- [在下载安装包时出现了大量 HTTP 429 错误。](#在下载安装包时出现了大量-http-429-错误)
- [无法连接到镜像站](#无法连接到镜像站)

## 怎么绘事呢？好使了吗？

### `curated` 源中的 `dev.vrlabs.av3manager` 落后于上游多个版本

实际上该问题没有任何人工介入的情况下几分钟后被自动解决了。

由于日志已经被清除，事发时镜像站开发者和运维（Misaka-L，也就是我本人）正在进行断网一周挑战。无法确定具体原因。目前猜测如下：

事发时镜像站运行的后端版本为 [v0.10.0 (commit: 3ca66743c2e575bddee435a1ca6066ce98e58ec2)](https://github.com/vrcd-community/VPMReposSynchronizer/blob/3ca66743c2e575bddee435a1ca6066ce98e58ec2)。

在该版本的镜像站后端，VPM 包在数据库里的 `PackageId` 存储格式为 `{packageName}@{version}`（如：`com.vrchat.worlds@3.5.0`，[相关源码链接](https://github.com/vrcd-community/VPMReposSynchronizer/blob/3ca66743c2e575bddee435a1ca6066ce98e58ec2/VPMReposSynchronizer.Core/Models/Mappers/VpmPackageProfile.cs#L50)）。
这一设计导致了镜像站无法处理多个源存在相同 `name` 和 `version` 的包的情况。

```csharp [VPMReposSynchronizer.Core/Models/Entity/VpmPackageEntity.cs]{5}
// ...

CreateMap<VpmPackage, VpmPackageEntity>()
    .ForMember(dest => dest.VpmId, opt => opt.MapFrom(src => src.Id))
    .ForMember(dest => dest.PackageId, opt => opt.MapFrom(src => src.Name + "@" + src.Version))

// ...
```

镜像站在同步包时，会尝试用上游的包元数据覆盖数据库里已有的包元数据，并会将数据库已有的包数据实体的 `UpstreamId` 字段设置为当前正在同步的上游的 Id。

而此次事件中受到影响的包 `dev.vrlabs.av3manager` 正是同时存在于 VRChat 官方的 `curated` 源和 VRLabs 的 `essentials` 源。

事发时官方 `curated` 源存储了该包的 `2.0.18~2.0.33` 版本（[链接](https://github.com/vrchat-community/vpm-listing-curated/blob/b30f16c317275d48ee6c77c93df4de4e5e5d10e6/source.json#L54-L59)），而 VRLabs 的 `essentials` 源存储了该包的 `2.0.28~2.0.33`。

镜像站在同步时先执行了官方 `curated` 源的同步，而后续执行的 VRLabs `essentials` 源则覆盖了 `dev.vrlabs.av3manager` 的 `2.0.28~2.0.33` 版本包数据的 `UpstreamId` 字段。
从而导致官方 `curated` 源 `dev.vrlabs.av3manager` `2.0.28~2.0.33` 版本没有被正确同步。

![VRLabs 的 essentials 源截图](/blog/2024-8-27-vpm-mirror-wrong-package-and-429/vrlabs-vpm-repos.png)

#### 现在的镜像站是如何解决这个问题的？

在新版镜像站，包数据实体的 `PackageId`（[数据库实体定义](https://github.com/vrcd-community/VPMReposSynchronizer/blob/71b340bc39a4b4f9cb5414939e7e48fd0c7aefdc/VPMReposSynchronizer.Core/Models/Entity/VpmPackageEntity.cs#L7)，[包元数据服务相关代码](https://github.com/vrcd-community/VPMReposSynchronizer/blob/71b340bc39a4b4f9cb5414939e7e48fd0c7aefdc/VPMReposSynchronizer.Core/Services/RepoMetaDataService.cs#L42)）将会按照 `{packageName}@{version}@{repoId}` 的格式存储（如：`com.vrchat.worlds@3.5.0@official`）。

```csharp [VPMReposSynchronizer.Core/Services/RepoMetaDataService.cs]{12}
// ...

public class RepoMetaDataService(
  // ...
)
{
  // ...

  public async Task MarkAddOrUpdateVpmPackageAsync(VpmPackage vpmPackage, string fileId, string repoId)
  {
      var entity = mapper.Map<VpmPackageEntity>(vpmPackage);
      entity.PackageId = $"{vpmPackage.Name}@{vpmPackage.Version}@{repoId}";
      entity.FileId = fileId;
      entity.UpstreamId = repoId;

      await MarkAddOrUpdateVpmPackageAsync(entity);
  }

  // ...
}
```

#### 还有一点

新版镜像站完全重写了同步逻辑，提升了镜像站同步的健壮性，并且每次同步都可以方便的调出[完整的日志](https://vcc.vrczh.org/status/tasks/3760)和追踪同步任务的状态。

![新的同步任务页面](/blog/2024-8-27-vpm-mirror-wrong-package-and-429/new-sync-task-page.png)

### 在下载安装包时出现了大量 HTTP 429 错误

镜像站对文件下载接口做了 Rate Limit 限制，但是这个限制阈值过低过于容易触发。

目前已调高阈值。

### 无法连接到镜像站

镜像站的 API（`vpm.vrczh.org`）使用了 [Cloudflare](https://www.cloudflare.com/) 的 CDN 和 DDOS 防护服务。但是众所周知在不做任何处理的情况下 Cloudflare 在中国大陆的可用性极低。

但是 Cloudflare 的一部分节点 IP 在中国大陆依然有不错的表现，所以我们可以将这些 IP 添加到域名的解析记录内并设置仅对中国大陆生效来加速 Cloudflare 在中国大陆的服务速度。

具体操作流程和原理此处不做详细说明，有兴趣可以看看这两篇文章：

- [全球主机监控 - CloudFlare自选IP PLUS](https://blog.hostmonit.com/cloudflare-select-ip-plus/)
- [清北博客 - CDN 調教指南（三）優選 Cloudflare IP](https://blog.tsinbei.com/tw/archives/1349/)

我们的 [IP 优选 CI](https://github.com/vrcd-community/cf2dns/actions/workflows/run.yml) 会在每十分钟向[一个公共的 Cloudflare IP 优选服务](https://stock.hostmonit.com/CloudFlareYes)请求最新的优选 IP 并更新域名的解析。

而报告无法连接到镜像站的用户解析出的 IP 是在我们之前优选出来的 IP，从而导致了连接问题。

此处给个小建议：除非你配置 `vpm.vrczh.org` 这个域名走代理，否则请将此域名使用中国大陆内的公共 DNS 服务进行解析。使用中国大陆外的公共 DNS 服务可能会解析到质量较差的 IP。

### 为什么不直接解析到服务器上呢？

有一部分用户知道给我们提供云服务器的云服务商[雨云](https://www.rainyun.com/) 的云服务器标配是提供 DDOS 防御的，可能会问这个问题。此处统一回复：

- 镜像站所在的服务器位于 `美国1区`，该区的机器中国大陆直连丢包率接近 100%。
- Cloudflare 允许我们更方便更好地实现一些功能，比如说 WAF 和重定向。
- 雨云的服务器再怎么抗打也不如 Cloudflare 抗打
