import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <h1>Hi Chris!!! Dies ist deine erste gatsby - Anwendung!</h1>
      <p>
        Ach ja Umlaute müssten auch funktionieren.
      </p>
      <p>und noch ein Absatz</p>
      <div>
      <Link to="/contact/">Contact</Link>
    </div>
    </Layout>
  );
}