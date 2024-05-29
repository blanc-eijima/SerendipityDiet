import React from "react";

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // 既存のHTML属性設定を保持
  setHtmlAttributes({ lang: "ja" });

  // Google Analyticsのスクリプトを追加
  setHeadComponents([
    <script key="gatsby-gtag-js" async src="https://www.googletagmanager.com/gtag/js?id=G-6TJH5F48C6" />,
    <script
      key="gatsby-gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6TJH5F48C6');
        `,
      }}
    />,
  ]);
};
