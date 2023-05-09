import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <title>言語講座 | AIL MO LETI CEP</title>
      </Head>
      <Header />

      <Title>言語講座</Title>
      <Description>
        アイル共和国文化省が本国の公式HPで提供している『与言学処』を、こちらの広報処HPでも提供することになりました！
        <br />
        <br />
        <br />
        現在準備中です。今後の更新をお待ちください。
      </Description>

      <Footer />
    </div>
  );
};

export default Index;
