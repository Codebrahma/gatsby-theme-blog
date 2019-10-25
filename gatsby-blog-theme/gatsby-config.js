
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        typeName: "Post",
        extensions: [`.mdx`, `.md`],
        deaultLayouts: {
          default: require.resolve('./src/templates/post.js')
        },
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
    {
      resolve: `gatsby-transformer-remark`
    }
  ]
});
