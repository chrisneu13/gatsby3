import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <h1>Hi Chris!!! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <div>
      <Link to="/contact/">Contact</Link>
    </div>
    </Layout>
  );
}