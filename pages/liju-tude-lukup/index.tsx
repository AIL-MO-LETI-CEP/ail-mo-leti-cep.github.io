import Head from 'next/head';
import { PageTitle, PageDescription } from 'src/components/common';
import { PostOGP } from 'src/components/common/PostOGP';
import usePageTitle from 'src/hooks/usePageTitle';

const Index = () => {
  usePageTitle('言語講座');
  return (
    <div>
      <PostOGP
        title="言語講座"
        type="article"
        url="https://ail-mo-leti-cep.github.io/liju-tude-lukup"
        description="アイル共和国文化省が本国の公式HPで提供している『与言学処』を、こちらの広報処HPでも提供することになりました！"
      />
      <Head>
        <></>
      </Head>
      <main>
        <PageTitle>言語講座</PageTitle>
        <PageDescription>
          アイル共和国文化省が本国の公式HPで提供している『与言学処』を、こちらの広報処HPでも提供することになりました！
          <br />
          <br />
          <br />
          現在準備中です。今後の更新をお待ちください。
        </PageDescription>
      </main>
    </div>
  );
};

export default Index;
