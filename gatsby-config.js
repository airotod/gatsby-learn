module.exports = {
  pathPrefix: `/gatsby-learn`,
  siteMetadata: {
    title: `My blog`,
    description: `It is a website for recording what I like.`,
    author: `airotod`,
    siteUrl: `https://airotod.github.io/gatsby-learn`,
    image: `/eyes.JPG`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Serif Display`,
            variants: [`400`],
          },
          {
            family: `Merriweather`,
            variants: [`400`],
          },
          {
            family: `Roboto`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-paginated-collection",
      options: {
        name: "books",
        pageSize: 5,
        firstPageSize: 5,
        query: `
          {
            allMarkdownRemark {
              filter: { fields: { slug: { regex: "/book/" } } }
              sort: { fields: [frontmatter___date], order: DESC }
              ) {
              nodes {
                id
                excerpt
                frontmatter {
                  title
                  date
                }
                fields {
                  slug
                }
              }
            }
          }
        `,
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            url: node.fields.slug,
            title: node.frontmatter.title,
            excerpt: node.excerpt,
            date: node.frontmatter.date,
          })),
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
