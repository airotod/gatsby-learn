import React from "react"
import { Link } from "gatsby"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
  return (
    <div className={containerStyles.container}>
      <h3><Link href="/">My blog</Link></h3>
      {children}
    </div>
  )
}
