import Head from "next/head";
import { Title, Description } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";
import { ExternalLinkList } from "src/components/common/ExternalLinkList";
import {
  pmcfBooksLinkData,
  praigeBookLinkData,
  takanBookLinkData,
  bhaatBookLinkData,
  cetkaikBookLinkData,
  nincetkaikBookLinkData,
  otherBookLinkData,
} from "public/linkdata/kante-kije";

const Index = () => {
  usePageTitle("文献紹介");
  return (
    <div>
      <Head>
        <PostOGP
          title="文献紹介"
          type="article"
          url="https://ail-mo-leti-cep.github.io/abelip/kante-kije"
          description="各種文献の読解ログや資料、および各種言語教材や遊戯の解説書などのリンクを紹介します。"
        />
      </Head>

      <main>
        <Title>文献紹介</Title>
        <Description>
          各種文献の読解ログや資料、および各種言語教材や遊戯の解説書などのリンクを紹介します。
        </Description>

        <h2>言語教材</h2>
        <h3>東島通商語</h3>
        <ExternalLinkList linkDataList={pmcfBooksLinkData} />
        <h3>パイグ語</h3>
        <ExternalLinkList linkDataList={praigeBookLinkData} />
        <h3>タカン語</h3>
        <ExternalLinkList linkDataList={takanBookLinkData} />
        <h3>バート語</h3>
        <ExternalLinkList linkDataList={bhaatBookLinkData} />
        <hr />
        <h2>伝統遊戯</h2>
        <h3>机戦</h3>
        <ExternalLinkList linkDataList={cetkaikBookLinkData} />
        <h3>紙机戦</h3>
        <ExternalLinkList linkDataList={nincetkaikBookLinkData} />
        <hr />
        <h2>その他資料</h2>
        <ExternalLinkList linkDataList={otherBookLinkData} />
      </main>
    </div>
  );
};

export default Index;
