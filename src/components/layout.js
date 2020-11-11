import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import { Helmet } from "react-helmet"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet></Helmet>
      <Header />
      {children}
    </div>
  )
}

export default Layout
