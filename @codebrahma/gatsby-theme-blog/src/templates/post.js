import React from "react";
import { graphql } from "gatsby";
import { Flex, H1, Box, I } from "bricks";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import CategoryLink from "../components/categorylink";
import { getCategory, slugify } from "../utils";
import PlainLink from "../components/link";
import Layout from "../components/layout";

export const query = graphql`
  query($link: String!) {
    post: mdx(frontmatter: { link: { eq: $link } }) {
      body
      frontmatter {
        title
        description
        category
        tags
        author
        keywords
        datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      }
    }
  }
`;

const Sidebar = ({ author, category, tags }) => (
  <div>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent="center">
        Written by
      </Flex>
      <Flex justifyContent="center" mt="0.5rem">
        <PlainLink to={`/author/${slugify(author)}`}>
          <I>{author}</I>
          <br />
        </PlainLink>
      </Flex>
    </Box>
    {getCategory({ category }) && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Posted in
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <CategoryLink
            to={`/category/${slugify(getCategory({ category }))}`}
          >
            {getCategory({ category })}
          </CategoryLink>
        </Flex>
      </Box>
    )}
    {tags && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Tags
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <Flex
            fontSize={[0, 0]}
            color="black.2"
            width={[0.5, 0.5]}
            justifyContent="center"
            flexWrap="wrap"
          >
            {tags.map(tag => {
              const slug = slugify(tag);
              return (
                <Box key={tag} p="0.125rem">
                  <PlainLink key={tag} to={`/tag/${slug}`}>
                    <I>#{slug}</I>
                  </PlainLink>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    )}
    <Flex justifyContent="center">
      <Box width={[1 / 2, 1 / 2]} fontSize={0} color="black.2">
        If you want to get more posts like this, join our newsletter
      </Box>
    </Flex>
  </div>
);

const BlogLayout = props => {
  const { title, body, category, author, tags } = props;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Flex flexWrap="wrap">
        <Box width={["100%", 2 / 3]}>
          <Box mb={4}>
            <H1>{title}</H1>
          </Box>
          <MDXRenderer>{body}</MDXRenderer>
        </Box>
        <Box width={["100%", 1 / 3]} marginTop={[1, 5]}>
          <Sidebar author={author} category={category} tags={tags} />
        </Box>
      </Flex>
    </Layout>
  );
};

const Post = props => {
  let {
    title,
    category,
    tags,
    author,
    keywords,
    description
  } = props.data.post.frontmatter;
  let body = props.data.post.body;
  return (
    <BlogLayout
      title={title}
      category={category}
      tags={tags}
      author={author}
      body={body}
      keywords={keywords}
      description={description}
    />
  );
};

export default Post;
