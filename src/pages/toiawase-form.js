import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Seo from '../components/Seo';
const ToiawaseForm = () => {
  return (
    <>
      <Layout>
        <Section id='contact' svg={true} title='Contact Form' parentTitle='Contact' slug='/toiawase' sub={true}>
          <h1>Contact Form</h1>
          <h2>お問い合わせフォーム</h2>
          <p>
            <span className='must'>必須</span>は必ずご入力ください。
          </p>
          <form action='https://ssgform.com/s/zg5XZZHyWBqQ' method='post' id='mailform'>
            <div style={{ display: 'none' }}>
              <input type='text' name='wana' />
            </div>
            <table className='form'>
              <tbody>
                <tr>
                  <th>
                    お名前<span className='must'>必須</span>
                  </th>
                  <td>
                    <input type='text' name='名前' size={30} required='required' />
                  </td>
                </tr>
                <tr>
                  <th>フリガナ</th>
                  <td>
                    <input type='text' name='フリガナ' size={30} data-charcheck='zenkaku' />
                  </td>
                </tr>
                <tr>
                  <th>
                    メールアドレス<span className='must'>必須</span>
                  </th>
                  <td>
                    <input type='email' data-type='email' name='email' size={40} required='required' />
                  </td>
                </tr>
                <tr>
                  <th>
                    確認用メールアドレス<span className='must'>必須</span>
                  </th>
                  <td>
                    <input type='email' data-type='email' name='confirm_email' data-post-disable={1} size={40} required='required' />
                  </td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>
                    <input type='tel' data-type='tel' name='電話番号' size={30} data-min={9} />
                  </td>
                </tr>
                <tr>
                  <th>お問い合わせ内容</th>
                  <td>
                    <textarea name='備考欄' rows={10} cols={60} defaultValue={''} />
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className='bt_list'>
              <li>
                <button type='submit' className='bt01'>
                  送信する
                </button>
              </li>
              <li>
                <button type='reset' className='bt01'>
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
export const Head = () => (
  <>
    <body id='pagetop' />
    <Seo title='Contact Form' />
  </>
);
export default ToiawaseForm;
