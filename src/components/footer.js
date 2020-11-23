import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaRedditAlien,
  FaPinterestP,
  FaMailBulk,
} from "react-icons/all"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <center>
              Contact Me
              <hr />
              <a
                className="resp-sharing-button__link"
                href="mailto:hello@aproductivenerd.com"
                target="_self"
                rel="noopener noreferrer"
                aria-label=""
              >
                <div className="resp-sharing-button resp-sharing-button--email resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaMailBulk className="share-icon" />
                  </div>
                </div>
              </a>
              <a
                className="resp-sharing-button__link"
                href="https://twitter.com/SikandMr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
              >
                <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaTwitter className="share-icon" />
                  </div>
                </div>
              </a>
            </center>
          </Col>
          <Col>
            <center>
              Share
              <hr />
              <a
                className="resp-sharing-button__link"
                href="https://twitter.com/intent/tweet/?text=&amp;url=https%3A%2F%2Fwww.aproductivenerd.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
              >
                <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaTwitter className="share-icon" />
                  </div>
                </div>
              </a>
              <a
                className="resp-sharing-button__link"
                href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.aproductivenerd.com"
                target="_blank"
                aria-label=""
                rel="noopener noreferrer"
              >
                <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaFacebookF className="share-icon" />
                  </div>
                </div>
              </a>
              <br />
              <a
                className="resp-sharing-button__link"
                href="https://reddit.com/submit/?url=https%3A%2F%2Fwww.aproductivenerd.com&amp;resubmit=true&amp;title="
                target="_blank"
                aria-label=""
                rel="noopener noreferrer"
              >
                <div className="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaRedditAlien className="share-icon" />
                  </div>
                </div>
              </a>
              <a
                className="resp-sharing-button__link"
                href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.aproductivenerd.com&amp;media=https%3A%2F%2Fwww.aproductivenerd.com&amp;description="
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
              >
                <div className="resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaPinterestP className="share-icon" />
                  </div>
                </div>
              </a>
              <br />
              <a
                className="resp-sharing-button__link"
                href="mailto:?subject=&amp;body=https%3A%2F%2Fwww.aproductivenerd.com"
                target="_self"
                rel="noopener noreferrer"
                aria-label=""
              >
                <div className="resp-sharing-button resp-sharing-button--email resp-sharing-button--small">
                  <div
                    aria-hidden="true"
                    className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                  >
                    <FaMailBulk className="share-icon" />
                  </div>
                </div>
              </a>
            </center>
          </Col>
          <Col className="nav-links-col">
            <center>
              Navigation links
              <hr />
              <p>
                <Link href="/">
                  <span role="img" aria-labelledby="emoji" className="emoji">
                    🏡
                  </span>
                  Home
                </Link>
              </p>
              <p>
                <Link href="/about-me">
                  <span role="img" aria-labelledby="emoji" className="emoji">
                    👨‍🔬
                  </span>
                  About Me
                </Link>
              </p>
              <p>
                <Link href="/notes">
                  <span role="img" aria-labelledby="emoji" className="emoji">
                    📚
                  </span>
                  Notes
                </Link>
              </p>
              <p>
                <Link href="/tags">
                  <span role="img" aria-labelledby="emoji" className="emoji">
                    🏷
                  </span>
                  Tags
                </Link>
              </p>
            </center>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
