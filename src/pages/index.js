import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Paynter Performance"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h3>Directing</h3>
                                <p>Film/TV & Theatre </p>
                            </header>
                            <Link to="https://beartigerproductions.com" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>Teaching & Training</h3>
                                <p>Artists, Athletes, & Creatives</p>
                            </header>
                            <Link to="/teaching_and_training" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>Talent Management</h3>
                                <p>Boutique Entertainment Agency</p>
                            </header>
                            <Link to="https://kapmgmt.paynterperformance.com" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>Workplace & Career</h3>
                                <p>Corporate Optimization and Strategy</p>
                            </header>
                            <Link to="/workplace_and_career" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>Programs</h3>
                                <p>One-Off Courses & Seasonal Offers</p>
                            </header>
                            <Link to="https://linktr.ee/paynterperformance" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>Testimonials</h3>
                                <p>Client Feedback and Reviews</p>
                            </header>
                            <Link to="https://g.co/kgs/DMLGZq" target="_blank" rel="noreferrer" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Additional Resources</h2>
                            </header>
                            <p>Need more help? We got you covered.</p>
                            <ul className="actions">
                                <li><Link to="https://www.youtube.com/playlist?list=PLSRJurNadm4enwGT53-0xjEYLDpj7mV4p" target="_blank" rel="noreferrer" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex