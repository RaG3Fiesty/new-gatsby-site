import React from "react"
import Header from "./header.js"

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      Hello again
      {children}
    </div>
  )
}

export default layout
