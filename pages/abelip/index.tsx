import Head from "next/head";
import Link from "next/link";
import { PageTitle, PageDescription } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";

const Index = () => {
  usePageTitle("各種展示");
  return (
    <div>
      <PostOGP
        title="各種展示"
        type="article"
        url="https://ail-mo-leti-cep.github.io/abelip"
        description="文化省広報処のサイトで行われている展示ページを提供する他、過去に各所で行われた展示のアーカイブページを提供しています。"
      />
      <Head>
        <></>
      </Head>

      <main>
        <div>
          <PageTitle>各種展示</PageTitle>
          <PageDescription>
            文化省広報処のサイトで行われている展示ページを提供する他、過去に各所で行われた展示のアーカイブページを提供しています。
          </PageDescription>
        </div>
        <div>
          <h3>常設展</h3>
          <ul>
            <li>
              <Link href="abelip/laneme-penulleti-lukup-lukup">
                『羅古論』展示
              </Link>
            </li>
            <li>
              <Link href="lin-leti-lujot/">燐帝字母</Link>
            </li>
          </ul>

          <h3>過去のアーカイブ</h3>
          <ul>
            <li>
              <Link href="abelip/pemecepe-poster">ポスター展示</Link>
            </li>
            <li>
              <Link href="abelip/nf2022">京都大学11月祭特設サイト</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};
export default Index;
