import React from 'react'
import img from './Images/IMG_3495.jpg'
import { Container, Row, Col } from 'react-bootstrap'

function Intro() {
  return (
    <Container fluid>
        <Row>
            <Col lg = {6} className='item-center'>1</Col>
            <Col lg = {6} style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                padding: "15px"
            }}>
                <img src={img} height='100%' width='65%' style={{
                borderRadius: "30px",
              }}></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Intro