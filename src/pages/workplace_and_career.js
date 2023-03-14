import React from 'react'
import Layout from '../components/layout2'
import workplace_and_career from '../assets/images/about_me_page_lines_blk.jpg'

const WorkplaceAndCareer = (props) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <p>
          Paynter Performance has everything you need to take your company and/or corporate career to record heights. We have all the tools — all in one place and guarantee results.
          <br />
          Resources are available in four editions: 1:1, workshops/group instruction, in-person (limited) and online.
          <br />
          Looking for more info about the products and services Paynter Performance offers? Get in touch with us below for a comprehensive list.
        </p>
        <br />
        <img class="image fit"
          src={workplace_and_career}
          alt="Workplace and Career"
        />

      </section>
    </div>

  </Layout>
)

export default WorkplaceAndCareer