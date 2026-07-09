import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
  return (
    <div className="projects-overview-stage">
      <div className="projects-overview-copy">
        <p className="section-kicker">Selected Work</p>
        <h2>Selected Works</h2>
        <p className="projects-overview-lede">
          A focused set of iOS, full-stack, and connected web projects showing how
          I turn product ideas into working builds while responding to real data,
          architecture, and workflow constraints.
        </p>
        <p className="projects-overview-support">
          The featured museum applications highlight product judgment around
          complex public data, while the wider collection shows iteration,
          integration, and learning across different tools and formats.
        </p>
        <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
      </div>

      <div className="project-preview-record" aria-hidden="true">
        <div className="preview-record-grooves" />
        <div className="preview-tonearm">
          <span />
        </div>
        <div className="project-preview-panel">
          <p>What Plays Next</p>
          <dl>
            <div>
              <dt>Museum apps</dt>
              <dd>SwiftUI / public APIs / product judgment</dd>
            </div>
            <div>
              <dt>Web systems</dt>
              <dd>React / Rails / AI-assisted workflows</dd>
            </div>
            <div>
              <dt>Case studies</dt>
              <dd>Challenge / decision / implementation</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
