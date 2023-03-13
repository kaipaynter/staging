import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import { StaticImage } from 'gatsby-plugin-image'
//import Header from '../components/Header'
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
        <Helmet>
          <title>
            Paynter Performance - Accent Classes, Cheap Acting Classes, &#38;
            Much More
          </title>
          <meta
            name="description"
            content="Paynter Performance - Come to us for American accent pronunciation of words, cheap acting classes, accent classes for actors, &#38; more. Also see Kai Paynter website and Bear Tiger Productions for other services."
          />
          <link rel="canonical" href="https://paynterperformance.com" />
        </Helmet>

        {/* <Header /> */}

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about-me" className="main special">
            <span className="image fit3">
            <header className="major custom">
              <h2>About Me</h2>
            </header>
              <StaticImage
                src="../assets/images/landing/Homepage_Actors_Creatives.jpg"
                alt="Creatives"
                placeholder="blurred"
                objectFit="cover"
              />
            </span>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/about-me" className="button">
                    <strong>Learn More</strong>
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
          <section id="services" className="main special">
            <header className="major custom">
              <h2>Services</h2>
            </header>
            <p className="hidden">
              Looking for cheap acting classes, celebrity acting coaches or
              accent class for actors, you are at the right place!
            </p>

            <ul className="features">
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/c.jpeg"
                    alt="Coaching"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Coaching</h3>
                <p>
                  Kai's work spans most industries, with a specialty in mental strength training for athletes, all facets of actor training, &#38; career growth for creatives.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/KAP_2.95.jpg"
                    alt="KAP Management"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>KAP Management</h3>
                <p>
                  Representing LA, NYC, Toronto, Sydney, Melbourne, &#38; Brisbane's finest talent!
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/career.jpg"
                    alt="Your Career"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Your Career</h3>
                <p>
                  At this time, we're only working with existing clients/referrals, however, please submit an inquiry and we will do our best to accommodate.
                </p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/landing/oscars_1.jpg"
                    alt="Secrets of the Stars"
                    placeholder="blurred"
                    objectFit="contain"
                  />
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
                  <StaticImage
                    src="../assets/images/landing/american.jpg"
                    alt="General American Accent"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>General American Accent</h3>
                <p>
                  With locally made American films and self-taping now the norm, it’s vital to have great American accents and great US self-tapes.
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
                  <StaticImage
                    src="../assets/images/whatson/img9605.jpg"
                    alt="Client Showcase"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Client Showcase</h3>
                <p>See what our clients are doing!</p>
              </li>
              <li>
                <span className="image fit2">
                  <StaticImage
                    src="../assets/images/landing/free.jpeg"
                    alt="Promos"
                    placeholder="blurred"
                    objectFit="contain"
                  />
                </span>
                <h3>Promotionals</h3>
                <p>Discounts, Offers, &#38; so much more...</p>
              </li>
              <li>
                <span className="image fit">
                  <StaticImage
                    src="../assets/images/whatson/gracegealey.jpg"
                    alt="What They Say"
                    placeholder="blurred"
                    objectFit="contain"
                  />
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
