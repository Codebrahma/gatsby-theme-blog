import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';

const Posts = props => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            category
            link
            tags
            author
            keywords
            datePublished: date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export default Posts;