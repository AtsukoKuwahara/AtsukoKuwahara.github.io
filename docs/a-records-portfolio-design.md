# A'S RECORDS Portfolio Design

## Goal

Portfolio 上で A'S RECORDS を現行の代表作として扱い、Rails 学習を通じて単体 app から複数 app の役割分担と導線設計まで進めたことを自然に伝える。

## Positioning

- `A'S RECORDS Rails Suite` を featured project として扱う
- 旧 `Flask / MongoDB` 版は削除せず、初期プロトタイプとして通常カードに残す
- portfolio 上では「同じ題材の重複」ではなく「設計と実装の進化」として見せる

## Story To Communicate

1. A'S RECORDS はもともと Flask / MongoDB で作成した record store 題材だった
2. Ruby on Rails 学習を通じて、単一 app をそのまま置き換えるのではなく構成自体を見直した
3. 現在は `website`, `store`, `community / events` の 3 app で役割分担し、相互導線を持つ構成になっている
4. `website` を hub として、プロダクト案内と回遊の起点を担わせている

## Information Architecture

### Projects Page

- 上段に `Featured Project` セクションを追加する
- featured card は通常カードより大きく、横長レイアウトで表示する
- featured card では以下を見せる
  - タイトル
  - 2-3 行の要約
  - 役割タグ
  - `View Details` ボタン
  - `GitHub Repos` ボタン
- 下段に `More Projects` セクションを置き、既存カード群を表示する

### A'S RECORDS Detail Page

以下の順で構成する。

1. Hero
   - project title
   - one-line summary
   - 3 repo links
   - stack / role tags
2. Project Overview
   - Rails 学習の中で再構成した背景
   - 3 app へ分割した理由
3. Three-App System
   - `website`
   - `store`
   - `community / events`
4. Navigation Flow
   - `website -> store`
   - `website -> community / events`
   - footer から `website` へ戻る導線
5. Screenshots
   - 全体イメージ
   - app ごとの補助画像
6. Previous Iteration
   - Flask / MongoDB 版は以前のプロトタイプとして短く触れる
   - Local LLM trivia のような機能差もここで説明する

## Visual Direction

- 現在の retro / warm / music-oriented tone は維持する
- ただし 2 年前の静的な印象から、奥行きと動きのある UI へ更新する
- featured card は通常カードより明確に別格に見えるようにする

## Animation Direction

- セクションの fade-up
- project card の軽い stagger reveal
- card hover で小さく持ち上がる動き
- featured image / content の soft entrance
- ボタン hover の質感改善

アニメーションは主役ではなく、情報の階層を補助する用途に留める。

## Content Rules

- README 的な実装メモではなく、portfolio に必要な説明に絞る
- 主語は「A'S RECORDS 全体の設計」とする
- 技術名の列挙より、役割分担と導線設計を先に伝える
- 旧 Flask 版は主役にせず、進化の前段として位置づける
