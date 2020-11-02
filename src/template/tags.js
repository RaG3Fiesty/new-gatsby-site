import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

const Tags = ({ data }) => {
  const { edges, totalCount } = data.allMdx
  const tagHeader = `Number of posts is ${totalCount}`
  return (
    <div>
      <center>
        <h1 style={{ paddingBottom: "20px" }}>{tagHeader}</h1>
      </center>
      <section className="site-content container">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <div key={slug}>
              <div className="card content-card">
                <div className="card-body content-card-body">
                  <h5 className="card-title">
                    <Link className="card-link" to={slug}>
                      {title}
                    </Link>
                  </h5>
                  <span className="text-muted">{node.frontmatter.date}</span>
                  <p className="card-text text-muted">
                    {node.frontmatter.excerpt}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
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
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
