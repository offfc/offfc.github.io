---
sidebar_position: 1
enableComments: true
displayed_sidebar: mainSidebar
id: shortHandbook
title: 精简版规则
---

<link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css"></link>

# <Highlight color="#198dff">OFFC cirno</Highlight>·Bingo 玩法 <FntColor color="#198dff">精简版</FntColor>

:::info

本精简版玩法页面更新于 2024 年 8 月 13 日。

你可以在[**腾讯文档**](https://docs.qq.com/doc/DVHZoWWl3Rkt5aldD)阅读最新版本。

若要查看完整参考手册内容，请[**移步至此**](/docs/handbook)。

:::

## 一、图池

OFFC 中所有轮次的图池均以一个 4x4 的棋盘为载体，棋盘上有 16 个格子空位。除此之外，还有独立于棋盘的 4 个 EX 格子空位。

在比赛每轮中，有 16 张图会随机生成在棋盘的 16 个格子里，形成一整个棋盘布局。另有 4 张图按照特定的排列顺序置于 4 个 EX 格子中。图池与棋盘会在 Showcase 中同时展示。每轮图池共计 20 张图。

同一轮次 (QF、SF、F、GF) 中所有场次的比赛使用同一个图池与生成好的棋盘。Bracket Reset 使用与 GF 相同的棋盘。

:::info FreeMod 规则

- 一人选择 HD 或 EZ+HD。
- 一人选择 HR 或 HD+HR。
- 一人自由选择 HD、HR 或 EZ 及其组合搭配。
- 一人可选择 NoMod，也可自由选择 HD、HR、EZ 及其组合搭配。

同一个玩家只能同时承担上述四人中的**一个**位置。

:::

## 二、比赛流程

### 2-1 概述

游戏整体的感觉，就是双方轮流在棋盘上选图、比拼，然后染上获胜方颜色。像五子棋一样，谁先完成**横竖斜任一方向**的四连同色谁先赢。

在比赛进行中，为了减少混乱，建议 Pick、Ban、Trap 等操作都由**队长完成**，并以队长发送的消息为准。

:::warning 注意

为缓解选手压力，比赛时请双方务必**留意并严格遵从**裁判的指示。

:::

对阵方为<Highlight color="#f86264">**红队**</Highlight>与<Highlight color="#198dff">**蓝队**</Highlight>，队伍颜色分别为<FntColor color="#f86264">**红色**</FntColor>与<FntColor color="#198dff">**蓝色**</FntColor>。

### 2-2 流程

比赛胜利的条件：当出现<Highlight color="#198dff">**任意一条横、竖、斜的四连同色**</Highlight>时，该颜色的对应方获得比赛胜利。

1. 双方 **Roll 点**。点数大的一方决定先 Ban 或后 Ban。
2. <Highlight color="#27efcb"><i class="fa fa-lock"></i> **Protect**</Highlight> 阶段。后 Ban 方优先保图，双方各 1 个保图位置。
3. <Highlight color="#232323"><i class="fa fa-ban"></i> **Ban**</Highlight> 阶段。先 Ban 方优先 Ban 图，被 Ban 的图会被染黑。不可 Ban 保图。
4. <Highlight color="#198dff"><i class="fa fa-check"></i> **Pick**</Highlight> 阶段。先 Ban 方优先 Pick 图。不可 Pick 黑色的 Ban 图。
   - 棋盘里的一张图打完之后，用获胜方的队伍颜色，对该图所在的格子染色。
5. <Highlight color="#7d75ee"><i class="fa fa-exclamation-circle"></i> **Trap**</Highlight> 阶段。后 Pick方二选结束后（即打了 4 把之后），双方队长在 bancho 中私聊裁判在任一未染色的格子上布置陷阱。

:::info Trap 阶段说明

队长需要指明在哪个格子埋陷阱、埋什么陷阱以及陷阱生效的对象。

例如，队长向裁判发送陷阱决定时，可以说：

- “在 NM3 上用时空之门”
- “在 HD2 上用大陆漂移，交换 DT1”

只有**对手 Pick** 了自己陷阱所在的格子，陷阱才会生效。在陷阱生效前，裁判与导播不会透露陷阱内容，仅在陷阱生效时公布。

:::

#### 2-3 EX 阶段

如果场上的颜色布局情况导致游戏无论如何无法取胜，则进入<Highlight color="#7d75ee"><i class="fa fa-bolt" style={{color: '#ffa500'}}></i> **EX 阶段**</Highlight>，启用 EX 图池。双方强制按顺序比拼 EX 图。

获胜方可将一个对手队伍颜色的格子或黑色格子染成己方队伍的颜色。对手的保图不可被 EX 染色。

EX 图池的选择顺序是**保留**的。这就意味着，多次进入 EX 局面会按照**上次进入 EX 的顺序**依次往下选出 EX 图。

本局比赛是否有队伍获胜、及是否进入 EX 阶段，会由定制 Tourney 比赛端自动判断，并由裁判实时在 bancho 聊天中通知。

选手要做的和绝大多比赛类似，就是<Highlight color="#198dff">**打图**</Highlight>。OFFC 只是以下棋的形式对 BP 提出了新的要求，但并不影响双方选图比拼实力。

:::info 陷阱内容

1. <Highlight color="#87ceeb"><i class="fa fa-clock-o"></i> **时空之门**</Highlight>：陷阱触发时，该小局比赛暂停，**暂时**视为放置陷阱方赢得此小局，对格子进行染色并结算。若任意一方连成一线，则游戏结束；若形成 EX 局面，则进入 EX 阶段。上述结算完成后，格子变回未染色情况，陷阱失效，该小局比赛继续进行，仿佛触发陷阱方刚刚选择此图一般。
   - 特别说明：若染色后进入 EX 阶段，则双方须先打完 EX 阶段，待比赛**回到常规阶段后**，才能继续刚才暂停的小局。
   - 示例：NM2 陷阱触发 - NM2 染色 - EX 阶段开始 - NM2 变回无色 - EX 阶段结束 - NM2 比赛 - 根据比赛结果对 NM2 染色 - 下一个小局
2. <Highlight color="#ffa500"><i class="fa fa-exchange"></i> **大陆漂移**</Highlight>：本小局结束后，先对此格子染色，不进行最终结算和 EX 结算，将此格子与另一个提前选择的格子进行交换（连带着格子上的颜色和陷阱），随后再进行结算。
   - 布置陷阱方应提前告知裁判要交换的格子对象。
   - 要交换的格子对象不可以选择被 Ban 的黑色格子和被保护的格子。
   - 若该陷阱导致双方同时获胜，则以下一张 EX 图定胜负。

:::
