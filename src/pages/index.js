import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"
import CourseBox from "../components/CourseBox"
import Seo from "../components/Seo"
import TopColumn from "../components/TopColumn"
import FaqTxt from "../components/FaqTxt"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { GatsbyImage } from "gatsby-plugin-image"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import { EffectFade, Autoplay } from "swiper"

const pagemeta = {
  title: `オンラインダイエットコーチング 全国対応 3ヵ月で絶大成果のパーソナルダイエット指導`, //このページのタイトル
  description: `オンラインダイエットコーチングの究極パーソナルダイエット指導はスマホがあれば究極のテクニックを身につけることができます。3ヵ月の絶大成果で婚活バッチリ、産後太りも解消。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
}

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
}

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title2={pagemeta.title} description={pagemeta.description} keyword={pagemeta.keyword} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)

export const query = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const Index = ({ data }) => {
  const [openId, setOpenId] = useState(null)
  const getImageData = (allFile, filename) => {
    const file = allFile.edges.find(({ node }) => node.base === filename)
    return file.node.childImageSharp.gatsbyImageData
  }
  const slide1ImageData = getImageData(data.allFile, "top_slide01.jpg")
  const slide2ImageData = getImageData(data.allFile, "top_slide02.jpg")
  const slide3ImageData = getImageData(data.allFile, "top_slide03.jpg")
  const slide4ImageData = getImageData(data.allFile, "top_slide04.jpg")
  const slide5ImageData = getImageData(data.allFile, "top_slide05.jpg")

  const main2ImageData = getImageData(data.allFile, "main_diet_02.jpg")
  const main3ImageData = getImageData(data.allFile, "main_diet_03.jpg")

  const voiceBefore = getImageData(data.allFile, "voice_before_01.jpg")
  const voiceAfter = getImageData(data.allFile, "voice_after_01.jpg")

  const silverImageData = getImageData(data.allFile, "course_silver.jpg")
  const goldImageData = getImageData(data.allFile, "course_gold.jpg")
  const platinumImageData = getImageData(data.allFile, "course_platinum.jpg")

  return (
    <>
      <Layout>
        <div id="mainvisual">
          <div className="txt_inner">
            <h1>
              オンラインダイエット
              <br />
              セレンディピティ
            </h1>
            <h2>
              究極の個別オンラインダイエット
              <br className="smp" />
              指導
              <br className="pc" />
              全国対応
            </h2>
            <p>
              健康で美しいボディラインを創りながら痩せていくことこれこそ私がお伝えしていくダイエット法です。
              <br />
              3ヵ月で絶大な成果。そして、うまく継続できるテクニックを伝えることがコンセプト。
            </p>
          </div>
          <div className="main_v_l"></div>
          <div className="main_v_r">
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
              slidesPerView={1}>
              <SwiperSlide>
                <GatsbyImage image={slide1ImageData} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={slide2ImageData} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={slide3ImageData} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={slide4ImageData} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <GatsbyImage image={slide5ImageData} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="terop_txt">
          <div className="terop_inner">
            <p>・利用者の全員を成功させる方針 ｜ ・簡単でも効率的に痩せていける食事指導 ｜ ・60分の運動でも痩せやすい身体を創るトレーニング指導 ｜ ・成功へ加速させる生活テクニック ｜ ・継続できる力を身につける技術</p>
          </div>
        </div>
        <Section id="diet" svg={true}>
          <div className="main_diet_box">
            <div className="main_diet_l">
              <GatsbyImage image={main2ImageData} alt="" />
            </div>
            <div className="main_diet_r">
              <h2>オンラインダイエットプログラムで得られるメリット</h2>
              <h3>
                このオンラインダイエットプログラムで
                <br className="pc" />
                解消できる悩み
              </h3>
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
                  たるんだ脚を引き締めてスタイル良くなりたい
                </li>
              </ul>
            </div>
          </div>
          <div className="main_diet_box">
            <div className="main_diet_r_2">
              <h2>セレンディピティダイエット</h2>
              <h3>美しいボディラインを創りながら痩せていくこと、これこそ私がお伝えしていくオンラインダイエットコーチングです。</h3>
              <p>
                オンラインダイエット成功の秘訣は習慣づけること！！
                <br />
                ダイエットはその時だけ一時的に行うことではなく生活習慣です。
                <br />
                健康で美しいボディラインを創るための生活習慣を身につけていくことがとても重要です。
                <br />
                更には脂肪を燃焼させるためのエンジンを備えた身体にしていくことも必要です。
                <br />
                正しいダイエットは運動と食事だけではなく生活のあらゆることと繋がっております。
                <br />
                まずは3ヵ月で絶大な成果を出していただき、そしてその後も
                <br />
                継続していけるテクニックを身につけていただきます。
                <br />
                これが私のコンセプトです。
              </p>
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
              <GatsbyImage image={main3ImageData} alt="" />
            </div>
          </div>
        </Section>
        <Section id="voice">
          <h2>オンラインダイエット</h2>
          <h3>お客様の声 Voice</h3>
          <h3>Tadashi Okada（岡田忠士）（男性）</h3>
          <hr />
          <p>42歳 身長162cm 体重60キロ ⇒ 53キロ 7ヵ月</p>

          <div className="voice_img">
            <div className="voice_img_inner">
              <p>Before</p>
              <GatsbyImage image={voiceBefore} alt="" />
            </div>
            <div className="voice_img_inner">
              <p>After</p>
              <GatsbyImage image={voiceAfter} alt="" />
            </div>
          </div>

          <p>自宅トレーニングで成功。究極、文句を言う前にイヤでもやることです。</p>
          <p>自分は週に4～5回のペースで運動をやってます。</p>
          <p>心掛けたことはたくさんありますが、継続してやること、ハイカロリーの物を極力食べない、加工食品やポテチ、揚げ物、お菓子など脂質の多い物を食べない、水分を多く摂ることを心掛けたがジュースやお酒は飲まない、筋肉が喜ぶ栄養素であるタンパク質と白米（炭水化物）と摂る、朝に大量の排泄を出す、人口調味料などのアステルパームもできるだけ避けてきた。</p>
          <p>習慣づけばもうこっちのもの。</p>
          <p>寝起きが良くなり、睡眠の質もだいぶ上がり、時間を上手く使えるようにもなったのがわかります。</p>
          <p>健康診断でコレステロール値が若干高めと言われていたが筋トレと食事改善で次の年の健康診断はバッチリ！</p>
          <p>1日2食などを試しましたが、結果的に3食摂るほうが良いこともわかった。</p>
          <p>筋トレしだして代謝が上がったので風邪をひかなくなりました。</p>
          <p>身体に変化が出てきたら自分に自信もついてきた。</p>
          <p>褒められたら嬉しかったし、やってきて、頑張ってきて良かったと思う。</p>
          <p>筋トレはメリットしかない。お金はかからないしどこでもできる。</p>
          <p>すぐに結果を求めすぎてもダメ、すぐに結果が出ないからこそ面白いと自分は思います。</p>

          <h3 className="mt60">R Kawaguchi（女性）</h3>
          <hr />
          <p>35歳 身長157cm 体重55キロ ⇒ 46キロ 10ヵ月</p>
          <p>Before・Afterの写真は本人の希望により非公開です</p>

          <p>自宅トレーニングで成功。まずは運動のモチベーションを上げるために自分が気に入ったウエアを購入することからスタートしました。</p>
          <p>運動は週に3～4回でやってます。</p>
          <p>鶏むね肉メインでたくさん食べて、根菜をいっぱい摂り、食物繊維もいっぱい摂った、豆乳を毎日飲み、飲み物は水メインでたくさん飲むことを心掛け、お菓子、ジャンクフード、揚げ物を食べないようにして、小麦を使っている食べ物を控え、チートデイは月に４～５回つくってます。</p>
          <p>本気でダイエットをはじめる以前は、ご飯食べれんと痩せた時って見ため的にもやつれた感じで健康的じゃなくて全然体調も良くないし、髪抜けやすいし、パサパサになるし、顔もカサカサになったし、安永さんが言うように、ご飯食べずに体重減るとほんとにすぐにリバウンドする！</p>
          <p>1週間2キロ痩せたのにそのあと4キロ増えるとか！</p>
          <p>最近体重増えてきたなと思って食事内容変えるんじゃなくて、お昼は好きなもの好きなだけ食べて、夜ご飯を食べなかったら1週間で2キロ痩せたのに晩ご飯も食べるように戻したら１週間で４キロ増えたんです。</p>
          <p>本気でダイエットをはじめて上手くいってからは肌のザラつきがツルツルしてきて、吹き出物が出来にくくなったし、チョコを食べたら吹き出物が出やすかった肌質が出にくくなった。</p>
          <p>胃がもたれにくくなったし、朝に目覚めが良くなった。</p>
          <p>お腹が空いていない時は無理に食べないことも試してみましたが、きちんと３食摂るほうが良いことがわかった。</p>
          <p>続けていって結果が出た時は、服を着た時にわかりました。</p>
          <p>今まで着るていた感覚とは違った着心地で、ぴったりしていたのがゆったり着れるようになった。</p>
          <p>後から気付いたけど時間の使い方も考えていた。</p>
          <p>1番嬉しかったのって、停滞期みたいな時期を乗り越えた時です。</p>
          <p>あの時に諦めずに続けてよかったと思ったって思いました。</p>
          <p>維持するために今も継続しています。</p>
        </Section>

        <Section id="qa" className="qa-section">
          <h2 className="qa-title">オンラインダイエットQ&A</h2>

          <div className="qa-container">
            <FaqTxt no="1" title="ビデオ通話での１回の通話時間はどれくらいですか？" openId={openId} setOpenId={setOpenId}>
              基本的には60分です。長く話をすれば良いと言うものではなく、現状に対しての大事な要点を端的に話していきます。初回は更に長めに時間をとってもらうことが多いです。
            </FaqTxt>

            <FaqTxt no="2" title="仕事の休憩時間や喫茶店から、移動時間や待ち時間などの隙間時間なでもビデオ通話を受けてもらえますか？" openId={openId} setOpenId={setOpenId}>
              隙間時間などでのビデオ通話は絶対にお断りしております。自宅の個室で必ず１人になっていただき、このために時間をとっていただきます。きちんとした質の高いビデオ通話を行うためです。やるからには真剣に向き合います。
            </FaqTxt>

            <FaqTxt no="3" title="夜勤がある仕事をしておりますが、それでもダイエットを成功させることができますか？" openId={openId} setOpenId={setOpenId}>
              ご本人の徹底次第ですが夜勤がある仕事をしていても成功は可能です。但し朝から夕方までの勤務よりは夜勤があるほうが状況的に不利になってくるため他の部分でカバーすることが大事になってきます。状況に応じてカバーの仕方をお伝えしていきます。
            </FaqTxt>

            <FaqTxt no="4" title="オンラインダイエットの月額の料金以外にもお金はかかってきますか？" openId={openId} setOpenId={setOpenId}>
              お金はかかります。トレーニングウエアやシューズ、その他の消耗品などを購入する費用。ジムへ通う場合は、その費用や移動費が代表的な費用です。自宅トレーニングを行う場合は、自宅に簡単な器具を揃えたりするとその費用がかかってきます。
            </FaqTxt>

            <FaqTxt no="5" title="がんばれば1ヵ月で理想の体型になることは可能ですか？" openId={openId} setOpenId={setOpenId}>
              それまでの過程と環境によるので一概には言えませんが、これからダイエットを始めようとする人は1ヵ月で理想の体型になることは厳しい場合が多いです。3ヵ月は必要だと考えてください。最初は体重を落とすよりも脂肪を燃やせる身体を創ることに重点を置くことだ大事です。ダイエットはその時だけ行うものではなく生活習慣を身につけると思ってください。
            </FaqTxt>

            <FaqTxt no="6" title="食事制限は必要ですか？" openId={openId} setOpenId={setOpenId}>
              食事制限は必ず必要ですが３食をきちんと食べます。食事制限と言ってもただ無暗に食事量を減らすわけではなく制限のかけ方やコントロールの仕方をお伝えしていきます。どのタイミングでどういう物を食べることが効率的なのかを知ることが大事なのです。
            </FaqTxt>

            <FaqTxt no="7" title="お酒は飲まないほうが良いですか？" openId={openId} setOpenId={setOpenId}>
              お酒は有害のため、できるだけ飲まないように案内しております。完全に辞めてくださいと言うわけではございませんが、もし飲むとしても1ヵ月に1回や2週間に1回などある程度の頻度や量を決めて、自己管理できるようになっていただきたいです。
            </FaqTxt>

            <FaqTxt no="8" title="１回の運動時間はどれくらいが理想ですか？" openId={openId} setOpenId={setOpenId}>
              最初は時間がかかったとしても60分くらいでタンッ！タンッ！タンッ！と進めていくほうが効率的なのです。
            </FaqTxt>

            <FaqTxt no="9" title="運動は週に何回くらい行えば良いですか？" openId={openId} setOpenId={setOpenId}>
              時と場合と状況によって変わりますが週に3回もしくは4回くらいの運動で継続するのが理想です。
            </FaqTxt>

            <FaqTxt no="10" title="自宅トレーニングでもダイエットを成功させることができますか？" openId={openId} setOpenId={setOpenId}>
              自宅トレーニングでも成功は可能です。実際に自宅トレーニングで成功している人もいます。ジムのほうが行えることが多く、モチベーションが維持できて出力もアップします。自宅と違って大きな鏡があるので自分の体型を毎回確認できる利点もありますが、どうしてもジムへ通えない環境の方もいます。そういう方には自宅でできるトレーニング法をお伝えしていきます。
            </FaqTxt>

            <FaqTxt no="11" title="運動経験がなくても大丈夫でしょうか？" openId={openId} setOpenId={setOpenId}>
              真面目に取り組めば大丈夫です。学生時代以来運動をしていなかった人もたくさんいます。最初はペースをつかむまでに苦労することもあると思いますが本人の強い意志と徹底の仕方次第です。
            </FaqTxt>
          </div>
        </Section>

        <Section id="course">
          <h2>オンラインダイエット PLAN</h2>
          <div className="flex-wrap">
            <CourseBox course="silver" title="シルバーコース" courseTxt="数年間ダイエットを真剣に継続していて、運動熟練者なのに何故か思うようにうまくいかない方にお勧めのコース。" imageData={silverImageData} />
            <CourseBox course="gold" title="ゴールドコース" courseTxt="いろいろ試したし食事も運動もそれなりに気を遣ったのに続かなかったり、うまくいかなかった方にお勧めのコース。" imageData={goldImageData} recommended={true} />
            <CourseBox course="platinum" title="プラチナコース" courseTxt="着実に知識をつけていきながら確実に結果を残していきたい方にお勧め。最短で結果へ導く究極のコースです！！" imageData={platinumImageData} />
          </div>
        </Section>

        <Section id="column">
          <h2>オンラインダイエットColumn</h2>
          <TopColumn />
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
  )
}

export default Index
