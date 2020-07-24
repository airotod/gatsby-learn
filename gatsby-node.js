const fs = require(`fs`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      paginatedCollection(name: { eq: "books" }) {
        id
        pages {
          id
          nodes
          hasNextPage
          nextPage {
            id
          }
        }
      }
    }
  `)

  const collection = result.data.paginatedCollection
  const dir = path.join(__dirname, "public", "paginated-data", collection.id)
  fs.mkdirSync(dir, { recursive: true })

  for (const page of collection.pages)
    fs.writeFileSync(path.resolve(dir, `${page.id}.json`), JSON.stringify(page))

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
