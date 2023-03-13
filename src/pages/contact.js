import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import ContactNav from '../components/ContactNav'
import { Helmet } from 'react-helmet'

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

        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Contact Me - For Info On Kai Paynter&#39;s Cheap Acting Classes
            &#38; More
          </title>
          <meta
            name="description"
            content="Contact Me - Fill in the form and send us your inquiries about our cheap acting classes, confidence classes for adults, how we teach American accent pronunication of words, and our other services."
          />
          <link rel="canonical" href="https://paynterperformance.com/contact" />
        </Helmet>

        <div id="main">
          <section id="contact" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Contact Me</h2>
                </header>
                <form method="post" action="https://formspree.io/f/mvodweje">
                  <label>
                    Name
                    <input type="text" name="name" id="name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="_replyto" id="email" />
                  </label>
                  <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                  </label>
                  <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                  </label>
                  <button type="submit" className="button special">
                    Send
                  </button>
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
