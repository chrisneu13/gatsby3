import React from "react"
import FiestaImg from "../images/blumen.jpg"
export default function Home() {
  return (
    // The import result is the URL of your image
    <img src={FiestaImg} alt="A dog smiling in a party hat" />
  )
}