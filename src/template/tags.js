import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"
import Img from "gatsby-image"
const Tags = ({ data }) => {
  const { totalCount } = data.allMdx
  const tagHeader = `Number of posts is ${totalCount}`
  return (
    <Layout>
      <center>
        <h1 style={{ paddingBottom: "20px" }}>{tagHeader}</h1>
      </center>
      <Container className="site-content">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Card className="index-card">
              <Card.Body>
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
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, type: { ne: "newsletter" } }
      }
    ) {
      totalCount
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

export default Tags
