---
author: [ "SKPlol" ]
title: "有关VPM镜像站部分包版本号过旧及下载失败的公告"
description: "影响范围，预计修复时间"
category: "问题公告"
date: 1724768475000
---

> 本公告所指镜像站地址为 https://vcc.vrczh.org，如无特殊声明，我们将在这里发布未来的镜像站公告

## 发生了什么

1. 2024 年 8 月 26 日晚上 23：30 分左右，有玩家报告称镜像站的 curated 源中的 Avatar 3.0 Manager 版本过老，调查发现系为镜像站后端设计问题
2. 同一时间部分玩家反映，镜像站内各镜像源均出现**订阅，下载缓慢甚至失败**的现象，调查发现系最近我们使用的 CDN 不稳定所致

## 这个变化会带来什么问题

### 如正在使用包括 curated 源在内的镜像源
>（包括但不限于使用由我们发布的 VCC patcher 与订阅该镜像源）
您可能会遇到：
  - curated 源在 AlCOM/VCC 下缺失部分包，影响范围包括
    - Avatars 3.0 Manager
    - Gesture Manager
    - Av3Emulator
    - VRChat Client Simulator
    - UdonSharp
    - 或 Avatar 3.0 Manager 可用版本号过旧，为 2.0.27 及以下版本
  - 镜像源同步与下载速度缓慢，甚至失败

## 临时修复办法

在我们发布进一步公告前，如您需要使用镜像站内的 Avatar 3.0 Manager，请参考以下解决方案
> 请前往 [VRChat 入门包](https://docs.vrcd.org.cn/books/vrchat) 的 ALCOM 与 VCC 章节查询详细的**订阅**与**取消订阅**操作办法
  - 如您使用 VCC patcher ：
    - 请临时在 VCC 反勾选 curated 源，并订阅 [vrlabs-essentials](vcc://vpm/addRepo?url=https://vpm.vrczh.org/vpm/vrlabs-essentials) 源，从该源下载 Avatars 3.0 Manager 作为替代
  - 如您使用 ALCOM ：
    - 请临时取消订阅 curated 镜像源，并订阅 [vrlabs-essentials](vcc://vpm/addRepo?url=https://vpm.vrczh.org/vpm/vrlabs-essentials) 源，从该源下载 Avatars 3.0 Manager 作为替代

对于镜像源下载缓慢问题，如遇到失败问题，请稍等*半分钟*，然后再次订阅或下载

## 修复时间与措施

我们将持续跟进该问题，并尽快发布临时服务端修复，且会在本周末定位该问题
