import React from 'react'

import Layout from '../components/Layout'

import bio from '../../static/Kai_Paynter.pdf'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Performer</h1>

        <object
          data={bio}
          type="application/pdf"
          frameborder="1"
          scrolling="auto"
          height="700"
          width="850"
        >
          <embed src={bio} type="application/pdf" />
        </object>

        <br />

        <iframe
          width="802"
          height="379"
          title="Youtube"
          src="https://www.youtube.com/embed/2cRdZOeAh74"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <br />
        <br />

        <iframe
          src="https://player.vimeo.com/video/589826181?h=da06cbe8cb"
          width="802"
          height="379"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
