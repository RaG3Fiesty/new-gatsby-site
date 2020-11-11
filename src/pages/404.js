import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

export default function Home() {
  return (
    <Layout>
      <SEO title="⛔ 404" />

      <section className="site-content container">
        <div className="card content-card">
          <div className="card-body content-card-body">
            <h5 className="card-title">404</h5>
            <p className="card-text text-muted">
              It seems that I don't have what you are looking for here. You may
              want to check out the Navigation Bar above and browse through
              content.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
