import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const data = useStaticQuery(graphql`
  {
    localSearchPages {
      index
      store
    }
  }
`)

export default SearchBar
