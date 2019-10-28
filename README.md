<h1 align="center">Gatsby Theme Blog</h1>

A Gatsby theme for creating a blog.

## Using the Theme
```bash
  [x] npm install @codebrahma/gatsby-theme-blog
```

## Usage

### Theme Options

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
      resolve: `@codebrahma/gatsby-theme-blog`,
      options: {
        contentPath: 'content/posts',
        basePath: '/blogs',
        itemsPerPage: 5
      }
    }
  ]
}
```

### Additional Configuration:

In addition to the theme options you can add your own Layout component to the blogs.
* Create a file `src/gatsby-blog-theme/component/layout.js` in your site for Component Shadowing.

<hr />

## <u>Development</u>

This a monorepo containing the site and the theme plugin. For development follow the below steps.

* #### Clone the Repo
```bash
  git clone git@github.com:Codebrahma/gatsby-theme-blog.git
```

* #### Start the site server
```bash
  yarn workspace site develop
```