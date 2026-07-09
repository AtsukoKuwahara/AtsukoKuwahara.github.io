import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
          <Link to="/projects" className="btn btn-primary">
            Explore Projects
          </Link>
          <Link to="/resume" className="btn btn-outline">
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
      <div className={`home-focus-drawer ${isFocusOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="home-focus-toggle"
          aria-expanded={isFocusOpen}
          aria-controls="home-focus-panel"
          onClick={() => setIsFocusOpen((current) => !current)}
        >
          <span className="home-focus-toggle-copy">
            <span>Focus areas</span>
            <span>Mobile / Web / AI</span>
          </span>
          <span className="home-focus-toggle-mark" aria-hidden="true">
            {isFocusOpen ? '−' : '+'}
          </span>
        </button>
        <aside
          id="home-focus-panel"
          className="home-capability-panel"
          aria-label="Focus areas"
        >
          <p className="home-panel-kicker">Focus areas</p>
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
        </aside>
      </div>
    </div>
  );
}

export default Home;
