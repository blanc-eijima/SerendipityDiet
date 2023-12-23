import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Seo from '../components/Seo';
const NotFound = () => {
  return (
    <>
      <Layout>
        <Section id='about' svg={true} title='404 Not Found' sub={true}>
          <h1>404 Not Found</h1>
          <h2>お探しのページは、移動または削除された可能性があります。</h2>
          <p>
            SERENDIPITY Ultimate DietのWEBサイトをご覧頂きありがとうございます。
            <br />
            大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。
            <br />
            お手数をおかけしますが、もう一度目的のページをお探し下さい。
          </p>
          <p className='center'>
            <Link to='/' className='bt02'>
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
    <body id='pagetop' />
    <Seo title='Not Found' />
  </>
);
export default NotFound;
