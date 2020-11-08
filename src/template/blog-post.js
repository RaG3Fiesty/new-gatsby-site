import "katex/dist/katex.min.css"
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "react-bootstrap"

export default function Post({ data }) {
  const post = data.mdx
  const tagArray = data.mdx.frontmatter.tags
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container className="article">
        <h1 className="article-title">{post.frontmatter.title}</h1>
        <div className="article-metadata">
          <p className="tagArray">
            {tagArray.map(tagItem => (
              <Link className="tagItem" to={`/tags/${tagItem}`}>
                {tagItem}
              </Link>
            ))}
          </p>
          <span className="timeToRead">{post.timeToRead} mins</span>
        </div>
        <hr /> <br />
        <span className="article-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </span>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      body
      frontmatter {
        title
        tags
      }
    }
  }
`
