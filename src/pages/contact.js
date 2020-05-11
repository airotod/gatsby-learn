import React from "react"
import Container from "../components/container"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Container>
      <h1>Contact</h1>
      <p>Email me at the address below.</p>
      <p>
        <a href="mailto:dottori001@gmail.com">dottori001@gmail.com</a>
      </p>
      <Footer />
    </Container>
  )
}
