import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Seo from "../components/Seo";

const ThankYou = () => {
  return (
    <>
      <Layout>
        <Section id="about" svg={true} title="Thank You" sub={true}>
          <h1>Thank You</h1>
          <h2>お問い合わせいただきありがとうございます。</h2>
          <p>
            SERENDIPITY Ultimate DietのWEBサイトをご覧頂きありがとうございます。
            <br />
            お問い合わせ内容を受け付けました。担当者が確認次第、折り返しご連絡いたします。
            <br />
            しばらくお待ちください。
          </p>
          <p className="center">
            <Link to="/" className="bt02">
              トップページへ戻る
            </Link>
          </p>
        </Section>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <body id="pagetop" />
    <Seo title="Thank You" />
  </>
);

export default ThankYou;
