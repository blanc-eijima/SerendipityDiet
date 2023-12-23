import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const MAX_CONTENT_LENGTH = 100; // 最大文字数を設定してください

const TopColumn = () => {
  dayjs.locale('ja');
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(sort: { date: DESC }, limit: 5) {
        nodes {
          date(formatString: "YYYY年MM月DD日")
          updatedAt(formatString: "YYYY年MM月DD日")
          createdAt(formatString: "YYYY-MM-DDTHH:MM")
          title
          postsId
          category {
            id
            name
          }
        }
      }
    }
  `);
  const posts = data.allMicrocmsPosts.nodes;

  return (
    <>
      <ul>
        {posts.map((node) => (
          <li key={node.postsId}>
            <div className={'cat_tag ' + node.category.id}>
              <a href={'/category/ ' + node.category.id + '/'}>Column</a>
            </div>
            <br />
            <Link href={'/posts/' + node.postsId + '/'}>
              <time dateTime={node.date}>{node.date}</time>
              {node.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
// HTMLタグを削除する関数
function stripHTML(html) {
  if (html) {
    return html.replace(/<[^>]*>/g, '');
  }
  return '';
}
export default TopColumn;
