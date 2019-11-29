module.exports = ({ contentPath="posts", basePath="/", mdx=true  }) => ({
  plugins: [
    `gatsby-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: contentPath,
      },
    },
    mdx && {
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
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.             resolve: `gatsby-remark-embed-video`,             options: {
                maxWidth: 800,
                ratio: 1.77,
                height: 400,
                related: false,
                noIframerder: true,
            }
          }
        ],
        plugins: [`gatsby-remark-images`, 'gatsby-remark-embed-video']
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ].filter(Boolean)
});
