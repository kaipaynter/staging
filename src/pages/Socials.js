import React from 'react'

import Layout from '../components/Layout'

import facebook from '../assets/images/socials/facebook.jpg'
import instagram from '../assets/images/socials/instagram.jpg'
import twitter from '../assets/images/socials/twitter.jpg'
import vimeo from '../assets/images/socials/vimeo.jpg'


const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        {/* <h1>Socials</h1> */}

        <p className="center">Click on an icon to see my latest work!</p>

        <p className="center">
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/kaipaynter"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/kai_paynter"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kai_paynter"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/user5346086"
                target="_blank"
                rel="noreferrer"
              >
                <img src={vimeo} alt="" />
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
