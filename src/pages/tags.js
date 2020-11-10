import React from "react"
import PropTypes from "prop-types"

// Utilities
import camelCase from "lodash/camelCase"

// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <SEO title="🏷 Tags" />
    <center>
      <h1 style={{ paddingBottom: "20px" }}>Tags</h1>
    </center>

    <section className="site-content container">
      {group.map(tag => (
        <div key={tag.fieldValue}>
          <Link
            className="card-link"
            to={`/tags/${camelCase(tag.fieldValue)}/`}
          >
            <div className="card content-card">
              <div className="card-body content-card-body">
                <h5 className="card-title">
                  {tag.fieldValue} ({tag.totalCount})
                </h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      filter: { frontmatter: { type: { ne: "newsletter" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
