import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import archetype from '../assets/images/servicespage/archetype.jpg'
import secrets from '../assets/images/servicespage/secrets_of_the_stars.jpg'
import generalamericanaccent from '../assets/images/servicespage/american_accent.jpg'
import yourcareer from '../assets/images/servicespage/career2.jpg'
import ServicesNav from '../components/ServicesNav'
import coaching from '../assets/images/servicespage/c1_cropped.png'

//Icons
import Al_a_Carte from '../assets/images/servicespage/Al_a_Carte_Icon.jpg'
import Directors_Managers from '../assets/images/servicespage/Directors_Managers_Icon.jpg'
import Early_Career from '../assets/images/servicespage/Early_Career_Icon.jpg'
import Executives from '../assets/images/servicespage/Executives_Icon.jpg'
import Experienced from '../assets/images/servicespage/Experienced_Icon.jpg'
import Licened_Professionals from '../assets/images/servicespage/Licensed_Professionals_Icon.jpg'

//Service images
import servicesA from '../assets/images/servicespage/servicesA.png'
import servicesB from '../assets/images/servicespage/servicesB.png'
import servicesC from '../assets/images/servicespage/servicesC.png'
import servicesD from '../assets/images/servicespage/servicesD.png'
import servicesE from '../assets/images/servicespage/servicesE.png'
import servicesF from '../assets/images/servicespage/servicesF.png'

class Services extends React.Component {
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
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <ServicesNav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="your-career" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Your Career</h2>
                </header>
                <span className="imageServices">
                  <img src={yourcareer} alt="" />
                </span>
                <br />
                <p>
                  <em>
                    Resumes are your entry through the door and as such, are THE
                    most important tool for job placement and positioning. Your
                    resume should outperform your competition while highlighting
                    your strengths.
                  </em>
                  <br />
                  <br />
                  Our resumes are customized for you and are written based on
                  how other recruiters search for and select candidates. We
                  implement proven resume strategies that are Applicant Tracking
                  System (ATS) compliant and target how recruiters/employers
                  search, read, and find resumes today.
                  <br />
                  <br />
                  Includes:
                  <ul>
                    <li>
                      30min – 1hr phone consultation to discuss your current
                      resume, career goals, and resume strategy
                    </li>
                    <li>
                      Update/Revision to your current resume sent to your email
                      in Wordx/PDF attachment
                    </li>
                    <li>1 month free of additional resume edits, if needed</li>
                    <li>
                      Returning clients also receive a 25% discount whenever a
                      resume is needed in the future
                    </li>
                    <li>
                      Email us for a price quote and free summary of work offer
                    </li>
                  </ul>
                </p>
                <p className="centeredText">
                  <em>Click an applicable icon for further details.</em>
                </p>
                <p class="row">
                  <span class="column">
                    <a href={servicesA} target="_blank" rel="noreferrer">
                      <img
                        src={Early_Career}
                        alt="Early Career"
                        className="imageServicesIcons"
                      />
                    </a>
                  </span>
                  <span class="column">
                    <a href={servicesB} target="_blank" rel="noreferrer">
                      <img
                        src={Experienced}
                        alt="Experienced"
                        className="imageServicesIcons"
                      />
                    </a>
                  </span>
                  <span class="column">
                    <a href={servicesC} target="_blank" rel="noreferrer">
                      <img
                        src={Directors_Managers}
                        alt="Directors_Managers"
                        className="imageServicesIcons"
                      />
                    </a>
                  </span>
                  <span class="column">
                    <a href={servicesD} target="_blank" rel="noreferrer">
                      <img
                        src={Licened_Professionals}
                        alt="Licened_Professionals"
                        className="imageServicesIcons"
                      />
                    </a>
                  </span>
                  <span class="column">
                    <a href={servicesE} target="_blank" rel="noreferrer">
                      <img
                        src={Executives}
                        alt="Executives"
                        className="imageServicesIcons"
                      />
                    </a>
                  </span>
                  <span class="column">
                    <a href={servicesF} target="_blank" rel="noreferrer">
                      <img
                        src={Al_a_Carte}
                        alt="Al_a_Carte"
                        className="imageServicesIcons"
                      />
                    </a>
                  </span>
                </p>

                <br />

                <p>
                  ***Prices listed are for updating &amp; improving existing
                  resumes. There is an additional cost if you do not have an
                  existing resume.
                  <br />
                  ****LinkedIn Updating is only offered with a resume
                </p>
              </div>
            </div>
          </section>
          <section id="coaching" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Coaching</h2>
                </header>
                <span className="imageServicesExtra">
                  <img src={coaching} alt="" />
                </span>
                <br />

                <ul className="custom centeredText column">
                  <li>General American Accent</li>
                  <li>Neutral/UK Accents</li>
                  <li>Regional American Dialects</li>
                  <li>US Scenes (Film/TV)</li>
                  <li>US Sitcom</li>
                  <li>US Plays</li>
                </ul>

                <ul className="custom centeredText column">
                  <li>US Drama</li>
                  <li>US Musical Theatre</li>
                  <li>Client Branding</li>
                  <li>Client Sourcing</li>
                  <li>Career Consulting</li>
                  <li>Interviews</li>
                </ul>

                <ul className="custom centeredText column">
                  <li>Movement</li>
                  <li>Singing</li>
                  <li>Voice &amp; Speech</li>
                  <li>Self-tapes/Auditions</li>
                  <li>Acting</li>
                  <li>On-set</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="general-american-accent" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>General American Accent for Self-Tapes</h2>
                </header>
                <span className="imageServices">
                  <a
                    href="https://youtu.be/uIS59EP8_og"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={generalamericanaccent} alt="" />
                  </a>
                </span>
                <br />
                <p className="centeredText">
                  <strong>
                    Strongly recommended before private US accent coaching with
                    Kai.
                  </strong>
                  <br />
                  Click the image for further details.
                </p>
                <p className="centeredText">
                  <strong>Date</strong>: Enrollment Open Now!
                  <br />
                  <strong>Closing</strong>: April 15th
                  <br />
                  <strong>Attendees</strong>: All Levels
                  <br />
                  <strong>Where</strong>: Your Home
                  <br />
                  <strong>Duration</strong>: 2 Weeks
                  <br />
                  <strong>Price</strong>: $750
                  <br />
                  <strong>Format</strong>: Online Video Intensive
                  <br />
                  <br />
                  <strong>
                    Message us to see if you qualify for the seasonal discount.
                  </strong>
                </p>
              </div>
            </div>
          </section>
          <section id="secrets-of-the-stars" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Secrets of the Stars</h2>
                </header>
                <span className="imageServices">
                  <a
                    href="https://youtu.be/IAu2M_iEeqw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={secrets} alt="" />
                  </a>
                </span>
                <br />
                <p className="centeredText">
                  <strong>
                    This jam-packed intensive offers in-depth, first-hand
                    knowledge of the industry and reveals the necessary steps to
                    success.
                  </strong>
                  <br />
                  Click the image for further details.
                </p>
                <p className="centeredText">
                  <strong>Date</strong>: Enrollment Open Now!
                  <br />
                  <strong>Closing</strong>: April 15th
                  <br />
                  <strong>Attendees</strong>: All Levels
                  <br />
                  <strong>Where</strong>: Your Home
                  <br />
                  <strong>Duration</strong>: 4 Weeks
                  <br />
                  <strong>Price</strong>: $1200
                  <br />
                  <strong>Format</strong>: Online Video Intensive
                  <br />
                  <br />
                  <strong>
                    Message us to see if you qualify for the seasonal discount.
                  </strong>
                </p>
              </div>
            </div>
          </section>
          <section id="archetype-coaching" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Archetype Coaching</h2>
                </header>
                <span className="imageServices">
                  <img src={archetype} alt="" />
                </span>
                <br />
                <p>
                  In Jungian psychology, the archetypes represent universal
                  patterns and images that are part of the collective
                  unconscious. Jung believed that we inherit these archetypes
                  much in the way we inherit instinctive patterns of behavior.
                  <br />
                  <br />
                  The word “archetype” means original pattern.
                  <br />
                  <br />
                  Millions of people around the world know their psychological
                  type, the result of completing the Myers-Briggs Type
                  Indicator® assessment. The MBTI® instrument is a tool created
                  by Isabel Myers based on Carl G. Jung's personality type
                  theories. In this work you can find your mission &amp;
                  purpose, understand life lessons, unlock roadblocks, and get
                  clarity on how to reach success.
                  <br />
                  <br />
                  <strong>Recommended prior to standard coaching.</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Services
