import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Projects.css";

import adobeXdImg from "../assets/images/adobe-xd.jpg";
import adobePremiereImg from "../assets/images/adobe-premiere.jpg";
import chicagoMuseumAppImg from "../assets/images/chicago-museum-app.jpg";
import kaleidoscopeAppImg from "../assets/images/kaleidoscope-app.jpg";
import leafletWebAppImg from "../assets/images/leaflet-web-app.jpg";
import apwStoreImg from "../assets/images/apw-store.jpg";
import asRecordsStoreImg from "../assets/images/as-records-store.jpg";
import aRecordsWebsiteHomeImg from "../assets/images/a-records-website-home.jpg";
import javaImg from "../assets/images/java.png";
import reactNativeImg from "../assets/images/react_native.png";
import jsImg from "../assets/images/js.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import orangebotImg from "../assets/images/orange-bot.jpg";

const featuredProject = {
  imgSrc: aRecordsWebsiteHomeImg,
  title: "A'S RECORDS Rails Suite",
  description:
    "A connected three-app Rails project built around a hub website, dedicated storefront, and community/events space. It reframes my earlier A'S RECORDS concept as a small system with clearer roles and stronger navigation.",
  detailLink: "/projects/a-s-records-rails-suite",
  repoLink: "https://github.com/AtsukoKuwahara/a_records_website_rails",
  tags: ["Ruby on Rails", "Hub Website", "Store", "Community / Events"],
};

const projects = [
  {
    imgSrc: orangebotImg,
    title: "Orange Bot",
    description:
      "A local-first iOS chatbot built with SwiftUI and Ollama. Features guided model selection, in-app model management, and archive review.",
    repoLink: "https://github.com/AtsukoKuwahara/SimpleAIChatbot",
    technologies: [],
    techDescription: "SwiftUI / Ollama",
  },
  {
    imgSrc: asRecordsStoreImg,
    title: "A'S RECORDS Store Prototype",
    description:
      "An earlier Flask and MongoDB record store prototype that explored storefront flow, visual identity, and a local-LLM trivia feature.",
    repoLink: "https://github.com/AtsukoKuwahara/a_records_store",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_AS_RECORDS_STORE,
    technologies: [],
    techDescription: "Flask / MongoDB / Local LLM",
  },
  {
    imgSrc: apwStoreImg,
    title: "APW Store Web App - JavaScript",
    description:
      "A clean e-commerce experience built in JavaScript, focused on browsing and product flow.",
    repoLink: "https://github.com/AtsukoKuwahara/apw_store",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_APW_STORE,
    technologies: [
      { src: jsImg, name: "JavaScript" },
      { src: cssImg, name: "CSS" },
      { src: htmlImg, name: "HTML" },
    ],
  },
  {
    imgSrc: leafletWebAppImg,
    title: "Leaflet Web App - Urban Feedback Map",
    description:
      "An interactive mapping app for urban planning and public feedback.",
    repoLink: "https://github.com/AtsukoKuwahara/urban_feedback_map",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_LEAFLET_WEB_APP,
    technologies: [
      { src: jsImg, name: "JavaScript" },
      { src: cssImg, name: "CSS" },
      { src: htmlImg, name: "HTML" },
    ],
  },
  {
    imgSrc: kaleidoscopeAppImg,
    title: "Kaleidoscope App - React Native",
    description:
      "A flea market app for iOS and Android, designed around fast listing and friendly messaging.",
    technologies: [{ src: reactNativeImg, name: "React Native" }],
  },
  {
    imgSrc: chicagoMuseumAppImg,
    title: "Chicago Museum API App - Java",
    description:
      "An Android app to explore the Art Institute of Chicago collection.",
    technologies: [{ src: javaImg, name: "Java" }],
  },
  {
    imgSrc: adobePremiereImg,
    title: "Adobe PremierePro short video",
    description:
      "A short edit exploring rhythm, timing, and mood in motion.",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_PREMIERE,
    technologies: [],
    techDescription: "Adobe PremierePro",
  },
  {
    imgSrc: adobeXdImg,
    title: "Adobe XD Form & Prototyping",
    description: "Form and prototyping exploration in Adobe XD.",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_XD,
    technologies: [],
    techDescription: "Adobe XD",
  },
];

const ProjectCard = ({
  imgSrc,
  title,
  description,
  videoLink,
  repoLink,
  technologies = [],
  techDescription,
}) => (
  <article className="project-card reveal-card">
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
  </article>
);

function Projects() {
  const navigate = useNavigate();

  return (
    <main className="projects-container">
      <header className="projects-header reveal-card">
        <p className="section-kicker">Portfolio Projects</p>
        <h2>Selected Works</h2>
        <p className="projects-lede">
          A focused set of projects across mobile, web, prototyping, and
          product thinking. The featured work below shows how I now structure
          connected applications rather than only standalone builds.
        </p>
      </header>

      <section className="featured-project reveal-card" aria-labelledby="featured-project-heading">
        <div className="featured-project-media">
          <img
            src={featuredProject.imgSrc}
            alt={featuredProject.title}
            loading="eager"
          />
        </div>
        <div className="featured-project-content">
          <p className="section-kicker">Featured Project</p>
          <h3 id="featured-project-heading">{featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
          <div className="featured-tag-list" aria-label="featured project tags">
            {featuredProject.tags.map((tag) => (
              <span key={tag} className="featured-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-card-actions featured-actions">
            <Link to={featuredProject.detailLink} className="btn btn-primary">
              View Details
            </Link>
            <a
              href={featuredProject.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark-green"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="projects-list-section" aria-labelledby="more-projects-heading">
        <div className="projects-list-heading reveal-card">
          <p className="section-kicker">More Projects</p>
          <h3 id="more-projects-heading">Additional Work</h3>
          <p>
            Earlier iterations, focused prototypes, and standalone projects.
            These remain intentionally lightweight here, with process videos and
            repository links where available.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <button className="back-to-home-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </main>
  );
}

export default Projects;
