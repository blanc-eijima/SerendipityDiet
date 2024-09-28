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
        <PlanBox course="silver" title="シルバーコース" price="19,800" reverse imageData={silverImageData}>
          <p>
            現状をヒヤリングして、
            <br />
            翌月の次回コンサルティングまでのプランを提案させていただきます。
          </p>

          <p>運動・食生活・生活リズムなどをどのようにしていくかをあなたの経験やライフスタイルに合わせてアドバイスいたします。</p>

          <p>通話時間はゴールドコースとプラチナコースと同様で1回60分。</p>

          <p>ビデオ通話（LINE・Skypeなど）、音声通話（固定電話・携帯電話）のどちらでも対応可能です。</p>

          <p>かなり運動慣れしている方やジム通いに慣れている方などが選択していくコースです。</p>

          <div className="paypal-bt" id="paypal-button-container-P-6TT26072SP350245JMW5RCVY"></div>
        </PlanBox>
        <PlanBox course="gold" title="ゴールドコース" price="39,800" imageData={goldImageData}>
          <p>プラン通りにダイエットと進めていったとしても途中で疑問に思うことや、もっとこうしたらいいのではないか？ と思うことが必ず出てくるし、状況も変わってくることが多々あります。</p>

          <p>同じ月にもう1度コンサルティングを行うことによって疑問を解決して、状況に応じたプランを再提案させていただくことができるのでシルバーコースよりもモチベーションを高く、更に効率的にダイエットを進めていくことができるおすすめのコースです。</p>

          <p>シルバーコースとプラチナコースと同様で通話時間は1回60分。</p>

          <p>ビデオ通話（LINE・Skypeなど）、音声通話（固定電話・携帯電話）のどちらでも対応可能です。</p>

          <div className="paypal-bt" id="paypal-button-container-P-1BH82252997389359MW5SVQA"></div>
        </PlanBox>
        <PlanBox course="platinum" title="プラチナコース" price="59,800" imageData={platinumImageData} reverse>
          <p>1ヵ月にコミュニケーションをとる一番最適な回数は3回くらいだと私は考えております。</p>

          <p>コンサルティング回数が多すぎてすぐに質問できる状況だと人は考えなくなってきます。最適なアドバイスを受けることは大事ですが、ご自分で常に考えながら行動していくことも同じくらい大事なのです。</p>

          <p>深く考えながらご自分でも調べて行動していくと新しいことを発見できたり自分の身体のことがわかってくることがよくあります。そうすることによってコンサルティング時に内容の濃い話ができます。ゴールドコースよりも１回コンサルティング回数が増えることによって、更に効率的にダイエットを行うことができてモチベーションが高い状態をキープしながら行動していくことができやすくなります。</p>

          <p>シルバーコースとゴールドコースと同様で通話時間は1回60分。</p>

          <p>シルバーコース・ゴールドコースと同様でビデオ通話（LINE・Skypeなど）、音声通話（固定電話・携帯電話）のどちらでも対応可能です。</p>

          <p>最短で結果へ導くための究極のコースです。</p>
          <div className="paypal-bt" id="paypal-button-container-P-0J602393Y2089780RMW5S4UY"></div>
        </PlanBox>
      </Section>
    </Layout>
  )
}

export default Plan
