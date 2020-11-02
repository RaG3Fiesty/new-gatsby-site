import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => {
  return (
    <div className="hero-banner">
      <div className="container">
        <Navbar className="navbar">
          <Navbar.Brand className="navbar-brand" href="/">
            <span role="img" aria-labelledby="emoji">
              🏡
            </span>
            Home
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.link className="nav-item nav-link" href="/about-me"></Nav.link>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}
