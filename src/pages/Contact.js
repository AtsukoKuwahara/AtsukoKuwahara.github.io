import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

import logoImg from '../assets/images/logo1.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <p className="section-kicker">Contact</p>
        <h2>Thoughtful products, warm ideas, good records</h2>
        <p>
          If you are interested in web, mobile, or product-focused work, I would
          be glad to connect.
        </p>
        <div className="contact-brand-row">
          <p className="contact-side-note">Built with warmth, intention, and a little noise in the background.</p>
          <img src={logoImg} alt="A'S RECORDS logo" className="contact-inline-logo" />
        </div>
        <a href="mailto:kuwahara.atsuko@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} /> Email Atsuko
        </a>
        <hr />
        <p>Elsewhere:</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/atsuko-kuwahara-9a9212232/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atsuko Kuwahara on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/AtsukoKuwahara"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atsuko Kuwahara on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
