import React from 'react';
import { Link } from 'react-router-dom';
import featuredProjects from '../data/featuredProjects';
import './ProjectsOverview.css';

function ProjectsOverview() {
  const homeFeaturedProjects = featuredProjects.slice(0, 2);

  return (
    <div className="projects-overview-stage">
      <div className="projects-overview-copy">
        <p className="section-kicker">Selected Work</p>
        <h2>Selected Work</h2>
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

      <div className="project-preview-record">
        <div className="project-preview-visual" aria-hidden="true">
          <div className="preview-record-grooves">
            <div className="preview-record-disc">
              <div className="preview-record-label" />
            </div>
            <div className="preview-tonearm">
              <span />
            </div>
          </div>
        </div>
        <div className="project-preview-panel">
          <p>Now Playing / Featured Work</p>
          <dl>
            {homeFeaturedProjects.map((project, index) => (
              <div key={project.id}>
                <dt>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  {project.title}
                </dt>
                <dd>{project.homeSummary}</dd>
              </div>
            ))}
            <div className="project-preview-next">
              <dt>Next</dt>
              <dd>Web systems / Additional work</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
