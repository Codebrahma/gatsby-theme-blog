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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        typeName: "Post",
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              backgroundColor: "none"
            }
          }
        ],
        plugins: [`gatsby-remark-images`]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`
  ]
});
