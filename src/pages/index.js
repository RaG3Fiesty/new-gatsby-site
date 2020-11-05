import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"
// import { useFlexSearch } from "react-use-flexsearch"
// import { Formik, Form, Field } from "formik"

export default function Home({ data }) {
  var articleNameArray = []
  data.allMdx.edges.map(({ node }) => {
    const articleTitleVar = node.frontmatter.title
    articleNameArray.push(articleTitleVar)
  })
  console.log(articleNameArray)

  var outer = document.getElementById("output")

  function handleChange(e) {
    var search = e.target.value

    if (articleNameArray.includes(search)) {
      var newsearch = search
      outer.innerHTML = newsearch
    }

    if (!articleNameArray.includes(search) && search.length >= 5) {
      outer.innerHTML = "Can't Find it"
    }
  }

  return (
    <Layout>
      <input id="search" type="text" onChange={handleChange} />
      <h1 id="output"></h1>

      <section className="site-content container">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Card className="index-card">
              <div className="card-body">
                <Link to={node.fields.slug}>
                  <p className="tags-display">
                    {node.frontmatter.tags.map(tagItem => (
                      <Link
                        style={{ paddingRight: "5px" }}
                        to={`/tags/${tagItem}`}
                        key={tagItem}
                      >
                        {tagItem}
                      </Link>
                    ))}
                  </p>

                  <h4 className="card-title">{node.frontmatter.title}</h4>
                  <span className="text-muted">{node.frontmatter.date}</span>
                  <hr />
                  <p className="card-text text-muted">
                    {node.frontmatter.excerpt}
                  </p>
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "newsletter" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            excerpt
          }
          id
        }
      }
    }
  }
`
