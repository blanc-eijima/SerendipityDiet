import React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Article from "../components/Article"

import dayjs from "dayjs"
import "dayjs/locale/ja"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

const getJsonLd = (data, siteMetadata) => ({
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
          item: `${siteMetadata.siteUrl}/posts/${data.microcmsPosts.postsId}/`,
          name: `${data.microcmsPosts.title}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}/posts/${data.microcmsPosts.postsId}/`,
      url: `${siteMetadata.siteUrl}/posts/${data.microcmsPosts.postsId}/`,
      name: data.microcmsPosts.title,
      description: siteMetadata.defaultDescription,
      inLanguage: "ja",
      isPartOf: { "@id": `${siteMetadata.siteUrl}#website` },
      breadcrumb: { "@id": `${siteMetadata.siteUrl}#breadcrumblist` },
      datePublished: data.microcmsPosts.publishedAt,
      dateModified: data.microcmsPosts.updatedAt,
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
})

export const Head = ({ data }) => (
  <>
    <body id="pagetop" />
    <Seo title2={`${data.microcmsPosts.title}`} description={data.microcmsPosts.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "").slice(0, 120)} />
    <script type="application/ld+json">{JSON.stringify(getJsonLd(data, data.site.siteMetadata))}</script>
  </>
)

const PostPage = ({ data }) => {
  dayjs.locale("ja")

  return (
    <>
      <Layout className="column-page">
        <div className="main-content">
          <Article id={`${data.microcmsPosts.category?.id || "default"}page`} slug={data.microcmsPosts.category?.id ? `/category/${data.microcmsPosts.category.id}/` : "/"} category={data.microcmsPosts.category?.id || "default"} parentTitle={data.microcmsPosts.category?.name || "ホーム"} title={data.microcmsPosts.title} sub={true} mokuji={true}>
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
        </div>
      </Layout>
    </>
  )
}

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
      publishedAt(formatString: "YYYY-MM-DDThh:mm:ssZ")
      updatedAt(formatString: "YYYY-MM-DDThh:mm:ssZ")
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
`

export default PostPage
