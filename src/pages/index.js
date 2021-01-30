import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

//Image import start
//About Me
import landingPage from '../assets/images/landingPage.jpg'
import biopicfull2021 from '../assets/images/landing/biopicfull2021.jpg'
//Services
import career from '../assets/images/landing/career.jpg'
import coaching2 from '../assets/images/landing/coaching2.jpg'
import coaching4 from '../assets/images/landing/coaching4.jpg'
import fame from '../assets/images/landing/fame.jpg'
import unclesam from '../assets/images/landing/unclesam.png'
//What's on
import gracegealey from '../assets/images/whatson/gracegealey.jpg'
import img9605 from '../assets/images/whatson/img9605.jpg'
import instagram from '../assets/images/whatson/instagram.jpg'

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
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  If you came to my page, my guess is that you need some help?
                  Well, you’re in luck. I’m pretty good with people and I’ve
                  done a lot of things.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/about-me" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image2">
                <img width="8rem" src={biopicfull2021} alt="" />
              </span>
            </div>
          </section>

          <section id="services" className="main special">
            <header className="major">
              <h2>Services</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image fit">
                  <img src={career} alt="" />
                </span>
                <h3>Your Career</h3>
                <p>
                  At this time we are only working with existing clients and
                  referrals. However, please submit an inquiry with a PDF/Wordx
                  version of your resume and we will do our best to accommodate.
                  Thank you for your understanding.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={coaching4} alt="" />
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
                  <img src={unclesam} alt="" />
                </span>
                <h3>General American Accent</h3>
                <p>
                  Don’t wait for Pilot Season! You’ll be too late… Take
                  advantage of your time during Covid19 and perfect your US
                  self-tapes. With locally made American films and self-taping
                  now the norm, it’s vital for all aspiring actors to have great
                  American accents and great US self-tapes. This is a jam-packed
                  intensive with American Voice & Acting Coach, Kai Paynter.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={fame} alt="" />
                </span>
                <h3>Secrets of the Stars</h3>
                <p>
                  Have you ever wondered… WHY that actor got the role over you?
                  Why THEM? Why not YOU? WHEN will it be you? WHAT do you have
                  to do? This is a course made for the actor who is looking to
                  GET auditions and BOOK jobs
                </p>
              </li>
              <li>
                <span className="image fit">
                  <img src={coaching2} alt="" />
                </span>
                <h3>Archetype Coaching</h3>
                <p>
                  Archetypes are universal, inborn models of people, behaviors,
                  or personalities that play a role in influencing human
                  behavior. They were introduced by the Swiss psychiatrist Carl
                  Jung, who suggested that these archetypes were archaic forms
                  of innate human knowledge.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/services" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="whats-on" className="main special">
            <header className="major">
              <h2>What's on</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image fit">
                  <img src={img9605} alt="" />
                </span>
                <h3>Client Showcase</h3>
                <p>Check out featured client, Aria!</p>
              </li>
              <li>
                <span className="image fit">
                  <img src={instagram} alt="" />
                </span>
                <h3>Conversation Thursdays</h3>
                <p>Chat with LIVE with me every other Thursday!</p>
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
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>Get in touch with me</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/contact" className="button">
                    Get Started
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
