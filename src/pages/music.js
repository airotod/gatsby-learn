import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./book.module.css"

export default function Music({ data }) {
  return (
    <Layout>
      <h1>Musics</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles.content}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>- {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
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
