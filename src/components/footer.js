import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner_wrap}>
        <div className={styles.footer_left}>
          <p className={styles.copyright}>Created by Sngii, &copy; 2020</p>
        </div>
        <div className={styles.footer_right}>
          <Link to={`/my-files/`} className={styles.files}>
            My Files
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
