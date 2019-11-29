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
import theme from "../theme";

const isLast = (arr, index) => arr.length - 1 === index;

const getHeading = ({
  isFirstPage,
  currentPage,
  totalPages,
  type,
  value
}) => {
  if (type === "category" && value) {
    return `Posts in the category “${value}”`;
  }

  if (["tags", "tag"].includes(type) && value) {
    return `Posts tagged with “${value}”`;
  }

  if (type === "all" && isFirstPage) {
    return "Latest Blog Posts";
  }

  if (type === "author" && value) {
    return `Posts written by ${value.split("-").join(" ")}`;
  }

  return `Blog Posts, page ${currentPage} of ${totalPages}`;
};

const ReadPostLink = styled(Link)(
  css({
    textAlign: "center",
    width: "100%",
    borderRadius: "3px",
    p: "2px",
    display: "inline-block",
    "&:hover": {
      bg: `${theme.colors.black[1]}`,
      color: `${theme.colors.tint}`
    },
    ":visited": {
      "&:hover": {
        bg: `${theme.colors.black[1]}`,
        color: `${theme.colors.tint}`
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
  }
}) => {
  let blogs = postGroup;

  return (
    <Layout>
      <Helmet>
        <title>
          {getHeading({
            isFirstPage,
            currentPage,
            totalPages,
            type,
            value
          })}
        </title>
      </Helmet>
      <H4 css={css({ color: theme.colors.black[1] })}>
        {getHeading({
          isFirstPage,
          currentPage,
          totalPages,
          type,
          value
        })}
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
