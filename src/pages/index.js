import React from "react"
import { Link } from "gatsby"
import Container from "../components/container";
import Footer from '../components/footer'

export default function Home() {
  return (
    <Container >
      <h1>Home</h1>
      <p>Hello, this is a home page. Click the navigation tab you want to browse.</p>
      <ul>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Footer />
    </Container>
  )
}
