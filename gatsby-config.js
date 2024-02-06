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
});
module.exports = {
  siteMetadata: {
    title: "オンラインダイエットプログラム | セレンディピティ - 効果的で持続可能な理想の体型へ",
    keyword: "オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット",
    description: "オンラインダイエットプログラム「セレンディピティ」で理想の体型を目指しましょう。効率的な栄養管理、運動プラン、サポートにより、持続可能なダイエットを実現。あなたに合ったオンラインダイエットで美しく健康的なライフスタイルを手に入れましょう。",
    image: "/images/ogp.jpg",
    url: "https://serendipity-ultimatediet.com/",
    siteUrl: "https://serendipity-ultimatediet.com/",
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://serendipity-ultimatediet.com", // サイトのベースURLを指定
        sitemap: "https://serendipity-ultimatediet.com/sitemap-index.xml", // サイトマップのURLを指定
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
