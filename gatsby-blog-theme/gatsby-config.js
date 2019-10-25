module.exports = ({ contentPath="posts", basePath="/"  }) => ({
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: contentPath,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        typeName: 'Post',
        extensions: [`.mdx`, `.md`]
      }
    }
  ]
})