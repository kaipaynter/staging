import React from 'react'
import Layout from '../components/layout2'
import teaching_and_training from '../assets/images/Homepage_Actors_Creatives.jpg'

const TeachingAndTraining = (props) => (
  <Layout>
    <div id="main" className="alt noFooter">
      <section id="one">
        <p>
          Paynter Performance has everything you need to take your performance technique to record heights. We have all the tools — all in one place and we guarantee results.
          <br /> 
          Resources are available in four editions: 1:1, workshops/group instruction, in-person (limited) and online.
          <br />
          Looking for more info about the products and services Paynter Performance offers? Get in touch with us below for a comprehensive list.
        </p>
        <br />
        <img class="image fit"
          src={teaching_and_training}
          alt="Teaching and Training"
        />

      </section>
    </div>

  </Layout>
)

export default TeachingAndTraining