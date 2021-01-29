import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { Link } from 'gatsby'

const WhatsOnNav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['home', 'client-showcase', 'conversation-thursdays', 'what-they-say'] } currentClassName="is-active" offset={-300}>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Scroll type="id" element="client-showcase">
                    <a href="#">Client Showcase</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="conversation-thursdays">
                    <a href="#">Conversation Thursdays</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="what-they-say">
                    <a href="#">What They Say</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default WhatsOnNav
