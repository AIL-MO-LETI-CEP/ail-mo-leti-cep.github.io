import Link from "next/link";
import Head from "next/head";
import { Title, Description } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";

const Index = () => {
  usePageTitle("文献紹介");
  return (
    <div>
      <Head>
        <PostOGP
          title="文献紹介"
          type="article"
          url="https://ail-mo-leti-cep.github.io/abelip/kante-kije"
          description="このページでは、各種文献の読解ログや資料、および各種言語教材や遊戯の解説書などのリンクを紹介しています。"
        />
      </Head>

      <main>
        <Title>文献紹介</Title>
        <Description>
          このページでは、各種文献の読解ログや資料、および各種言語教材や遊戯の解説書などのリンクを紹介しています。
        </Description>

        <h2>言語教材</h2>
        <h3>東島通商語</h3>
        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/1G-xhtlGl-TGrFH6kHixg5-LRZ6gBGifSe3NHLcFk8Ss">
              『東島通商語入門』
            </Link>
            <br />
            教科書。知られている文法は概ね記載されており、現状で最も詳しい文法書です。
          </li>
          <li>
            <Link href="http://jurliyuuri.com/json-reader">東島通商語辞書</Link>
            <br />
            「pmcf」ボタンを押すことで東島通商語の見出し語が読み込まれます。検索にはブラウザのページ内検索を使いましょう。
            <br />
            見出し語以外は全てリパライン語で書かれているため注意。
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/1hL2MVWOmaoP1KAvFw2TvHKDpn0I4TE8agSGwFW1Z748">
              『ペメセペルクップを学ぶ人のための書』
            </Link>
            <br />
            『東島通商語入門』のリパライン語訳。
          </li>
        </ul>

        <h3>パイグ語</h3>
        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/1tehvujt9R0b2FQOvlRGrm1NycwwM3MKsVcfP8tj9gXY">
              『日本机戦連盟員のためのパイグ語・東島通商語』
            </Link>
            <br />
            教科書。現状のパイグ語教材の中では最もよくまとまっており学習しやすいです。
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/1--lOlGkzQsd2aTX_NzAljkmQoouzhbU3wly48JJqHhc">
              『パイグ語入門』
            </Link>
            <br />
            教科書。練習問題を解く過程で文法を理解させる形式で、品詞についての記述があります。
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/1l06COO77uNCGpdvt3JS8lsjUdJquQv-msIdxItcjdik">
              『hut2 guk2 pek2 zep1 a nui2』
            </Link>
            <br />
            教科書。パイグ語のみを用いて記述されています。名詞節の最初は大文字になっています。
          </li>
          <li>
            <Link href="http://jurliyuuri.com/praige-zerp/dictionary/index.html">
              『牌言集書』
            </Link>
            <br />
            検索にはブラウザのページ内検索を使いましょう。
          </li>
          <li>
            <Link href="http://jurliyuuri.com/spoonfed_pekzep/">
              Spoonfed Pekzep
            </Link>
            <br />
            日英中牌の4言語コーパスカード。
          </li>
        </ul>

        <h3>タカン語</h3>
        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/177W7j0XBNpRmlJ3UKcf-oWTIIqwZRYWJxkPL_VaH-1E">
              『タカン語概論』
            </Link>
          </li>
          <li>
            <Link href="http://jurliyuuri.com/json-reader">タカン語辞書</Link>
            <br />
            「takan」ボタンを押すことでタカン語の見出し語が読み込まれます。検索にはブラウザのページ内検索を使いましょう。
          </li>
        </ul>

        <h3>バート語</h3>
        <ul>
          <li>
            <Link href="http://jurliyuuri.com/bhaataan/index.html">
              バート語リポジトリ
            </Link>
          </li>
          <li>
            <Link href="http://jurliyuuri.com/bhaataan/grammar.html">
              『バート語文法』
            </Link>
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/1jKy_4ZLQD-3OIVOl4dtY2gcvH0fYOr40jwfgaPQ53Xo">
              『二百題で学ぶバート語基礎』
            </Link>
            <br />
          </li>
        </ul>
        <hr />
        <h2>伝統遊戯</h2>
        <h3>机戦</h3>
        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/1yJLvWS_bQC3_EDToE5jUp0oDmNB_U6FRadsm0d97Cis">
              『アイル統一セットカイクの書（藍国統一机戦書）を読む』
            </Link>
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/17_cfVKLX5tGPYYRp5DUjnc8LEBOCs3uwX7t9QhO0nCY">
              『はじめての人のためのパイグ将棋』
            </Link>
          </li>
          <li>
            <Link href="https://jurliyuuri.org/2021/12/16/cerke_opening/">
              机戦オープニング解説（定弓 対 定弓）
            </Link>
          </li>
          <li>
            <Link href="https://jurliyuuri.org/2023/02/27/y1dau2mi2tam2/">
              机戦オープニング解説（定虎引皇 対 定弓）
            </Link>
            <br />
          </li>
        </ul>
        <h3>紙机戦</h3>
        <ul>
          <li>
            <Link href="https://yasusho.github.io/lanerme_traditional_games/%E3%83%AB%E3%83%BC%E3%83%AB">
              紙机戦 用語&ルール集
            </Link>
            <br />
          </li>
        </ul>
        <hr />
        <h2>その他資料</h2>
        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/1zEG-stsdZBqE_eoY6ZPCrJvm7zlBZAKd3rXuLlsrq3Q/">
              『METICA と JOL ―― 東島通商語についての諸考察』
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=lETRnHmJgAQ">
              『パイグ語検定 リスニングテスト音声』
            </Link>
          </li>
          <li>
            <Link href="https://docs.google.com/presentation/d/1RMkXWwkNmT4kshQnLbrd0TBJ5mTIZZuW_zkbbPaC8m4/edit">
              『タカン語あれこれ』
            </Link>
            <br />
            タカン語の歴史的な表記法の遷移や音韻変化などを簡単に解説してくれるスライド。
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Index;
