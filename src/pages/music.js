import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./music.module.css"

export default function Music({ data }) {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <Link className={styles.title} to="/music/">
            <h1>Musics</h1>
          </Link>
          <div className={styles.post_num}>
            {data.allMarkdownRemark.totalCount} Posts
          </div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={styles.wrap_item}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
                <p className={styles.date}>{node.frontmatter.date}</p>
                <p className={styles.content}>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/music/" } } }
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
