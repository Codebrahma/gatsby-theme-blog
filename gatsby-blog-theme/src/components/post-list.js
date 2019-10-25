import React from "react";
import { Link } from "gatsby";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <h2>Blogs List</h2>
      <ul>
        {posts.map(post => {
          const { frontmatter } = post;
          return (
            <li key={post.id}>
              <strong>
                <Link to={frontmatter.link}>{frontmatter.title}</Link>
              </strong>
              <br />
              <p>{frontmatter.author}</p>
              <br />
              {new Date(frontmatter.datePublished).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                }
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostList;