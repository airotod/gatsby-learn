import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./post.module.css"

export default function Post({ data }) {
  const post = data.markdownRemark
  const slug = post.fields.slug
  const to = '/' + slug.split('/')[1] + '/'
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <h1>{post.frontmatter.title}</h1>
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
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
