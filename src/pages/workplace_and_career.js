import React from 'react'
import Layout from '../components/layout'
import workplace_and_career from '../assets/images/about_me_page_lines_blk.jpg'

const WorkplaceAndCareer = (props) => (
    <Layout>
        <div id="main" className="alt">
        <section id="one">
        <a href="mailto:info@paynterperformance.com">
                        <img
                          src={workplace_and_career}
                          alt="Workplace and Career"
                        />
                      </a>
        </section>
    </div>

    </Layout>
)

export default WorkplaceAndCareer