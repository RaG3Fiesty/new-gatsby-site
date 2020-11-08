import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo.js"
import { Card } from "react-bootstrap"

export default function Four0Four() {
  return (
    <Layout>
      <SEO title="⛔ 404" />

      <section className="site-content container">
        <Card>
          <div className="card-body content-card-body">
            <h4 className="card-title">404</h4>
            <p className="card-text text-muted">
              It seems that I don't have what you are looking for here. You may
              want to check out the Navigation Bar above and browse through
              content.
            </p>
          </div>
        </Card>
      </section>
    </Layout>
  )
}
