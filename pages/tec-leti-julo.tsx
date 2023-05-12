import Head from "next/head";
import { Title, Description } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";
import { ExternalLinkList } from "src/components/common/ExternalLinkList";
import { externalLinkData } from "public/linkdata/tec-leti-julo";

const Index = () => {
  usePageTitle("外部リンク");
  return (
    <div>
      <Head>
        <PostOGP
          title="外部リンク"
          type="article"
          url="https://ail-mo-leti-cep.github.io/tec-leti-julo"
          description="アイル共和国文化省およびその担当する事柄に関するリンクを紹介しています。"
        />
      </Head>
      <main>
        <Title>外部リンク</Title>
        <Description>
          アイル共和国文化省およびその担当する事柄に関するリンクを紹介しています。
          <br />
          メタ的な説明が含まれているため、ご注意ください。
        </Description>
        <ExternalLinkList linkDataList={externalLinkData} />
      </main>
    </div>
  );
};

export default Index;
