import React from "react"
import { Link, graphql } from "gatsby"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

const NewsletterPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="💌 Sunday Times Sunday" />
      <Container className="site-content">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <Card className="index-card">
                <Card.Body>
                  <h4 className="cardTitle">{node.frontmatter.title}</h4>
                  <span className="textMuted">{node.frontmatter.date}</span>
                  <hr />
                  <Card.Text className="textMuted">
                    {node.frontmatter.excerpt === ""
                      ? node.excerpt
                      : node.frontmatter.excerpt}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
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
            excerpt
          }
          excerpt(pruneLength: 150)
          id
        }
      }
    }
  }
`
export default NewsletterPage
