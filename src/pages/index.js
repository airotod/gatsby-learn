import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <p>
        Hello, this is a home page. <br />
        Click the keyword you want to browse.
      </p>
      <ul>
        <li>
          <Link to="/picture/">Picture</Link>
        </li>
        <li>
          <Link to="/book/">Book</Link>
        </li>
        <li>
          <Link to="/music/">Music</Link>
        </li>
      </ul>
    </Layout>
  )
}
