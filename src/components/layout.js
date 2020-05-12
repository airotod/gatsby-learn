import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import styles from "./layout.module.css"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={styles.wrap}>
      <Link to={`/`}>
        <h3 className={styles.title}>{data.site.siteMetadata.title}</h3>
      </Link>
      <div>
      <span className={styles.nav}>
        <Link to={`/contact/`}>Contact</Link>
      </span>
      <span className={styles.nav}>
        <Link to={`/about/`}>About</Link>
      </span>
      </div>
      {children}
      <Footer />
    </div>
  )
}
