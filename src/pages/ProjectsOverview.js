import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
  return (
    <div>
      <h2>Selected Works</h2>
      <p>
        A collection of projects that reflects how I think about product,
        systems, and visual craft. The current featured work shows how a single
        app concept evolved into a connected suite.
      </p>
      <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
    </div>
  );
}

export default ProjectsOverview;
