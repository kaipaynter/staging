import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const ServicesNav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['home', 'your-career', 'coaching', 'general-american-accent', 'secrets-of-the-stars', 'archetype-coaching'] } currentClassName="is-active" offset={-300}>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Scroll type="id" element="your-career">
                    <a href="#">Your Career</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="coaching">
                    <a href="#">Coaching</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="general-american-accent">
                    <a href="#">General American Accent</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="secrets-of-the-stars">
                    <a href="#">Secrets of the Stars</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="archetype-coaching">
                    <a href="#">Archetype Coaching</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default ServicesNav
