import img from './Images/IMG_3495.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section id='about' className='about background-alt'>
        <Container style={{border: '1px solid white'}}>
            <div className='section-title'>
                <h2> About </h2>
            </div>

            <Row>
                <Col lg={4} className='d-flex justify-content-center' style={{border: '1px solid white'}}> 
                  <img src={img} height="100%" width="50%" style={{ borderRadius: "50%" }}/>
                </Col>
                <Col lg={8} pt={4} className="content" style={{border: '1px solid green'}}>
                  <br></br>
                  <h3>Software Engineer</h3>
                  <p style={{ color: "#728394" }}>
                    A passionate Full Stack Developer, Competitive Programmer, ML enthusiast and Tabla player.
                  </p>
                  <br></br>
                  <p style={{ color: "#728394" }}>
                    Always seeking challenging position in and organization where my skills find ample of oppurtunities for upgradation and growth of the company.
                  </p>
                  <br></br>
                  <Row>
                    <Col lg={4}>
                      <ul>
                      <li>
                          <i><FontAwesomeIcon icon={faChevronRight}/></i> <strong>Phone:</strong>{" "}
                        <span>+91 9766899662</span>
                        </li>
                        <li>
                          <i><FontAwesomeIcon icon={faChevronRight}/></i> <strong>City:</strong>{" "}
                        <span>Tempe, AZ</span>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={7}>
                      <ul>
                        <li>
                          <i><FontAwesomeIcon icon={faChevronRight}/></i> <strong>Degree:</strong>{" "}
                        <span>M.S Software Engineering @ Arizona State University</span>
                        </li>
                        <li>
                          <i><FontAwesomeIcon icon={faChevronRight}/></i> <strong>Email:</strong>{" "}
                        <span>
                          <a href="mailto:aashishsangale07@gmail.com">
                            aashishsangale07@gmail.com
                          </a>
                        </span>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About