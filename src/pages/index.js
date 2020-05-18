import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.wrap_body}>
        <Link className={styles.title} to="/">
            <h1>Home</h1>
          </Link>
          <p className={styles.introduce}>
            Hello, this is a home page.
            <br />
            Click the keyword you want to browse.
          </p>
          <ul className={styles.nav}>
            <li>
              <h3><Link className={styles.nav_item} to="/music/">Music</Link></h3>
              <p>There are many songs I like.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
