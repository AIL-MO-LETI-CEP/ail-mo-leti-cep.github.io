export type TitlePMCF =
  | "alec-lin-e-nace-jo-toxa"
  | "nexiju"
  | "xep-julo-e-nulowik-pi-nuxep-julo-e-lowik"
  | "jacamalit-lapi-pi-letit-pinacta"
  | "nip-ticotit-kije-lujot-leti-lata"
  | "無識墨味"
  | "無水与墨"
  | "王加甘果"
  | "王戦硬件"
  | "須識字声"
  | "王家大火"
  | "神之値石";
export type LanermeFolklore = {
  title: string;
  abstract: string;
  description: string[];
  text: {
    japanese: string[];
    linmarn: string[];
    withruby: string[];
  };
};
export type LanermeFolkloreData = {
  [key in TitlePMCF]: LanermeFolklore;
};

// 漢字の部分は東島通商語訳が出来次第そちらに切り替えること
export const lanermeFolkloreTitlePMCF: TitlePMCF[] = [
  "alec-lin-e-nace-jo-toxa",
  "nexiju",
  "xep-julo-e-nulowik-pi-nuxep-julo-e-lowik",
  "jacamalit-lapi-pi-letit-pinacta",
  "nip-ticotit-kije-lujot-leti-lata",
  "無識墨味",
  "無水与墨",
  "王加甘果",
  "王戦硬件",
  "須識字声",
  "王家大火",
  "神之値石",
];
export const lanermeFolkloreData: LanermeFolkloreData = {
  "alec-lin-e-nace-jo-toxa": {
    title: "清王謝石",
    abstract:
      "ラネーメの清王（燐帝）が躓いた石に謝ったという逸話をもとに、謙虚な心の大切さを説きます。",
    description: [
      "最も有名なラネーメ古論のひとつです。",
      "燐帝字母を統一したラネーメ（アレス王朝）の<ruby>清<rt>リン</rt></ruby>王が自分を転ばせた石にも気遣いを見せたという逸話をもとに、クレオスという国の王様が転んだ時に助けなかった侍従を責め立てたことで人材がいなくなってしまったという話と対比する形で謙虚な心の重要性を語ってくれます。",
      "",
    ],
    text: {
      japanese: [
        "リン王はラネーメの国にいた。ある日、（王は）つまづいて倒れた。付き人は王のことを心配して「大丈夫ですか？」と言った。王は「私は無事なのだが、石よ、お前は大丈夫か？」と返答した。",
        "あるクレオスの王も足につまづいて倒れた。王は怒りながら、「私を助けなかったのはどうしてか？」と付き人に言った。後日宮廷に人が来なくなった。王であろうとも奢ることは悪いことなのだなあ。",
      ],
      linmarn: [
        "清王在羅国。或日足撃傾。付人心言御王「汝善乎？」王反言「我善。而石噫。汝善乎？」",
        "或呉王足撃傾。王奮言付人「無助我。此何故？」下日王家人無。王而奮此悪件咍！",
      ],
      withruby: [
        "{清王(りんわう)}{羅(らねーめ)}の国に{在(あ)}り。{或(あ)}る日、足撃ちて{傾(たふ)}る。付き人{心(こころうごき)}て{御(おん)}{王(わう)}に言ふ、「{汝(おかみ)}{善(よ)}き{乎(や)}？」{王(わう)}{反(かへ)}して言はく、「我{善(よ)}し。{而(しかれ)}ども{石(いし)}{噫(や)}。{汝(なんぢ)}{善(よ)}き{乎(や)}？」",
        "{或(あ)}る{呉(くれおす)}王足撃ちて{傾(たふ)}る。王{奮(いか)}りて付き人に言ふ、「我を助け{無(ず)}。{此(これ)}{何故(なにゆゑ)}か？」{下(のち)}の日王の家の人{無(な)}し。王たれ{而(ども)}{奮(おご)}るは{此(これ)}{悪(あ)}しき{件(こと)}{咍(かな)}！",
      ],
    },
  },
  nexiju: {
    title: "六裁",
    abstract:
      "賭博で大負けした相手の不正を疑って友人を失った将軍の逸話をもとに、他人を信頼すべきであることを説きます。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  "xep-julo-e-nulowik-pi-nuxep-julo-e-lowik": {
    title: "大遠小周",
    abstract:
      "周囲の者の心を疑い、人の心を読めるようになるという龍の卵を求めた王の逸話をもとに、遠くの大きなものより近くの小さいものこそが重要なことを説きます。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  "jacamalit-lapi-pi-letit-pinacta": {
    title: "圧心享蜜",
    abstract:
      "果実と木の実を圧搾する装置を背景に、適度なプレッシャーがないと成果は得られないが、プレッシャーを与えすぎると心を壊してしまうということを説きます。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  "nip-ticotit-kije-lujot-leti-lata": {
    title: "無識字人",
    abstract:
      "文献の増やしやすさと人の増やしやすさの差をもとに、文字によって物事を表すことの大切さを説きます。",
    description: [
      "字を知らない人の「なぜ字を学ぶのか？」という問いに対する答えを通して、文字の大切さと学ぶことの価値を説くお話です。PMCF各国では教科書に載せられており、「清王謝石」と並んで知名度の高い話の一つです。",
      "最後の「与型於型無生心」は、話が写本されて伝わっていく中で後世に付け足されたものだと考えられています。",
    ],
    text: {
      japanese: [
        "字を知らない人がいた。その人は、（字を）知っている人に「なぜ字を学ぶのですか？」と質問した。",
        "（字を）知っている人は、「言葉には形がない。論を言っても、（それは）すぐに行ってしまい、無のようになってしまう（＝失われてしまう）。しかし、字を使えば、言葉は物にとどまる。したがって、教えるときに人に会わなくてもよい。人は増やせないが、（言葉を載せた）物は簡単に増やせる。だから字を学ぶのだ」と返事した。",
        "その人は「ああ！そして字を使えば死んだ人（の言葉）も聞けるのですね」と言った。",
        "その人は字を学び始め、身分の高い人となった。",
        "形のないものに形を与えることは、心を生む。",
      ],
      linmarn: [
        "無識字人在。彼言識人「何故学字乎？」",
        "識人反言「言無型。言論即激行無行。別而使字言止於物。即与学時無目人此善。人無増物軟増。此故学字。」",
        "彼言「噫！而使字力耳壊人」",
        "彼始学字而行上人。",
        "与型於型無生心。",
      ],
      withruby: [""],
    },
  },
  無識墨味: {
    title: "無識墨味",
    abstract:
      "【識墨味】というフレーズを巡る田舎者と教養人の噛み合わない会話です。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  無水与墨: {
    title: "無水与墨",
    abstract:
      "「水のない土地に墨を贈ってしまい墨が火事の燃料にしかならなかったという逸話をもとに、相手のことをよく考えて贈り物を選ぶべきであることを説きます。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  王加甘果: {
    title: "王加甘果",
    abstract:
      "見た目のみで果物を選んだ結果甘いものを逃した王の逸話をもとに、内面を見ずに人を選ぶことの危うさを説きます。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  王戦硬件: {
    title: "王戦硬件",
    abstract:
      "激務の中に身を置いていれば王でも身分を脅かされないという話をもとに、上に立つものこそが進んで困難な仕事を行うことの大切さを説きます。",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  須識字声: {
    title: "須識字声",
    abstract: "",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  王家大火: {
    title: "王家大火",
    abstract: "",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
  神之値石: {
    title: "神之値石",
    abstract: "",
    description: [""],
    text: {
      japanese: [""],
      linmarn: [""],
      withruby: [""],
    },
  },
};

export const isTitlePMCF = (
  str: string | string[] | undefined
): str is TitlePMCF => {
  if (typeof str === "object" || typeof str === "undefined") {
    return false;
  } else {
    return str in lanermeFolkloreData;
  }
};
