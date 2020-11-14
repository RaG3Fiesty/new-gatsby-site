import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Search = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
    <span className="searchContainer">
      <button
        className="display-btn"
        onClick={() => {
          document.getElementById("myOverlay").style.display = "block"
          document.getElementById("searchbox").focus()
        }}
      >
        <span role="img" aria-labelledby="emoji" className="emoji">
          🔎
        </span>
        Search
      </button>
      <div id="myOverlay" className="overlay">
        <center className="overlay-content">
          <button
            className="closebtn"
            onClick={() => {
              document.getElementById("myOverlay").style.display = "none"
            }}
          >
            <span role="img" aria-labelledby="emoji" className="emoji">
              ❌
            </span>
          </button>
          <span className="searchcontainer overlay-content">
            <input
              id="searchbox"
              type="text"
              placeholder="🔎"
              onChange={handleChange}
              label="search"
            />
            <ul id="myList">
              <li></li>
            </ul>
          </span>
        </center>
      </div>
    </span>
  )

  function handleChange(e) {
    var myList = document.getElementById("myList")
    myList.innerHTML = ""
    var searchValue = e.target.value.toLowerCase()
    data.allMdx.edges.map(({ node }) => {
      var articleTitle = node.frontmatter.title
      var articleLink = node.fields.slug
      if (articleTitle.toLowerCase().includes(searchValue)) {
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
export default Search
