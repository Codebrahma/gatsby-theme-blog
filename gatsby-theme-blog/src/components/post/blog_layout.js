import React from 'react'
import { Flex, H1, Box, } from "bricks";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import SEO from '../seo';
import {Sidebar} from './sidebar'

export const BlogLayout = props => {
  const { title, body, category, author, tags, description, keywords, image} = props;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image ? image.imageURL : ''}
      />
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