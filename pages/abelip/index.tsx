import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <title>各種展示 | AIL MO LETI CEP</title>
      </Head>
      <Header />

      <main>
        <div>
          <Title>各種展示</Title>
          <Description>
            このページでは、文化省広報処のサイトで行われている展示ページを提供する他、過去に各所で行われた展示のアーカイブページを提供しています。
          </Description>
        </div>
        <div>
          <h3>常設展</h3>
          <ul>
            <li>
              <Link href="abelip/laneme-penulleti-lukup-lukup">
                『羅古論』展示
              </Link>
            </li>
          </ul>

          <h3>過去のアーカイブ</h3>
          <ul>
            <li>
              <Link href="abelip/pemecepe-poster">ポスター展示</Link>
            </li>
            <li>
              <Link href="abelip/nf2022">京都大学11月祭特設サイト</Link>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
