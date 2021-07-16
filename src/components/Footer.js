import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Los Angeles</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Occidental Blvd &bull; Los Angeles, CA 90057 &bull; USA</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:contact@kaipaynter.com">contact@kaipaynter.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/Kaipadvisory"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/kaipaynteradvisory"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kaipaynteradvisory"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/kaipayneradvisory"
            className="icon fa-linkedin alt"
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
      &copy; 2021. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
