import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="This is contact page." />
      <p>Send us message.</p>
      <Link to="/">Return to Home page</Link>
    </div>
  )
}