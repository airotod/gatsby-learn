import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={styles.wrap_body}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
