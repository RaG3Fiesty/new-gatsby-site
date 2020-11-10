import React from "react"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

const Four0Four = () => {
  return (
    <Layout>
      <SEO title="⛔ 404" />

      <Container className="site-content">
        <Card>
          <Card.body>
            <h4 className="cardTitle">404</h4>
            <Card.text className="textMuted">
              It seems that I don't have what you are looking for here. You may
              want to check out the Navigation Bar above and browse through
              content.
            </Card.text>
          </Card.body>
        </Card>
      </Container>
    </Layout>
  )
}

export default Four0Four
