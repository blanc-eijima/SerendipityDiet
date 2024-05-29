import React from "react";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "ja" });

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
