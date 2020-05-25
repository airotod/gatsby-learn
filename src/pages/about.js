import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.css"

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About airotod's blog" />
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <h1>About {data.site.siteMetadata.title}</h1>
          <p>
            This website is a diary for keeping a record such as pictures,
            books, music, and so on.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
