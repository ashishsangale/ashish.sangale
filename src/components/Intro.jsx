import img from './Images/IMG_3495.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactTyped } from "react-typed"

function Intro() {
  return (
    <section  id='hero' className='d-flex flex-column justify-content-center'>
      <Container>
        <Row>
            <Col lg = {6} className='item-center'>
              <h1 className='h1 fixed-top'>Ashish Sangale</h1>
              <p> I am a&nbsp; </p>
              <span
                className="typed"
                data-typed-items="Developer, Tabla Player, Gamer"
              ></span>
              <ReactTyped strings={["Backend Developer", "Sports Entusiast"]} typeSpeed={40} loop showCursor/>
            </Col>
            <Col lg = {6} style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                padding: "15px"
            }}>
                <img src={img} height ='100%' width='65%' style={{
                borderRadius: "30px",
              }}></img>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Intro