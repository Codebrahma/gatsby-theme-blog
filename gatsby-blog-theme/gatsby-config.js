module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
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
}