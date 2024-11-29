/* global paypal */
import React, { useEffect } from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import PlanBox from "../components/PlanBox"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
const pagemeta = {
  title: `PLAN | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `月額制のオンラインダイエットプラン。シルバー、ゴールド、プラチナの3コースから、ライフスタイルに合わせて選択可能。食事・運動・生活習慣の改善で効率的なダイエットを。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
  subtitle: `PLAN`, //このページの見出し
  slug: `plan`, //このページのslug
}
const siteurl = "https://serendipity-ultimatediet.com/"
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
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
const Plan = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.paypal.com/sdk/js?client-id=AVTYHg0Thk_lq_XB4OK8wk4YpcFj2ZrzeLwXI5q29Jp00W2T7tGnGyk5r-V7VegbBst52HyHIj749Uka&vault=true&intent=subscription"
    script.addEventListener("load", () => {
      // シルバーコースのPayPalボタン
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription: function (data, actions) {
            return actions.subscription.create({
              plan_id: "P-6TT26072SP350245JMW5RCVY",
            })
          },
          onApprove: function (data, actions) {
            alert(data.subscriptionID)
          },
        })
        .render("#paypal-button-container-P-6TT26072SP350245JMW5RCVY")

      // ゴールドコースのPayPalボタン
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription: function (data, actions) {
            return actions.subscription.create({
              plan_id: "P-1BH82252997389359MW5SVQA",
            })
          },
          onApprove: function (data, actions) {
            alert(data.subscriptionID)
          },
        })
        .render("#paypal-button-container-P-1BH82252997389359MW5SVQA")

      // プラチナコースのPayPalボタン
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription: function (data, actions) {
            return actions.subscription.create({
              plan_id: "P-0J602393Y2089780RMW5S4UY",
            })
          },
          onApprove: function (data, actions) {
            alert(data.subscriptionID)
          },
        })
        .render("#paypal-button-container-P-0J602393Y2089780RMW5S4UY")
    })
    document.body.appendChild(script)
  }, [])

  const getImageData = (allFile, filename) => {
    const file = allFile.edges.find(({ node }) => node.base === filename)
    return file.node.childImageSharp.gatsbyImageData
  }
  const silverImageData = getImageData(data.allFile, "course_silver.jpg")
  const goldImageData = getImageData(data.allFile, "course_gold.jpg")
  const platinumImageData = getImageData(data.allFile, "course_platinum.jpg")

  return (
    <Layout>
      <Section title={pagemeta.subtitle} sub={true} id={pagemeta.slug} svg={true}>
        <h1>オンラインダイエット{pagemeta.subtitle}</h1>
        <PlanBox course="silver" title="シルバーコース" price="15,800" reverse imageData={silverImageData}>
          <p>60分のビデオ通話を1ヵ月に1回のコース。</p>

          <p>30分のビデオ通話を1ヵ月に2回でもOK。</p>

          <p>基本的にはビデオ通話（LINE・Skypeなど）ですが、音声通話（固定電話・携帯電話）でも対応可能です。</p>

          <p>
            現状をヒヤリングして、
            <br />
            次回コンサルティングまでのダイエットの進め方を提案させていただきます。
          </p>

          <p>運動・食生活・生活リズムなどをどのようにしていくかをあなたの経験やライフスタイルに合わせてアドバイスいたします。</p>

          <p>かなり運動慣れしている方や自宅トレーニングもしくはジム通いに慣れている方などが選択していくコースです。</p>
          <div className="paypal-bt" id="paypal-button-container-P-6TT26072SP350245JMW5RCVY"></div>
        </PlanBox>
        <PlanBox course="gold" title="ゴールドコース" price="29,800" imageData={goldImageData} recommended={true}>
          <p>60分のビデオ通話を1ヵ月に2回のコース。</p>

          <p>60分のビデオ通話を1回と、30分のビデオ通話を2回でもOK。</p>

          <p>基本的にはビデオ通話（LINE・Skypeなど）ですが、音声通話（固定電話・携帯電話）でも対応可能です。</p>

          <p>プラン通りにダイエットと進めていったとしても途中で疑問に思うことや、もっとこうしたらいいのではないか？ と思うことが必ず出てくるし、状況も変わってくることが多々あります。</p>

          <p>シルバーコースよりもコンサルティング回数を多くすることによって疑問を解決し、状況に応じて軌道を修正させながら進めていくことができるのでシルバーコースよりもモチベーションを高く、更に効率的にダイエットを進めていくことができるオススメのコースです。</p>

          <div className="paypal-bt" id="paypal-button-container-P-1BH82252997389359MW5SVQA"></div>
        </PlanBox>
        <PlanBox course="platinum" title="プラチナコース" price="39,800" imageData={platinumImageData} reverse>
          <p>60分のビデオ通話を1ヵ月に3回のコース。</p>

          <p>60分のビデオ通話を2回と、30分のビデオ通話を2回でもOK。</p>

          <p>もしくは60分のビデオ通話を1回と、30分のビデオ通話を4回でもOK。</p>

          <p>基本的にはビデオ通話（LINE・Skypeなど）ですが、音声通話（固定電話・携帯電話）でも対応可能です。</p>

          <p>基本的には初心者の方でもゴールドコースで問題ないと思いますが、更に着実に知識をつけながら成果を出したい方にお勧めのコース。</p>

          <p>最初は右も左もわからないので人一倍不安に思っている方も安心。</p>

          <p>ゴールドコースよりもコンサルティング回数が増えることによって、不安が解消されて更に効率的にダイエットの成果を出せやすくなり、モチベーションが高い状態をキープしながら行動していくことができやすくなります。</p>
          <div className="paypal-bt" id="paypal-button-container-P-0J602393Y2089780RMW5S4UY"></div>
        </PlanBox>
      </Section>
    </Layout>
  )
}

export default Plan
