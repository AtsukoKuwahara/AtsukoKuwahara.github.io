import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
  return (
    <div>
      <h2>Selected Works</h2>
      <p>A small collection of projects that reflect how I think and build. Each one has a story behind it.</p>
      <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
    </div>
  );
}

export default ProjectsOverview;
