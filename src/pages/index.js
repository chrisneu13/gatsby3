import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



export default function Home() {
  return (
    <Layout>
      <h1>Hi Chris!!! Dies ist deine erste gatsby - Anwendung!</h1>
      <p>
        Ach ja Umlaute müssten auch funktionieren.
      </p>
      <p>und noch ein Absatz</p>
      <p>Wo ist nun das Bild? Hier wohl nicht?</p>


      <StaticImage
      src="../images/rotesauto.jpg"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
     
      <div>
      <Link to="/contact/">Contact</Link>
    </div>
    </Layout>
  );
}