import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="container">
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/shows" activeClassName="active">Upcoming Shows</NavLink></li>
          <li><NavLink to="/sponsorships" activeClassName="active">Sponsorships</NavLink></li>
          <li><NavLink to="/submissions" activeClassName="active">Submissions</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;