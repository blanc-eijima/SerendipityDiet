import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";
const pagemeta = {
  title: `特定商取引法に基づく表示 | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
  subtitle: `特定商取引法に基づく表示`, //このページの見出し
  slug: `transactions`, //このページのslug
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
const Transactions = () => {
  return (
    <>
      <Layout>
        <Section id={pagemeta.slug} svg={true} title={pagemeta.subtitle} sub={true}>
          <h1>{pagemeta.subtitle}</h1>
          <table className="legal_notice">
            <tbody>
              <tr>
                <th>役務提供事業者</th>
                <td>セレンディピティ ダイエット</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>安永 貴裕</td>
              </tr>
              <tr>
                <th>本所所在地</th>
                <td>
                  〒781-0240
                  <br />
                  高知県高知市横浜361-4
                  <br />
                  ラフィネ楠瀬201
                </td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>088-855-7879</td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>
                  <a href="mailto:contact@serendipity-ultimatediet.com">contact@serendipity-ultimatediet.com</a>
                </td>
              </tr>
              <tr>
                <th>役務の条件に関する事項</th>
                <td>リモートでのマンツーマン指導</td>
              </tr>
              <tr>
                <th>役務の対価</th>
                <td>
                  <Link to="/plan/">料金ページ</Link>
                </td>
              </tr>
              <tr>
                <th>ご利用料金以外に発生する費用</th>
                <td>銀行振込の際の手数料</td>
              </tr>
              <tr>
                <th>役務提供の形態又は方法、提供条件</th>
                <td>インターネット予約を行い、リモートでのマンツーマン指導を行う</td>
              </tr>
              <tr>
                <th>役務の提供時期</th>
                <td>会員登録完了直後</td>
              </tr>
              <tr>
                <th>支払い方法</th>
                <td>銀行振込・PAYPAL（クレジット決済）</td>
              </tr>
              <tr>
                <th>返金の取り扱い</th>
                <td>原則、不可</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </Layout>
    </>
  );
};

export default Transactions;
