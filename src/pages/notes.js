import React from "react"
import { Link, graphql } from "gatsby"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo.js"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="💸 Notes" />
      <Container className="site-content">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Card className="index-card">
              <Card.Body>
                <p className="tagArray">
                  {node.frontmatter.tags.map(tagItem => (
                    <Link
                      className="tagItem"
                      to={`/tags/${tagItem}`}
                      key={tagItem}
                    >
                      {tagItem}
                    </Link>
                  ))}
                </p>
                <Link to={node.fields.slug}>
                  <center>
                    <Img
                      className="featured-img"
                      style={{ objectFit: "contain" }}
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                  </center>
                  <h4 className="cardTitle">{node.frontmatter.title}</h4>
                  <span className="textMuted">
                    Author: {node.frontmatter.author}
                  </span>
                  <br />
                  <span className="textMuted">{node.frontmatter.date}</span>
                  <br />
                  <span className="textMuted">{node.frontmatter.category}</span>
                  <span className="textMuted">
                    {node.frontmatter.rating}
                    <hr />
                  </span>
                  <Card.Text className="textMuted">
                    {node.frontmatter.excerpt === ""
                      ? node.excerpt
                      : node.frontmatter.excerpt}
                  </Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
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
            rating
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 150)
          id
        }
      }
    }
  }
`
