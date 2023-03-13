import React from 'react'

const Footer = (props) => (
  <footer id="footer">
    <section>
      <h2>Los Angeles</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Occidental Blvd &bull; Los Angeles, CA 90057 &bull; USA</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:info@paynterperformance.com">
            info@paynterperformance.com
          </a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/PaynterPerform"
            className="icon fa-twitter alt"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/PaynterPerformance"
            className="icon fa-facebook alt"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/paynter_performance"
            className="icon fa-instagram alt"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/paynterperformance"
            className="icon fa-linkedin alt"
            target="_blank"
            rel="noreferrer"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h2>Sydney</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Carlton Crescent &bull; Sydney, NSW 2130 &bull; AU</dd>
      </dl>
    </section>
    <p className="copyright">
      &copy; Kai Paynter 2021
    </p>
  </footer>
)

export default Footer
