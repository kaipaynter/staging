import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2>Contact Us</h2>
      <form method="post" action="https://formspree.io/f/xjvpjdvb">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  </section>
);

export default Contact;