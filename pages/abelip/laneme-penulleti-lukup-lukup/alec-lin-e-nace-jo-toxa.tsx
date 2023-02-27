import Link from "next/link";
import Head from "next/head";
import { Header } from "src/components/header";
import { Footer } from "src/components/footer";
import { Title } from "src/components/common";

const Index = () => {
  return (
    <div>
      <Head>
        <title>清王謝石 | AIL MO LETI CEP</title>
      </Head>
      <Header />

      <main>
        <div>
          <Title>清王謝石</Title>
          <p>
            最も有名なラネーメ古論のひとつです。燐帝字母を統一したラネーメ（アレス王朝）の
            <ruby>
              清<rt>リン</rt>
            </ruby>
            王が自分を転ばせた石にも気遣いを見せたという逸話をもとに、クレオスという国の王様が転んだ時に助けなかった侍従を責め立てたことで人材がいなくなってしまったという話と対比する形で謙虚な心の重要性を語ってくれます。
          </p>
          <p>
            クレオスは清王即位の前年に興った国家であり、農耕が厳しい土地に暮らしていたことから豊かなラネーメへと略奪をたびたび行いました。そうした経緯から、ラネーメ古論においては清王が「よい行いをする者」、クレオス王が「愚かな行いをする者」というテンプレートとしてたびたび登場します。
          </p>
        </div>
        <div style={{ margin: "auto 100px" }}>
          <h2>原文</h2>
          <div>
            <h3>燐字表記</h3>
            <p lang="x-linmarn">
              清王在羅国。或日足撃傾。付人心言御王「汝善乎？」王反言「我善。而石噫。汝善乎？」
              <br />
              或呉王足撃傾。王奮言付人「無助我。此何故？」下日王家人無。王而奮此悪件咍！
            </p>
          </div>
          <div>
            <h3>漢字表記</h3>
            <p>
              清王在羅国。或日足撃傾。付人心言御王「汝善乎？」王反言「我善。而石噫。汝善乎？」
              <br />
              或呉王足撃傾。王奮言付人「無助我。此何故？」下日王家人無。王而奮此悪件咍！
            </p>
          </div>
        </div>
        <div style={{ margin: "auto 100px" }}>
          <h2>訳文</h2>
          <div>
            <h3>日本語訳</h3>
            <p>
              リン王はラネーメの国にいた。ある日、（王は）つまづいて倒れた。付き人は王のことを心配して「大丈夫ですか？」と言った。王は「私は無事なのだが、石よ、お前は大丈夫か？」と返答した。
              <br />
              あるクレオスの王も足につまづいて倒れた。王は怒りながら、「私を助けなかったのはどうしてか？」と付き人に言った。後日宮廷に人が来なくなった。王であろうとも奢ることは悪いことなのだなあ。
            </p>
          </div>
          <div>
            <h3>書き下し文</h3>
            <p style={{ lineHeight: 2.2 }}>
              <ruby>
                清王<rt>りんわう</rt>
              </ruby>
              <ruby>
                羅<rt>らねーめ</rt>
              </ruby>
              の国に
              <ruby>
                在<rt>あ</rt>
              </ruby>
              り。
              <ruby>
                或<rt>あ</rt>
              </ruby>
              る日、足撃ちて
              <ruby>
                傾<rt>たふ</rt>
              </ruby>
              る。付き人
              <ruby>
                心<rt>こころうごき</rt>
              </ruby>
              て
              <ruby>
                御<rt>おん</rt>
              </ruby>
              <ruby>
                王<rt>わう</rt>
              </ruby>
              に言ふ、「
              <ruby>
                汝<rt>おかみ</rt>
              </ruby>
              <ruby>
                善<rt>よ</rt>
              </ruby>
              き
              <ruby>
                乎<rt>や</rt>
              </ruby>
              ？」
              <ruby>
                王<rt>わう</rt>
              </ruby>
              <ruby>
                反<rt>かへ</rt>
              </ruby>
              して言はく、「我
              <ruby>
                善<rt>よ</rt>
              </ruby>
              し。
              <ruby>
                而<rt>しかれ</rt>
              </ruby>
              ども
              <ruby>
                石<rt>いし</rt>
              </ruby>
              <ruby>
                噫<rt>や</rt>
              </ruby>
              。
              <ruby>
                汝<rt>なんぢ</rt>
              </ruby>
              <ruby>
                善<rt>よ</rt>
              </ruby>
              き
              <ruby>
                乎<rt>や</rt>
              </ruby>
              ？」
              <br />
              <ruby>
                或<rt>あ</rt>
              </ruby>
              る
              <ruby>
                呉<rt>くれおす</rt>
              </ruby>
              王足撃ちて
              <ruby>
                傾<rt>たふ</rt>
              </ruby>
              る。王
              <ruby>
                奮<rt>いか</rt>
              </ruby>
              りて付き人に言ふ、「我を助け
              <ruby>
                無<rt>ず</rt>
              </ruby>
              。
              <ruby>
                此<rt>これ</rt>
              </ruby>
              <ruby>
                何故<rt>なにゆゑ</rt>
              </ruby>
              か？」
              <ruby>
                下<rt>のち</rt>
              </ruby>
              の日王の家の人
              <ruby>
                無<rt>な</rt>
              </ruby>
              し。王たれ
              <ruby>
                而<rt>ども</rt>
              </ruby>
              <ruby>
                奮<rt>おご</rt>
              </ruby>
              るは
              <ruby>
                此<rt>これ</rt>
              </ruby>
              <ruby>
                悪<rt>あ</rt>
              </ruby>
              しき
              <ruby>
                件<rt>こと</rt>
              </ruby>
              <ruby>
                咍<rt>かな</rt>
              </ruby>
              ！
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
