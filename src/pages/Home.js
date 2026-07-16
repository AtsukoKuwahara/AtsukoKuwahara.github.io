import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ onRouteLinkClick }) {
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  return (
    <div className="home-stage">
      <div className="home-copy">
        <p className="section-kicker">Atsuko Kuwahara</p>
        <h1>Mobile and web, built end to end.</h1>
        <p className="home-lede">
          I build mobile apps and web experiences with a focus on clarity,
          usability, and product feel.
        </p>
        <p className="home-body">
          Music shapes how I think about tone and rhythm, and most of my work
          is self-directed from concept and interface direction to working
          prototypes.
        </p>
        <p className="home-focus-support">
          Solo builds / UI clarity / product feel
        </p>
        <div className="home-actions">
          <Link
            to="/projects"
            className="btn btn-primary"
            onClick={(event) => onRouteLinkClick(event, '/projects')}
          >
            Explore Projects
          </Link>
          <Link
            to="/resume"
            className="btn btn-outline"
            onClick={(event) => onRouteLinkClick(event, '/resume')}
          >
            View Resume
          </Link>
        </div>
      </div>
      <div className="home-vinyl-wrap" aria-hidden="true">
        <div className="home-vinyl-glow" />
        <div className="home-vinyl">
          <div className="home-vinyl-ring home-vinyl-ring-one" />
          <div className="home-vinyl-ring home-vinyl-ring-two" />
          <div className="home-vinyl-ring home-vinyl-ring-three" />
          <div className="home-vinyl-label">
            <span className="vinyl-label-primary">Developer</span>
            <span className="vinyl-label-secondary">A&apos;S Records</span>
            <div className="home-vinyl-hole" />
          </div>
        </div>
        <div className="home-vinyl-note">music / systems / warmth</div>
      </div>
      <div className={`home-focus-album ${isFocusOpen ? 'is-flipped' : ''}`}>
        <div className="home-album-sleeve">
          <div className="home-album-face home-album-cover" aria-hidden={isFocusOpen}>
            <span className="home-album-catalog">A&apos;S Records / Profile 01</span>
            <button
              type="button"
              className="home-album-label"
              aria-expanded={isFocusOpen}
              aria-controls="home-focus-panel"
              aria-label="Show focus areas track list"
              tabIndex={isFocusOpen ? -1 : 0}
              onClick={() => setIsFocusOpen(true)}
            >
              <span className="home-album-label-row">
                <span className="home-album-label-catalog">A&apos;S Records</span>
                <span className="home-album-label-hint" aria-hidden="true">↗</span>
              </span>
              <span className="home-album-label-title">Focus Areas</span>
              <span className="home-album-label-meta">Mobile · Web · AI</span>
            </button>
          </div>
          <aside
            id="home-focus-panel"
            className="home-album-face home-capability-panel"
            aria-label="Focus areas track list"
            aria-hidden={!isFocusOpen}
          >
            <div className="home-panel-heading">
              <p className="home-panel-kicker">A&apos;S Records / Side B</p>
              <span>Focus Areas</span>
            </div>
            <div className="home-panel-item">
              <span>Mobile products</span>
              <p>SwiftUI / iOS / API Integration</p>
            </div>
            <div className="home-panel-item">
              <span>Web systems</span>
              <p>React / TypeScript / Rails</p>
            </div>
            <div className="home-panel-item">
              <span>AI-assisted tools</span>
              <p>LLM evaluation / Chatbot systems / Local AI</p>
            </div>
            <div className="home-panel-meta">
              <span>Based in Montreal, QC</span>
              <span>Open to software developer roles</span>
            </div>
            <button
              type="button"
              className="home-album-return"
              aria-label="Show focus areas album cover"
              tabIndex={isFocusOpen ? 0 : -1}
              onClick={() => setIsFocusOpen(false)}
            >
              Return ↙
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Home;
