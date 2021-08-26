import React from 'react';
export default function ContactForm() {
  return (
    <section>
      <h2>Get in touch</h2>
      <form method="post" action="https://getform.io/f/691a6df1-eaa3-47d2-84b9-a5727ec0d386">
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Message" />
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
