module.exports = {
  plugins: [
    `gatsby-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: 'posts'
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        typeName: "Post",
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    }
  ]
};
