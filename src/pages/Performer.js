import React from 'react'

import Layout from '../components/Layout'

import bio from '../../static/Kai_Paynter.pdf'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

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

        <p className="center iframe-container">
          <iframe
            title="VO"
            src="https://player.vimeo.com/video/591916308?h=cef5137802"
            width="640"
            height="960"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>

        <br />

        <p className="center">
          <iframe
            title="Disney Showcase"
            src="https://player.vimeo.com/video/589826181?h=da06cbe8cb"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
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
            loading="lazy"
            allowfullscreen
          ></iframe>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
