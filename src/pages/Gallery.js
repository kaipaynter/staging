import React from 'react'

import Layout from '../components/Layout'
import '../assets/css/gallery.css'
import imageA from '../assets/images/Gallery/imageA.jpg'
import imageB from '../assets/images/Gallery/imageB.jpg'
import imageC from '../assets/images/Gallery/imageC.jpg'
import imageD from '../assets/images/Gallery/imageD.jpg'
import imageE from '../assets/images/Gallery/imageE.jpg'
import imageF from '../assets/images/Gallery/imageF.jpg'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <h1>Gallery</h1>

        <div className="container">
          <figure className="wave">
            <img src={imageA} alt=""></img>
            {/* <figcaption>This is a caption</figcaption> */}
          </figure>
          <figure className="wave">
            <img src={imageB} alt=""></img>
          </figure>
          <figure className="wave">
            <img src={imageC} alt=""></img>
          </figure>
          <figure className="wave">
            <img src={imageD} alt=""></img>
          </figure>
          <figure className="wave">
            <img src={imageE} alt=""></img>
          </figure>
          <figure className="wave">
            <img src={imageF} alt=""></img>
          </figure>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
