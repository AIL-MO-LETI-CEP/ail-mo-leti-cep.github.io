import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IframeContainer } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";

const Index = () => {
  usePageTitle("京都大学11月祭特設サイト");
  return (
    <div>
      <PostOGP
        title="京都大学11月祭特設サイト"
        type="article"
        url="https://ail-mo-leti-cep.github.io/abelip/nf2022"
        description="ご存じアイル共和国の架空伝統ゲーム、「机戦」がNFに初上陸！机戦にまつわるさまざまな史料・動画・背景などを紹介します！すべての画像にリンクが張られているのでぜひジャンプしてみてください！"
      />
      <Head>
        <></>
      </Head>

      <main>
        <HeadContainer>
          <HeadImageContainer>
            <Image src="/imgs/nf2022/xH-026.png" fill alt="" />
          </HeadImageContainer>
          <HeadInfoContainer>
            <HeadTitle>架空伝統ゲーム（一行矛盾）</HeadTitle>
            <HeadGroupName>日本机戦連盟</HeadGroupName>
            <HeadLinkContainer>
              <HeadLink>
                <Link href="https://sites.google.com/view/cet2kaik/">
                  <Image src="/imgs/nf2022/site_link.svg" fill alt="" />
                </Link>
              </HeadLink>
              <HeadLink>
                <Link href="https://twitter.com/cet2kaik">
                  <Image src="/imgs/nf2022/twitter_blue.svg" fill alt="" />
                </Link>
              </HeadLink>
              <HeadLink>
                <Link href="https://www.youtube.com/channel/UCdjFUR1MvJ-oExWUKlY2M8A">
                  <Image src="/imgs/nf2022/YouTube.png" fill alt="" />
                </Link>
              </HeadLink>
            </HeadLinkContainer>
            <HeadTagContainer>
              <HeadTag>#歴史</HeadTag>
              <HeadTag>#アート</HeadTag>
              <HeadTag>#パズル・ゲーム</HeadTag>
              <HeadTag>#創作</HeadTag>
              <HeadTag>#サブカルチャー</HeadTag>
            </HeadTagContainer>
          </HeadInfoContainer>
        </HeadContainer>

        <Abstraction>
          <p>
            ご存じアイル共和国の架空伝統ゲーム、「机戦」がNFに初上陸！
            <br />
            机戦にまつわるさまざまな史料・動画・背景などを紹介します！
            <br />
            すべての画像にリンクが張られているのでぜひジャンプしてみてください！
          </p>
        </Abstraction>

        <section>
          <SectionTitle>机戦とは？</SectionTitle>
          <Subsection>
            <SubsectionTitle>机戦って？</SubsectionTitle>
            <SubsectionContent>
              <SubsectionInfo>
                <p>まずはこの動画を見ましょう！</p>
                <p>さらによく知りたい方は下の画像をクリック！</p>
              </SubsectionInfo>
              <SubsectionImageContainer>
                <IframeContainer>
                  <iframe
                    src="https://www.youtube.com/embed/l1oRqKTQ0s8"
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </IframeContainer>
              </SubsectionImageContainer>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>もっと詳しく！</SubsectionTitle>
            <SubsectionContent>
              <SubsectionImageContainer>
                <Link href="https://sites.google.com/view/cet2kaik/%E6%9C%BA%E6%88%A6%E3%81%A8%E3%81%AF">
                  <Image
                    src="/imgs/nf2022/image19162.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
              <SubsectionInfo>
                <p>詳しくなったら遊びたくなった？下の画像へ！</p>
              </SubsectionInfo>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>遊んでみたい！</SubsectionTitle>
            <SubsectionContent>
              <SubsectionInfo>
                <p>ブラウザで遊べるシステムがあります！</p>
                <p>CPU戦もランダムマッチもフレンド戦も全部できるすごいやつ！</p>
              </SubsectionInfo>
              <SubsectionImageContainer>
                <Link href="http://jurliyuuri.com/cerke_online_alpha/index.html">
                  <Image
                    src="/imgs/nf2022/cerke_online.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>ほしい！</SubsectionTitle>
            <SubsectionContent>
              <SubsectionImageContainer>
                <Link href="https://booth.pm/ja/items/3634755">
                  <Image
                    src="/imgs/nf2022/cerke_booth.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
              <SubsectionInfo>
                <p>好評発売中！</p>
                <p>
                  実はNFの企画でも出店しています。お住まいの地域によってはNFで買った方が得になります。
                </p>
              </SubsectionInfo>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>もっともっと知りたい！</SubsectionTitle>
            <SubsectionContent>
              <SubsectionInfo>
                <p>
                  私たちのDiscordサーバーへどうぞ！高頻度で雑談通話や作業通話が行われているにぎやかなサーバーです！
                </p>
                <p>
                  アカウントを持っていなくてもメールアドレスから簡単に作れますよ！
                </p>
              </SubsectionInfo>
              <SubsectionImageContainer>
                <Link href="https://discord.gg/9ytmYgaV23">
                  <Image
                    src="/imgs/nf2022/cet2kaik_japan_with_frame.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
            </SubsectionContent>
          </Subsection>
        </section>

        <section>
          <SectionTitle>アイル共和国について</SectionTitle>
          <Subsection>
            <SubsectionTitle>どんな国？</SubsectionTitle>
            <SubsectionContent>
              <SubsectionImageContainer>
                <Link href="https://sites.google.com/site/syxobo/airu-gong-he-guo-wen-hua-ting">
                  <Image
                    src="/imgs/nf2022/air_map.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
              <SubsectionInfo>
                <p>
                  我々の作っている架空世界にある国の一つで、およそ400km四方の本島と周囲の小島に1億ほどの人口を抱える農業国です。さまざまな民族が入り乱れ、単一民族主義の統治をきっかけとする内戦の経験から文化の保護・奨励に力を入れています。
                </p>
                <p>
                  ちなみに左の地図の濃い破線は鉄道で、郡境は薄い破線です。北は下側で、東が右です。
                </p>
              </SubsectionInfo>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>衣食住などの文化</SubsectionTitle>
            <SubsectionContent>
              <SubsectionInfo>
                <p>
                  平面的に裁断された綿布で作った上着を着てズボンをはいた、作務衣に似た衣服が民族衣装として知られています。
                </p>
                <p>
                  写真の料理はペースーと呼ばれるきのこスープに米飯を添えたものです。アイルでは米が主食に好まれ、お酒も盛んに飲まれています。
                </p>
                <p>
                  画像中の絵はアイルの首都マカティの街並みを描いたもので、木造建築が多く立ち並んでいるのがわかります。
                </p>
                <p>
                  皇論（タムツイ）と呼ばれるアニミズム宗教が信じられており、法の精神や税制の方針といった国家の運営方針にも影響しています。
                </p>
              </SubsectionInfo>
              <SubsectionImageContainer>
                <Link href="http://www.jurliyuuri.info/wiki/%E3%82%A2%E3%82%A4%E3%83%AB%E5%85%B1%E5%92%8C%E5%9B%BD">
                  <Image
                    src="/imgs/nf2022/air_culture.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>文化省の取り組み</SubsectionTitle>
            <SubsectionContent>
              <SubsectionImageContainer>
                <Link href="/abelip/pemecepe-poster">
                  <Image
                    src="/imgs/nf2022/inuca.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
              <SubsectionInfo>
                <p>
                  先に述べたようにアイルは文化を重んじる国であり、言語・習慣の記述・教育や、民族遊戯の大会開催の補助などを積極的に行っています。
                </p>
                <p>
                  右のポスターはアイルの北西部に位置するイヌシ郡で行われた机戦の大会について宣伝しているもので、午前に机戦を遊び、午後に四人机戦とプロプレイヤーによる解説講演が行われると書かれています。
                </p>
              </SubsectionInfo>
            </SubsectionContent>
          </Subsection>
        </section>

        <section>
          <SectionTitle>世界と言語</SectionTitle>
          <Subsection>
            <SubsectionTitle>アイルの外の世界</SubsectionTitle>
            <SubsectionContent>
              <SubsectionImageContainer>
                <Link href="http://www.jurliyuuri.info/wiki/PMCF">
                  <Image
                    src="/imgs/nf2022/pemecepe_map.png"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
              <SubsectionInfo>
                <p>
                  アイル共和国の位置する世界では、伝染病の大流行とそれに前後して発生したモンスターの大群によって人類がごく一部の限られた地域にしか生存できなくなっています。この世界にはアイルの他にヴェフィス、リナエスト、ユエスレオネという3つの国がありますが、どれもモンスターと病からの避難民たちが集まって建てた国であり、建国からの歴史はとても浅いことが特徴です。
                </p>
                <p>
                  アイル、ヴェフィス、リナエストの3か国はどれも隣接した島嶼部に建てられており、モンスターからの防衛や食料問題の解決のためPMCF（東諸島共和国連合）という連合を作り互いに助けあっています。
                </p>
              </SubsectionInfo>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>東島通商語（ペメセペ・ルクップ）</SubsectionTitle>
            <SubsectionContent>
              <SubsectionInfo>
                <p>
                  アイル、ヴェフィス、リナエストは公用語が大きく異なっており、PMCFでは意思疎通のために公用語として東島通商語という言語が定められています。これはこの世界におけるリングア・フランカ（覇権言語）であるリパライン語がアイル語、パイグ語、ヴェフィス語など様々な言語との接触を経て出来上がったクレオール言語です。発音が比較的単純なことで知られ、修飾のために「LETI」という単語が頻用されるという特徴を持ちます。
                </p>
                <p>
                  これまでさんざん画像に登場している謎の言語は、実はこれです。
                </p>
                <p>
                  右は、アイル文化省が制作した机戦の文化に関するドキュメンタリーのオープニングです。
                </p>
              </SubsectionInfo>
              <SubsectionImageContainer>
                <IframeContainer>
                  <iframe
                    src="https://www.youtube.com/embed/y6m7JKlEUsA"
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </IframeContainer>
              </SubsectionImageContainer>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>パイグ語</SubsectionTitle>
            <SubsectionContent>
              <SubsectionImageContainer>
                <IframeContainer>
                  <iframe
                    src="https://www.youtube.com/embed/3WYTi2Yp54Q"
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </IframeContainer>
              </SubsectionImageContainer>
              <SubsectionInfo>
                <p>
                  この世界においてリパライン語の属するリパラオネ語族と対をなしているラネーメ語族に属する言語で、多くの単語が単音節からなり、かつ声調を持っているという少し中国語に似た特徴を持ちます。
                </p>
                <p>
                  机戦はもともとパイグ民族の遊戯であったとされ、机戦における用語や宣言などの多くはパイグ語が元になって各言語へ輸入されています。
                </p>
                <p>
                  左は、全編通してパイグ語を使いながら机戦を遊んでいる動画です。
                </p>
              </SubsectionInfo>
            </SubsectionContent>
          </Subsection>

          <Subsection>
            <SubsectionTitle>燐帝字母</SubsectionTitle>
            <SubsectionContent>
              <SubsectionInfo>
                <p>
                  この世界で7000年以上前から使われる表語文字です。こちらの世界の漢字に相当する字で、ほとんどの言語がこれによって表記される時期を経験しているという非常に伝統のある文字です。漢字はその多くが形声文字なのに対して、燐字は会意による造字をこのむ傾向にあります。
                </p>
                <p>
                  画像は、アイルの文化省が机戦の統一ルールを作るにあたって発行した文書の写本です。
                </p>
              </SubsectionInfo>
              <SubsectionImageContainer>
                <Link href="/lin-leti-lujot/lijuit_kije.pdf">
                  <Image
                    src="/imgs/nf2022/y1huap1cet2kaikzui1.jpg"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Link>
              </SubsectionImageContainer>
            </SubsectionContent>
          </Subsection>
        </section>
      </main>
    </div>
  );
};
export default Index;

const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const HeadImageContainer = styled.div`
  @media screen and (min-width: 1100px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 800px) {
    display: block;
    width: 150px;
    height: 150px;
    margin-left: auto;
  }

  margin: 10px;
  position: relative;
  display: none;
`;

const HeadInfoContainer = styled.div`
  @media screen and (min-width: 800px) {
    margin-left: 100px;
  }
  padding: 10px 30px;
  width: auto;
  margin: auto;
`;

const HeadTitle = styled.div`
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

const HeadGroupName = styled.div`
  text-align: center;
`;

const HeadLinkContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
`;

const HeadLink = styled.div`
  position: relative;
  margin: 8px;
  width: 30px;
  height: 30px;
`;

const HeadTagContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const HeadTag = styled.div`
  @media screen and (min-width: 800px) {
    padding: 0 0.9em;
    font-size: 12px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 0.7em;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 6px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  font-size: 11px;
  text-decoration: none;
  transition: 0.2s;
  box-sizing: border-box;
`;

const Abstraction = styled.div`
  border: 1px solid #000;
  padding: 1em auto;
  margin: 50px auto;
  text-align: center;
`;

const SectionTitle = styled.div`
  font-size: xx-large;
`;

const Subsection = styled.article`
  margin: 30px auto;
`;

const SubsectionTitle = styled.div`
  font-size: x-large;
`;

const SubsectionContent = styled.div`
  @media screen and (min-width: 450px) {
    display: flex;
  }
`;

const SubsectionImageContainer = styled.div`
  @media screen and (min-width: 450px) {
    width: 50%;
    margin: 0 10px;
    height: auto;
  }

  width: 100%;
  height: 300px;
  min-height: 300px;
  margin: 1em 0;
  position: relative;
`;

const SubsectionInfo = styled.div`
  @media screen and (min-width: 450px) {
    width: 50%;
    margin: 0 10px;
  }

  width: 100%;
  height: auto;
  margin: 1em 0;
`;
