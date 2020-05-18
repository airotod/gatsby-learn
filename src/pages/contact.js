import React from "react"
import Layout from "../components/layout"
import styles from "./contact.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <h1>Contact</h1>
          <p>Email me at the address below.</p>
          <p>
            <a href="mailto:airotod@gmail.com">airotod@gmail.com</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
