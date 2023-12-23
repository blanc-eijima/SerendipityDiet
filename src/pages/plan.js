import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import PlanBox from '../components/PlanBox';
import Seo from '../components/Seo';

const Plan = () => {
  return (
    <>
      <Layout>
        <Section title='PLAN' sub={true} id='plan' svg={true}>
          <h1>PLAN</h1>
          <PlanBox course='silver' title='シルバーコース' price='35,000'>
            <p>
              現状をヒヤリングして、
              <br />
              翌月の次回コンサルティングまでのプランを提案させていただきます。
            </p>
            <p>運動・食生活・生活リズムなどをどのようにしていくかをあなたの経験やライフスタイルに合わせてアドバイスいたします。</p>
            <p>ビデオ通話（LINE・Skypeなど）、音声通話（固定電話・携帯電話）のどちらでも対応可能です。</p>
          </PlanBox>
          <PlanBox course='gold' title='ゴールドコース' price='65,000'>
            <p>プラン通りにダイエットと進めていったとしても途中で疑問に思うことや、もっとこうしたらいいのではないか？ と思うことが必ず出てくるし、状況も変わってくることが多々あります。</p>

            <p>同じ月にもう１度コンサルティングを行うことによって疑問を解決して、状況に応じたプランを再提案させていただくことができるのでシルバーコースよりも効率的にダイエットを進めていくことができます。</p>

            <p>シルバーコースと同様でビデオ通話（LINE・Skypeなど）、音声通話（固定電話・携帯電話）のどちらでも対応可能です。</p>
          </PlanBox>
          <PlanBox course='platinum' title='プラチナコース' price='95,000'>
            <p>１ヵ月にコミュニケーションをとる一番最適な回数は３回くらいだと私は考えております。</p>

            <p>コンサルティング回数が多すぎてすぐに質問できる状況だと人は考えなくなってきます。最適なアドバイスを受けることは大事ですが、ご自分で常に考えながら行動していくことも同じくらい大事なのです。</p>

            <p>深く考えながらご自分でも調べて行動していくと新しいことを発見できたり自分の身体のことがわかってくることがよくあります。そうすることによってコンサルティング時に内容の濃い話ができます。ゴールドコースよりも１回コンサルティング回数が増えることによって、更に効率的にダイエットを行うことができてモチベーションが高い状態をキープしながら行動していくことができやすくなります。</p>

            <p>シルバーコース・ゴールドコースと同様でビデオ通話（LINE・Skypeなど）、音声通話（固定電話・携帯電話）のどちらでも対応可能です。</p>

            <p>最短で結果へ導くための究極のコースです。</p>
          </PlanBox>
        </Section>
      </Layout>
    </>
  );
};
export const Head = () => (
  <>
    <body id='pagetop' />
    <Seo title='Plan' />
  </>
);
export default Plan;
