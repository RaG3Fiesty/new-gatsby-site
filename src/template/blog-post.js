import "katex/dist/katex.min.css"
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Home({ data }) {
  const post = data.mdx
  const tagArray = data.mdx.frontmatter.tags
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }
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
