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
    <h1>Und so geht die Geschichte weiter</h1>
    <p>Des Menschen bester Freund ist der Hund und auch sonst begleiten uns alle möglichen Tiere überall hin.
      Was wäre der Mensch ohne seine besten Freunde? Wäre er überhaupt ein Mensch?       
       Denn wer erinnert sich nicht liebevoll an seinen erstes Meerschweinchen, Kleinkaninchen oder Wellensittich zurück?
        Über Tiere gibt es auch unglaublich viel zu Wissen. Das interessanteste, wissenswerteste und kurioseste haben wir dprt
         zusammengetragen.
       Somit beinhaltet unser gutes  Wissen Tiere über die man lachen kann und deren Fähigkeiten man nur bewundern muss. 
       Natürlich ist es möglich, dass der Hase einige Zeit lang ohne Spaziergänge ganz gut auskommt, denn auch drinnen gibt
        es verschiedene Beschäftigungsmöglichkeiten. Dennoch lohnt es sich bei Regenwetter mit seinem Dreibeiner drinnen zu bleiben. 
        Schlechtes Wetter heißt nicht gleich schlechte Laune!
        Regenspaziergänge sind nicht nur erfrischend, sondern bringen auch das Immunsystem und den Kreislauf in Schwung.
       Viel Spaß damit!</p>
       <p>Den Ablauf eines Spaziergangs gestalten wir gemeinsam und individuell. In einem ersten Schritt werden die Wünsche 
         bezüglich der Themen und der Dauer der Treffen abgeklärt. Danach werden die Vorgehensweise und Inhalte vereinbart
          und schriftlich festgehalten. Da jeder Mensch andere Bedürfnisse hat, gestalte ich den Ablauf des Spaziergangs 
         in Absprache so, dass sie eine bestmögliche Unterstützung für die jeweiligen Personen darstellen.</p>
     
      <div>
      <Link to="/contact/">Contact</Link>
    </div>
    </Layout>
  );
}