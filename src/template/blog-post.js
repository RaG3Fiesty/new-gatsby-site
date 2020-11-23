import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container } from "react-bootstrap"

const PostTemplate = ({ data }) => {
  const post = data.mdx
  var contentType = post.frontmatter.type
  if (contentType === "newsletter") {
    return (
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Container className="newsletter">
          <center>
            <Container fluid className="newsletter-title-container">
              <h1 className="newsletter-title">{post.frontmatter.title}</h1>
              <div className="newsletter-metadata">
                {post.timeToRead === 1 ? (
                  <span className="timeToRead">{post.timeToRead} min</span>
                ) : (
                  <span className="timeToRead">{post.timeToRead} mins</span>
                )}
              </div>
            </Container>
          </center>

          <Container className="newsletter-body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </Container>
        </Container>
      </Layout>
    )
  } else if (contentType === "article") {
    const tagArray = data.mdx.frontmatter.tags
    return (
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Container className="article">
          <Container className="article-title-container">
            <h1 className="article-title">{post.frontmatter.title}</h1>
            <div className="article-metadata">
              <p className="tagArray">
                {tagArray.map(tagItem => (
                  <Link
                    key={tagItem}
                    className="tagItem"
                    to={`/tags/${tagItem}`}
                  >
                    {tagItem}
                  </Link>
                ))}
              </p>
              {post.timeToRead === 1 ? (
                <span className="timeToRead">{post.timeToRead} min</span>
              ) : (
                <span className="timeToRead">{post.timeToRead} mins</span>
              )}
            </div>
          </Container>

          <Container className="article-body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </Container>
        </Container>
      </Layout>
    )
  } else {
    const tagArray = data.mdx.frontmatter.tags
    return (
      <Layout>
        <SEO title={post.frontmatter.title} />
        <Container className="article">
          <center>
            <Container className="article-title-container">
              <h1 className="article-title">{post.frontmatter.title}</h1>
              <div className="article-metadata">
                <p className="tagArray">
                  {tagArray.map(tagItem => (
                    <Link
                      key={tagItem}
                      className="tagItem"
                      to={`/tags/${tagItem}`}
                    >
                      {tagItem}
                    </Link>
                  ))}
                </p>
                <span className="author-name">{post.frontmatter.author}</span>
                <br />
                <span className="author-name">{post.frontmatter.category}</span>
                <br />
                <span className="author-name">{post.frontmatter.rating}</span>
                <br />
                {post.timeToRead === 1 ? (
                  <span className="timeToRead">{post.timeToRead} min</span>
                ) : (
                  <span className="timeToRead">{post.timeToRead} mins</span>
                )}
              </div>
            </Container>
          </center>
          <Container className="article-body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      body
      frontmatter {
        title
        tags
        type
        author
        category
        rating
      }
    }
  }
`

export default PostTemplate
