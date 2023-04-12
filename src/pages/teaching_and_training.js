import React from 'react'
import Layout from '../components/layout2'
import teaching_and_training from '../assets/images/Homepage_Actors_Creatives.jpg'

const TeachingAndTraining = (props) => (
  <Layout>
    <div id="main" className="alt noFooter">
      <section id="one">
        <img class="image fit"
          src={teaching_and_training}
          alt="Teaching and Training"
        />

      </section>
    </div>

  </Layout>
)

export default TeachingAndTraining