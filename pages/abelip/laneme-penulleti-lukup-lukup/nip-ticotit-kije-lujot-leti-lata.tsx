import Head from "next/head";

import { Title } from "src/components/common";
import { PostOGP } from "src/components/common/PostOGP";
import usePageTitle from "src/hooks/usePageTitle";

const Index = () => {
  usePageTitle("無識字人");
  return (
    <div>
      <Head>
        <PostOGP
          title="無識字人"
          type="article"
          url="https://ail-mo-leti-cep.github.io/abelip/laneme-penulleti-lukup-lukup/alec-lin-e-nace-jo-toxa"
          description="日本に伝わっている燐字文献のうち大きな割合を占める『羅古論』を特集しています。"
        />
      </Head>

      <main>
        <div>
          <Title>無識字人</Title>
          <p>
            字を知らない人の「なぜ字を学ぶのか？」という問いに対する答えを通して、文字の大切さと学ぶことの価値を説くお話です。PMCF各国では教科書に載せられており、「清王謝石」と並んで知名度の高い話の一つです。
          </p>
          <p>
            最後の「与型於型無生心」は、話が写本されて伝わっていく中で後世に付け足されたものだと考えられています。
          </p>
        </div>
        <div>
          <h2>原文</h2>
          <div>
            <h3>燐字表記</h3>
            <p lang="x-linmarn">
              無識字人在。彼言識人「何故学字乎？」
              <br />
              識人反言「言無型。言論即激行無行。別而使字言止於物。即与学時無目人此善。人無増物軟増。此故学字。」
              <br />
              彼言「噫！而使字力耳壊人」彼始学字而行上人。
              <br />
              与型於型無生心。
            </p>
          </div>
          <div>
            <h3>漢字表記</h3>
            <p>
              無識字人在。彼言識人「何故学字乎？」
              <br />
              識人反言「言無型。言論即激行無行。別而使字言止於物。即与学時無目人此善。人無増物軟増。此故学字。」
              <br />
              彼言「噫！而使字力耳壊人」
              <br />
              彼始学字而行上人。
              <br />
              与型於型無生心。
            </p>
          </div>
        </div>
        <div>
          <h2>訳文</h2>
          <div>
            <h3>日本語訳</h3>
            <p>
              字を知らない人がいた。その人は、（字を）知っている人に「なぜ字を学ぶのですか？」と質問した。
              <br />
              （字を）知っている人は、「言葉には形がない。論を言っても、（それは）すぐに行ってしまい、無のようになってしまう（＝失われてしまう）。しかし、字を使えば、言葉は物にとどまる。したがって、教えるときに人に会わなくてもよい。人は増やせないが、（言葉を載せた）物は簡単に増やせる。だから字を学ぶのだ」と返事した。
              <br />
              その人は「ああ！そして字を使えば死んだ人（の言葉）も聞けるのですね」と言った。
              <br />
              その人は字を学び始め、身分の高い人となった。
              <br />
              形のないものに形を与えることは、心を生む。
              <br />
            </p>
          </div>
          <div>
            <h3>書き下し文</h3>
            <p style={{ lineHeight: 2.2 }}>
              字を
              <ruby>
                識<rt>し</rt>
              </ruby>
              ら
              <ruby>
                無<rt>ざ</rt>
              </ruby>
              る人
              <ruby>
                在<rt>あ</rt>
              </ruby>
              り。
              <ruby>
                彼<rt>か</rt>
              </ruby>
              れ
              <ruby>
                識<rt>し</rt>
              </ruby>
              る人に言はく、「
              <ruby>
                何故<rt>なにゆゑ</rt>
              </ruby>
              字を学ぶ
              <ruby>
                乎<rt>か</rt>
              </ruby>
              ？」
              <ruby>
                識<rt>し</rt>
              </ruby>
              る人
              <ruby>
                反<rt>かへ</rt>
              </ruby>
              して言はく「
              <ruby>
                言<rt>こと</rt>
              </ruby>
              <ruby>
                型<rt>かたち</rt>
              </ruby>
              もた
              <ruby>
                無<rt>ず</rt>
              </ruby>
              。
              <ruby>
                論<rt>ろん</rt>
              </ruby>
              を言へば
              <ruby>
                即<rt>すな</rt>
              </ruby>
              はち
              <ruby>
                激<rt>はや</rt>
              </ruby>
              く行きて
              <ruby>
                無<rt>む</rt>
              </ruby>
              のごとく行く。
              <ruby>
                別而<rt>しかれども</rt>
              </ruby>
              字を使はば
              <ruby>
                言<rt>こと</rt>
              </ruby>
              物
              <ruby>
                於<rt>に</rt>
              </ruby>
              <ruby>
                止<rt>とど</rt>
              </ruby>
              まる。
              <ruby>
                即<rt>すな</rt>
              </ruby>
              はち学びを与ふる時、人に
              <ruby>
                目<rt>まみ</rt>
              </ruby>
              え
              <ruby>
                無<rt>ず</rt>
              </ruby>
              して
              <ruby>
                此<rt>こ</rt>
              </ruby>
              れ
              <ruby>
                善<rt>よ</rt>
              </ruby>
              し。人増え
              <ruby>
                無<rt>ず</rt>
              </ruby>
              、物
              <ruby>
                軟<rt>やす</rt>
              </ruby>
              く
              <ruby>
                増<rt>ふ</rt>
              </ruby>
              ゆ。
              <ruby>
                此<rt>こ</rt>
              </ruby>
              の
              <ruby>
                故<rt>ゆゑ</rt>
              </ruby>
              字を学ぶ。」と。
              <br />
              彼れ言はく「
              <ruby>
                噫<rt>ああ</rt>
              </ruby>
              ！
              <ruby>
                而<rt>しかう</rt>
              </ruby>
              して字を使はば
              <ruby>
                力<rt>よ</rt>
              </ruby>
              く
              <ruby>
                壊<rt>し</rt>
              </ruby>
              せる人を
              <ruby>
                耳<rt>き</rt>
              </ruby>
              く」
              <br />
              彼れ字を学び始め
              <ruby>
                而<rt>て</rt>
              </ruby>
              、
              <ruby>
                上<rt>うへ</rt>
              </ruby>
              <ruby>
                人<rt>びと</rt>
              </ruby>
              と
              <ruby>
                行<rt>な</rt>
              </ruby>
              る。
              <br />
              <ruby>
                型<rt>かたち</rt>
              </ruby>
              を
              <ruby>
                型<rt>かたち</rt>
              </ruby>
              無きもの
              <ruby>
                於<rt>に</rt>
              </ruby>
              与ふるは
              <ruby>
                心<rt>こころ</rt>
              </ruby>
              を
              <ruby>
                生<rt>う</rt>
              </ruby>
              む。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Index;
