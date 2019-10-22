import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

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

const Posts = props => {
  let { title } = props.data.post.frontmatter;
  let body = props.data.post.body;
  return (
    <div>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Posts;
