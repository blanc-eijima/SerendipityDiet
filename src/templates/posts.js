import React from "react";
import { graphql, Link } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Article from "../components/Article";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const PostPage = ({ data }) => {
  dayjs.locale("ja");

  return (
    <>
      <Layout>
        <Article id={data.microcmsPosts.category.id + "page"} slug={"/category/" + data.microcmsPosts.category.id} category={data.microcmsPosts.category.id} parentTitle={data.microcmsPosts.category.id} title={data.microcmsPosts.title} sub={true}>
          <time dateTime={data.microcmsPosts.date}>{data.microcmsPosts.date}</time>
          <ul className="cat_list">
            <li className={data.microcmsPosts.category.id}>
              <Link to={"/category/" + data.microcmsPosts.category.id + "/"}>{data.microcmsPosts.category.id}</Link>
            </li>
          </ul>
          {data.microcmsPosts.eyecatch && (
            <div className="eyecatch_img">
              <img src={data.microcmsPosts.eyecatch.url + "?fm=webp"} width={data.microcmsPosts.eyecatch.width} height={data.microcmsPosts.eyecatch.height} alt={data.microcmsPosts.title + "サムネイル画像"} loading="lazy" />
            </div>
          )}
          <div
            className="post_main_box"
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
    <Seo title2={data.microcmsPosts.title} description={data.microcmsPosts.title} />
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
