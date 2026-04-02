import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-stage">
      <div className="home-copy">
        <p className="section-kicker">Atsuko Kuwahara</p>
        <h1>Built with Warmth and Intention</h1>
        <p className="home-lede">
          Mobile and full-stack work shaped by vintage sound, human-centered
          design, and a late-blooming path into software.
        </p>
        <p className="home-body">
          I build products that aim to feel warm, clear, and intentional, from
          mobile apps to web experiences and AI-assisted tools.
        </p>
        <div className="home-actions">
          <Link to="/projects" className="btn btn-primary">
            Explore Projects
          </Link>
        </div>
      </div>
      <div className="home-riff" aria-hidden="true">
        <p>music</p>
        <p>clarity</p>
        <p>systems</p>
        <p>warmth</p>
      </div>
    </div>
  );
}

export default Home;
