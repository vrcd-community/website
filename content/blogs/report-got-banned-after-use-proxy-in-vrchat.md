---
author: [ "Misaka-L" ]
title: "关于近期使用加速器登录 VRChat 导致账号被封事件的情况复盘"
description: "事件时间线，可能原因推测，收集到的统计数据。"
category: "事件复盘"
date: 1721582580000
---

> 如无特殊说明，则文章内日期时间时区都为 UTC+8 24 小时制。

- [发生了什么？](#发生了什么)
- [我应该做什么？](#我应该做什么)
  - [我的账号还没有被封禁](#我的账号还没有被封禁)
  - [我的账号还是被封禁的状态！](#我的账号还是被封禁的状态)
- [可能的原因？](#可能的原因)
    - [UU 加速器更新了他们的香港/日本节点的网络线路，但是使用的是一批刚从其他区域被释放的 IP。](#uu-加速器更新了他们的香港日本节点的网络线路但是使用的是一批刚从其他区域被释放的-ip)
    - [VRChat 的 GeoIP 数据库有错误/过时](#vrchat-的-geoip-数据库有错误过时)
- [事件时间线](#事件时间线)
- [统计数据表格](#统计数据表格)
  - [以下数据可能有误](#以下数据可能有误)
- [涉事节点的 IP \& CIDR](#涉事节点的-ip--cidr)
  - [CIDR](#cidr)
- [相关信息和截图](#相关信息和截图)
  - [与官方工程师的聊天记录](#与官方工程师的聊天记录)
    - [文字版](#文字版)
    - [原始截图](#原始截图)
  - [VRChat 社区技术支持人员的回复](#vrchat-社区技术支持人员的回复)
- [参考资料](#参考资料)
- [相关链接](#相关链接)

## 发生了什么？

在 2024/7/20 这个星期六晚上，一群中国大陆的 VRChat 玩家像往常一样打开 **UU 加速器**尝试登录 VRChat。
此时游戏/SDK 要求他们确认异地登录验证邮件，对于使用加速器来说触发异地登录的很正常的事情。

但是在这次事件中和往常不同的是：登录验证邮件里显示他们的账号正在尝试从**土耳其**登录，即使他们使用的节点在**日本或者香港**！

大部分人认为这只是个不影响使用的 bug，所以直接点击了邮件里的确认链接。

...

大约当晚 8 点开始（我们并不知道故障准确的开始时间）有大量玩家在各大社交平台表示：自己的账号因为异常登录被锁定（永久封禁）。

根据目前收集到的统计数据，我们注意到此处事件中大部分被误封的玩家都有以下共同点：

- 使用 **UU 加速器**
- **香港**或**日本**节点
- 收到的异地登录确认邮件里的登录位置都是**土耳其**

**请注意**：

- 以上结论是通过我们收集到的统计数据得出的，**不能代表所有人的情况**。
- 也有使用梯子的用户报告自己被误封了，**不代表一定是** UU 加速器的问题。

**根据 VRChat [官方](#与官方工程师的聊天记录)和[社区技术支持人员](#vrchat-社区技术支持人员的回复)的回复：目前大部分因为使用加速器被误封的账号都已经被解封。**  
（如果你的没有，请参考 [#我的账号还是被封禁的状态](#我的账号还是被封禁的状态) 向官方提交申诉）。

根据玩家反馈，目前即使确认了登录位置错误的邮件也不会导致账号被封，但是我们**强烈建议你不要尝试去点击这种邮件的链接**！
~~除非你想号被封去写小作文。~~

目前我们尚不清楚为何会发生这种情况。

一些比较技术性的东西，**如果你只是普通玩家可以直接无视**：[#可能的原因](#可能的原因)

## 我应该做什么？

### 我的账号还没有被封禁

- 为你的账号开启两步验证并妥善保管 recovery codes。
- 如果你看到登录验证邮件里的登录位置和你的加速器节点**位置不一致（尤其是显示土耳其）**，**安全起见建议不要确定**。
- 把这篇文章传播给其他人。

### 我的账号还是被封禁的状态！

请前往 [recover.vrchat.com](https://recover.vrchat.com) 提交申诉工单，填写所有必填项并附上以下信息：

- 你正在使用的加速器（如：UU，雷神等）
- 加速器的节点的区域（如：日本等）
- 在打开加速器时浏览器打开 [https://vrchat.com/cdn-cgi/trace](https://vrchat.com/cdn-cgi/trace) 的结果的截图
- 你的登录邮件显示的登录位置（如：土耳其等）
- 被封前的操作（如：上传模型时，登录 VRChat 时确认了一封登录位置错误的验证邮件等）

**请注意：不要照抄以下示例！如果你的英语能力较差需要使用机器翻译，请将机器翻译的译文重新翻译回中文检查表达是否正确！。**

例如：

```plaintext
// 我的账号在使用 UU 加速器的日本节点登录之后被封了。（使用加速器和节点区域）
My account got banned when I was using the Japan server of a VPN software named UU (https://uu.163.com/) to login to VRChat.

// 在被封前游戏告诉我因为异地登录需要用邮件确认登录。（被封前的操作）
​Before I got banned, the game asked me to confirm my login by email because I was logged from a new location.
// 但是我收到了一封登录位置在土耳其的登录邮件。（登录邮件显示的登录位置）
​But I received a login verification email which login location is Turkey.

// 确认登录之后我收到了一封邮件告诉我我的账号被锁定了，并且我无法登录 VRChat。
After confirming the login, I received an email telling me that my account was locked and I couldn't login to VRChat anymore.
```

如果你开启了 2FA，请在 `Account Recovery Token` 填写你的 Recovery codes，如果没有请留空（弄丢了也可以试试不填...）。
然后上传在打开加速器时浏览器打开 [https://vrchat.com/cdn-cgi/trace](https://vrchat.com/cdn-cgi/trace) 的结果的截图。
这这有助于 VRChat 官方团队搞清楚你的状况。

VRChat 团队已了解大规模使用加速器导致账号被误封的情况，按照我们收到的玩家反馈，你的请求应该能在一天之内被解决。

## 可能的原因？

> - **请注意我们不是 VRChat 或者 UU 加速器官方，与这两方没有任何从属关系。能了解到的情况非常有限。**
> - 以下内容比较具有技术性，**如果你只是普通玩家可以直接无视**。

我们目前有以下**猜测**：

#### UU 加速器更新了他们的香港/日本节点的网络线路，但是使用的是一批刚从其他区域被释放的 IP。

TODO

#### VRChat 的 GeoIP 数据库有错误/过时

TODO

## 此处事件中可以改进的地方

TODO

## 事件时间线

- 根据我们现有的统计数据，最早的误封开始于 2024/7/20 20:00。
- 2024/7/20 22:00 后，我们开始收到数十个玩家反馈在使用加速器后登录游戏后账号被永久封禁（异常登录锁定）。
- 2024/7/20 22:42，我们 开始联系 VRChat 团队的员工。报告可能的大规模使用加速器导致误封的情况。
- 2024/7/21 23:04，VRChat 团队的工程师开始调查相关情况。
- 2024/7/20 23:21，我们开始收集被封的玩家的以下信息，尝试分析被封玩家的规律：
  - 使用加速器
  - 加速器区域
  - 登录验证邮件报告的登录地点
  - 加速器节点的网络出口 IP
  - 被封时间点
  - 被封之前的操作
  - 通过访问 [https://vrchat.com/cdn-cgi/trace](https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/gathering-information-for-troubleshooting-sites/#identify-the-cloudflare-data-center-serving-your-request) 获得的 Cloudflare trace 信息截图
- 2024/7/20 23:59，我们同步了一个被封玩家的 [https://vrchat.com/cdn-cgi/trace](https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/gathering-information-for-troubleshooting-sites/#identify-the-cloudflare-data-center-serving-your-request) 截图给 VRChat 团队的工程师。
- 2024/7/21 00:10，VRChat 团队的工程师回复已收到数据，正在继续调查。
  - ![同步被封玩家的 trace 信息截图的聊天记录](/blog/report-got-banned-after-using-proxy-in-vrchat/sync-trace-info-with-official.jpeg)
- 2024/7/21 00:32，我们发布了正式的公告[《近期请避免使用任何加速器登录 VRChat》](https://vrcd.org.cn/blogs/do-not-use-proxy-in-vrchat)，关于该公告的修改记录请见 [Git 提交记录](https://github.com/vrcd-community/website/commits/main/content/blogs/do-not-use-proxy-in-vrchat.md)
- 2024/7/21 01:03，玩家 Antibolla_v 在官方 Discord 服务器 [#user-support](https://discord.com/channels/189511567539306508/1138891887374237706) 频道发布了贴子：[account has been locked](https://discord.com/channels/189511567539306508/1264266474156199957)
- 2024/7/21 01:43，我们将收集到的统计数据同步给 VRChat 团队的工程师。
  - ![同步统计数据的聊天记录](/blog/report-got-banned-after-using-proxy-in-vrchat/sync-data-with-official.jpeg)
- 2024/7/21 02:09，VRChat 团队的工程师回复：正在手动解封被误封的账号。
  - ![VRChat 工程师的回复](/blog/report-got-banned-after-using-proxy-in-vrchat/official-unban-account.jpeg)
- 2024/7/21 03:04~03:05，VRChat 官方 X (Twitter) 回复：正在解封受影响的账号。相关推文请见 [#相关链接](#相关链接)
- 2024/7/21 03:12，我们收到 VRChat 社区技术支持人员的回复：VRChat 官方正在开始解禁使用 UU 加速器被误封的账号。
  - ![VRChat 社区技术支持人员的回复](/blog/do-not-use-proxy-in-vrchat/reply-from-support-community.png)
- 2024/7/21 16:48，事件基本结束（一段时间内没有收到新的被封报告）

## 统计数据表格

> - 由于隐私问题，我们不会公开调查问卷提交的 ID 和联系方式。
> - 空白数据为未收集到（我们前期是通过手动问询的方式收集的数据）。

| 加速器 | 节点区域   | 登录验证邮件内的登录地点 | IP                | 被封时间点         | Cloudflare 节点位置  | trace | 被封之前的操作                                 |
| ------ | ---------- | ------------------------ | ----------------- | ------------------ | -------------------- | ----- | ---------------------------------------------- |
| UU     | 日本       | 土耳其                   | `103.57.49.137`   | 2024/7/20 22:25:00 | `JP-NRT`（日本东京） |       |                                                |
| UU     | 日本       | 土耳其                   |                   |                    |                      |       |                                                |
| UU     | 日本       |                          | `185.220.238.167` |                    | `JP-NRT`（日本东京） |       |                                                |
| UU     | 日本       | 土耳其                   | `103.57.49.12`    | 2024/7/20 20:07 后 | `JP-NRT`（日本东京） |       |                                                |
| UU     | 日本       | 土耳其                   | `103.57.49.149`   | 2024/7/21 00:01:00 | `JP-NRT`（日本东京） |       |                                                |
| UU     | 日本       | 土耳其                   | `103.57.49.149`   | 2024/7/21 00:38:00 | `JP-NRT`（日本东京） |       |                                                |
| 梯子   | 香港       |                          |                   | 2024/7/20 21:30:00 | `HK-HKG`（香港）     |       |                                                |
| UU     | 日本       |                          | `103.139.110.51`  |                    | `JP-NRT`（日本东京） |       |                                                |
| UU     | 日本       | 土耳其                   | `103.101.220.194` | 2024/7/20 23:06:00 | `JP-NRT`（日本东京） |       | 在跟好友玩游戏地图，甚至玩完了才知道自己被封了 |
| UU     | 日本       | 土耳其                   | `103.57.49.12`    | 2024/7/20 21:03:00 | `JP-NRT`（日本东京） |       | 上传模型                                       |
| UU     | 日本       | 未显示                   | `103.139.110.51`  | 2024/7/21 00:08:00 | `JP-NRT`（日本东京） |       | 登录上线无法登录                               |
| UU     | 日本       | 土耳其                   |                   | 2024/7/21 00:54:00 |                      |       | 登录VRCX                                       |
| UU     | 日本       | 土耳其                   | `58.153.74.130`   | 2024/7/20 21:51:00 | `HK-HKG`（香港）     |       | 逛vket                                         |
| UU     | 日本       | 土耳其                   |                   | 2024/7/20 11:36:00 | `JP-???`             |       | 进去没法去其他地方，重新登陆之后被封           |
| UU     | 日本       | 土耳其                   |                   | 2024/7/21 00:00:00 | `JP-???`             |       | 网络卡顿                                       |
| UU     | 日本       | 土耳其                   | `103.57.49.97`    | 2024/7/20 09:21:00 | `JP-NRT`（日本东京） |       | 重新登陆                                       |
| UU     | 香港       | 土耳其                   | `156.245.2.172`   | 2024/7/21 00:40:00 | `HK-HKG`（香港）     |       | 一次登陆过后下线，再次登录就被封禁             |
| UU     | 日本、香港 | 土耳其                   | `139.162.89.205`  | 2024/7/21 02:00:00 | `JP-NRT`（日本东京） |       | 重新登录                                       |
| UU     | 日本       | 土耳其                   | `129.227.113.156` | 2024/7/21 01:47:00 | `JP-NRT`（日本东京） |       | 登录游戏就被封了                               |
| UU     | 日本       | 土耳其                   | `156.59.25.17`    | 2024/7/21 00:06:00 | `JP-NRT`（日本东京） |       | 重新登录                                       |
| UU     | 日本       | 土耳其                   | `103.139.111.133` | 2024/7/20 21:10:00 | `JP-NRT`（日本东京） |       | 在2024.07.20 21：10分左右 正常登录时被告知     |

### 以下数据可能有误

| 加速器 | 节点区域 | 登录验证邮件内的登录地点 | IP                 | 被封时间点         | Cloudflare 节点位置   | trace | 被封之前的操作 |
| ------ | -------- | ------------------------ | ------------------ | ------------------ | --------------------- | ----- | -------------- |
| UU     | 香港     | 土耳其                   | 103.101.220.31 (?) | 2024/7/21 01:30:00 | JP-NRT（日本东京）(?) |       | 上传模型       |

## 涉事节点的 IP & CIDR

### CIDR

- `103.57.49.0/16`（一共有 6 条数据的 IP 属于这个 CIDR）
  - `103.57.49.137`
  - `103.57.49.12`（被复用两次）
  - `103.57.49.149`（被复用两次）
  - `103.57.49.97`
- `103.139.110.0/23`（一共有 3 条数据的 IP 属于这个 CIDR）
  - `103.139.110.0/16`
    - `103.139.110.51`（被复用两次）
  - `103.139.111.0/16`
    - `103.139.111.133`
- `156.245.2.172`
- `185.220.238.167`
- `103.101.220.194`
- `58.153.74.130`
- `156.245.2.172`
- `139.162.89.205`
- `129.227.113.156`
- `156.59.25.17`

## 相关信息和截图

### 与官方工程师的聊天记录

#### 文字版

#### 原始截图

![官方工程师聊天记录截图 1](/blog/report-got-banned-after-using-proxy-in-vrchat/full-chat-0.png)
![官方工程师聊天记录截图 2](/blog/report-got-banned-after-using-proxy-in-vrchat/full-chat-1.jpeg)
![官方工程师聊天记录截图 3](/blog/report-got-banned-after-using-proxy-in-vrchat/full-chat-2.jpeg)
![官方工程师聊天记录截图 4](/blog/report-got-banned-after-using-proxy-in-vrchat/full-chat-3.png)

### VRChat 社区技术支持人员的回复

- ![VRChat 社区技术支持人员的回复](/blog/do-not-use-proxy-in-vrchat/reply-from-support-community.png)

## 参考资料

- [Cloudflare 文档：Gathering information for troubleshooting sites - Identify the Cloudflare data center serving your request](https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/gathering-information-for-troubleshooting-sites/#identify-the-cloudflare-data-center-serving-your-request)

## 相关链接

- [《近期请避免使用任何加速器登录 VRChat》](https://vrcd.org.cn/blogs/do-not-use-proxy-in-vrchat)
- [《近期请避免使用任何加速器登录 VRChat》的修改记录](https://github.com/vrcd-community/website/commits/main/content/blogs/do-not-use-proxy-in-vrchat.md)
- [有玩家在 VRChat 官方 X (Twitter) 下求助的讨论串](https://x.com/miku96843553/status/1814717464426783162)
- [另一位玩家在 VRChat 官方 X (Twitter) 下求助的讨论串](https://x.com/miaozesang233/status/1814733499250979276)
- [VRChat 技术支持人员的回复的消息链接（VRChat 官方 Discord 服务器）](https://discord.com/channels/189511567539306508/456092041643032586/1264298960638709821)
- [官方 Discord 服务器 #user-support 频道的贴子：account has been locked](https://discord.com/channels/189511567539306508/1264266474156199957)