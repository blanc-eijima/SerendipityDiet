import React, { useState } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Seo from '../components/Seo';
const MousikomiForm = () => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  return (
    <>
      <Layout>
        <Section id='contact' svg={true} title='Order Form' sub={true}>
          <h1>Order Form</h1>
          <h2>お申し込み</h2>
          <form action='https://ssgform.com/s/NmL8ZvXBPW0c' method='post' id='mailform'>
            <div style={{ display: 'none' }}>
              <input type='text' name='wana' />
            </div>
            <table className='form'>
              <tbody>
                <tr>
                  <th>
                    ご希望のコース<span className='must'>必須</span>
                  </th>
                  <td>
                    <label className={selectedCourse === 'シルバーコース' ? 'selected' : ''}>
                      <input type='radio' name='コース' value='シルバーコース' onChange={handleCourseChange} /> シルバーコース
                    </label>
                    <label className={selectedCourse === 'ゴールドコース' ? 'selected' : ''}>
                      <input type='radio' name='コース' value='ゴールドコース' onChange={handleCourseChange} /> ゴールドコース
                    </label>
                    <label className={selectedCourse === 'プラチナコース' ? 'selected' : ''}>
                      <input type='radio' name='コース' value='プラチナコース' onChange={handleCourseChange} /> プラチナコース
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>
                    お名前<span className='must'>必須</span>
                  </th>
                  <td>
                    <input type='text' name='名前' data-kana='フリガナ' size={30} required='required' />
                  </td>
                </tr>
                <tr>
                  <th>フリガナ</th>
                  <td>
                    <input type='text' name='フリガナ' size={30} />
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
    <Seo title='お申し込みフォーム' />
  </>
);
export default MousikomiForm;
