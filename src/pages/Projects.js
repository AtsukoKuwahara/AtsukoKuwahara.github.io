import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// Import images
import adobeXdImg from '../assets/images/adobe-xd.jpg';
import adobePremiereImg from '../assets/images/adobe-premiere.jpg';
import chicagoMuseumAppImg from '../assets/images/chicago-museum-app.jpg';
import kaleidoscopeAppImg from '../assets/images/kaleidoscope-app.jpg';
import todoListImg from '../assets/images/todo-list.jpg';
import leafletWebAppImg from '../assets/images/leaflet-web-app.jpg';
import apwStoreImg from '../assets/images/apw-store.jpg';
import asRecordsStoreImg from '../assets/images/as-records-store.jpg';
import javaImg from '../assets/images/java.png';
import reactNativeImg from '../assets/images/react_native.png';
import jsImg from '../assets/images/js.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';

const ProjectCard = ({ imgSrc, title, description, videoLink, repoLink, technologies, techDescription }) => (
  <div className="project-card">
    <img src={imgSrc} alt={title} />
    <div className="project-card-content">
      <h5>{title}</h5>
      <p>{description}</p>
      {videoLink && (
        <a href={videoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Watch Video
        </a>
      )}
      {repoLink && (
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark-green">
          GitHub
        </a>
      )}
      <div className="languages">
        {technologies.length > 0 ? (
          technologies.map((tech, index) => (
            <img key={index} src={tech} alt="Technology" />
          ))
        ) : (
          <p>{techDescription}</p>
        )}
      </div>
    </div>
  </div>
);

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on:</p>
      <div className="projects-grid">
        <ProjectCard
          imgSrc={adobeXdImg}
          title="Adobe XD Form & Prototyping"
          description="Form and prototyping created using Adobe XD."
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_XD}
          technologies={[]}
          techDescription="Adobe XD"
        />
        <ProjectCard
          imgSrc={adobePremiereImg}
          title="Adobe PremierePro short video"
          description="Short video created using Adobe PremierePro."
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_PREMIERE}
          technologies={[]}
          techDescription="Adobe PremierePro"
        />
        <ProjectCard
          imgSrc={chicagoMuseumAppImg}
          title="Chicago Museum API App - Java"
          description="Mobile App for Android implemented in Java. This app allows users to browse the collection of the Art Institute of Chicago."
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_CHICAGO_MUSEUM}
          technologies={[javaImg]}
        />
        <ProjectCard
          imgSrc={kaleidoscopeAppImg}
          title="Kaleidoscope App - React Native"
          description="Mobile App for Android and iOS implemented in React Native. This is a flea market app that allows users to upload their stuff for sale, and send messages to make purchases."
          technologies={[reactNativeImg]}
        />
        <ProjectCard
          imgSrc={todoListImg}
          title="My Simple To-Do List"
          description="This Todo List application is a modern web app built using React with Vite as a build tool, allowing for a fast development environment."
          repoLink="https://github.com/AtsukoKuwahara/my_simple_todos"
          technologies={[jsImg, cssImg, htmlImg, reactNativeImg]}
        />
        <ProjectCard
          imgSrc={leafletWebAppImg}
          title="Leaflet Web App - Urban Feedback Map"
          description="UrbanFeedbackMap extends the LeafletWebMap (interactive web mapping application) for urban planning and public feedback integration."
          repoLink="https://github.com/AtsukoKuwahara/urban_feedback_map"
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_LEAFLET_WEB_APP}
          technologies={[jsImg, cssImg, htmlImg]}
        />
        <ProjectCard
          imgSrc={apwStoreImg}
          title="APW Store Web App - JavaScript"
          description="Web Application implemented in JavaScript for the online store 'APW Store'."
          repoLink="https://github.com/AtsukoKuwahara/apw_store"
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_APW_STORE}
          technologies={[jsImg, cssImg, htmlImg]}
        />
        <ProjectCard
          imgSrc={asRecordsStoreImg}
          title="A's Records Store Web App"
          description="A web application for A's Records, an online store selling music records, built with Flask and MongoDB."
          repoLink="https://github.com/AtsukoKuwahara/a_records_store"
          technologies={[]}
          techDescription="Flask / MongoDB"
        />
      </div>
      <button className="back-to-home-btn" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Projects;
