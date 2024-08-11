import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const banner = document.querySelector('.banner');
    banner.classList.add('fade-in');
  }, []);

  return (
    <section className="home">
      <div className="banner-container">
        <div className="banner">
          <div className="line"></div>
          <h2>The Americas</h2>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;