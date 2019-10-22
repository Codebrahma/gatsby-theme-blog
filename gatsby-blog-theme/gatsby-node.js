const fs = require("fs");

// make sure the posts directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "posts";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const basePath = "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/posts.js")
  });

  const result = await graphql(`
    {
      posts: allMdx(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            tags
            category
            link
            author
            date
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("error loading posts", reporter.errors);
    return;
  }

  let posts = result.data.posts.nodes;

  //create each individual blog post
  posts.forEach(post => {
    const { link } = post.frontmatter;
    console.log(link);
    actions.createPage({
      path: `${link}/`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        link
      }
    });
  });
};
