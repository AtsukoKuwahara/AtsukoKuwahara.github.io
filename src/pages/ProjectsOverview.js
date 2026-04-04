import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
  return (
    <div className="projects-overview-stage">
      <p className="section-kicker">Selected Work</p>
      <h2>Selected Works</h2>
      <p className="projects-overview-lede">
        A focused set of web, mobile, and prototype work that shows how I take
        ideas from interface direction through structure and implementation into
        working builds.
      </p>
      <p className="projects-overview-support">
        The featured project highlights system thinking across a connected
        suite, while the wider collection shows the range of tools, formats,
        and product approaches I work through across different kinds of
        projects.
      </p>
      <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
    </div>
  );
}

export default ProjectsOverview;
