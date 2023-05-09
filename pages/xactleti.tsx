import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";
import styled from "@emotion/styled";

const Index = () => {
  return (
    <div>
      <Head>
        <title>各種案内 | AIL MO LETI CEP</title>
      </Head>
      <Header />
      <main>
        <Title>各種案内</Title>
        <Description>
          私たち自身に関する情報、アイル共和国における安全や旅行といった情報をこちらで提供しています。
          <br />
          外部リンクや広報処の近況などもこちらから見ることができます。
        </Description>

        <InfoboxContainer>
          <Infobox>
            <h2>基本情報</h2>
            <h4>アイル共和国文化省広報処</h4>
            <p>
              大阪府大阪市彼花区乾町6丁目17-47 5階
              <br />
              月曜日～金曜日
              <br />
              8:24ー12:00、13:12ー16:48
            </p>

            <h4>アイル共和国文化省</h4>
            <p>
              Zritbrai 1te, Kratpra, Makati, Ai&apos;r
              <br />
              TEL: +00 388201740
              <br />
              FAX: +00 388201741
            </p>
          </Infobox>
          <Infobox>
            <h2>国内ニュース</h2>
            <ArticleList>
              <ArticleContainer>
                <Link href="" className="no-underline">
                  <Article>
                    phil.2013.11.28
                    <br />
                    共和国内戦に関する特別法廷の開廷について
                  </Article>
                </Link>
              </ArticleContainer>
              <ArticleContainer>
                <Link href="" className="no-underline">
                  <Article>
                    phil.2013.12.19
                    <br />
                    第八回アイル統一机戦大会の開催について
                  </Article>
                </Link>
              </ArticleContainer>
            </ArticleList>
          </Infobox>
          <Infobox>
            <h2>安全情報</h2>
            <ArticleList>
              <ArticleContainer>
                <Link href="" className="no-underline">
                  <Article>
                    phil.2014.1.18
                    <br />
                    端郡・大守処での列車脱線事故について
                  </Article>
                </Link>
              </ArticleContainer>
              <ArticleContainer>
                <Link href="" className="no-underline">
                  <Article>
                    phil.2014.3.5
                    <br />
                    リナエスト共和国における邦人の安否について
                  </Article>
                </Link>
              </ArticleContainer>
            </ArticleList>
          </Infobox>
        </InfoboxContainer>
        <hr />
        <h2>広報処近況</h2>
        <Link href="">広報処近況はこちら</Link>
        <h2>外部リンク</h2>
        <Link href="/tec-leti-julo">外部リンクはこちら</Link>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

const InfoboxContainer = styled.div`
  @media screen and (min-width: 450px) {
    display: flex;
  }
`;

const Infobox = styled.div`
  @media screen and (min-width: 450px) {
    margin: 10px 0;
  }
  max-width: 335px;
  /*border-right: 2px groove #eee;*/
  padding: 5px;

  &:last-child {
    border: none;
  }
`;

const ArticleList = styled.ul`
  padding-left: 0;
`;

const ArticleContainer = styled.li`
  list-style: none;
  border-top: 1px groove #000;
`;

const Article = styled.div`
  padding: 5px 0px;
`;
