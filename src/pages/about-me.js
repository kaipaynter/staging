import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import pic01 from '../assets/images/pic01.jpg'
import AboutMeNav from '../components/AboutMeNav'
import biopic2021 from '../assets/images/aboutme/biopic2021.jpg'
import biopicfull2021 from '../assets/images/landing/biopicfullcropped.jpg'

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
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  My expertise is in:
                  <br />
                  <strong>Identifying & Developing Talent </strong> ---&#x0003E;
                  <strong> Advising & Influencing Action </strong> ---&#x0003E;
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
                  <strong>Marketing & Brand Manager</strong> for a Global Tech
                  Firm……… a Working <strong>Actor</strong>……{' '}
                  <strong>Advisor</strong> for CEOs ………Highschool
                  <strong> Economics Teacher</strong>………Touring{' '}
                  <strong>Singer</strong> ……… International
                  <strong>
                    {' '}
                    Recruiter/Talent Acquisition
                  </strong>………Worldwide <strong>Resume Writer</strong>
                  ……… <strong>Acting Coach</strong> to the Stars……… <strong>ACT, SAT, GRE, & ESL Instructor</strong>………
                  <strong>Regional Operations Manager</strong> for a Global Tech
                  Firm………<strong>Singing Teacher</strong> for Off-Broadway
                  actors……… Corporate
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
                  My passion is in{' '}
                  <strong>
                    <u>helping people WIN.</u>
                  </strong>
                  <br />
                  <br />
                  This includes (but is not limited to): being the being the
                  best version of themselves.
                  <br />
                  <br />
                  So, have a look through my services and let’s do this.
                  <br />
                  <br />
                  <strong>Let ME help you, help YOU WIN.</strong>
                  <br />
                  <br />
                  (Go ahead, read that 2x!)
                </p>
              </div>
              <span className="image">
                <img src={biopicfull2021} alt="" />
              </span>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default AboutMe
