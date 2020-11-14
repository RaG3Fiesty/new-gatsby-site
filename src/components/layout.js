import React from "react"
import "katex/dist/katex.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import Footer from "./footer"
// import { Helmet } from "react-helmet"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Helmet></Helmet> */}
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
