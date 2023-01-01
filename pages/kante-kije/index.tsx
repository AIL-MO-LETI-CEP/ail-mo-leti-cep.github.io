import Link from "next/link";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Header />

      <main>
        <Title>文献読解</Title>
        <Description>
          このページでは、各種文献の読解ログや資料へのリンクを紹介しています。
        </Description>

        <ul>
          <li>
            <Link href="https://docs.google.com/document/d/1yJLvWS_bQC3_EDToE5jUp0oDmNB_U6FRadsm0d97Cis">
              『アイル統一セットカイクの書（藍国統一机戦書）を読む』
            </Link>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
