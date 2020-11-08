import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card } from "react-bootstrap"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="site-content container">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Card className="index-card">
              <div className="card-body">
                <Link to={node.fields.slug}>
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
      sort: { fields: frontmatter___date, order: DESC } # filter: { frontmatter: { type: { eq: "newsletter" } } }
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
