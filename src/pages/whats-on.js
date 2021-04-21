import React from 'react'
import { Waypoint } from 'react-waypoint'
import Layout from '../components/layout'
import conversation from '../assets/images/whatson/ppl_instagram.jpg'
import ethan from '../assets/images/whatson/ethan_nguyen_2.png'
import grace from '../assets/images/whatson/g.jpg'
import jacob from '../assets/images/whatson/jacob.jpg'
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
                <header className="major custom">
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
                <p />
                <p>
                  <strong>Client of the Quarter</strong> - "I’ve been studying
                  General American Accent with Kai for a little less than a
                  year, now. I absolutely love doing the course with her! She’s
                  super supportive and she gives me amazing feedback that helps
                  me progress. I can’t wait to keep on learning, improving my
                  accent, and finding out about more tools!” –{' '}
                  <strong>Aria Bella Hart</strong>, Sydney, Australia
                </p>
              </div>
            </div>
          </section>
          <section id="conversation-thursdays" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>Conversation Thursdays</h2>
                </header>
                <span className="imageWhatsOnExtra">
                  <a
                    href="https://www.instagram.com/kaipaynteradvisory/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={conversation} alt="instagram" />
                  </a>
                </span>
                <p />
                <p className="centeredText">
                  Come hang out with me every other Thursday on the Gram{' '}
                  <a href="https://www.instagram.com/kaipaynteradvisory/?hl=en">
                    <strong>@kaipaynteradvisory</strong>
                  </a>
                  <br />
                  We talk about everything under the sun as it pertains to
                  career, life, work, and most importantly YOU. If you are
                  wondering what it may be like to work with me, this will give
                  you a great idea. I also share tips, tricks, and other fun
                  stuff. See you there!
                </p>
              </div>
            </div>
          </section>
          <section id="what-they-say" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major custom">
                  <h2>What They Say</h2>
                </header>
                <h3 className="centeredText">Tommy C.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    Fontana, CA
                    <br />
                    <em>Military Operations Management</em>
                  </p>
                  “…I couldn't believe how she was able to transform all my work
                  experience into this well written, key word rich, professional
                  document, at a fraction of the length of the resume I wrote…I
                  am now in the hiring process with an organization that topped
                  my wants list. The value of a good resume cannot be
                  overstated…”
                </p>

                <br />

                <h3 className="centeredText">Ethan</h3>
                <span className="imageWhatsOn">
                  <img src={ethan} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    <em>Columbia University</em>
                  </p>
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

                <h3 className="centeredText">Sangeetha</h3>
                <iframe
                  className="iframe"
                  title="Sangeetha G"
                  src="https://www.youtube.com/embed/TCbmidt2p4w"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>
                  <p className="centeredText">
                    <em>Sydney, Australia</em>
                  </p>
                  “Kai really helped me get my vision clear with the next steps
                  to take towards my career and the best way to go about it. She
                  worked with me to understand how to improve my portfolio and
                  how to stand out in being seen and represented the way I want
                  to be represented.”
                </p>

                <br />

                <h3 className="centeredText">Grace</h3>
                <span className="imageWhatsOn">
                  <img src={grace} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    <em>Empire, Fox</em>
                  </p>
                  “Not only have I heard directly from students about the
                  significant impact she has had on their academic advancement,
                  but I have also had the pleasure of sitting in on quite a few
                  of her classes where that notion was repeatedly and
                  beautifully solidified.”
                </p>

                <br />

                <h3 className="centeredText">Coko J.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    Granada Hills, CA
                    <br />
                    <em>International Marketing Executive</em>
                  </p>
                  “It had been years since I updated my resume last time. I
                  needed professional help to get it right…she understood my
                  needs and worked efficiently to make my resume shine, which I
                  was truly grateful for. She is truly experienced and knows her
                  trade!”
                </p>

                <br />

                <h3 className="centeredText">Jacob</h3>
                <span className="imageWhatsOn">
                  <img src={jacob} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    <em>Book of Mormon, Broadway Tour</em>
                  </p>
                  “What was more important was that each person seemed to take
                  one big, monumental, game-changing step in her class. What was
                  even more impressive about this feat was that Kai was able to
                  facilitate this to her students despite the diverse level of
                  ability in her classroom.”
                </p>

                <br />

                <h3 className="centeredText">Oma E.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    <em>Albuquerque, NM</em>
                    <br />
                    <em>Film Crew Associate</em>
                  </p>
                  “I can't thank her enough… Not only did she give me a great
                  resume, I got it earlier then it was scheduled (by my
                  request). I can say with all seriousness that the resume I
                  received will give me a chance in a largely competitive
                  market. I’m so grateful to her for giving me a resume that
                  will give me a chance to get my foot in the door.”
                </p>

                <br />

                <h3 className="centeredText">Rachelle</h3>
                <span className="imageWhatsOn">
                  <img src={rachelle} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    <em>Anything Goes, US National Tour</em>
                  </p>
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

                <h3 className="centeredText">James V.</h3>
                <span className="imageWhatsOn">
                  <img src={yelp} alt="" />
                </span>
                <p>
                  <p className="centeredText">
                    <em>Pasadena, CA</em>
                    <br />
                    <em>Talent Agent/Manager</em>
                  </p>
                  “What I really liked about the service was that she took the
                  time and listened to my career goals. Reading my finished
                  resume I really felt like it reflected everything that I told
                  her about myself. She took the time and did an amazing job.”
                </p>

                <br />

                <h3 className="centeredText">Annitha</h3>
                <iframe
                  className="iframe"
                  title="Annitha K"
                  src="https://www.youtube.com/embed/_Le1uk3ALyk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>
                  <p className="centeredText">
                    <em>Sydney, Australia</em>
                  </p>
                  “I love Kai’s teaching methods; they make you so excited to be
                  learning and doing what you love to do. Her energy is so
                  contagious and with every lesson, you gain courage, knowing
                  you can excel at anything because she truly believes in you.”
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
