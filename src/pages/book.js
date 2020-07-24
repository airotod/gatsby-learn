import React from "react"
import { Link, graphql } from "gatsby"
import { FacebookShareButton, TwitterShareButton } from "react-share"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./book.module.css"

export default function Music({ data }) {
  return (
    <Layout>
      <SEO title="airotod's blog - book" />
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <Link className={styles.title} to="/book/">
            <h1>Books</h1>
          </Link>
          <div className={styles.post_num}>
            {data.allMarkdownRemark.totalCount} Posts
          </div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={styles.wrap_item}>
              <div className={styles.contents}>
                <Link className={styles.link_item} to={node.fields.slug}>
                  <h3>{node.frontmatter.title}</h3>
                  <p className={styles.date}>{node.frontmatter.date}</p>
                  <p className={styles.content}>{node.excerpt}</p>
                </Link>
              </div>
              <div className={styles.share_icons}>
                <TwitterShareButton
                  url={`${data.site.siteMetadata.siteUrl}${node.fields.slug}`}
                  title={`${node.excerpt} - ${node.frontmatter.date}`}
                >
                  <span className={styles.share_icon}>
                    <img src="/twitter-black.svg" alt="twitter" />
                  </span>
                </TwitterShareButton>
                <FacebookShareButton
                  url={`${data.site.siteMetadata.siteUrl}${node.fields.slug}`}
                  quote={`${node.excerpt} - ${node.frontmatter.date}`}
                >
                  <span className={styles.share_icon}>
                    <img src="/facebook-black.svg" alt="facebook" />
                  </span>
                </FacebookShareButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/book/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
