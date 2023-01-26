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
            このページでは、過去に行われた展示のアーカイブを提供しています。
          </Description>
        </div>
        <div>
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
