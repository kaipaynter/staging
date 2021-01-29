import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const AboutMeNav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['home', 'about']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Scroll type="id" element="about">
          <a href="#">About</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default AboutMeNav
