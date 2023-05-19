## 開発に参加するには
1. かならずtopic branchを切って作業する。
- checkoutを忘れないために`git checkout -b [branch名]`で切ることを推奨。
- branch名は`[type]/[name]`にする。
    - issueの解決のためのbranch名は`wip[issue number]/[topic名]`のようにすること。
    - 例：`wip12/improve-image-load`, `page/ail-tour-map`

2. commitする。
- commit messageは[Conventional Commit](https://www.conventionalcommits.org/ja/v1.0.0/)に従う。
    - issueが解決したcommitでは`#[issue number]`を含めること。
        - 例：`fix: fix broken link (#18)`, `feat: add page-generator (#10)`
    - commit typeのうち本レポジトリで使うものを以下にまとめる。

    | type | 用途 |
    | :--- | :--- |
    | fix  | 既存のコードにおけるバグや不具合の改善 |
    | feat | 既存のコードにない機能の追加 |
    | refactor | 既存のコードの編集のうち、fixでもfeatでもないもの |
    | patch | 既存の記事などへの追記のうち、fixでないもの |
    | chore | 開発環境やライブラリなどのその他事務的なもの |
    | docs | （開発用の）ドキュメンテーション |
    | pages | （記事等の）ドキュメンテーション |

- commitすることでGit hooksによってpre-commitが回り、lintがかかった状態のファイルがcommitされる。
  - ちなみにVSCodeのSource Control機能でのcommitだとなぜかhooksに引っかからずfailするので、`ctrl+J`からcommitすること。
    - 変更のstageとかは問題ないので使って大丈夫。あくまで`git commit`をCLIからやる必要があるらしい。

3. 問題なければpushしてPull Requestを作成。
- 別branchへのpushを避けるために`git push origin HEAD`でのpushを推奨。
- PRが出されるとCIが回る。
    - ~~CIがfailedだった場合は手元で`yarn build`して原因を探し、fixを追加でcommit & pushすればよい。~~
    - 手元で`yarn build`して通るのを確認してからpushする方が当然望ましい。

4. PRをmasterにmergeし、CIにGitHub Pagesへdeployしてもらう。

## 記事を書くには
### 広報処近況ブログの書き方
基本的な流れは[開発に参加するには](#開発に参加するには)と同じ。
- 記事はmarkdownでの記述を基本とし、内部ではHTMLでの記述を認めている。
- markdownファイルは`_posts`フォルダに置くこと。

### 羅古論へのデータの足し方
`src/data/lanerme-folklore.ts`の配列をいじると`pages/abelip/lanerme-penulleti-lukup-lukup/[pid].tsx`でいい感じにページが吐かれる。
