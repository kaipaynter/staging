import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import archetype from '../assets/images/servicespage/archetype.jpg'
import img9605 from '../assets/images/servicespage/img9605.jpg'
import generalamericanaccent from '../assets/images/servicespage/generalamericanaccent.jpeg'
import webresume from '../assets/images/servicespage/webresume.jpg'
import servicesA from '../assets/images/servicespage/servicesA.png'
import servicesB from '../assets/images/servicespage/servicesB.png'
import servicesC from '../assets/images/servicespage/servicesC.png'
import servicesD from '../assets/images/servicespage/servicesD.png'
import servicesE from '../assets/images/servicespage/servicesE.png'
import biopic2020 from '../assets/images/servicespage/biopic2020.jpg'
import ServicesNav from '../components/ServicesNav'
import Class from '../assets/images/servicespage/class.jpg'

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
                <header className="major">
                  <h2>Your Career</h2>
                </header>
                <span className="imageServices">
                  <img src={webresume} alt="" />
                </span>
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

                <br />
                <span className="imageServicesExtra">
                  <img src={servicesA} alt="Early Career" />
                </span>
                <br />
                <span className="imageServicesExtra">
                  <img src={servicesB} alt="Experienced" />
                </span>
                <br />
                <span className="imageServicesExtra">
                  <img src={servicesC} alt="Managers/Directors" />
                </span>
                <br />
                <span className="imageServicesExtra">
                  <img src={servicesD} alt="Licensed Professionals" />
                </span>
                <br />
                <span className="imageServicesExtra">
                  <img src={servicesE} alt="Executives" />
                </span>

                <br />

                <h3>Al A Carte</h3>
                <ul>
                  <li>
                    <strong>Theatrical Resume - $60</strong>
                  </li>
                  Must submit old resume or complete questionnaire.
                  <li>
                    <strong>Bio - $85</strong>
                  </li>
                  Eye catching, real, and written to reflect your personality
                  and style.
                  <li>
                    <strong>Headshot Consultation - $50</strong>
                  </li>
                  We will advise you on how to choose the perfect headshot(s)
                  based on your personality, brand, and your competition.
                  <li>
                    <strong>LinkedIn Update - $50</strong>
                  </li>
                  <strong>
                    Over 87% of employers utilize LinkedIn making it a key
                    resource for jobseekers.
                  </strong>
                  <br />
                  We will optimize your profile, add content, and improve your
                  chances of being seen by employers.
                  <li>
                    <strong>Job Interview Prep - $100</strong>
                  </li>
                  A 45min - 1-hr phone consultation where we will answer
                  questions, rehearse responses, and provide powerful tips to
                  help you succeed during the job interview.
                  <li>
                    <strong>
                      Cover Letter (+ Thank You Letter) - $80 ($100)
                    </strong>
                  </li>
                  A personalized and perfected intro and outro paired with your
                  resume.
                </ul>
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
                <header className="major">
                  <h2>Coaching</h2>
                </header>
                <span className="imageServices">
                  <img src={Class} alt="" />
                </span>
                <br />
                <ul>
                  <li>General American Accent</li>
                  <li>Neutral/UK Accents</li>
                  <li>Regional American Dialects</li>
                  <li>US Scenes (Film/TV)</li>
                  <li>US Sitcom</li>
                  <li>US Plays</li>
                  <li>US Drama</li>
                  <li>US Musical Theatre</li>
                  <li>Client Branding</li>
                  <li>Client Sourcing</li>
                  <li>Career Consulting</li>
                  <li>Interviews</li>
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
                <header className="major">
                  <h2>General American Accent for Self Tapes</h2>
                </header>
                <span className="imageServices">
                  <img src={generalamericanaccent} alt="" />
                </span>
                <p>
                  <strong>All clients must take this before private US accent coaching with Kai. Message us to see if you qualify for the seasonal discount</strong>.
                </p>
              </div>
            </div>
          </section>
          <section id="secrets-of-the-stars" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Secrets of the Stars</h2>
                </header>
                <span className="imageServices">
                  <img src={img9605} alt="" />
                </span>
                <p>
                  <em>Secrets of the Stars</em> is a jam-packed intensive with
                  Coach Kai. The course offers in-depth, first-hand knowledge
                  into the industry and reveals the necessary steps to success.
                </p>
                <p>
                  <strong>Date</strong>: Enrollment Open Now!
                  <br />
                  <strong>Closing</strong>: April 10th
                  <br />
                  <strong>Attendees</strong>: All Levels
                  <br />
                  <strong>Where</strong>: Your Home
                  <br />
                  <strong>Duration</strong>: 1 - 8 Weeks
                  <br />
                  <strong>Price</strong>: $1200
                  <br />
                  <strong>Format</strong>: Online Video Intensive
                  <br />
                  <strong>What you get</strong>:
                  <ul>
                    <li>Brand Management</li>
                    <li>Audition/Audition Prep</li>
                    <li>Headshot/Resume &amp; Portfolio Help</li>
                    <li>US Casting Insights</li>
                    <li>Online Resources</li>
                    <li>Personalized Video Feedback</li>
                    <li>Email Support</li>
                  </ul>
                  <strong>Message us to see if you qualify for the seasonal discount</strong>
                </p>
              </div>
            </div>
          </section>
          <section id="archetype-coaching" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Archetype Coaching</h2>
                </header>
                <span className="imageServices">
                  <img src={archetype} alt="" />
                </span>
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
                  theories. In this work you can find your mission &amp; purpose,
                  understand life lessons, unlock roadblocks, and get clarity on
                  how to reach success.
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
