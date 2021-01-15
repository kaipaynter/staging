import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const ServicesNav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['home', 'coaching', 'secrets-to-stardom', 'services', 'your-career'] } currentClassName="is-active" offset={-300}>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Scroll type="id" element="coaching">
                    <a href="#">Coaching</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="secrets-to-stardom">
                    <a href="#">Secrets to Stardom</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="services">
                    <a href="#">Services</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="your-career">
                    <a href="#">Your Career</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default ServicesNav
