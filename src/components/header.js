import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.inner_head}>
        <div className={styles.wrap_head}>
          <Link to="/">My Blog</Link>
        </div>
      </div>
    </header>
  )
}
