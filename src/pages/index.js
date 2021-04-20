import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

//Image import start
//About Me
import biopicfull2021 from '../assets/images/landing/biopicfullcropped.jpg'
//Services
import career from '../assets/images/landing/career.jpg'
import c from '../assets/images/landing/c.jpeg'
import yellowtel from '../assets/images/landing/yellowtel.png'
import secrets from '../assets/images/landing/secrets.png'
import american from '../assets/images/landing/american.jpg'
//What's on
import gracegealey from '../assets/images/whatson/gracegealey.jpg'
import img9605 from '../assets/images/whatson/img9605.jpg'
import instagram from '../assets/images/landing/instagramflag.jpg'

//Image import end

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Kai Paynter Advisory" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about-me" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>About Me</h2>
                </header>
                <p>
                  If you came to my page, my guess is that you need some help?
                  <br />
                  Well, you’re in luck. I’m pretty good with people and I’ve
                  done a lot of things.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/about-me" className="button">
                      <strong>Learn More</strong>
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="imageIndexPage">
                <img src={biopicfull2021} alt="" />
              </span>
            </div>
          </section>
          <section id="services" className="main special">
            <header className="major custom">
              <h2>Services</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image fit">
                  <img src={yellowtel} alt="" />
                </span>
                <h3>Coaching</h3>
                <p>
                  Kai has coached some of the freshest faces on
                  television/stage, as well as many students for entry into such
                  institutions as: Columbia University, NYU (Tish), and Yale
                  University.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={c} alt="" />
                </span>
                <h3>Archetype Coaching</h3>
                <p>
                  Archetypes are universal, inborn models of people, behaviors,
                  or personalities that play a role in influencing human
                  behavior. They were introduced by the Swiss psychiatrist Carl
                  Jung.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={career} alt="" />
                </span>
                <h3>Your Career</h3>
                <p>
                  At this time we are only working with existing
                  clients/referrals, however, please submit an inquiry and we
                  will do our best to accommodate. Thank you for your
                  understanding.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={secrets} alt="" />
                </span>
                <h3>Secrets of the Stars</h3>
                <p>
                  Have you ever wondered… WHY that actor got the role over you?
                  Why THEM? Why not YOU? WHEN will it be you? WHAT do you have
                  to do?
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={american} alt="" />
                </span>
                <h3>General American Accent</h3>
                <p>
                  With locally made American films and self-taping now the norm,
                  it’s vital to have great American accents and great US
                  self-tapes.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/services" className="button">
                    <strong>Learn More</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="whats-on" className="main special">
            <header className="major custom">
              <h2>What's On</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image fit">
                  <img src={img9605} alt="" />
                </span>
                <h3>Client Showcase</h3>
                <p>See what our clients are doing!</p>
              </li>
              <li>
                <span className="image fit">
                  <img src={instagram} alt="" />
                </span>
                <h3>Conversation Thursdays</h3>
                <p>Chat with me LIVE every other Thursday!</p>
              </li>
              <li>
                <span className="image fit">
                  <img src={gracegealey} alt="" />
                </span>
                <h3>What They Say</h3>
                <p>Don’t take our word for it, listen to our clients…</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/whats-on" className="button">
                    <strong>Learn More</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="contact" className="main special">
            <header className="major custom">
              <h2>Contact</h2>
            </header>
            <p>Get in touch with me</p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/contact" className="button">
                    <strong>Get Started</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
