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
        image {
          publicURL
        }
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
    description,
    image,
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
      image={image}
    />
  );
};

export default Post;
