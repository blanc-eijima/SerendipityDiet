import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CourseBox from "../components/CourseBox";
import Seo from "../components/Seo";
import TopColumn from "../components/TopColumn";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { EffectFade, Autoplay } from "swiper";

const pagemeta = {
  title: `オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: "https://serendipity-ultimatediet.com/",
          name: "ホーム",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://serendipity-ultimatediet.com/#website",
      url: "https://serendipity-ultimatediet.com/",
      name: `${pagemeta.title}`,
      description: `${pagemeta.description}`,
      publisher: {
        "@type": "Organization",
        name: "SerendipityUltimatediet",
        url: "https://serendipity-ultimatediet.com/",
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
const Index = () => {
  const [openId, setOpenId] = useState(null); // 初期状態では何も開いていない

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id); // 現在開いている質問を閉じるか、新しい質問を開く
  };

  return (
    <>
      <Layout>
        <Section id="diet" svg={true}>
          <div className="main_diet_box">
            <div className="main_diet_l">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect={"fade"}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <StaticImage src="../images/top_slide01.jpg" width={480} height={320} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage src="../images/top_slide02.jpg" width={480} height={320} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage src="../images/top_slide03.jpg" width={480} height={320} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage src="../images/top_slide04.jpg" width={480} height={320} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <StaticImage src="../images/top_slide05.jpg" width={480} height={320} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="main_diet_r">
              <h1>オンラインダイエット</h1>
              <h2>栄養学 ワークアウト モチベーション</h2>
              <h3>
                <span className="txt20">究極の個別オンラインダイエット指導　全国対応</span>
                <br />
                セレンディピティ ダイエット
              </h3>
              <p>
                美しいボディラインを創りながら痩せていくこと”これこそ私がお伝えしていくダイエット法です。
                <br />
                この先で継続していける能力を身につけて“6ヵ月～1年”の間に卒業していってもらうこと”をコンセプトに掲げております。
              </p>
            </div>
          </div>
          <div className="main_diet_box">
            <div className="main_diet_l">
              <img src="/images/main_diet_02.jpg" alt="" />
            </div>
            <div className="main_diet_r">
              <h2>オンラインダイエットプログラムで得られるメリット</h2>
              <h3>このオンラインダイエットプログラムで解消できる悩み</h3>
              <p>以下のような悩みをお持ちの方が理想の体型へと変わっていくためのサポートをさせていただきます。</p>
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
                  たるんだ脚を引き締めて露出したい
                </li>
              </ul>
            </div>
          </div>
          <div className="main_diet_box">
            <div className="main_diet_r_2">
              <h2>セレンディピティダイエット</h2>
              <h3>美しいボディラインを創りながら痩せていくこと”これこそ私がお伝えしていくオンラインダイエットコーチングです。</h3>
              <p>
                私は「本当のダイエットは、美しい見た目と健康とともにあるべき」だと考えております。
                <br />
                実は、以前の私はアスリートだった頃、身長174cmで体重68kgあり、体脂肪は推定で14%くらいありました。運動量が多いのに、いろんなことをどんなに工夫しても無駄な脂肪が落ちず、身体がしぼれませんでした。強度の高いトレーニングにキツイ食事制限を長期間行ったことで体調を崩してドクターストップがかかりました。
              </p>
              <p className="center">
                <Link to="/about/" className="bt01">
                  もっと詳しく
                </Link>
              </p>
            </div>
            <div className="main_diet_l_2">
              <img src="/images/main_diet_03.png" width={480} height={535} alt="" />
            </div>
          </div>
        </Section>
        <Section id="course">
          <div className="flex-wrap">
            <CourseBox course="silver" title="シルバーコース" />
            <CourseBox course="gold" title="ゴールドコース" />
            <CourseBox course="platinum" title="プラチナコース" />
          </div>
        </Section>

        <Section id="qa" className="qa-section">
          <h2 className="qa-title">オンラインダイエットQ&A</h2>
          <div className="qa-container">
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(1)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(1);
                }}
              >
                ビデオ通話での１回の通話時間はどれくらいですか？
              </button>
              <p className={`qa-answer ${openId === 1 ? "open" : ""}`}>基本的には３０分～４０分の間です。長く話をすれば良いと言うものではなく、現状に対しての大事な要点を端的に話していきます。初回は長めに時間をとってもらうことが多いです。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(2)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(2);
                }}
              >
                仕事の休憩時間や喫茶店から、移動時間や待ち時間などの隙間時間なでもビデオ通話を受けてもらえますか？
              </button>
              <p className={`qa-answer ${openId === 2 ? "open" : ""}`}>隙間時間などでのビデオ通話は絶対にお断りしております。自宅の個室で必ず１人になっていただき、このために時間をとっていただきます。きちんとした質の高いビデオ通話を行うためです。やるからには真剣に向き合います。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(3)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(3);
                }}
              >
                夜勤がある仕事をしておりますが、それでもダイエットを成功させることができますか？
              </button>
              <p className={`qa-answer ${openId === 3 ? "open" : ""}`}>ご本人の徹底次第ですが夜勤がある仕事をしていても成功は可能です。但し朝から夕方までの勤務よりは夜勤があるほうが状況的に不利になってくるため他の部分でカバーすることが大事になってきます。状況に応じてカバーの仕方をお伝えしていきます。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(4)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(4);
                }}
              >
                オンラインダイエットの月額の料金以外にもお金はかかってきますか？
              </button>
              <p className={`qa-answer ${openId === 4 ? "open" : ""}`}>お金はかかります。トレーニングウエアやシューズ、その他の消耗品などを購入する費用。ジムへ通ったりする費用や移動費が代表的な費用です。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(5)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(5);
                }}
              >
                がんばれば一ヵ月で理想の体型になることは可能ですか？
              </button>
              <p className={`qa-answer ${openId === 5 ? "open" : ""}`}>それまでの過程と環境によるので一概には言えませんが、これからダイエットを始めようとする人は一ヵ月で理想の体型になることは厳しいです。６ヵ月以上の長期戦で考えてください。１ヵ月で落ちてよいのは体重の５％が限度です。最初は体重を落とすよりも脂肪を燃やせる身体を創ることに重点を置かないといけないので短期戦ではないのです。ダイエットはその時だけ行うものではなく生活習慣と思ってください。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(6)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(6);
                }}
              >
                食事制限は必要ですか？
              </button>
              <p className={`qa-answer ${openId === 6 ? "open" : ""}`}>食事制限は必ず必要ですが３食をきちんと食べます。食事制限と言ってもただ無暗に食事量を減らすわけではなく制限のかけ方やコントロールの仕方をお伝えしていきます。どのタイミングでどういう物を食べることが効率的なのかを知ることが大事なのです。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(7)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(7);
                }}
              >
                お酒は飲まないほうが良いですか？
              </button>
              <p className={`qa-answer ${openId === 7 ? "open" : ""}`}>お酒は有害のため、できるだけ飲まないように案内しております。完全に辞めてくださいと言うわけではございませんが、もし飲むとしても１ヵ月に１回や２週間に１回などある程度の頻度や量を決めて、自己管理できるようになっていただきたいです。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(8)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(8);
                }}
              >
                １回の運動時間はどれくらいが理想ですか？
              </button>
              <p className={`qa-answer ${openId === 8 ? "open" : ""}`}>約６０分くらいです。ダイエットを成功させる運動（トレーニング）は長時間行えば良いというものではなく、結果に繋がる正しいことを効率的にできているかが重要です。変化をつけるために運動の時間を時々長くすることも良いですが、そもそも人間の集中力は何時間も持つものではありません。最初は時間がかかったとしても６０分くらいでタンッ！タンッ！タンッ！と進めていくほうが効率的なのです。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(9)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(9);
                }}
              >
                運動は週に何回くらい行えば良いですか？
              </button>
              <p className={`qa-answer ${openId === 9 ? "open" : ""}`}>時と場合と状況によって変わりますが週に４回くらいの運動で継続するのが理想です。むやみに毎日行えば良いというものではありません。身体は休ませることも必要です。大切なことは正しいトレーニング（運動）を行えているかと継続できているかです。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(10)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(10);
                }}
              >
                自宅トレーニングでもダイエットを成功させることができますか？
              </button>
              <p className={`qa-answer ${openId === 10 ? "open" : ""}`}>できなくはないですが、筋力トレーニングはジムで行うように案内しております。自宅よりジムのほうが行えることが多く、モチベーションが維持できて出力もアップします。自宅と違って大きな鏡の前でトレーニングをできるため正しいフォームで行える利点もあり、自分の体型も毎回確認することができます。</p>
            </div>
            <div className="qa-item">
              <button
                className="qa-question"
                onClick={() => toggleOpen(11)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") toggleOpen(11);
                }}
              >
                運動経験がなくても大丈夫でしょうか？
              </button>
              <p className={`qa-answer ${openId === 11 ? "open" : ""}`}>真面目に取り組めば大丈夫です。学生時代以来運動をしていなかった人もたくさんいます。最初はペースをつかむまでに苦労することもあると思いますが本人の強い意志と徹底の仕方次第です。</p>
            </div>
          </div>
        </Section>

        <Section id="column">
          <h2>オンラインダイエットColumn</h2>
          <TopColumn />
        </Section>
      </Layout>
    </>
  );
};

export default Index;
