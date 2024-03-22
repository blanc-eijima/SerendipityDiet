import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";

const pagemeta = {
  title: `About us | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
  subtitle: `About`, //このページの見出し
  slug: `about`, //このページのslug
};
const siteurl = "https://serendipity-ultimatediet.com/";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: `${siteurl}`,
          name: "ホーム",
        },
        {
          "@type": "ListItem",
          position: 2,
          item: `${siteurl}${pagemeta.slug}/`,
          name: `${pagemeta.subtitle}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteurl}${pagemeta.slug}/`,
      url: `${siteurl}${pagemeta.slug}/`,
      name: `${pagemeta.title}`,
      description: `${pagemeta.description}`,
      inLanguage: "ja",
      isPartOf: { "@id": `${siteurl}#website` },
      breadcrumb: { "@id": `${siteurl}#breadcrumblist` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteurl}#website`,
      url: `${siteurl}`,
      name: `オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`,
      description: `究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。`,
      publisher: {
        "@type": "Organization",
        name: "SerendipityUltimatediet",
        url: `${siteurl}`,
      },
      inLanguage: "ja",
    },
  ],
};

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title2={pagemeta.title} description={pagemeta.description} keyword={pagemeta.keyword} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
);

const About = () => {
  return (
    <>
      <Layout>
        <Section id="about" svg={true} title={pagemeta.subtitle} sub={true}>
          <h1>{pagemeta.subtitle}</h1>
          <h2>ボディメイクインストラクター</h2>
          <h3>安永 貴裕</h3>
          <div className="prof_box">
            <div className="prof_img">
              <img src="/images/profile_img.jpg" width={360} height={479} alt="" />
            </div>
            <div className="prof_txt">美しいボディラインを創りながら痩せていくこと”これこそ私がお伝えしていくダイエット法です。 この先で継続していける能力を身につけて“6ヵ月～1年の間に卒業していってもらうこと”をコンセプトに掲げております。 私は「本当のダイエットは、美しい見た目と健康とともにあるべき」だと考えております。 実は、以前の私はアスリートだった頃、身長174ｃｍで体重68ｋｇあり、体脂肪は推定で14％くらいありました。 運動量が多いのに、いろんなことをどんなに工夫しても無駄な脂肪が落ちず、身体がしぼれませんでした。 強度の高いトレーニングにキツイ食事制限を長期間行ったことで体調を崩してドクターストップがかかりました。 「私は本当に大丈夫なのだろうか？」と不安になりました。 しかし、体調を崩した原因（過度のトレーニング、キツイ食事制限）を一番理解していたのは自分自身でした。やがて年月が経ち年齢的なこともあって競技会に出場しなくなりました。 運動自体は継続しておりましたがアスリート時代の約3分の1程です。 そこから、あることをきっかけに生活習慣が変わりました。その途端に何も意識しなくても、どんどん体脂肪が落ちていき、明らかに見た目で身体がしぼれていきました。測定すると、68ｋｇあった体重が61ｋｇへ減っており、体脂肪率は6.5％までたったの2ヵ月で落ちました。 更にその2ヵ月後には体重59ｋｇで体脂肪率5.6％まで落ちたのです。 この間に炭水化物（糖質）を抜いたり、1食減らしたりすることはしておりませんし、サプリメントなども摂取しておりません。 ダイエットはいかに正しい知識を得て効率よく生活していくことが重要であるかをわからされました。 この体験で得た感動はとても素晴らしいものでした。</div>
          </div>

          <h2>Mission</h2>

          <h3>私の使命</h3>

          <p>この感動した経験を活かしてダイエット指導でたくさんの方々に伝えていきたいと考え、知識を深めるためにダイエット系の資格を取得しました。 更には人によって仕事や生活環境が違うため、その人に的確なアドバイスができるようにするために、長期間に渡ってたくさんのダイエット法を自分自身の身体で試してきました。 美しいボディラインで痩せるためには必ず運動が必要になってきます。 普段の食事だけで体脂肪を落とそうとしても筋肉が年々少なくなっていっているので脂肪を燃やすための基礎代謝があがりにくいため美しいボディラインができあがりません。 運動が必要なことを話すとほとんどの人は『どんな運動をしたらいいかがわからない。』こう言います。 基礎代謝を上げて美しいボディラインを創るためにはどこを鍛えて、どのように運動していって、どういう物を食べて行けばいいのか、どういうふうに生活を送っていったらいいのかをご指導させていただきます。 私の取り組みは、1週間や1ヵ月で劇的に変わることはありません。 なぜかというと、1ヵ月で落として健康に害がないのは体重の約5％が限度です。それに、最初は基礎代謝を上げて脂肪を燃やせるための土台を創ることから始めなければいけません。私が2ヵ月でスムーズに7ｋｇ落ちたのは土台ができていたからなのです。 6ヵ月以上はお付き合いできる方をお待ちしております。 人によって仕事や生活環境が違うことは当然なので、あなたの現状と今のお気持ちを徹底的にヒヤリングして、最善の方法を提案させていただきます。 効率的に痩せるためには正しい知識を習得し、効率よく生活の中に組み込んでいく必要があります。今までずっと続けていたことを変えるのは容易ではありません。むしろ正しいダイエットを続けていくうえではそこが一番辛いところだと考えております。 痩せたい、スタイルが良くなりたいと本気で願望を持って申し込んでくれる方には、あなたに寄り添い、誠心誠意で私も本気で対応させていただきます。 今までいろいろ試してきたけど成功しなかった方やダイエット指導を受けたことがあるけど続かなかった方も大歓迎です。 男女は問いません。 運動経験の有無も問いません。</p>
        </Section>
      </Layout>
    </>
  );
};
export default About;
