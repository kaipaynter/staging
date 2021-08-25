import React, { useState } from 'react';
import Nav from './Nav';
import TopNav from './TopNav';
import { Link } from 'gatsby';
import logo from '../assets/images/Kai_Paynter_logo_tight.jpg';
export default function SideBar({ sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header">
        <div className="inner">
          <Link to="/" className="logo">
            <span className="large">
              <img src={logo} alt="" />
            </span>
          </Link>
          <TopNav onMenuClick={() => toggleHeader(!headerOpen)} />
        </div>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onClose={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
