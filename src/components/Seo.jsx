import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import PropTypes from 'prop-types';

const Seo = ({ title, title2, description, keyword, image, article }) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, siteUrl, defaultImage, defaultKeyword } = site.siteMetadata;
  const { pathname } = useLocation();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : title2 ? `${title2}` : defaultTitle,
    keyword: keyword || defaultKeyword,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='Keywords' content={seo.keyword} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {(article ? true : null) && <meta property='og:type' content='article' />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.image && <meta property='og:image' content={seo.image} />}
      <meta name='twitter:card' content='summary_large_image' />

      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
    </>
  );
};

export default Seo;

const query = graphql`
  query {
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

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};
