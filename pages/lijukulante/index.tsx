import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <title>教材紹介 | AIL MO LETI CEP</title>
      </Head>
      <Header />

      <main>
        <Title>教材紹介</Title>
        <Description>
          このページでは、各種言語の教材やアイル共和国の伝統遊戯の解説書などのリンクを紹介しています。
        </Description>

        <h3>語学書</h3>
        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/1G-xhtlGl-TGrFH6kHixg5-LRZ6gBGifSe3NHLcFk8Ss">
              『東島通商語入門』
            </Link>
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/1--lOlGkzQsd2aTX_NzAljkmQoouzhbU3wly48JJqHhc">
              『パイグ語入門』
            </Link>
          </li>
          <li>
            <Link href="https://docs.google.com/document/d/177W7j0XBNpRmlJ3UKcf-oWTIIqwZRYWJxkPL_VaH-1E">
              『タカン語概論』
            </Link>
          </li>
        </ul>

        <h3>伝統遊戯</h3>
        <ul>
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
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
