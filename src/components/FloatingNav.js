import React from 'react';
import './FloatingNav.css';

const icons = {
  home: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 11.4 12 5l7.5 6.4" />
      <path d="M6.7 10.4v8.1h10.6v-8.1" />
      <path d="M10 18.5v-4.2h4v4.2" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 10.8v5.4" />
      <path d="M12 7.8h.01" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="6.8" width="14" height="11.2" rx="1.8" />
      <path d="M9.4 6.8V5.6h5.2v1.2" />
      <path d="M5 11.2h14" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.8" y="7" width="14.4" height="10" rx="1.6" />
      <path d="m5.4 8 6.6 5 6.6-5" />
    </svg>
  ),
};

function FloatingNav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };

  return (
    <nav className="floating-nav" aria-label="Section navigation">
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('home')}
        aria-label="Go to Home section"
      >
        <span className="nav-icon">{icons.home}</span>
        <span className="nav-text">Home</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('about')}
        aria-label="Go to About section"
      >
        <span className="nav-icon">{icons.about}</span>
        <span className="nav-text">About</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('projects-overview')}
        aria-label="Go to Projects section"
      >
        <span className="nav-icon">{icons.work}</span>
        <span className="nav-text">Projects</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('contact')}
        aria-label="Go to Contact section"
      >
        <span className="nav-icon">{icons.contact}</span>
        <span className="nav-text">Contact</span>
      </button>
    </nav>
  );
}

export default FloatingNav;
