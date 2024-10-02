/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "オンラインダイエットコーチング 全国対応 3ヵ月で絶大成果のパーソナルダイエット指導",
    keyword: "オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット",
    description: "オンラインダイエットコーチングの究極パーソナルダイエット指導はスマホがあれば究極のテクニックを身につけることができます。3ヵ月の絶大成果で婚活バッチリ、産後太りも解消。",
    image: "/images/ogp.jpg",
    url: "https://serendipity-ultimatediet.com",
    siteUrl: "https://serendipity-ultimatediet.com",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90, //デフォルトは50
        },
      },
    },

    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: "serendipityultimet",
        apis: [
          {
            endpoint: "posts",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://serendipity-ultimatediet.com/`,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 50000,
        resolveSiteUrl: () => "https://serendipity-ultimatediet.com",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://serendipity-ultimatediet.com", // サイトのベースURLを指定
        sitemap: "https://serendipity-ultimatediet.com/sitemap-index.xml", // サイトマップのURLを指定
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/",
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: "serendipity-ultimatediet.com",
        ErrorDocument: `          
          ErrorDocument 404 /error_pages/404.html
        `,
        custom: `            
        RewriteRule ^contact/(.*)$ https://serendipity-ultimatediet.com/toiawase/$1 [L,R=301]
        RewriteRule ^contact-2/(.*)$ https://serendipity-ultimatediet.com/toiawase-form/$1 [L,R=301]
        RewriteRule ^category/%20column/(.*)$ https://serendipity-ultimatediet.com/category/column/$1 [L,R=301]
        RewriteRule ^column/(.*)$ https://serendipity-ultimatediet.com/post/$1 [L,R=301]
        `,
      },
    },
  ],
}
