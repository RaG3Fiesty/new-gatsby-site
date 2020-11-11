import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="💸 Notes" />
      <section className="site-content container">
        {data.allMdx.edges.map(({ node }) => (
          <span key={node.id}>
            <a className="card-link" href={node.fields.slug}>
              <div className="layout">
                <div
                  class="layout__item layout__item--figure"
                  style={{ width: "400px" }}
                >
                  <Img
                    className="featured-img"
                    style={{ objectFit: "contain" }}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                </div>
                <div class="layout__item layout__item--body">
                  <p
                    style={{
                      textTransform: "camelCase",
                      color: "rgba(0, 161, 255, 1)",
                      fontSize: "13px",
                    }}
                  >
                    <Link to={`/tags/${node.frontmatter.tags[0]}`}>
                      {node.frontmatter.tags[0]}
                    </Link>
                  </p>
                  <p>Author: {node.frontmatter.title}</p>
                  <h4 className="card-title">{node.frontmatter.title}</h4>
                  <span className="text-muted">{node.frontmatter.date}</span>
                  <hr />
                  <p className="card-text text-muted">
                    {node.frontmatter.excerpt}
                  </p>
                </div>
              </div>
            </a>
          </span>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          id
          base
          accessTime(fromNow: true)
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "books" } } }
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
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  }
`
