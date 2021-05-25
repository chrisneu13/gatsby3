import React from "react"
import Layout from "../components/layout"
import blume from "../images/blumen.jpg" // 

export default function About() {
  return (
      <Layout>
    <div>
      <h1>Aktuelles Wetter</h1>
       <div><iframe width="400px" height="500px" title="3 Tage Trend" src="https://morgenwirdes.de/api/v2/3day.php?plz=90610"
       frameborder="0" scrolling="no"></iframe></div>
      <img src={blume} alt="Logo" />
    </div>
    </Layout>
  )
}