import React from "react";
import { graphql, Link } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";

import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Section from "../components/Section";

const pagemeta = {
  title: `オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム`,
  description: `究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。`,
  keyword: `オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット`,
};

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const MAX_CONTENT_LENGTH = 30; // 最大文字数を設定してください

const groupPostsByCategory = (posts) => {
  return posts.reduce((acc, post) => {
    const categoryId = post.node.category.id;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(post);
    return acc;
  }, {});
};

export const query = graphql`
  query ($categoryId: String, $limit: Int, $skip: Int) {
    allMicrocmsPosts(filter: { category: { id: { eq: $categoryId } } }, limit: $limit, skip: $skip, sort: { date: DESC }) {
      edges {
        node {
          id
          postsId
          title
          eyecatch {
            url
          }
          content
          date(formatString: "YYYY.MM.DD")
          updatedAt(formatString: "YYYY-MM-DDThh:mm:ssZ")
          createdAt(formatString: "YYYY-MM-DDThh:mm:ssZ")
          category {
            id
            name
          }
        }
      }
    }
    site {
      siteMetadata {
        defaultTitle: title
        defaultKeyword: keyword
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;

const getJsonLd = (data, siteMetadata, currentPage) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: `${siteMetadata.siteUrl}`,
          name: "ホーム",
        },
        {
          "@type": "ListItem",
          position: 2,
          item: `${siteMetadata.siteUrl}category/${data.allMicrocmsPosts.edges[0].node.category.id}/${currentPage > 1 ? currentPage : ""}/`,
          name: `${data.allMicrocmsPosts.edges[0].node.category.name}｜${currentPage > 1 ? "ページ" + currentPage : ""}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}category/${data.allMicrocmsPosts.edges[0].node.category.id}/`,
      url: `${siteMetadata.siteUrl}category/${data.allMicrocmsPosts.edges[0].node.category.id}/`,
      name: data.allMicrocmsPosts.edges[0].node.category.name,
      description: siteMetadata.defaultDescription,
      inLanguage: "ja",
      isPartOf: { "@id": `${siteMetadata.siteUrl}#website` },
      breadcrumb: { "@id": `${siteMetadata.siteUrl}#breadcrumblist` },
      datePublished: data.allMicrocmsPosts.edges[0].node.createdAt,
      dateModified: data.allMicrocmsPosts.edges[0].node.updatedAt,
    },
    {
      "@type": "WebSite",
      "@id": `${siteMetadata.siteUrl}#website`,
      url: `${siteMetadata.siteUrl}`,
      name: siteMetadata.defaultTitle,
      description: siteMetadata.defaultDescription,
      publisher: {
        "@type": "Organization",
        name: "SerendipityUltimatediet",
        url: `${siteMetadata.siteUrl}`,
      },
      inLanguage: "ja",
    },
  ],
});

export const Head = ({ data, siteMetadata, pageContext }) => {
  return (
    <>
      <Seo title2={`${pagemeta.title}｜${data.allMicrocmsPosts.edges[0].node.category.name}｜${pageContext.currentPage > 1 ? "ページ" + pageContext.currentPage : ""}`} description={pagemeta.description} />
      <script type="application/ld+json">{JSON.stringify(getJsonLd(data, data.site.siteMetadata, pageContext.currentPage))}</script>
    </>
  );
};

const CategoryPage = ({ data, pageContext }) => {
  dayjs.locale("ja");
  const { allMicrocmsPosts } = data;
  const { category, numPages, currentPage, startPage, endPage } = pageContext;

  const posts = allMicrocmsPosts.edges;
  const groupedPosts = groupPostsByCategory(posts);
  const imageName = "news_img";
  return (
    <>
      <Layout imageName={imageName}>
        <Section id="subpage" title={data.allMicrocmsPosts.edges[0]?.node.category.id} sub={true}>
          {Object.entries(groupedPosts).map(([categoryId, posts]) => (
            <React.Fragment key={categoryId}>
              <h1>{categoryId}</h1>
              <div className="post_list">
                {posts.map(({ node }) => {
                  const content = stripHTML(node.content);
                  const displayedContent = content.length > MAX_CONTENT_LENGTH ? content.substring(0, MAX_CONTENT_LENGTH) + "..." : content;

                  return (
                    <div className="post_box" key={node.postsId}>
                      {node.eyecatch ? (
                        <div className="post_thumb">
                          <Link to={"/posts/" + node.postsId + "/"} className="thumb_img">
                            <img src={node.eyecatch.url + "?fm=webp"} width={276} height={209} alt={node.title + "サムネイル画像"} loading="lazy" />
                          </Link>
                        </div>
                      ) : (
                        <div className="post_thumb">
                          <Link to={"/posts/" + node.postsId + "/"} className="thumb_img">
                            <img src="/images/eyecatch_01.jpg" width={276} height={209} alt={node.title + "の代替画像"} loading="lazy" />
                          </Link>
                        </div>
                      )}
                      <div className="post_txt">
                        <time dateTime={node.date}>{node.date}</time>
                        <br />
                        <Link to={"/posts/" + node.postsId + "/"}>{node.title}</Link>
                        <br />
                        {displayedContent}
                      </div>
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          ))}

          {numPages > 1 && (
            <div className="pager">
              {currentPage > 1 && (
                <Link className="prev" to={currentPage === 2 ? `/category/${category.categoryId}` : `/category/${category.categoryId}/${currentPage - 1}`}>
                  &lt;&lt; 前へ
                </Link>
              )}

              {/* ページャーの数字を表示 */}
              {Array.from({ length: 5 }, (_, i) => {
                const pageNumber = startPage + i; // ページャーの数字を計算
                if (pageNumber <= endPage) {
                  return (
                    <Link key={`pagination-link${pageNumber}`} to={pageNumber === 1 ? `/category/${category.categoryId}` : `/category/${category.categoryId}/${pageNumber}`} className={pageNumber === currentPage ? "current" : ""}>
                      {pageNumber}
                    </Link>
                  );
                }
                return null;
              })}

              {currentPage < numPages && (
                <Link className="next" to={`/category/${category.categoryId}/${currentPage + 1}`}>
                  次へ &gt;&gt;
                </Link>
              )}
            </div>
          )}
        </Section>
      </Layout>
    </>
  );
};

// HTMLタグを削除する関数
function stripHTML(input) {
  if (input === null || input === undefined) {
    return "";
  }
  return input.replace(/<[^>]*>?/gm, "");
}

export default CategoryPage;
