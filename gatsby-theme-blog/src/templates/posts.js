import React from "react";
import { Link } from "gatsby";
import { P, H3, H4, I, Box, Text, HorizontalRule } from "bricks";
import PlainLink from "../components/link";
import styled from "@emotion/styled";
import { space } from "styled-system";
import { Helmet } from "react-helmet";
import { css } from "bricks";
import Layout from "../components/layout";
import Pagination from "../components/pagination";
import { getCategory, getTags, slugify } from "../utils";
import CategoryLink from "../components/categorylink";
import SEO from "../components/seo";
import theme from "../theme";

const isLast = (arr, index) => arr.length - 1 === index;

const getHeadingAndDescription = ({
  isFirstPage,
  currentPage,
  totalPages,
  type,
  value,
  siteMetadata
}) => {
  if (type === "category" && value) {
    return [`Posts in the category “${value}”`, `Check this page out for the blogs that fall under "${value}"`];
  }

  if (["tags", "tag"].includes(type) && value) {
    return [`Posts tagged with “${value}”`, `Check this page out for the blogs that fall under "${value}"`];
  }

  if (type === "all" && isFirstPage) {
    return [`Latest Blog Posts`, siteMetadata.description];
  }

  if (type === "author" && value) {
    const author = value.split("-").join(" ");
    return [`Posts written by ${author}`, `Check this page out for the blogs that are written by ${author}`];
  }

  return [`Blog Posts, page ${currentPage} of ${totalPages}`, siteMetadata.description];
};

const ReadPostLink = styled(Link)(
  css({
    textAlign: "center",
    width: "100%",
    borderRadius: "3px",
    p: "2px",
    display: "inline-block",
    color: `${theme.colors.primary}`,
    "&:hover": {
      bg: `${theme.colors.primary}`,
      color: `${theme.colors.secondary}`
    },
    ":visited": {
      color: `${theme.colors.primary}`,
      "&:hover": {
        bg: `${theme.colors.primary}`,
        color: `${theme.colors.secondary}`
      }
    }
  })
);

const TagLink = styled(PlainLink)`
  display: inline-block;
  margin-right: 10px;
`;

const HeadingLink = styled(Link)(
  space,
  css({
    p: "5px",
    borderRadius: "5px",
    display: "inline-block",
    textDecoration: "none",
    color: `${theme.colors.primary}`,
    "&:hover": {
      backgroundColor: `${theme.colors.primary}`,
      color: `${theme.colors.secondary}`
    }
  })
);

const Blog = ({ frontmatter }) => (
  <Box>
    <H3>
      <HeadingLink ml="-5px" to={frontmatter.link}>
        {frontmatter.title}
      </HeadingLink>
    </H3>
    {getCategory(frontmatter) && (
      <CategoryLink to={`/category/${slugify(getCategory(frontmatter))}`}>
        {getCategory(frontmatter)}
      </CategoryLink>
    )}
    <Box marginTop="2">
      <P>{frontmatter.description}</P>
      <Box marginTop="1">
        <Text fontSize={[0, 0]} color="black.2">
          {getTags(frontmatter) &&
            getTags(frontmatter).map((tag, i) => {
              const slug = slugify(tag);
              return (
                <TagLink key={tag} to={`/tag/${slug}`}>
                  <I>#{slug}</I>
                </TagLink>
              );
            })}
        </Text>
      </Box>
    </Box>
    <Box marginBottom={3} marginTop={1}>
      <ReadPostLink to={frontmatter.link}>Read Post</ReadPostLink>
    </Box>
  </Box>
);


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

const Posts = ({
  pageContext: {
    postGroup,
    isFirstPage,
    isLastPage,
    currentPage,
    totalPages,
    linkBase,
    type,
    value
  },
  data = {},
}) => {
  let blogs = postGroup;
  const siteMetadata = data.site ? data.site.siteMetadata : {}
  const [title, description] = getHeadingAndDescription({
    isFirstPage,
    currentPage,
    totalPages,
    type,
    value,
    siteMetadata
  });

  return (
    <Layout>
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <SEO
        title={siteMetadata.title ? `${title} | ${siteMetadata.title}` : title}
        description={description}
      />
      <H4 css={css({ color: theme.colors.black[1] })}>
        {title}
      </H4>
      <Box marginTop={6} width={[1, 2 / 3]}>
        {blogs.map((blog, i) => (
          <div key={blog.frontmatter.title}>
            <Blog frontmatter={blog.frontmatter} />
            {isLast(blogs, i) ? (
              ""
            ) : (
              <HorizontalRule
                width={1}
                borderWidth={1}
                borderColor={"black.3"}
              />
            )}
          </div>
        ))}
        <Pagination
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          currentPage={currentPage}
          totalPages={totalPages}
          linkBase={linkBase}
        />
      </Box>
    </Layout>
  );
};

export default Posts;
