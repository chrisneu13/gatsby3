import React from "react"
import Layout from "../components/layout"
import ChnImage from '../components/ChnImage';

export default function Contact() {
  return (
      <Layout>
    <div>
      <h1>Dies ist eine blaue Konaktmoeglichkeit am 8.1.22. Hier koennt ihr eine E-Mail.</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
      <ChnImage />
    </div>
    </Layout>
  )
}