import React from "react"
import { Card, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

const AboutMe = () => {
  return (
    <Layout>
      <SEO title="👨‍🔬 About Me" />
      <Container>
        <Card className="index-card">
          <h1 className="CardTitle">
            <span role="img" aria-labelledby="emoji">
              👋
            </span>
            Hello Friend!
          </h1>
          <hr />
          <h2>Who am I?</h2>
          <Card.Text>
            I am a 14-year-old nerd who loves physics. For the last 2 years or
            so, my interests have peaked in the productivity sphere. In these 2
            years, I have read books, gained some good old knowledge about this
            field, and have used my knowledge to better my life as well. This
            website is my way home where I express the ideas that have helped me
            in the game of life.
          </Card.Text>
        </Card>
      </Container>
    </Layout>
  )
}

export default AboutMe
