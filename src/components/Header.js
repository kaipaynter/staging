import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Header = (props) => (
  <header id="header" className="alt">
    <span className="logo">
      <StaticImage
        src="../assets/images/logo_new.png"
        alt="Logo"
        placeholder="blurred"
        objectFit="contain"
      />
    </span>
  </header>
)

export default Header
