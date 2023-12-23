import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Article from '../components/Article';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const PostPage = ({ data }) => {
  dayjs.locale('ja');

  return (
    <>
      <Layout>
        <Article id={data.microcmsPosts.category.id + 'page'} slug={'/category/' + data.microcmsPosts.category.id} category={data.microcmsPosts.category.id} parentTitle={data.microcmsPosts.category.id} title={data.microcmsPosts.title} sub={true}>
          <time dateTime={data.microcmsPosts.date}>{data.microcmsPosts.date}</time>
          <ul className='cat_list'>
            <li className={data.microcmsPosts.category.id}>
              <a href={'/category/' + data.microcmsPosts.category.id + '/'}>{data.microcmsPosts.category.id}</a>
            </li>
          </ul>
          <div
            className='post_main_box'
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsPosts.content}`,
            }}
          />
        </Article>
      </Layout>
    </>
  );
};

export const Head = ({ data }) => (
  <>
    <Seo title2={data.microcmsPosts.title} />
  </>
);

export const query = graphql`
  query ($postId: String) {
    microcmsPosts(id: { eq: $postId }) {
      title
      category {
        id
        name
      }
      content
      eyecatch {
        url
        height
        width
      }
      postsId
      date(formatString: "YYYY.MM.DD")
    }
  }
`;

export default PostPage;
