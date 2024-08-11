import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import UpcomingShows from './components/UpcomingShows';
import Sponsorships from './components/Sponsorships';
import Submissions from './components/Submissions';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shows" element={<UpcomingShows/>} />
          <Route path="/sponsorships" element={<Sponsorships/>} />
          <Route path="/submissions" element={<Submissions/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;