import React from 'react'
import Layout from '../components/layout'
import teaching_and_training from '../assets/images/Homepage_Actors_Creatives.jpg'

const TeachingAndTraining = (props) => (
    <Layout>
        <div id="main" className="alt">
        <section id="one">
        <a href="mailto:info@paynterperformance.com">
                        <img
                          src={teaching_and_training}
                          alt="Teaching and Training"
                        />
                      </a>
        </section>
    </div>

    </Layout>
)

export default TeachingAndTraining