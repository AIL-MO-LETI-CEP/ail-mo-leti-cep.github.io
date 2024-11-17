import Head from 'next/head';
import Link from 'next/link';
import { PageTitle, PageDescription } from 'src/components/common';
import { PostOGP } from 'src/components/common/PostOGP';
import usePageTitle from 'src/hooks/usePageTitle';

const Index = () => {
  usePageTitle('燐帝字母');
  return (
    <div>
      <PostOGP
        title='燐帝字母'
        type='article'
        url='https://ail-mo-leti-cep.github.io/lin-leti-lujot'
        description='アイル共和国をはじめとしてファイクレオネ世界で広く使われる文字である燐帝字母について説明しています。'
      />
      <Head>
        <></>
      </Head>
      <main>
        <PageTitle>燐帝字母</PageTitle>
        <PageDescription>
          アイル共和国をはじめとしてファイクレオネ世界で広く使われる文字である燐帝字母について説明しています。
        </PageDescription>
        <ul>
          <li>
            <Link href='https://yasusho.github.io/linmarn_table_pdf/84%E5%AD%97%E3%81%A7%E3%82%89%E3%81%8F%E3%82%89%E3%81%8F%E7%87%90%E5%AD%97%E5%85%A5%E9%96%80.pdf'>
              『84字でらくらく燐字入門』（PDF）
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Index;
