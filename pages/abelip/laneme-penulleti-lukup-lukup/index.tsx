import Head from 'next/head';
import Link from 'next/link';
import { PageTitle, PageDescription } from 'src/components/common';
import { PostOGP } from 'src/components/common/PostOGP';
import {
  lanermeFolkloreData,
  lanermeFolkloreTitlePMCF,
} from 'src/data/lanerme-folklore';
import usePageTitle from 'src/hooks/usePageTitle';

const Index = () => {
  usePageTitle('『羅古論』展示');
  return (
    <div>
      <PostOGP
        title="『羅古論』展示"
        type="article"
        url="https://ail-mo-leti-cep.github.io/abelip/laneme-penulleti-lukup-lukup/"
        description="日本に伝わっている燐字文献のうち大きな割合を占める『羅古論』を特集しています。"
      />
      <Head>
        <></>
      </Head>

      <main>
        <div>
          <PageTitle>『羅古論』展示</PageTitle>
          <PageDescription>
            日本に伝わっている燐字文献のうち大きな割合を占める『羅古論』を特集しています。
          </PageDescription>
        </div>
        <div>
          <h2>羅古論とは</h2>
          <p>
            羅古論とは、「羅」つまりラネーメ文化圏に古くから伝わってきた説話や伝承などの文の集まりのことで、
            寓話やおとぎ話といった民話から戦記のような歴史記述までさまざまなものが存在します。
            ここでは、いくつかの古論を和訳とともに紹介します。
          </p>
        </div>
        <div>
          <ul>
            {lanermeFolkloreTitlePMCF.map((title) => {
              const folklore = lanermeFolkloreData[title];
              return (
                <li key={title}>
                  <Link href={`laneme-penulleti-lukup-lukup/${title}`}>
                    {folklore.title}
                  </Link>
                  <p>{folklore.abstract}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};
export default Index;
