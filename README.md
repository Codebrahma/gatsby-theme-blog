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

`content/posts` directory contains all your Markdown files powering the blog.

```bash
  mkdir -p content/posts/hello-world
  touch content/posts/hello-world/hello-world.md
```

A sample post is below:

```
---
title: 'Hello World'
date: 2019-10-30
featuredpost: false
description: Hello World, this is my first post.
keywords:
- gatsby
- is
- wonderful
link: /hello-world
category:
- Gatsby
author: Codebrahma
tags:
- gatsby
- react
---

Hello World! This is my first post! I'll have great features enabled by default, including:
 
- Syntax highlighting with triple backticks
- Responsive images
- Responsive iframe embeds
- and more!
```


### Additional Configuration:

In addition to the theme options you can add your own Layout component to the blogs.
* Create a file `src/gatsby-blog-theme/component/layout.js` in your site for Component Shadowing.

A sample layout file:

```js
// src/gatsby-blog-theme/component/layout.js
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
```

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