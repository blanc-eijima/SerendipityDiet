import React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";
const pagemeta = {
  title: `Contact | オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`, //このページのタイトル
  description: `究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。`, //このページのディスクリプション
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
const Toiawase = () => {
  return (
    <>
      <Layout>
        <Section id={pagemeta.slug} svg={true} title={pagemeta.subtitle} sub={true}>
          <h1>{pagemeta.title}</h1>

          <h2>究極のダイエットをお手伝いするために無料電話相談を承ります。</h2>
          <h3>まずはお気軽に、お問い合わせ下さい。</h3>
          <p>できるだけ早く対応させていただきます。</p>
          <ul class="tel_num">
            <li>
              <a href="mailto:contact@serendipity-diet.com">
                <FontAwesomeIcon icon={faEnvelope} />
                contact@serendipity-ultimatediet.com
              </a>
            </li>
            <li>
              <a href="tel:088-855-7879">
                <FontAwesomeIcon icon={faPhone} />
                088-855-7879
              </a>
            </li>
          </ul>
          <p>お問い合わせの際は、以下プライバシーポリシーに同意いただいた後、表示される応募フォームへご入力お願い致します。</p>
          <div className="privacypolicy">
            <h4>1.個人情報の取得について</h4>

            <p>当方は、適法かつ公正な手段によって個人情報を取得致します。</p>

            <h4>2.個人情報の利用について</h4>

            <p>
              (1) 当方は、個人情報を、取得の際に示した利用目的の範囲内で、業務の遂行上必要な限りにおいて利用します。
              <br />
              (2) 当方は、個人情報を第三者との間で共同利用し、または、個人情報の取扱いを第三者に委託する場合には、当該第三者につき厳正な調査を行ったうえ秘密を保持させるために、適正な監督を行います。
            </p>

            <h4>3.個人情報の第三者提供について</h4>

            <p>当方は、法令に定める場合を除き、個人情報を事前に本人の同意を得ることなく第三者に提供しません。</p>

            <h4>4.個人情報の管理について</h4>

            <p>
              (1) 当方は、個人情報を安全に管理致します。
              <br />
              (2) 当方は、個人情報の紛失、破壊、改ざん及び漏えいなどを防止するため、不正アクセス、コンピュータウィルス等に対する適正な情報セキュリティ対策を講じます。
              <br />
              (3)当方は、個人情報を持ち出し、外部へ送信する等により漏えいさせません。
            </p>

            <h4>5.個人情報の開示・訂正・利用停止・消去について</h4>

            <p>当方は、本人が自己の個人情報について、開示・訂正・利用停止・消去等を求める要求ある場合には、本人確認の上、適切に対処します。</p>
          </div>
          <ul class="bt_list">
            <li class="center w20p">
              <Link class="bt01" to="/toiawase-form/">
                同意する
              </Link>
            </li>
            <li class="center w20p">
              <Link class="bt01" to="/">
                同意しない
              </Link>
            </li>
          </ul>
        </Section>
      </Layout>
    </>
  );
};

export default Toiawase;
