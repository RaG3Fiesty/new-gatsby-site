import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"

const Tags = ({ data }) => {
  const { edges, totalCount } = data.allMdx
  const tagHeader = `Number of posts is ${totalCount}`
  return (
    <Layout>
      <center>
        <h1 style={{ paddingBottom: "20px" }}>{tagHeader}</h1>
      </center>
      <Container className="site-content">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <span key={slug}>
              <Card className="index-card">
                <Card.Body className="card-body">
                  <h4 className="cardTitle">
                    <Link
                      className="card-link"
                      style={{ color: "black" }}
                      to={slug}
                    >
                      {title}
                    </Link>
                  </h4>
                </Card.Body>
              </Card>
            </span>
          )
        })}
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
          }
        }
      }
    }
  }
`

export default Tags
