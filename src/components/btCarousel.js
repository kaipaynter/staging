import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'
import servicesA from '../assets/images/servicespage/servicesA.png'
import servicesB from '../assets/images/servicespage/servicesB.png'
import servicesC from '../assets/images/servicespage/servicesC.png'
import servicesD from '../assets/images/servicespage/servicesD.png'
import servicesE from '../assets/images/servicespage/servicesE.png'

const Btcarousel = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <span className="imageServicesExtra">
        <img src={servicesA} alt="Early Career" />
      </span>
      <br />
      <span className="imageServicesExtra">
        <img src={servicesB} alt="Experienced" />
      </span>
      <br />
      <span className="imageServicesExtra">
        <img src={servicesC} alt="Managers/Directors" />
      </span>
      <br />
      <span className="imageServicesExtra">
        <img src={servicesD} alt="Licensed Professionals" />
      </span>
      <br />
      <span className="imageServicesExtra">
        <img src={servicesE} alt="Executives" />
      </span>
    </Slider>
  )
}
export default Btcarousel
