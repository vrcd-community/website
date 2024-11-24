---
author: [ "Misaka-L", "SKPlol" ]
title: "Oculus 服务向系统盘符写入大量文件导致硬盘爆满的正确解决方案"
description: "问题源头与正确解决方案"
category: "紧急通知"
date: 1732432374000
---

## 请不要这么干

近期有未经充分核实的传言称：“Oculus Link 会在系统盘根目录下写入大量名称为 `fba_ads_(数字)_(UUID).json` 的文件，可以在 cmd 使用 `del /a /f /s /q "*.json"` 进行删除”。

**请千万不要这么干**  
**请千万不要这么干**  
**请千万不要这么干**  

`del /a /f /s /q "*.json"` 是一个 cmd 命令，其意义为：不需要提醒我，删除**任何在 C 盘根目录及其子文件夹下**只读或可读写且**后缀名为 `.json`** 的文件。

## 问题源头？

我们已定位到这是 Oculus 软件的 Windows 服务 OVRService 和 OVRLibraryService 导致的问题，其由于未知设置产生大量此类 `.json` 文件。

相关外网案例见下：
- https://www.reddit.com/r/techsupport/comments/1g837h3/had_literally_over_a_million_of_these_files_fba
- https://www.reddit.com/r/oculus/comments/10otfhz/oculus_spamming_my_c_drive_with_jsons

## 为什么我不应该执行传言里的命令？

首先它可能会严重损害您的电脑，因为 json 是一种被**很多应用程序（包括操作系统的）使用**的常用的数据格式。直接删除所有 `.json` 文件轻则**操作系统或应用损坏**，重则**丢失数据**。

其次，在没有其他人能给出您有关该命令的具体含义，以及您也不明白该命令的含义时，您**应当拒绝执行任何声称会帮您解决问题的陌生命令**

命令行是为有较高水平的电脑爱好者和从业人员准备的，不会过多考虑您的误操作可能。**命令行不是玩具。**

## 有解决方案吗？

目前我们编写了一个 PowerShell 命令，允许你批量删除这些文件。

1. 按下 `Win`+`X` 键，在弹出的菜单选择 `终端管理员` 或 `Windows PowerShell（管理员）`。
2. 在弹出的窗口输入以下命令查看您需要删除的文件列表，请您确认是否有误删文件：
  ```powershell
  Get-ChildItem (Get-WmiObject Win32_OperatingSystem).SystemDrive | Where{$_.Name -Match "fba_ads_\d+_[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}.json"}
  ```
3. 然后执行以下命令，删除列出的文件：
  ```powershell
  Get-ChildItem (Get-WmiObject Win32_OperatingSystem).SystemDrive | Where{$_.Name -Match "fba_ads_\d+_[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}.json"} | Remove-Item
  ```

请谨慎执行，每一个命令产生输出时，如您不明白输出的信息是什么，请及时在社区里反馈。

### 这个解决方案做了什么事？

1. 使用 `(Get-WmiObject Win32_OperatingSystem).SystemDrive` 这一 API 获取您的系统安装盘符。
2. 使用 `Get-ChildItem` 命令获取该目录下的文件列表。
3. 使用“管道”将该文件列表传递给 `Where` 表达式，并使用 `fba_ads_\d+_[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}.json` 这一正则表达式匹配文件。
   - 该正则表达式会匹配以 `fba_ads_` 开头 + 数字 + UUID + `.json` 结尾的文件。
4. 在最后一条命令，会将筛选后的文件列表传递给 `Remove-Item` 命令，删除这些文件。
