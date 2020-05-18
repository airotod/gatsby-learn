import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.inner_foot}>
        <div className={styles.wrap_info}>
          <div className={styles.copyright}>
            <span>&copy; 2020 Sngiii</span>
          </div>
          <ul className={styles.f_r}>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
