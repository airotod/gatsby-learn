import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.inner_head}>
        <div className={styles.wrap_head}>
          <div className={styles.head_logo}>
            <Link to="/">
              <img src="/eyes.png" alt="logo" />
            </Link>
          </div>
          <div className={styles.head_title}>
            <Link to="/">My Blog</Link>
          </div>
          <ul className={styles.head_nav}>
            <li>
              <Link to="/music/">Music</Link>
            </li>
            <li>
              <Link to="/book/">Book</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
