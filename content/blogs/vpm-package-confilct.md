---
author: [ "SKPlol" ]
title: "有关VPM镜像站部分包版本号过旧及下载失败的公告"
description: "影响范围，预计修复时间"
category: "问题公告"
date: 1721551680000
---
## 发生了什么

2024 年 8 月 27 日北京时间晚上 23：30 分左右，有玩家报告称镜像站的 curated 源中的 Avatar 3.0 Manager 版本过老，调查发现系为镜像站后端设计问题

## 这个变化会带来什么问题

如您正在使用镜像站的 curated 源（包括但不限于使用由我们发布的 VCC patcher 与订阅该镜像源），您可能会遇到：
  - 该源在 AlCOM/VCC 下缺失部分包，影响范围包括
    - Avatars 3.0 Manager
    - Gesture Manager
    - Av3Emulator
    - VRChat Client Simulator
    - UdonSharp
  - 该源中的 Avatar 3.0 Manager 版本号过旧，为 2.0.27 及以下版本
  - 镜像源同步与下载速度缓慢，且出现失败问题

## 临时修复办法

在我们发布进一步公告前，如您需要使用该包，请参考以下解决方案
    - 如您使用 VCC patcher ：
      - 请临时取消订阅 curated 源
    - 如您使用 ALCOM ：
      - 请临时取消订阅 curated 镜像源

## 修复时间与措施

我们将持续跟进该问题，并在今日发布临时服务端修复，且会在本周末定位该问题
