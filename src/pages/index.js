import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.wrap_body}>
          <h1>Home</h1>
          <p>Hello, this is a home page.</p>
        </div>
      </div>
    </Layout>
  )
}
