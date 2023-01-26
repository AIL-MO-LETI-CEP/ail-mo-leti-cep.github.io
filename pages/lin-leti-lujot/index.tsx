import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <title>燐帝字母 | AIL MO LETI CEP</title>
      </Head>
      <Header />

      <main>
        <Title>燐帝字母</Title>
        <Description>
          このページでは、アイル共和国をはじめとしてファイクレオネ世界で広く使われる文字である燐帝字母について説明しています。
        </Description>

        <ul>
          <li>
            <Link href="https://raw.githubusercontent.com/AIL-MO-LETI-CEP/ail-mo-leti-cep.github.io/master/lijuit_kije.pdf">
              燐字まとめ入門（PDF）
            </Link>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
