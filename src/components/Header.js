import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Welcome</h1>
    <p>
      If you came to my page, my guess is that you need some help? Well, you’re
      in luck.
      <br />
      I’m pretty good with people and I’ve done a lot of things.{' '}
    </p>
  </header>
)

export default Header
