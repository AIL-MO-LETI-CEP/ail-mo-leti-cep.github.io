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
        <title>外部リンク | AIL MO LETI CEP</title>
      </Head>
      <Header />
      <main>
        <Title>外部リンク</Title>
        <Description>
          このページでは、アイル共和国文化省およびその担当する事柄に関するリンクを紹介しています。
          <br />
          メタ的な説明が含まれているため、ご注意ください。
        </Description>
        <ul>
          <li>
            <Link
              href="https://sites.google.com/view/jurli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              総合創作界隈「悠里」公式サイト
            </Link>
            <br />
            アイル共和国やファイクレオネなど架空の世界およびその詳細な設定に至るまでを総合的に創作している『総合創作界隈「悠里」』の公式サイトです。
          </li>
          <li>
            <Link
              href="https://sites.google.com/view/cet2kaik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              日本机戦連盟公式サイト
            </Link>
            <br />
            アイル共和国の伝統遊戯である「机戦」の日本における公式組織である『日本机戦連盟』の公式サイトです。
          </li>
          <li>
            <Link
              href="https://sozysozbot.github.io/cerke/AIL%20PANIT%20LETI%20CETKAIK%20LETI%20KULANTE.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              AIL PANIT LETI CETKAIK LETI KULANTE
            </Link>
            <br />
            アイル共和国文化省が統一ルールを制定した「官定机戦」のルールブック原本です。アイル共和国の公用語の一つである東島通商語で書かれています。
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
