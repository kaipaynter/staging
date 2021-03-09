import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import ContactNav from '../components/ContactNav'

class Contact extends React.Component {
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
        <ContactNav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="contact" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Contact Me</h2>
                </header>
                <form method="post" action="/contact/">
                  <label>
                    Name
                    <input type="text" name="name" id="name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" id="email" />
                  </label>
                  <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                  </label>
                  <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                  </label>
                  <button type="reset" className="button special">Send</button>
                  <input type="reset" value="Clear" />
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Contact
