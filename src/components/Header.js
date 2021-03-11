import React from 'react'
import logo2 from '../assets/images/logo2.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo2} alt="" />
    </span>
    <h1>Welcome</h1>
    <h2 className="change">
      Hi! I'm <strong>Kai</strong>, the solution-strategy coach for artists,
      creatives, and performers.
    </h2>
  </header>
)

export default Header
