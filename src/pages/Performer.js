import React from 'react'

import Layout from '../components/Layout'

import bio from '../../static/Kai_Paynter.pdf'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Performer</h1>

        <p className="center">
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
        </p>

        <br />

        <p className="center">
          <iframe
            width="802"
            height="379"
            title="Youtube"
            src="https://www.youtube.com/embed/2cRdZOeAh74"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>

        <br />

        <p className="center">
          <iframe
            title="VO"
            src="https://player.vimeo.com/video/591916308?h=cef5137802"
            width="640"
            height="960"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>

        <br />

        <p className="center">
          <iframe
            title="Singing"
            src="https://player.vimeo.com/video/239924322?h=f0a0036470"
            width="640"
            height="964"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
