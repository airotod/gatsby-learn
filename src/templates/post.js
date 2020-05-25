import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./post.module.css"

export default function Post({ data }) {
  const post = data.markdownRemark
  const to = "/" + post.fields.slug.split("/")[1] + "/"
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={`${post.excerpt || "nothin'"}`}
        pathname={post.fields.slug}
      />
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <h1>{post.frontmatter.title}</h1>
          <div className={styles.date}>{post.frontmatter.date}</div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className={styles.back}>
            <Link to={to}>back</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`
