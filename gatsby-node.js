const path = require('path')

// allows us to attach new data onto the individual node and what we're going to do is to attach the slug (file name w/o extension) throughout the entirely of our application
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'MarkdownRemark') {
//     // remove the file extension (.md)
//     const slug = path.basename(node.fileAbsolutePath, '.md')

//     // call createNodeField to add new filed to the node
//     // adding a slug onto the markdown nodes
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })
//   }
// }

// Generate a new page for each post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      // path to the component
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

// 1. Get path to template
// 2. Get markdown data
// 3. Create new pages
