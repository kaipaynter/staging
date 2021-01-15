import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['about-me', 'services', 'whats-on', 'contact'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about-me">
                    <a href="#">About Me</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="services">
                    <a href="#">Services</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="whats-on">
                    <a href="#">What's on</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
