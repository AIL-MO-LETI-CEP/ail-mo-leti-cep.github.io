import Head from 'next/head';
import { PageTitle, PageDescription } from 'src/components/common';
import { ExternalLinkList } from 'src/components/common/ExternalLinkList';
import { PostOGP } from 'src/components/common/PostOGP';
import {
  pmcpBooksLinkData,
  praigeBookLinkData,
  takanBookLinkData,
  bhaatBookLinkData,
  cetkaikBookLinkData,
  nincetkaikBookLinkData,
  otherBookLinkData,
} from 'src/data/linkdata/kante-kije';
import usePageTitle from 'src/hooks/usePageTitle';

const Index = () => {
  usePageTitle('文献紹介');
  return (
    <div>
      <PostOGP
        title="文献紹介"
        type="article"
        url="https://ail-mo-leti-cep.github.io/abelip/kante-kije"
        description="各種文献の読解ログや資料、および各種言語教材や遊戯の解説書などのリンクを紹介します。"
      />
      <Head>
        <></>
      </Head>

      <main>
        <PageTitle>文献紹介</PageTitle>
        <PageDescription>
          各種文献の読解ログや資料、および各種言語教材や遊戯の解説書などのリンクを紹介します。
        </PageDescription>

        <h2>言語教材</h2>
        <h3>東島通商語</h3>
        <ExternalLinkList linkDataList={pmcpBooksLinkData} />
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
