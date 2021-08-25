import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

import Layout from '../components/Layout'
import '../assets/css/gallery.css'
import imageA from '../assets/images/Gallery/imageA.jpg'
import imageB from '../assets/images/Gallery/imageB.jpg'
import imageC from '../assets/images/Gallery/imageC.jpg'
import imageD from '../assets/images/Gallery/imageD.jpg'
import imageE from '../assets/images/Gallery/imageE.jpg'
import imageF from '../assets/images/Gallery/imageF.jpg'
import imageG from '../assets/images/Gallery/imageG.jpg'
import imageH from '../assets/images/Gallery/imageH.jpg'
import imageI from '../assets/images/Gallery/imageI.jpg'
import imageJ from '../assets/images/Gallery/imageJ.jpg'
import imageK from '../assets/images/Gallery/imageK.jpg'
import imageL from '../assets/images/Gallery/imageL.jpg'

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        {/* <h1>Gallery</h1> */}

        <div className="container">
          <SimpleReactLightbox>
            <SRLWrapper>
            <figure className="wave">
                <img src={imageJ} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageG} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageD} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageC} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageH} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageB} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageF} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageI} alt=""></img>
              </figure>
              
              <figure className="wave">
                <img src={imageK} alt=""></img>
              </figure>
              <figure className="wave">
                <img src={imageA} alt=""></img>
                {/* <figcaption>This is a caption</figcaption> */}
              </figure>
              <figure className="wave">
                <img src={imageL} alt=""></img>
              </figure>             
              <figure className="wave">
                <img src={imageE} alt=""></img>
              </figure>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
