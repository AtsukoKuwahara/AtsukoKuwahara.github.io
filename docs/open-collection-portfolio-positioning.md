# Open Collection iOS Portfolio Positioning

## Goal

`Open Collection iOS` を Selected Works の featured case study として維持しながら、現行の `v1` を主役に据えたまま `v2` と `v3` の流れを軽く見せ、product judgment と iteration が伝わる構成に整える。

この project は API sample の説明ではなく、実際に成立している iOS product として見せる。

## Current Implementation Status

2026-04-08 時点で、`/projects/open-collection-ios` は以下の方針で更新済み。

- hero を `v3` の shelves / shelf detail / shelf viewer collage に変更
- 本文構成を `Product Direction`, `Core Experience`, `Iteration Across Releases`, `Product And Technical Decisions`, `Outcome` に再編
- `v1` を main case study として維持
- `v2` と `v3` を軽い evolution story として追加
- portfolio 側に `v2 / v3` screenshots を追加

## Recommended Positioning

- featured project の主役は `v1` のまま維持する
- `v2` は guided discovery の exploration と learning として扱う
- `v3` は Collection を personal curation に進めた strong follow-up として扱う
- `v1 / v2 / v3` を同格の 3 release として並列に見せすぎない
- message は「機能量」より「何を判断し、何を絞り、何を強めたか」に置く

## Reading Of Current Page

現状の `/projects/open-collection-ios` は、以下の点がすでに強い。

- `v1` を中心にした calm / artwork-first な product tone
- cross-museum browsing の価値がすぐに分かる
- Discover / Search / Detail / Collection の基本導線が見える
- source differences や search relevance に触れていて、技術的にも真面目

一方で、以下は改善余地がある。

- 現在は「よくできた sample」に寄って見えやすく、product judgment の強さがやや薄い
- `v2` と `v3` の蓄積がページ内に出ていない
- section の重心が feature listing に近く、case study としての判断軸が弱い

## Recommended Page Structure

1. Hero
2. Product Direction
3. Core Experience
4. Iteration Across Releases
5. Product And Technical Decisions
6. Outcome

この 6 section で十分で、長い release history にはしない。

## Hero Direction

`v1` を strongest baseline として見せる。

伝えるべき要素:

- calm cross-museum browsing
- artwork-first viewing
- personal collection behavior
- SwiftUI implementation

Recommended hero summary:

> Open Collection iOS is a SwiftUI app for browsing artworks across the Art Institute of Chicago and the Cleveland Museum of Art through a calm, artwork-first interface.

Recommended supporting paragraph:

> I built the project as a real product rather than a museum API sample, focusing on coherent discovery, strong detail viewing, and a personal collection flow that feels worth returning to.

Recommended role line:

> Role: concept, product direction, UI/UX, information architecture, SwiftUI implementation, and iteration.

## Product Direction

この section では `not just an API sample` を繰り返すのではなく、何を作ろうとしたかを短く定義する。

Recommended copy:

> The goal was to make cross-museum browsing feel quiet, coherent, and trustworthy on iPhone. Instead of exposing raw source data, I shaped the app around a clearer product direction: focused discovery, artwork-first detail views, and a local collection space for saving and revisiting works.

## Core Experience

ここは現在の screenshot 構成を活かしつつ、`v1` の完成度を見せる中心セクションにする。

Recommended screen grouping:

- Discover
- Search
- Artwork Detail
- Full-Screen Viewer
- Collection

Recommended intro:

> The baseline release was designed to work as a complete product: browse across museums, search by artist or title, move into richer artwork detail, and keep a personal collection locally on device.

## Iteration Across Releases

この section を新設する。長文ではなく 3 カード程度に留める。

### v1

Label:

`V1 / Baseline Product`

Recommended copy:

> V1 established the strongest baseline for the project: cross-museum discovery, search, artwork detail, local saving, tagging, filtering, and full-screen viewing in one coherent flow.

Short comparison caption:

> The version that proved the product worked.

### v2

Label:

`V2 / Guided Discovery`

Recommended copy:

> V2 explored guided discovery through themed entry points and tighter featured ranking. Its value was not simply adding more UI, but learning that cross-museum discovery quality depends on source-aware modeling and curation boundaries.

Short comparison caption:

> An exploration that sharpened product judgment.

### v3

Label:

`V3 / Shelf-Based Collection`

Recommended copy:

> V3 extended Collection from a saved list into a personal curation space through named shelves, shelf detail, and a shelf-wide viewer. It shows a stronger product step forward because it increased usefulness without adding unnecessary complexity.

Short comparison caption:

> The strongest follow-up to the baseline release.

## Product And Technical Decisions

この section は challenge list よりも「decisions」に寄せる。

Recommended blocks:

### Source-aware modeling

> The museum APIs were not symmetrical, so the app uses shared UI-facing models while keeping source-specific handling inside each integration path.

### Search relevance over raw API breadth

> Museum search endpoints can behave like broad metadata search, so I tuned the app around artist and title relevance instead of treating every source hit as equally useful.

### AIC image handling

> The Art Institute of Chicago required custom image handling to keep the visual experience reliable inside the same UI system.

### Collection depth with restrained scope

> I avoided adding complexity for show. Tags stayed lightweight, and shelves became the stronger grouping model only when they clearly improved usability.

## Outcome

Recommended copy:

> Open Collection iOS shows how I carry a project across concept, product direction, interface design, implementation, and iteration. It is a portfolio case study, but its value comes from behaving like a real product first.

## What To Avoid

- `v1 / v2 / v3` の feature を全部列挙する
- `v2` を主役級に長く説明する
- API difference の細部を長文で書く
- `portfolio project` であることを強調しすぎる
- 「何を作ったか」だけで終わり、「なぜその判断をしたか」が抜けること

## Suggested English Snippets

### Short Summary

> Open Collection iOS is a SwiftUI app for browsing artworks across two museum collections through a calm, artwork-first interface, with local saving, filtering, and personal curation tools.

### Medium Summary

> Open Collection iOS is a cross-museum art browsing app built in SwiftUI. I designed it as a real product rather than a raw API sample, with focused discovery, strong artwork detail views, local persistence, and a collection flow that evolved from simple saving into more expressive personal curation.

### Case Study Intro

> Open Collection iOS is a portfolio project built to stand as a real iOS product. The app brings together the Art Institute of Chicago and the Cleveland Museum of Art in a browsing experience centered on calm discovery, artwork-first viewing, and local personal collection tools.
>
> The project was developed across multiple releases, but the strongest baseline remains v1: a coherent MVP with cross-museum browsing, search, detail, saving, tagging, filtering, and full-screen viewing. Later releases helped clarify the product further. V2 explored guided discovery and exposed the trust limits of cross-museum curation, while v3 strengthened Collection through shelf-based grouping and personal organization.
>
> The result is a case study that shows both product thinking and engineering discipline: source-aware data modeling, search relevance tuning, custom image handling, local persistence, and iterative scope decisions that prioritize usability over feature count.

## Recommended Next Implementation

If the page is rewritten, keep `v1` screenshots as the visual core and add one compact `Iteration Across Releases` section between the core screens and technical decisions.
