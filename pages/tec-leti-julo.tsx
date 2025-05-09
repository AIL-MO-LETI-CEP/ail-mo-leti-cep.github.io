import Head from 'next/head';
import { PageTitle, PageDescription } from 'src/components/common';
import { ExternalLinkList } from 'src/components/common/ExternalLinkList';
import { PostOGP } from 'src/components/common/PostOGP';
import { externalLinkData } from 'src/data/linkdata/tec-leti-julo';
import usePageTitle from 'src/hooks/usePageTitle';

const Index = () => {
  usePageTitle('外部リンク');
  return (
    <div>
      <PostOGP
        title='外部リンク'
        type='article'
        url='https://ail-mo-leti-cep.github.io/tec-leti-julo'
        description='アイル共和国文化省およびその担当する事柄に関するリンクを紹介しています。'
      />
      <Head>
        <></>
      </Head>
      <main>
        <PageTitle>外部リンク</PageTitle>
        <PageDescription>
          アイル共和国文化省およびその担当する事柄に関するリンクを紹介しています。
          <br />
          メタ的な説明が含まれているため、ご注意ください。
        </PageDescription>
        <ExternalLinkList linkDataList={externalLinkData} />
      </main>
    </div>
  );
};

export default Index;
