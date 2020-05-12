import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
      <p className={styles.footer}>Created by Sngii, &copy; 2020</p>
      <Link to={`/my-files/`} className={styles.files}>
        My Files
      </Link>
    </footer>
  )
}

export default Footer
