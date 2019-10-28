module.exports = ({ contentPath="posts", basePath="/"  }) => ({
  plugins: [
    `gatsby-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: contentPath,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`
  ]
});
