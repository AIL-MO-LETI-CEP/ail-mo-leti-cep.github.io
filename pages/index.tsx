import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <title>AIL MO LETI CEP</title>
      </Head>
      <Header />

      <main>
        <Description>アイル共和国へようこそ！</Description>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
