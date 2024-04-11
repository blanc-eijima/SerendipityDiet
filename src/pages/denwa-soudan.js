import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";
const pagemeta = {
  title: `Free Phone Consultation 無料電話相談 | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `オンラインダイエットプログラムに関するご質問・ご相談はこちらのフォームよりお問い合わせください。専門スタッフが丁寧にご対応いたします。`, //このページのディスクリプション
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
  subtitle: `Free Phone Consultation`, //このページの見出し
  slug: `denwa-soudan`, //このページのslug
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
const DenwaSoudan = () => {
  return (
    <>
      <Layout>
        <Section id="consultation" svg={true} title={pagemeta.subtitle} slug={pagemeta.parentSlug} sub={true}>
          <h1>{pagemeta.subtitle}</h1>
          <h2>無料電話相談お申し込みフォーム</h2>

          <p>当ホームページをご覧いただきありがとうございます。</p>

          <p>私が手掛けるオンラインダイエットコーチングでは生活習慣としてダイエット法を身につけていただくよう指導させていただいております。</p>

          <p>本当に結果を導き出せるダイエットは運動や食事だけではなく生活のあらゆる場面と直結しているのです。</p>

          <p>生活の中で正しいダイエット法を身につけていけば、それはあなたにとって一生の財産になります。</p>

          <p>この無料電話相談では、あなたの生活スタイルを詳しくヒアリングして、ダイエットを成功させるには何をどういふうに改善していけばいいのかを一緒に考えて提案させていただきます。</p>

          <p>少しでも興味を持っていただけたら、まずはお気軽に電話をかけてください。</p>

          <p>無料電話相談を受けていただければ、私と話をして合うか合わないかも確認ができると思います。</p>

          <p>コーチング中などで出れない場合も多いですが、出れなかった場合はこちらから折り返します。</p>

          <p>たとえ無料相談でも誠心誠意で向き合いお話させていただきますのでお電話をお待ちしております。</p>

          <p>
            <span className="must">必須</span>は必ずご入力ください。
          </p>
          <form action="https://ssgform.com/s/F96zYufbayhl" method="post" id="mailform">
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

export default DenwaSoudan;
