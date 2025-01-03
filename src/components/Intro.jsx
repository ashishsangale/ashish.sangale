import { Container, Row, Col } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import img from './Images/IMG_3495.jpg'
import './Intro.css'

function Intro() {

  return (
    <section id="hero">
      <Container>
        <Row>
          <Col lg={6} className="item-center">
            <h1 className="h1 fixed-top">Ashish Sangale</h1>
            <p>
              I am a&nbsp;
              <span className="typed">
                <ReactTyped
                  strings={["Backend Developer", "Sports Enthusiast"]}
                  typeSpeed={90}
                  backSpeed={60}
                  loop
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ashish-sangale/">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href="https://github.com/ashishsangale">
                <i>
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
              <a href="mailto:aashishsangale07@gmail.com">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
              </a>
            </div>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{ borderRadius: "30px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Intro;
