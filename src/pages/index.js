import React from "react"
import { Link, graphql } from "gatsby"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo.js"
import Img from "gatsby-image"

const HomePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="🏡 Home" />
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
                  <span className="textMuted">{node.frontmatter.date}</span>
                  <hr />
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
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "article" } } }
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
export default HomePage
