import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ color: `black`}}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <body style={{ backgroundColor: `white`  }}>
    <div style={{ margin: `3rem auto`, maxWidth: 850, padding: `0 1rem`, backgroundColor: `#f8f9fa`  }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`, color: `gray` }}>Reise Blog</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
    </body>
  )
}