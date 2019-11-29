import React from "react";
import { graphql } from "gatsby";
import {BlogLayout} from '../components/post/blog_layout'

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
