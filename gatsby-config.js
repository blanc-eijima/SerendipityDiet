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
    title: "オンラインダイエット｜最強に痩せる食事と運動を指導する究極のプログラム",
    keyword: "オンラインダイエット,ダイエットプログラム,セレンディピティ,栄養管理,運動プラン,パーソナルコーチ,ダイエットコーチ,コーチング,健康的なライフスタイル,持続可能なダイエット",
    description: "究極オンラインダイエット指導。簡単でも効率的に痩せていける食事指導。60分の運動でも痩せやすい身体を創るトレーニング指導。食事と運動の効果を更に向上させる生活テクニックを伝授。",
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
        RewriteRule ^contact-2/(.*)$ https://serendipity-ultimatediet.com//toiawase-form/$1 [L,R=301]
        RewriteRule ^category/%20column/(.*)$ https://serendipity-ultimatediet.com/category/column/$1 [L,R=301]
        RewriteRule ^column/(.*)$ https://serendipity-ultimatediet.com/post/$1 [L,R=301]
        `,
      },
    },
  ],
};
