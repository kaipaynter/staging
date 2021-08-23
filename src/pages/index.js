import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import paynterperformance from '../assets/images/tiles/paynterperformance.png'
import beartiger from '../assets/images/tiles/beartiger.jpg'
import tileD from '../assets/images/tiles/tileD.jpeg'
import tileE from '../assets/images/tiles/tileE.jpeg'
import tileF from '../assets/images/tiles/tileF.jpeg'

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Welcome
            <br />
          </h1>
          <p>
            Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Performer">
              <h2>Performer</h2>
              <div className="content">
                <p>
                  Performer
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="https://paynterperformance.com" target="_blank">
              <h2>Coach</h2>
              <div className="content">
                <p>
                  Coach
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="https://beartigerproductions.com" target="_blank">
              <h2>Creative</h2>
              <div className="content">
                <p>
                  Creative
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Socials">
              <h2>Socials</h2>
              <div className="content">
                <p>
                  Socials
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Gallery">
              <h2>Gallery</h2>
              <div className="content">
                <p>
                  Gallery
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Contact">
              <h2>Contact</h2>
              <div className="content">
                <p>
                  Contact
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
