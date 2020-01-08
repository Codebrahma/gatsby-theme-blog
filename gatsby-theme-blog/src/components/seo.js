/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  canonical,
  image,
  link
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteBaseUrl = site.siteMetadata.siteUrl;

  return (
    <Helmet
      link={
        canonical ? [{ rel: "canonical", key: canonical, href: canonical }] : []
      }
      htmlAttributes={{
        lang
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `ahrefs-site-verification`,
          content: `4dd117a5c522115a6aa883a771053c24404e9c9e31c411ef8e3698eab7b65aa6`
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },

        {
          property: `og:type`,
          content: `website`
        },
        ...(siteBaseUrl && image
          ? [
              {
                property: `og:image`,
                content: `${siteBaseUrl}${image}`
              }
            ]
          : []),
        ...(siteBaseUrl && link
          ? [
              {
                property: `og:url`,
                content: `${siteBaseUrl}${link}`
              }
            ]
          : []),
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  image: "",
  link: ""
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  canonical: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string
};

export default SEO;
