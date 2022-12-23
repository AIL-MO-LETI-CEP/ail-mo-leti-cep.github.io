import Image from "next/image"

export const mock = () => {
    return (
        <div style={{margin: "0 auto", maxWidth: "970px", display: flex;}}>
            <nav id="posts" style={{width: "730px"}}>

            </nav>
            sidebar();
        </div>
    )
};

const show_glyph = (glyph_name: string) => {
    return (
        <Image src={`/imgs/glyph/${glyph_name}`} width={20} height={20} alt={glyph_name}></Image>
    )
};
/*
const article1 = () => {
    return (
        <div class="post">
            <p class="date">西暦2021年8月17日</p>
            <hr>
            <div lang="x-lineparine">
                <h2>mels lazzijavo pustiej stefart fon ai'ren meumen karmaciste'd larkasal lernicco'ct</h2>
                <p>tostesn tydiesto ler feti'a mol melx edixa missen icco es tasierjupuj. Pa, ny no io elx liaxu
                    don.
                    "<img class="glyph" src="./glyphs/極.png" height="20" width="20"/><img class="glyph"
                        src="./glyphs/識.png" height="20" width="20"/><img class="glyph" src="./glyphs/錘.png"
                        height="20" width="20"/><img class="glyph" src="./glyphs/地.png" height="20" width="20"><img
                        class="glyph" src="./glyphs/心.png" height="20" width="20"/><img class="glyph"
                        src="./glyphs/之.png" height="20" width="20"/><img class="glyph" src="./glyphs/冠.png"
                        height="20" width="20"/><img class="glyph" src="./glyphs/国.png" height="20" width="20"/>" mol
                    fal sopit fon ai'ren meumen karmacist mal
                    meumen karmaciste'c lex ilyr
                    miss letix la deliu zu diaxes meu fon lani'arsnejejten missen icco mal kverniacel la lex
                    neferotister'l.
                </p>
                <p>liaxu yuesleone adit ecceverlo, alerqi io karmaciste'd larkasal lernicco'ct niorelon ujopes melx
                    selene
                    vatimel kinieses paltaustan. mal, missen icco'd etollen meu l'es cerke'i fonton larkas <a
                        href="https://sites.google.com/view/cet2kaik/%E4%BB%96%E8%A8%80%E8%AA%9E%E7%89%88-other-languages/fal-lineparine">cierjustel
                        cerke's fon japaeo</a> mag meumal fon pustiej letix les loler keluxer cerke'it faller
                    menecartj'ustat.
                    vatimel, meumal fon pustiej lius plascakurfti'aium gelx jol vxorlnajtes linzklar ly. mag, miss
                    cuturlufonton larkas fal meumal fon pustiej lecu. miss chirfares lazzijavo pustiej stefart fon
                    ai'ren
                    meumen karmaciste'd larkasal lernicco'ct.
                </p>
            </div>
            <hr>
            <div lang="ja">
                <h2>アイル共和国文化省対外広報処日本語部署設立に関して</h2>
                <p>「大移動」による混乱があって我が国は荒れていたが、ようやく落ち着いてきた。<img class="glyph" src="./glyphs/極.png" height="20"
                        width="20"/><img class="glyph" src="./glyphs/識.png" height="20" width="20"/><img class="glyph"
                        src="./glyphs/錘.png" height="20" width="20"/><img class="glyph" src="./glyphs/地.png"
                        height="20" width="20"/><img class="glyph" src="./glyphs/心.png" height="20" width="20"><img
                        class="glyph" src="./glyphs/之.png" height="20" width="20"/><img class="glyph"
                        src="./glyphs/冠.png" height="20" width="20"/><img class="glyph" src="./glyphs/国.png"
                        height="20" width="20"/>と共和国文化省法にも記載されており、文化省に属する我々は、多民族国家である我が国の文化を記録し、詳しくない者にそれを紹介する責務を有する。
                </p>
                <p>ユエスレオネ・カラムディア・アレークィなどで省の対外広報部はこれまで活動をしてきたが、その範囲をさらに広げたいと思っている。ところで、我が国の伝統文化である机戦を<a
                        href="https://sites.google.com/view/cet2kaik">日本机戦連盟</a>が先駆けて広報しているので、日本語圏は地球の中で最も多くの机戦プレイヤーを有している。さらに、日本語圏は表意文字を使用するので、燐帝字母への関心も高いであろう。したがって我々は日本語圏へ優先的に広報しよう。我々はアイル共和国文化省対外広報処日本語部署の設立を宣言する。
                </p>
            </div>
        </article>
    )
};

const article2 = () => {
    return (
        <article class="post">
            <p class="date">西暦2021年8月22日</p>
            <hr>
            <article lang="ja">
                <h2>［燐字紹介］今日の4文字：<img class="glyph" src="./glyphs/百.png" height="29" width="29"/><img class="glyph"
                        src="./glyphs/星.png" height="29" width="29"/><img class="glyph" src="./glyphs/散.png"
                        height="29" width="29"/><img class="glyph" src="./glyphs/心.png" height="29" width="29"></h2>
                <p>今日は、<img class="glyph" src="./glyphs/百.png" height="20" width="20"/><img class="glyph"
                        src="./glyphs/星.png" height="20" width="20"/><img class="glyph" src="./glyphs/散.png"
                        height="20" width="20"/><img class="glyph" src="./glyphs/心.png" height="20"
                        width="20"/>を見ていこうと思います。これは「百年で（普通の人は）亡くなる」という意味のフレーズになっています。それぞれの文字を見ていきましょう。</p>
                <p/><img class="glyph" src="./glyphs/百.png" height="20"
                        width="20"/>：意味は「百、100」、パイグ音はkit1（キーット）、アイル音はkita（キタ）です。燐帝が文字を整理するまでは、「大きい」という意味の<img
                        class="glyph" src="./glyphs/大.png" height="20"
                        width="20"/>の字が100という意味でも使われていましたが、当時から明確化のために「とても」という意味の<img class="glyph"
                        src="./glyphs/極.png" height="20" width="20"/>をくっつけた形、およびそれを略した<img class="glyph"
                        src="./glyphs/物.png" height="20" width="20"/>をくっつけた形がよく用いられていました。<img class="glyph"
                        src="./glyphs/極.png" height="20"
                        width="20">のパイグ音はkit（キット）、アイル音はkitu（キトゥ）であり、「百」の意味の単語と発音が近しいので、それを<img class="glyph"
                        src="./glyphs/大.png" height="20" width="20"/>にくっつけることで明確化がなされたわけです。燐帝の字形整理時には略されたほうの<img
                        class="glyph" src="./glyphs/百.png" height="20" width="20"/>の字体が採用され、この形が現在まで引き継がれているわけです。</p>
                <p/><img class="glyph" src="./glyphs/星.png" height="20"
                        width="20"/>：パイグ語では「星、年」の意味で、発音はpet2（パゥーット⤴）です。地面を覆っている天をかたどった<img class="glyph"
                        src="./glyphs/天.png" height="20" width="20"/>に対し、そこに浮かんでいる点状のもの、つまり星を象った字が<img class="glyph"
                        src="./glyphs/星.png" height="20" width="20"/>です。このように、この字の元の意味は「星」で、実際<img class="glyph"
                        src="./glyphs/日.png" height="20" width="20"/><img class="glyph" src="./glyphs/星.png"
                        height="20" width="20"/>kia1
                    pet2（キアー　パゥーット⤴）「太陽」などではこの「星」の意味を保っていますが、現在では「年」の意味を表すのにこの文字を用いることが多いです。</p>

                <p/><img class="glyph" src="./glyphs/散.png" height="20"
                        width="20"/>：「散る、散らす」といった意味を持ち、パイグ音はco1（ソーゥ）、アイル音はocou（オソウ）です。4つの点を書き、「散らばる」さまを表した字だとされています。<img
                        class="glyph" src="./glyphs/上.png" height="20" width="20"/>は「上」という意味で、<img class="glyph"
                        src="./glyphs/開.png" height="20"
                        width="20"/>は「開く、開ける」という意味なので、それを組み合わせて箱の上が開いていて粉が散るさまを表している、という異説もありますが、あまり根拠のない俗説だとされています。
                </p>

                <p/><img class="glyph" src="./glyphs/心.png" height="20" width="20"/>：原義は「心」ですが、パイグ語 hia1（ヒアー）だったりバート語
                    rijúḷ（ﾙリユール）だったりは「～したい」という意味でも用いられます。ここでは「心」の意味で、直前の<img class="glyph" src="./glyphs/散.png"
                        height="20" width="20"/>と組み合わさって「心を散らす」という意味になりますが、これは「死ぬ」の意味の婉曲表現です。字の形は、「人」という意味の<img
                        class="glyph" src="./glyphs/人.png" height="20"
                        width="20"/>の中央部を強調したもので、心動かされるときに躍動する心臓の位置を表すことで心の意味を表現したものです。</p>

            </article>
        </article>
    )
}
*/