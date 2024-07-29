import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
  return (
    <div>
      <h2>Projects</h2>
      <p>A brief introduction to the projects I've worked on. Click the button below to view all projects in detail.</p>
      <Link to="/projects" className="btn btn-primary">View Projects</Link>
    </div>
  );
}

export default ProjectsOverview;
