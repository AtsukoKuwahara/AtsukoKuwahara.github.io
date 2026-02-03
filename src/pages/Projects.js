import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

// Import images
import adobeXdImg from "../assets/images/adobe-xd.jpg";
import adobePremiereImg from "../assets/images/adobe-premiere.jpg";
import chicagoMuseumAppImg from "../assets/images/chicago-museum-app.jpg";
import kaleidoscopeAppImg from "../assets/images/kaleidoscope-app.jpg";
import leafletWebAppImg from "../assets/images/leaflet-web-app.jpg";
import apwStoreImg from "../assets/images/apw-store.jpg";
import asRecordsStoreImg from "../assets/images/as-records-store.jpg";
import javaImg from "../assets/images/java.png";
import reactNativeImg from "../assets/images/react_native.png";
import jsImg from "../assets/images/js.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import orangebotImg from "../assets/images/orange-bot.jpg";

const ProjectCard = ({
  imgSrc,
  title,
  description,
  videoLink,
  repoLink,
  technologies,
  techDescription,
}) => (
  <div className="project-card">
    <img src={imgSrc} alt={title} loading="lazy" />
    <div className="project-card-content">
      <h5>{title}</h5>
      <p>{description}</p>
      <div className="project-card-actions">
        {videoLink && (
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            See Process
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark-green"
          >
            GitHub
          </a>
        )}
      </div>
      <div className="languages">
        {technologies.length > 0 ? (
          technologies.map((tech) => (
            <img key={tech.name} src={tech.src} alt={tech.name} loading="lazy" />
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
      <h2>Selected Works</h2>
      <p>Projects that combine craft, clarity, and real-world problem solving.</p>
      <div className="projects-grid">
        <ProjectCard
          imgSrc={orangebotImg}
          title="Orange Bot"
          description="An iOS chatbot built with SwiftUI and modern LLMs. Focused on clarity, tone, and fast interaction."
          repoLink="https://github.com/AtsukoKuwahara/SimpleAIChatbot"
          technologies={[]}
          techDescription="Swift"
        />
        <ProjectCard
          imgSrc={asRecordsStoreImg}
          title="A's Records Store Web App"
          description="A record store web app built with Flask and MongoDB. Inspired by vinyl culture and classic storefronts."
          repoLink="https://github.com/AtsukoKuwahara/a_records_store"
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_AS_RECORDS_STORE}
          technologies={[]}
          techDescription="Flask / MongoDB"
        />
        <ProjectCard
          imgSrc={apwStoreImg}
          title="APW Store Web App - JavaScript"
          description="A clean e-commerce experience built in JavaScript, focused on browsing and product flow."
          repoLink="https://github.com/AtsukoKuwahara/apw_store"
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_APW_STORE}
          technologies={[
            { src: jsImg, name: "JavaScript" },
            { src: cssImg, name: "CSS" },
            { src: htmlImg, name: "HTML" },
          ]}
        />
        <ProjectCard
          imgSrc={leafletWebAppImg}
          title="Leaflet Web App - Urban Feedback Map"
          description="An interactive mapping app for urban planning and public feedback."
          repoLink="https://github.com/AtsukoKuwahara/urban_feedback_map"
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_LEAFLET_WEB_APP}
          technologies={[
            { src: jsImg, name: "JavaScript" },
            { src: cssImg, name: "CSS" },
            { src: htmlImg, name: "HTML" },
          ]}
        />
        <ProjectCard
          imgSrc={kaleidoscopeAppImg}
          title="Kaleidoscope App - React Native"
          description="A flea market app for iOS and Android, designed around fast listing and friendly messaging."
          technologies={[{ src: reactNativeImg, name: "React Native" }]}
        />
        <ProjectCard
          imgSrc={chicagoMuseumAppImg}
          title="Chicago Museum API App - Java"
          description="An Android app to explore the Art Institute of Chicago collection."
          technologies={[{ src: javaImg, name: "Java" }]}
        />
        <ProjectCard
          imgSrc={adobePremiereImg}
          title="Adobe PremierePro short video"
          description="A short edit exploring rhythm, timing, and mood in motion."
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_PREMIERE}
          technologies={[]}
          techDescription="Adobe PremierePro"
        />
        <ProjectCard
          imgSrc={adobeXdImg}
          title="Adobe XD Form & Prototyping"
          description="Form and prototyping exploration in Adobe XD."
          videoLink={process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_XD}
          technologies={[]}
          techDescription="Adobe XD"
        />
      </div>
      <button className="back-to-home-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default Projects;
