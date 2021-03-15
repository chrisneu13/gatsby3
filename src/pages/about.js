import React from "react"
import Layout from "../components/layout"
import blume from "../images/blumen.jpg" // 

export default function About() {
  return (
      <Layout>
    <div>
      <h1>Alles über mich</h1>
      <p>
        Das was ich immer mal über mich sagen wollte.
      </p>
      <img src={blume} alt="Logo" />
    </div>
    </Layout>
  )
}