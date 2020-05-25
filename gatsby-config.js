module.exports = {
  pathPrefix: `/gatsby-learn`,
  siteMetadata: {
    title: `My blog`,
    description: `It is a website for recording what I like.`,
    author: `airotod`,
    siteUrl: `https://airotod.github.io/gatsby-learn`,
    image: `/eyes.jpg`,
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
    `gatsby-plugin-react-helmet`,
  ],
}
