# A'S RECORDS Portfolio Implementation Plan

## Scope

- `Projects` ページに featured project セクションを追加する
- `A'S RECORDS Rails Suite` の詳細ページを追加する
- 旧 `Flask / MongoDB` 版カードの位置づけを整理する
- projects ページ全体の立体感とアニメーションを改善する
- 可能な範囲で build / test を更新して確認する

## Deliverables

1. Featured レイアウトを含む `Projects` ページ
2. A'S RECORDS 詳細ページ
3. A'S RECORDS 用の文言整理
4. 既存カード群の整理
5. 確認結果メモ

## Implementation Steps

1. `docs/` に設計書・計画書・チェックリストを追加する
2. A'S RECORDS featured section の文言と CTA を実装する
3. 詳細ページ用の route と component を追加する
4. detail page に 3 app の役割、導線、repo links を実装する
5. projects page のカードレイアウトと animation を改善する
6. 旧 Flask 版カードのタイトルと説明を更新する
7. 必要最低限の test を現行 UI に合わせて修正する
8. build と test を実行して確認する
9. commit / push 前にユーザー確認で停止する

## Assumptions

- 3 app の repo URL は公開済み、または portfolio に掲載できる状態である
- 現時点では screenshots は既存 asset をベースに構成し、必要に応じて後で差し替える
- CI の状態はこの turn では未確認の可能性があるため、ローカル確認と分けて報告する

## Out Of Scope For This Pass

- 全ページの全面リデザイン
- 他 project すべてへの detail page 追加
- 動画や外部埋め込み UI の大幅刷新
- design system の全面再編
