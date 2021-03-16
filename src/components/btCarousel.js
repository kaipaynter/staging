import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
//import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import servicesA from '../assets/images/servicespage/servicesA.png'
import servicesB from '../assets/images/servicespage/servicesB.png'
import servicesC from '../assets/images/servicespage/servicesC.png'
import servicesD from '../assets/images/servicespage/servicesD.png'
import servicesE from '../assets/images/servicespage/servicesE.png'

const Btcarousel = () => (
  <Container>
    <Carousel
      showArrows="true"
      controls="true"
      justify-self="end"
      align-self="center"
      control-prev-icon-color="red"
      control-next-icon-color="red"
    >
      <Carousel.Item>
        <img
          className="imageServicesExtra"
          src={servicesA}
          alt="Early Career"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="imageServicesExtra" src={servicesB} alt="Experienced" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imageServicesExtra"
          src={servicesC}
          alt="Managers/Directors"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imageServicesExtra"
          src={servicesD}
          alt="Licensed Professionals"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="imageServicesExtra" src={servicesE} alt="Executives" />
      </Carousel.Item>
    </Carousel>
  </Container>
)

export default Btcarousel
