## Clone the repository
```bash
  git clone git@github.com:Codebrahma/gatsby-theme-blog.git
```

## Using the Theme
```bash
  [x] npm install gatsby-blog-theme
```

## Custom Layout

* Create a file `src/gatsby-blog-theme/component/layout.js` in your site for Component Shadowing.

## Theme Options

Key | Default Value | Description
--- | --- | --- |
`basePath` | `"/blog"` | Root URL to all blog posts
`contentPath` | `"posts"` | Location of blog posts
`itemsPerPage` | `7` | Number of items per page

### Example Usage
```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-blog-theme`,
      options: {
        contentPath: 'content/posts',
        basePath: '/content/blog',
        itemsPerPage: 5
      }
    }
  ]
}
```