module.exports = {
  plugins: [
    {
      resolve: `gatsby-blog-theme`,
      options: {
        contentPath: 'posts',
        basePath: '/blog',
      }
    }
  ]
}