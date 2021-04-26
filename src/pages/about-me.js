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
                  <img src={biopic} alt="Bio" />
                </span>
                <p className="centeredText">
                  <br />
                  &#10036;{' '}
                  <strong>
                    {' '}
                    Basically, I know what sells and I know how to sell it.
                  </strong>{' '}
                  &#10036;
                  <br />
                  <br />
                  I identify weak points, crack their codes, find solutions, and
                  I’m passionate about it.
                  <br />
                  <br />
                  <strong>Performance training & optimization</strong> is at the
                  heart of my work. My clients often call me, "The Mental Coach"
                  because I get to the bottom of unhealthy habits/processes and
                  I identify individual strategies to propel them to new
                  heights. I show people what they’ve been missing in almost any
                  field. I’ve been a/an:
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
                  I have found that human beings are intrinsically creative and
                  artistic. Don't think so? Consider my list of varied careers
                  above. If only I had a "mental coach" to help me get to these
                  positions faster, I might have had 30 more roles to include!
                  <br />
                  <br />
                  You don't have to be in the "arts" to work with me. In fact, I
                  encourage those who are not, to reach out, as well. Sharing
                  the weight of recognizing, unpacking, and harnessing talent
                  with a professional (aka GETTING UNSTUCK) is fundamental to
                  LASTING growth. This is a highly creative process at its core
                  and most people rarely get there without this shared
                  experience.
                  <br />
                  <br />
                  But don't take my word for it; read our reviews, (ask me for a
                  full bio, if you'd like,) have a look through my services and
                  let's do this.
                  <br />
                  <br />
                  <em>Let ME help you, help YOU WIN.</em>
                  <br />
                  <br />
                  (Go ahead, read that 2x!)
                  <br />
                  <br />
                  <p className="font">
                    <strong>xx Coach Kai</strong>
                  </p>
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
