import React from "react";
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

const index = () => {
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
              <h3>美しいボディラインを創りながら痩せていくこと”これこそ私がお伝えしていくダイエット法です。</h3>
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
        <Section id="column">
          <h2>Column</h2>
          <TopColumn />
        </Section>
      </Layout>
    </>
  );
};
export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo />
  </>
);
export default index;
