import React from 'react';
import './FloatingNav.css';

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
        <span className="nav-icon">🏠</span>
        <span className="nav-text">Home</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('about')}
        aria-label="Go to About section"
      >
        <span className="nav-icon">ℹ️</span>
        <span className="nav-text">About</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('projects-overview')}
        aria-label="Go to Projects section"
      >
        <span className="nav-icon">💼</span>
        <span className="nav-text">Projects</span>
      </button>
      <button
        type="button"
        className="nav-item"
        onClick={() => scrollToSection('contact')}
        aria-label="Go to Contact section"
      >
        <span className="nav-icon">✉️</span>
        <span className="nav-text">Contact</span>
      </button>
    </nav>
  );
}

export default FloatingNav;
