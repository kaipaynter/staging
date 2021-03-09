import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import AboutMeNav from '../components/AboutMeNav'
import biopic from '../assets/images/servicespage/biopic2020.jpg'

class AboutMe extends React.Component {
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
        <AboutMeNav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>About Me</h2>
                </header>
                <span className="imageAboutMe">
                  <img src={biopic} alt="Bio Picture" />
                </span>
                <p className="centeredText">
                  <br />
                  <strong>Identifying & Developing Talent </strong> &#8608;
                  <strong> Advising & Influencing Action </strong> &#8608;
                  <strong> ACQUISITION</strong>
                  <br />
                  <br />
                  Basically, I know what sells and I know how to sell it.
                  <br />
                  <br />
                  BUT… I don’t actually sell anything. I crack codes, find
                  solutions, and I’m passionate about it. I show people what
                  they’ve been missing in almost any field. I’ve been a (an):
                  <br />
                  <br />
                  <strong>Casting Director</strong> for Film/TV………{' '}
                  <strong>Marketing & Brand Manager</strong> for an
                  International Trophy Company……… a Working{' '}
                  <strong>Actor</strong>…… <strong>Advisor</strong> for CEOs
                  ………Highschool
                  <strong> Economics Teacher</strong>………Touring{' '}
                  <strong>Singer</strong> ……… International
                  <strong>
                    {' '}
                    Recruiter/Talent Acquisition
                  </strong>………Worldwide <strong>Resume Writer</strong>
                  ……… <strong>Acting Coach</strong> to the Stars………{' '}
                  <strong>ACT, SAT, GRE, & ESL Instructor</strong>………
                  <strong>Regional Operations Manager</strong> for a Global Tech
                  Firm………
                  <strong>Singing Teacher</strong> for Off-Broadway actors………
                  Corporate
                  <strong> Voice, Speech, & Accent Trainer</strong>………
                  <strong>Grant Writer</strong>………Film/TV
                  <strong> Writer/Director/Producer</strong>………{' '}
                  <strong>Yoga Teacher</strong> in the inner city………University{' '}
                  <strong>Policy & Procedure Research Advisor</strong>………
                  <br />
                  <br />
                  I’m leaving a few things out but in case you’re wondering, I
                  have probably done it……
                  <br />
                  <br />
                  My passion is in <em>helping people WIN.</em>
                  <br />
                  <br />
                  This includes (but is not limited to) being the best version
                  of yourself.
                  <br />
                  <br />
                  So, have a look through my services and let’s do this.
                  <br />
                  <br />
                  <em>Let ME help you, help YOU WIN.</em>
                  <br />
                  <br />
                  (Go ahead, read that 2x!)
                  <br />
                  <strong>xx Coach Kai</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default AboutMe
