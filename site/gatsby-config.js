module.exports = {
  plugins: [
    {
      resolve: `gatsby-blog-theme`,
      options: {
        contentPath: 'posts',
        itemsPerPage: 3
      }
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
  ]
}