import Head from "next/head";
import { Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <meta property="og:title" content="AIL MO LETI CEP" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ail-mo-leti-cep.github.io/" />
        <meta
          property="og:description"
          content="アイル共和国文化省の公式ホームページです。"
        />
      </Head>
      <main>
        <Description>アイル共和国へようこそ！</Description>
      </main>
    </div>
  );
};

export default Index;
