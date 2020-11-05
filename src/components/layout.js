import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        {/* Fonts */}
        <script
          src="https://kit.fontawesome.com/df5ff3fd43.js"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      {children}
    </div>
  )
}

export default layout
