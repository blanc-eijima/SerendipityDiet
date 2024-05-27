import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const pagemeta = {
  title: `About us | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `ボディメイクインストラクター安永貴裕が、あなたに寄り添い最適なダイエット方法を提案。正しい知識と継続的なサポートで理想の体型を目指します。男女・運動経験不問。`, //このページのディスクリプション
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
          <h1>オンラインダイエット{pagemeta.subtitle}</h1>
          <h2>ボディメイクインストラクター</h2>
          <h3>安永 貴裕</h3>
          <div className="prof_box">
            <div className="prof_img">
              <img src="/images/profile_img.jpg" width={360} height={479} alt="" />
            </div>
            <div className="prof_txt">
              <p>美しいボディラインを創りながら痩せていくこと”これこそ私がお伝えしていくダイエット法です。</p>
              <p>この先で継続していける能力を身につけて“6ヵ月～1年の間に卒業していってもらうこと”をコンセプトに掲げております。</p>
              <p>私は「本当のダイエットは、美しい見た目と健康とともにあるべき」だと考えてます。</p>
              <p>実は、以前の私はアスリートだった頃、身長174㎝で体重68㎏あり、体脂肪は推定で14%くらいありました。</p>
              <p>運動量が多いのに、いろんなことをどんなに工夫しても無駄な脂肪が落ちず、身体がしぼれなかったのです。</p>
              <p>強度の高いトレーニングにキツイ食事制限を長期間行ったことで体調を崩してドクターストップがかかり「私は本当に大丈夫なのだろうか？」と不安になりました。</p>
              <div className="prof_img_intxt">
                <img src="/images/liver.jpg" width={400} alt="肝臓" />
              </div>
              <p>しかし、体調を崩した原因（過度のトレーニング、キツイ食事制限）を一番理解していたのは自分自身でした。</p>
              <p>やがて年月が経ち年齢的なこともあって競技会に出場しなくなりました。</p>
              <p>運動自体は継続しておりましたがアスリート時代の約3分の1程です。</p>
              <p>そこから、あることをきっかけに生活習慣が変わり、何も意識しなくてもどんどん体脂肪が落ちていき、明らかに見た目で身体がしぼれていったのです。</p>
              <div className="prof_img_intxt">
                <img src="/images/mirror.jpg" width={400} alt="鏡の前" />
              </div>
              <p>測定すると、68㎏あった体重が61㎏へ減っており、体脂肪率は6.5%までたったの2ヵ月で落ちました。</p>
              <p>更にその2ヵ月後には体重59㎏で体脂肪率5.6%まで落ちたのです。</p>
              <p>この間に炭水化物（糖質）を抜いたり、1食減らしたりすることはしておりませんし、サプリメントなども摂取しておりません。</p>
              <p>ダイエットはいかに正しい知識を得て効率よく生活していくことの大切さがわかりました。</p>
              <p>この体験で得た感動はとても素晴らしいものでした。</p>
            </div>
          </div>

          <h2>Mission</h2>

          <h3>私の使命</h3>

          <p>この感動した経験を活かしてダイエット指導でたくさんの方々に伝えていきたいと考え、知識を深めるためにダイエット系の資格を取得しました。</p>

          <p>更には人によって仕事や生活環境が違うため、その人に的確なアドバイスができるようにするために、長期間に渡ってたくさんのダイエット法を自分自身の身体で試してきました。</p>
          <p>美しいボディラインで痩せるためには必ず運動が必要になってきます。</p>
          <p>普段の食事だけで体脂肪を落とそうとしても筋肉が年々少なくなっていっているので脂肪を燃やすための基礎代謝があがりにくいため美しいボディラインができあがりません。</p>
          <div className="prof_img_intxt">
            <img src="/images/dumbbell.jpg" width={400} alt="ダンベル" />
          </div>
          <p>運動が必要なことを話すとほとんどの人は『どんな運動をしたらいいかがわからない。』こう言います。</p>
          <p>基礎代謝を上げて美しいボディラインを創るためにはどこを鍛えて、どのように運動していって、どういう物を食べて行けばいいのか、どういうふうに生活を送っていったらいいのかをご指導させていただきます。</p>
          <p>私の取り組みは、1週間や1ヵ月で劇的に変わることはありません。</p>
          <p>なぜかというと、1ヵ月で落として健康に害がないのは体重の約5%が限度です。</p>
          <p>それに、最初は基礎代謝を上げて脂肪を燃やせるための土台を創ることから始めなければいけません。</p>
          <p>私が2ヵ月でスムーズに7㎏落ちたのは土台ができていたからなのです。</p>
          <p>6ヵ月以上はお付き合いできる方をお待ちしております。</p>
          <div className="prof_img_intxt">
            <img src="/images/note.jpg" width={400} alt="ノート" />
          </div>
          <p>人によって仕事や生活環境が違うことは当然なので、あなたの現状と今のお気持ちを徹底的にヒヤリングして、最善の方法を提案させていただきます。</p>
          <p>効率的に痩せるためには正しい知識を習得し、効率よく生活の中に組み込んでいく必要があります。</p>
          <p>今までずっと続けていたことを変えるのは容易ではありません。むしろ正しいダイエットを続けていくうえではそこが一番辛いところだと考えております。</p>
          <p>痩せたい、スタイルが良くなりたいと本気で願望を持って申し込んでくれる方には、あなたに寄り添い、誠心誠意で私も本気で対応させていただきます。</p>
          <p>今までいろいろ試してきたけど成功しなかった方やダイエット指導を受けたことがあるけど続かなかった方も大歓迎です。</p>
          <p>男女は問いません。 運動経験の有無も問いません。</p>
        </Section>

        <Section id="soudan">
          <h2>まずは電話で無料相談。</h2>
          <p>
            コーチング中など電話に出れないことが多いので、まずは下記フォームから無料電話相談をお申込みください。
            <br className="pc" />
            こちらから折り返させていただき、無料電話相談（ビデオ通話も可能）の日程を打合せさせていただきます。
          </p>

          <ul className="list01">
            <li>
              <FontAwesomeIcon icon={faCheck} />
              30歳を過ぎてお腹がポッコリと出てきた
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              産後から体型が急激に崩れた
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              40歳を過ぎてから背中や腕に脂肪がついたので夏に薄着ができない
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              キレイに痩せて婚活をしたい
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              たるんだ脚を引き締めてスタイル良くなりたい
            </li>
          </ul>
          <p>
            <Link to="/denwa-soudan/" className="bt01" role="button">
              無料電話相談を今すぐ申し込む
            </Link>
          </p>
        </Section>
      </Layout>
    </>
  );
};
export default About;
