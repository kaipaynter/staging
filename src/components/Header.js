import React from 'react'

//import logo from '../assets/images/logo.svg'
import logo from '../assets/images/logo.jpg'
import logo2 from '../assets/images/logo2.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo2} alt="" />
    </span>
    <h1>Welcome</h1>
    <p>Hi! I’m Kai, Solution coach for performers, artists, and creatives </p>
  </header>
)

export default Header
