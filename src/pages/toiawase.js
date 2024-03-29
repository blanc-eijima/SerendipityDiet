import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";
const pagemeta = {
  title: `Contact | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `オンラインダイエットプログラムに関するご質問・ご相談はこちらのフォームよりお問い合わせください。専門スタッフが丁寧にご対応いたします。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
  subtitle: `Contact`, //このページの見出し
  slug: `toiawase`, //このページのslug
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
          item: `${siteurl}${pagemeta.parentSlug}/`,
          name: `${pagemeta.parentTitle}`,
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
const Toiawase = () => {
  return (
    <>
      <Layout>
        <Section id="contact" svg={true} title={pagemeta.subtitle} slug={pagemeta.parentSlug} sub={true}>
          <h1>{pagemeta.subtitle}</h1>
          <h2>お問い合わせフォーム</h2>
          <p>
            <span className="must">必須</span>は必ずご入力ください。
          </p>
          <form action="https://ssgform.com/s/zg5XZZHyWBqQ" method="post" id="mailform">
            <div style={{ display: "none" }}>
              <input type="text" name="wana" />
            </div>
            <table className="form">
              <tbody>
                <tr>
                  <th>
                    お名前<span className="must">必須</span>
                  </th>
                  <td>
                    <input type="text" name="名前" size={30} required="required" />
                  </td>
                </tr>
                <tr>
                  <th>フリガナ</th>
                  <td>
                    <input type="text" name="フリガナ" size={30} data-charcheck="zenkaku" />
                  </td>
                </tr>
                <tr>
                  <th>
                    メールアドレス<span className="must">必須</span>
                  </th>
                  <td>
                    <input type="email" data-type="email" name="email" size={40} required="required" />
                  </td>
                </tr>
                <tr>
                  <th>
                    確認用メールアドレス<span className="must">必須</span>
                  </th>
                  <td>
                    <input type="email" data-type="email" name="confirm_email" data-post-disable={1} size={40} required="required" />
                  </td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>
                    <input type="tel" data-type="tel" name="電話番号" size={30} data-min={9} />
                  </td>
                </tr>
                <tr>
                  <th>お問い合わせ内容</th>
                  <td>
                    <textarea name="備考欄" rows={10} cols={60} defaultValue={""} />
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="bt_list">
              <li>
                <button type="submit" className="bt01">
                  送信する
                </button>
              </li>
              <li>
                <button type="reset" className="bt01">
                  リセット
                </button>
              </li>
            </ul>
          </form>
        </Section>
      </Layout>
    </>
  );
};

export default Toiawase;
