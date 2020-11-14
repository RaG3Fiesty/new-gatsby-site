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
          <Card className="index-card" key={node.id}>
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
              <Link to={node.fields.slug}></Link>
              <center>
                <Img
                  className="featured-img"
                  style={{ objectFit: "contain" }}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
              </center>

              <h4 className="cardTitle">{node.frontmatter.title}</h4>
              <Card.Text className="textMuted">
                Author: {node.frontmatter.author}
                <br />
                {node.frontmatter.date}
                <hr />
                <p>{node.frontmatter.excerpt}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
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
