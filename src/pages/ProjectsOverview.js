import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
  return (
    <div className="projects-overview-stage">
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
  );
}

export default ProjectsOverview;
