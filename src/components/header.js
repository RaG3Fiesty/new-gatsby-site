import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Search from "./search"

export default function Header() {
  return (
    <div className="hero-banner">
      <div className="container">
        <Navbar className="navbar">
          <Navbar.Brand className="nav-item" href="/">
            <span role="img" aria-labelledby="emoji">
              🏡
            </span>
            Home
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="nav-item nav-link" href="/about-me">
              <span role="img" aria-labelledby="emoji">
                👨‍🔬
              </span>
              About Me
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/newsletter">
              <span role="img" aria-labelledby="emoji">
                💌
              </span>
              Sunday Times Sunday
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/notes">
              <span role="img" aria-labelledby="emoji">
                📚
              </span>
              Notes
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/tags">
              <span role="img" aria-labelledby="emoji">
                🏷
              </span>
              Tags
            </Nav.Link>
            <Search />
          </Nav>
        </Navbar>
        <div className="banner-text-container container">
          <h1 className="site-title">A Productive Nerd</h1>
          <h5 className="site-sub-title">
            Nerd out about tools for thought, productivity and learning
          </h5>
        </div>
      </div>
    </div>
  )
}
