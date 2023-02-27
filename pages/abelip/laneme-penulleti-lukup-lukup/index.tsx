import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title, Description } from "src/components/common";
import usePageTitle from "src/hooks/usePageTitle";

const Index = () => {
  return (
    <div>
      <Head>
        <title>『羅古論』展示 | AIL MO LETI CEP</title>
      </Head>
      <Header />

      <main>
        <div>
          <Title>『羅古論』展示</Title>
          <Description>
            日本に伝わっている燐字文献のうち大きな割合を占める『羅古論』を特集しています。
          </Description>
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
            <li>
              <Link href="laneme-penulleti-lukup-lukup/alec-lin-e-nace-jo-toxa">
                清王謝石
              </Link>
            </li>
            <p>
              ラネーメの清王（燐帝）が躓いた石に謝ったという逸話をもとに、謙虚な心の大切さを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/nip-ticotit-kije-lujot-leti-lata">
                無識字人
              </Link>
            </li>
            <p>
              文献の増やしやすさと人の増やしやすさの差をもとに、文字によって物事を表すことの大切さを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">六裁</Link>
            </li>
            <p>
              賭博で大負けした相手の不正を疑って友人を失った将軍の逸話をもとに、他人を信頼すべきであることを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">大遠小周</Link>
            </li>
            <p>
              周囲の者の心を疑い、人の心を読めるようになるという龍の卵を求めた王の逸話をもとに、遠くの大きなものより近くの小さいものこそが重要なことを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">圧心享蜜</Link>
            </li>
            <p>
              果実と木の実を圧搾する装置を背景に、適度にプレッシャーを与えないと進捗が出ないがプレッシャーを与えすぎると心を壊してしまうということを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">無識墨味</Link>
            </li>
            <p>
              【識墨味】というフレーズを巡る田舎者と教養人の噛み合わない会話。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">無水与墨</Link>
            </li>
            <p>
              墨を摺る水すらない乾いた土地に墨を贈ったがために墨が火事の燃料にしかならなかった、という逸話をもとに、贈り物は相手のことをよく考えて選ぶべきであることを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">王加甘果</Link>
            </li>
            <p>
              見た目のみで果物を選んだ結果甘いものを逃した王の逸話をもとに、内面を見ずに人を選ぶことの危うさを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">王戦硬件</Link>
            </li>
            <p>
              激務の中に身を置いていれば王でも身分を脅かされないという話をもとに、上に立つものこそが進んで困難な仕事を行うことの大切さを説く。
            </p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">須識字声</Link>
            </li>
            <p></p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">王家大火</Link>
            </li>
            <p></p>
            <li>
              <Link href="laneme-penulleti-lukup-lukup/">神之値石</Link>
            </li>
            <p></p>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
