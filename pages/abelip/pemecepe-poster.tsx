import Image from "next/image";
import styled from "@emotion/styled";
import { header } from "../../src/components/header";
import { footer } from "../../src/components/footer";
import { Title, Description } from "../../src/components/common";

const Index = () => {
    return (
        <div>
            {header()}

            <Title>ポスター展示</Title>
            <Description>アイルおよびPMCFを中心に、ポスターや本の表紙などの資料を展示する。</Description>

            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/micetltmo.png" style={{minWidth: "100px"}} height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>『我々の文化』ロゴ</PosterTitle>
                    <PosterDescription>
                        <p>アイル文化省により制作されたドキュメンタリー番組のシリーズロゴ。燐字とペメセペ文字を混ぜて「我々の文化」という同じ文を書いたものを2つ並べている。アイルでは、phil.2005年の内戦で単一民族主義政権が倒れたあと行政言語の主軸が東島通商語に移され、それに伴って2つの文字体系によって運用されるようになったことが見てとれる。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>アイル文化省　アイル・<ruby>天神<rt>マカティ</rt></ruby>　phil.2006年</p>
                        <p>使用言語：東島通商語・伝統文語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>

            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/jukancetageka.png" style={{minWidth: "100px"}} height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>「<ruby>此時<rt>かかく</rt></ruby><ruby>官定<rt>ゆかん</rt></ruby><ruby>机戦<rt>せたげか</rt></ruby>かん<ruby>皇之<rt>たかな</rt></ruby><ruby>片<rt>ツオ</rt></ruby><ruby>加<rt>あ</rt></ruby>て<ruby>入能<rt>にた</rt></ruby>す」</PosterTitle>
                    <PosterDescription>
                        <p>アイルのタカン人自治区である皇島の行政府によって制作されたポスターで、phil.2006年に国内で行われた机戦の標準ルールを決める「官定机戦会議」において「<ruby>皇<rt>タム</rt></ruby>」が標準ルールに採用されたということを告知している。皇島は「<ruby>皇<rt>タム</rt></ruby>」を信仰対象とする皇論の聖地である<ruby>皇山<rt>タムツォ</rt></ruby>があり、皇論がタカン人のアイデンティティでもあることから標準ルールへの「<ruby>皇<rt>タム</rt></ruby>」の採用を推進していた。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>アタラム郡　アイル・<ruby>皇島<rt>アタラム</rt></ruby>　phil.2006年</p>
                        <p>使用言語：タカン語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>
            
            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/inuca.png" style={{minWidth: "100px"}} height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>第七回イヌシ机戦大会</PosterTitle>
                    <PosterDescription>
                        <p>アイルのイヌシ郡で行われた机戦大会の宣伝ポスター。当時「名人」としてデビューして間もなかったアレス・ヨコをゲストに招き、午後にヨコによる講演が行われている。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>イヌシ文化課　アイル・イヌシ郡　phil.2011年</p>
                        <p>使用言語：東島通商語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>
            
            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/truiraikhuetpo.png" style={{minWidth: "100px"}} height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>『与光闇道之術』</PosterTitle>
                    <PosterDescription>
                        <p>近年になって出版された机戦の一般向けの解説書。駒の動きや役といった基本的なルールをある程度理解している人を対象に、具体的な戦い方や駒組みの考え方などを収めている。帯には著者であるイヌサ・ケタスカの格言、「何が取られるかより何を取るかのほうが重要なことだ」が印刷されている。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>アイル・<ruby>天神<rt>マカティ</rt></ruby>　phil.2013年</p>
                        <p>使用言語：東島通商語・伝統文語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>

            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/honrui.png" height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>『軟学机戦』（写本）</PosterTitle>
                    <PosterDescription>
                        <p>広範囲における机戦の地域変種を記録した琴大清（リア・マーリン）による本。アイル文化省による事業以前にこうした記録が行われた例は少なく、貴重な資料となっている。題名は「簡単に机戦を学ぶ」という意味だが、テクニックを説くものではなく、どちらかというと変種ルールの図鑑に近い。本文はリパライン語で書かれ、ヴェフィス・チェスやアツェフェーテなど、別のボードゲームに親しむ人々に向けた机戦の概説を伝えている。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>リパラオネ共和国　phil.1690年代</p>
                        <p>使用言語：伝統文語・リパライン語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>

            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/morkliniopor.png" style={{minWidth: "100px"}} height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>行清王道</PosterTitle>
                    <PosterDescription>
                        <p>アイル文化省のもとで机戦の標準ルールが定められたことを告知するポスター。古の時代に形や音のバラバラであった燐字が<ruby>清<rt>リン</rt></ruby>王によって統一されたという偉業になぞらえて、地域によって多種多様だったルールをまとめたアイルの今回の事業における正当性と成果をアピールしている。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>アイル文化省　アイル・<ruby>天神<rt>マカティ</rt></ruby>　phil.2006年</p>
                        <p>使用言語：伝統文語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>

            <PosterContainer>
                <PosterImageContainer><Image src="/imgs/poster/lukupitletileti.png" style={{minWidth: "100px"}} height={282.9} width={200} alt=""></Image></PosterImageContainer>
                <PosterInfoContainer>
                    <PosterTitle>「ペメセペ・ルクップ」</PosterTitle>
                    <PosterDescription>
                        <p>ユエスレオネに移った東島通商語話者の学生たちが、リパライン語を母語とする学生たちから受けた差別から製作されたポスター。この差別は、東島通商語は多言語が混ざって生まれた「崩れた言語」であるというリパライン語話者の誤解に根ざすもので、修飾語letiを頻用する特徴を揶揄した「レティレティ語」などの呼び方が例として知られる。このポスターでは「人々が"leti-leti"と話すことは崩れているのではない」「これは私たちの言葉、<ruby>東島通商語<rt>ペメセペルクップ</rt></ruby>」と主張されている。</p>
                    </PosterDescription>
                    <PosterData>
                        <p>連邦中央大・自治寮　ユエスレオネ　phil.2003年</p>
                        <p>使用言語：東島通商語</p>
                    </PosterData>
                </PosterInfoContainer>
            </PosterContainer>
            
            {footer()}
        </div>
    )
}

export default Index;

const PosterContainer = styled.article`
    display: flex;
    margin-top: 40px;
`;

const PosterImageContainer = styled.div`
    margin-right: 10px;
    width: 200px;
`;

const PosterInfoContainer = styled.div`
    max-width: 600px;
    margin-top: 10px;
    margin-left: 10px;
`;

const PosterTitle = styled.div`
    font-size: x-large;
`;

const PosterDescription = styled.div`
`;

const PosterData = styled.div`
    font-size: small;
`;