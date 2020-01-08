module.exports = {
  plugins: [
    {
      resolve: `@codebrahma/gatsby-theme-blog`,
      options: {
        contentPath: 'posts',
        itemsPerPage: 3
      }
    },
    `gatsby-remark-images`
  ]
}