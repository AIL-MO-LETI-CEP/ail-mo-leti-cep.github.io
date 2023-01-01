# 開発に参加するには
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

3. 問題なければpushしてPull Requestを作成。
- 別branchへのpushを避けるために`git push origin HEAD`でのpushを推奨。
- PRが出されるとCIが回る。
    - CIがfailedだった場合は手元で`yarn build`して原因を探し、fixを追加でcommit & pushすればよい。

4. PRをmasterにmergeし、CIにGitHub Pagesへdeployしてもらう。

# 記事を書くには
**記事をdeployできる仕組みができたら書きます**