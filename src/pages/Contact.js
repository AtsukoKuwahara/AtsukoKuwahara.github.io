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
        <h2>Contact</h2>
        <p>If you want to talk about ideas, music, or thoughtful products, I'd love to hear from you.</p>
        <a href="mailto:kuwahara.atsuko@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} /> Email Atsuko
        </a>
        <hr />
        <p>Find me on:</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/atsuko-kuwahara-9a9212232/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/AtsukoKuwahara"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <div className="asrecords-logo">
        <img src={logoImg} alt="AsRecords Logo" />
      </div>
    </div>
  );
};

export default Contact;
