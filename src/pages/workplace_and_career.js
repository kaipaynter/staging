import React from 'react'
import Layout from '../components/layout2'
import workplace_and_career from '../assets/images/about_me_page_lines_blk.jpg'

const WorkplaceAndCareer = (props) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <img class="image fit"
          src={workplace_and_career}
          alt="Workplace and Career"
        />

      </section>
    </div>

  </Layout>
)

export default WorkplaceAndCareer