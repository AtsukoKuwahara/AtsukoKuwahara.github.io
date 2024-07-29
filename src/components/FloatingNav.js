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
    <div className="floating-nav">
      <div className="nav-item" onClick={() => scrollToSection('home')}>
        <span className="nav-icon">🏠</span>
        <span className="nav-text">Home</span>
      </div>
      <div className="nav-item" onClick={() => scrollToSection('about')}>
        <span className="nav-icon">ℹ️</span>
        <span className="nav-text">About</span>
      </div>
      <div className="nav-item" onClick={() => scrollToSection('projects-overview')}>
        <span className="nav-icon">💼</span>
        <span className="nav-text">Projects</span>
      </div>
      <div className="nav-item" onClick={() => scrollToSection('contact')}>
        <span className="nav-icon">✉️</span>
        <span className="nav-text">Contact</span>
      </div>
    </div>
  );
}

export default FloatingNav;
