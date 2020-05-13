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
      <div className={styles.header}>
        <div className={styles.inner_wrap}>
          <div className={styles.header_left}>
            <h3 className={styles.title}>
              <Link to={`/`}>{data.site.siteMetadata.title}</Link>
            </h3>
          </div>
          <div className={styles.header_right}>
            <ul className={styles.nav}>
              <li className={styles.tab}>
                <Link to={`/contact/`}>Contact</Link>
              </li>
              <li className={styles.tab}>
                <Link to={`/about/`}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.main_wrap}>{children}</div>
      <Footer />
    </div>
  )
}
