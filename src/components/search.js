import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Search() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  return (
    <span className="searchcontainer">
      <input
        id="searchbox"
        type="text"
        placeholder="🔍"
        onChange={handleChange}
      />
      <ul id="myList">
        <li></li>
      </ul>
    </span>
  )

  function handleChange(e) {
    var myList = document.getElementById("myList")

    myList.innerHTML = ""
    var searchValue = e.target.value

    data.allMdx.edges.map(({ node }) => {
      var articleTitle = node.frontmatter.title
      var articleLink = node.fields.slug

      if (articleTitle.includes(searchValue)) {
        var liNode = document.createElement("li")
        var aNode = document.createElement("a")

        aNode.href = articleLink

        var text = document.createTextNode(articleTitle)

        aNode.appendChild(text)
        liNode.appendChild(aNode)

        myList.appendChild(liNode)
      }
    })
  }
}
