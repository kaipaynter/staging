import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import USaccentpicfull from '../assets/images/whatson/US_Accent_Pic_full_2.jpg'
import ethan from '../assets/images/whatson/ethannguyen.png'
import grace from '../assets/images/whatson/gracegealey.jpg'
import jacob from '../assets/images/whatson/jacob.png'
import rachelle from '../assets/images/whatson/rachelle.jpg'
import yelp from '../assets/images/whatson/yelpfivestar.png'
import WhatsOnNav from '../components/WhatsOnNav'

class WhatsOn extends React.Component {
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
        <WhatsOnNav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="client-showcase" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Client Showcase</h2>
                </header>
                <iframe
                  className="iframe"
                  title="Aria Bella Hart"
                  src="https://www.youtube.com/embed/DYGmx-7E-VY"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>
                  “I’ve been studying American Accent with Kai for two terms
                  now. I absolutely love doing the course with her! She’s super
                  supportive and she gives me amazing feedback that helps me
                  progress. I can’t wait to keep on learning and improving my
                  accent and finding out about more tools!” –{' '}
                  <strong>Aria Bella Hart</strong>
                </p>
              </div>
            </div>
          </section>
          <section id="conversation-thursdays" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Conversation Thursdays</h2>
                </header>
                <span className="imageWhatsOn">
                  <img src={USaccentpicfull} alt="" />
                </span>
                <p>
                  Catch us every other Thursday on Instagram{' '}
                  <a href="https://www.instagram.com/kaipaynteradvisory/?hl=en">
                    <strong>@kaipaynteradvisory</strong>
                  </a>
                  ,&nbsp; for a live chit-chat.
                  <br />I share tips, tricks, and other fun stuff. See you
                  there!
                </p>
              </div>
            </div>
          </section>
          <section id="what-they-say" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>What They Say</h2>
                </header>
                <h3>Tommy C.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  Fontana, CA
                  <br />
                  “…I couldn't believe how she was able to transform all my work
                  experience into this well written, key word rich, professional
                  document, at a fraction of the length of the resume I wrote…I
                  am now in the hiring process with an organization that topped
                  my wants list. The value of a good resume cannot be
                  overstated…”
                </p>

                <br />

                <h3>Ethan</h3>
                <span className="imageWhatsOn">
                  <img src={ethan} alt="" />
                </span>
                <p>
                  <em>Columbia University</em>
                  <br />
                  “Because Kai set me loose… I finished my undergrad with a B.S.
                  in Information & Computer Science. When fall arrives, I will
                  begin a new adventure in pursuit of an M.F.A. in Theatre
                  Acting at Columbia. This isn’t a boasting or bragging, but an
                  admittance of credit where it is due. I would not be where I
                  am, if not for her. And there are countless others, as well.
                  Other students from those same beginnings I wrote of who have
                  now gone on to happier endeavors. And I don’t mean acting,
                  necessarily…”
                </p>

                <br />

                <h3>Geoff T.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  Los Angeles, CA
                  <br />
                  “The fee was nominal and I got back a strong resume that
                  better illustrates my accomplishments…she was very easy to
                  work with. We had a call that lasted a bit over an hour and
                  discussed my past. She then took that information and turned
                  around a great new resume in a short amount of time…”
                </p>

                <br />

                <h3>Grace</h3>
                <span className="imageWhatsOn">
                  <img src={grace} alt="" />
                </span>
                <p>
                  <em>Empire, Fox</em>
                  <br />
                  “Not only have I heard directly from students about the
                  significant impact she has had on their academic advancement,
                  but I have also had the pleasure of sitting in on quite a few
                  of her classes where that notion was repeatedly and
                  beautifully solidified.”
                </p>

                <br />

                <h3>Coko J.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  Granada Hills, CA
                  <br />
                  “It had been years since I updated my resume last time. I
                  needed a professional help to get it right…she understood my
                  needs and worked efficiently to make my resume shine, which I
                  was truly grateful for. She is truly experienced and knows her
                  trade!”
                </p>

                <br />

                <h3>Jacob</h3>
                <span className="imageWhatsOn">
                  <img src={jacob} alt="" />
                </span>
                <p>
                  <em>Book of Mormon, Broadway Tour</em>
                  <br />
                  “What was more important was that each person seemed to take
                  one big, monumental, game-changing step in her class. What was
                  even more impressive about this feat was that Kai was able to
                  facilitate this to her students despite the diverse level of
                  ability in her classroom.”
                </p>

                <br />

                <h3>Oma E.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <em>Albuquerque, NM</em>
                  <br />
                  “I can't thank her enough… Not only did she give me a great
                  resume, I got it earlier then it was scheduled (by my
                  request). I can say with all seriousness that the resume I
                  received will give me a chance in a largely competitive
                  market. I’m so grateful to her for giving me a resume that
                  will give me a chance to get my foot in the door.”
                </p>

                <br />

                <h3>Rachelle</h3>
                <span className="imageWhatsOn">
                  <img src={rachelle} alt="" />
                </span>
                <p>
                  <em>Anything Goes, Off-Broadway Tour</em>
                  <br />
                  “Ms. Paynter was not only a wonderful teacher, but also an
                  approachable and devoted mentor. She made herself available to
                  all of her students... I asked Ms. Paynter numerous times if
                  she would work with me privately and she always said yes —she
                  wouldn’t let me leave until I felt comfortable and prepared…
                  She believed in me, and that was a core reason why I stayed in
                  the program and worked until I earned my Bachelor of Fine Arts
                  and graduated as one of six in the (competitive) Musical
                  Theatre program.”
                </p>

                <br />

                <h3>James V.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <em>Pasadena, CA</em>
                  <br />
                  “What I really liked about the service was that she took the
                  time and listened to my career goals. Reading my finished
                  resume I really felt like it reflected everything that I told
                  her about myself. She took the time and did an amazing job.”
                </p>

                <br />

                <h3>Jason S.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <em>Decatur, IL</em>
                  <br />
                  “After years with the same employer, my resume was out of date
                  & poorly formatted for today's market. Alicia was a pleasure
                  to work with & did a fantastic job.”
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default WhatsOn
