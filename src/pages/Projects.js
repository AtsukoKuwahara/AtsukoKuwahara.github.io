import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Projects.css";

import adobeXdImg from "../assets/images/adobe-xd.jpg";
import adobePremiereImg from "../assets/images/adobe-premiere.jpg";
import chicagoMuseumAppImg from "../assets/images/chicago-museum-app.jpg";
import kaleidoscopeAppImg from "../assets/images/kaleidoscope-app.jpg";
import leafletWebAppImg from "../assets/images/leaflet-web-app.jpg";
import apwStoreRailsImg from "../assets/images/apw-store-rails.jpg";
import asRecordsStoreImg from "../assets/images/as-records-store.jpg";
import aRecordsWebsiteHomeImg from "../assets/images/a-records-website-home.jpg";
import openCollectionDiscoverImg from "../assets/images/open-collection-discover.png";
import journeyDeskHeroImg from "../assets/images/journeydesk_landing_hero.jpg";
import javaImg from "../assets/images/java.png";
import reactNativeImg from "../assets/images/react_native.png";
import jsImg from "../assets/images/js.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import orangebotImg from "../assets/images/orange-bot.jpg";

const techCatalog = {
  rails: { label: "Rails", shortLabel: "RbR", tone: "ruby" },
  ruby: { label: "Ruby", shortLabel: "Rb", tone: "ruby" },
  nextjs: { label: "Next.js", shortLabel: "Nx", tone: "slate" },
  typescript: { label: "TypeScript", shortLabel: "TS", tone: "slate" },
  node: { label: "Node.js", shortLabel: "Nd", tone: "green" },
  express: { label: "Express", shortLabel: "Ex", tone: "slate" },
  postgres: { label: "PostgreSQL", shortLabel: "Pg", tone: "green" },
  prisma: { label: "Prisma", shortLabel: "Pr", tone: "violet" },
  openapi: { label: "OpenAPI", shortLabel: "OA", tone: "amber" },
  swiftui: { label: "SwiftUI", shortLabel: "Sw", tone: "swift" },
  ios: { label: "iOS", shortLabel: "iOS", tone: "slate" },
  api: { label: "API", shortLabel: "API", tone: "amber" },
  localData: { label: "Local Persistence", shortLabel: "DB", tone: "green" },
  docker: { label: "Docker", shortLabel: "Dk", tone: "slate" },
  ollama: { label: "Ollama", shortLabel: "Ol", tone: "slate" },
  flask: { label: "Flask", shortLabel: "Fl", tone: "slate" },
  mongodb: { label: "MongoDB", shortLabel: "Mg", tone: "green" },
  llm: { label: "Local LLM", shortLabel: "AI", tone: "amber" },
  javascript: { label: "JavaScript", src: jsImg },
  css: { label: "CSS", src: cssImg },
  html: { label: "HTML", src: htmlImg },
  reactNative: { label: "React Native", src: reactNativeImg },
  java: { label: "Java", src: javaImg },
  premiere: { label: "Premiere Pro", shortLabel: "Pr", tone: "violet" },
  xd: { label: "Adobe XD", shortLabel: "Xd", tone: "pink" },
};

const featuredProjects = [
  {
    id: "journeydesk",
    imgSrc: journeyDeskHeroImg,
    mediaClassName: "featured-project-media-landscape",
    title: "JourneyDesk",
    description:
      "A full-stack travel operations CRM for agency teams. V1 built the full-stack foundation; V2 introduced review-only local AI with Ollama; V3 added source-aware AI support with trip reference documents and reusable agency knowledge.",
    detailLink: "/projects/journeydesk",
    tags: ["Full-Stack TypeScript", "Local AI", "Case Study"],
    stack: ["nextjs", "typescript", "node", "express", "postgres", "prisma", "docker", "openapi", "ollama"],
    role: "Product Framing / UI / Full-Stack Implementation / AI Workflow Design",
  },
  {
    id: "open-collection-ios",
    imgSrc: openCollectionDiscoverImg,
    mediaClassName: "featured-project-media-portrait",
    title: "Open Collection iOS",
    description:
      "A SwiftUI art discovery app that brings together the Art Institute of Chicago and the Cleveland Museum of Art, with search, saved works, tags, filters, and a quieter mobile viewing flow.",
    detailLink: "/projects/open-collection-ios",
    tags: ["SwiftUI", "Cross-Museum App", "Case Study"],
    stack: ["swiftui", "ios", "api", "localData"],
    role: "Concept / Product Direction / UI / SwiftUI Implementation",
  },
  {
    id: "a-records-rails-suite",
    imgSrc: aRecordsWebsiteHomeImg,
    mediaClassName: "",
    title: "A'S RECORDS Rails Suite",
    description:
      "A connected three-app Rails project built around a hub website, dedicated storefront, and community/events space. It reframes my earlier A'S RECORDS concept as a small system with clearer roles and stronger navigation.",
    detailLink: "/projects/a-s-records-rails-suite",
    tags: ["Rails", "Three-App Suite", "Case Study"],
    stack: ["rails", "ruby"],
    role: "Concept / UI / Structure / Implementation",
  },
];

const projects = [
  {
    imgSrc: orangebotImg,
    title: "Orange Bot",
    description:
      "A local-first iOS chatbot with guided model selection, in-app model management, and archive review.",
    repoLink: "https://github.com/AtsukoKuwahara/SimpleAIChatbot",
    stack: ["swiftui", "ollama"],
    role: "Solo Build / UI / iOS Implementation",
  },
  {
    imgSrc: asRecordsStoreImg,
    title: "A'S RECORDS Store Prototype",
    description:
      "A record-store web app exploring storefront flow, visual identity, and a local-LLM trivia feature.",
    repoLink: "https://github.com/AtsukoKuwahara/a_records_store",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_AS_RECORDS_STORE,
    stack: ["flask", "mongodb", "llm"],
    role: "Concept / UI / Flask Store Build",
  },
  {
    imgSrc: apwStoreRailsImg,
    title: "APW Store Rails",
    description:
      "A Rails e-commerce learning project with product browsing, session cart, checkout, order history, admin catalog management, and storefront badge controls.",
    repoLink: "https://github.com/AtsukoKuwahara/apw_store_rails",
    stack: ["rails", "ruby", "localData", "docker"],
    role: "Rails MVC / E-commerce Demo / Docker Setup",
  },
  {
    imgSrc: leafletWebAppImg,
    title: "Leaflet Web App - Urban Feedback Map",
    description:
      "An interactive mapping web app for urban planning feedback and location-based input.",
    repoLink: "https://github.com/AtsukoKuwahara/urban_feedback_map",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_LEAFLET_WEB_APP,
    stack: ["javascript", "css", "html"],
    role: "Map UI / Frontend Build",
  },
  {
    imgSrc: kaleidoscopeAppImg,
    title: "Kaleidoscope App - React Native",
    description:
      "A flea-market mobile app designed around fast listing flow and lightweight messaging.",
    stack: ["reactNative"],
    role: "Concept / UI / Mobile Prototype",
  },
  {
    imgSrc: chicagoMuseumAppImg,
    title: "Chicago Museum API App - Java",
    description:
      "An Android app for browsing the Art Institute of Chicago collection through a mobile interface.",
    stack: ["java"],
    role: "Android UI / App Build",
  },
  {
    imgSrc: adobePremiereImg,
    title: "Adobe PremierePro short video",
    description:
      "A short video edit focused on rhythm, pacing, and visual mood.",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_PREMIERE,
    stack: ["premiere"],
    role: "Editing / Motion / Story Rhythm",
  },
  {
    imgSrc: adobeXdImg,
    title: "Adobe XD Form & Prototyping",
    description: "A UI prototyping study focused on form flow and interaction structure.",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_XD,
    stack: ["xd"],
    role: "UI Prototype / Interaction Flow",
  },
];

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.alt} expanded view`}
      onClick={onClose}
    >
      <div
        className="image-lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="image-lightbox-close"
          onClick={onClose}
          aria-label="Close expanded image"
        >
          Close
        </button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}

const ProjectCard = ({
  imgSrc,
  title,
  description,
  videoLink,
  repoLink,
  stack = [],
  role,
  onImageOpen,
}) => (
  <article className="project-card reveal-card">
    <button
      type="button"
      className="project-image-button"
      onClick={() => onImageOpen({ src: imgSrc, alt: title })}
      aria-label={`Open larger image for ${title}`}
    >
      <img src={imgSrc} alt={title} loading="lazy" />
    </button>
    <div className="project-card-content">
      <h5>{title}</h5>
      <p className="project-role">{role}</p>
      <p>{description}</p>
      <div className="project-card-actions">
        {videoLink && (
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Demo
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark-green"
          >
            Repo
          </a>
        )}
      </div>
      <div className="project-stack">
        <p className="project-stack-label">Stack</p>
        <div className="languages" aria-label={`${title} technology stack`}>
          {stack.map((techKey) => {
            const tech = techCatalog[techKey];

            if (!tech) {
              return null;
            }

            return tech.src ? (
              <span key={tech.label} className="tech-badge tech-badge-image" title={tech.label}>
                <img src={tech.src} alt={tech.label} loading="lazy" />
              </span>
            ) : (
              <span
                key={tech.label}
                className={`tech-badge tech-badge-text tech-badge-${tech.tone || "slate"}`}
                title={tech.label}
                aria-label={tech.label}
              >
                {tech.shortLabel}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  </article>
);

function Projects() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <main className="projects-container">
        <header className="projects-header reveal-card">
          <p className="section-kicker">Portfolio Projects</p>
          <h2>Selected Works</h2>
          <p className="projects-lede">
            A focused set of projects across mobile, web, prototyping, and
            product thinking. The featured case studies below show how I shape
            small products from concept and interface direction through
            implementation.
          </p>
        </header>

        <section className="featured-case-studies" aria-labelledby="featured-case-studies-heading">
          <div className="projects-list-heading reveal-card">
            <p className="section-kicker">Featured Case Studies</p>
            <h3 id="featured-case-studies-heading">Detailed Projects</h3>
            <p>
              These projects are the clearest examples of how I take an
              idea through product framing, interface decisions, and working
              implementation rather than stopping at a single screen or sample.
            </p>
          </div>
          {featuredProjects.map((project) => (
            <section
              key={project.id}
              className="featured-project reveal-card"
              aria-labelledby={`${project.id}-heading`}
            >
              <div className={`featured-project-media ${project.mediaClassName || ""}`}>
                <button
                  type="button"
                  className="project-image-button featured-image-button"
                  onClick={() =>
                    setActiveImage({
                      src: project.imgSrc,
                      alt: project.title,
                    })
                  }
                  aria-label={`Open larger image for ${project.title}`}
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    loading="eager"
                  />
                </button>
              </div>
              <div className="featured-project-content">
                <p className="section-kicker">Featured Project</p>
                <h3 id={`${project.id}-heading`}>{project.title}</h3>
                <p>{project.description}</p>
                <div className="featured-tag-list" aria-label="featured project tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="featured-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="featured-project-role">{project.role}</p>
                <div className="project-card-actions featured-actions">
                  <Link to={project.detailLink} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </section>
          ))}
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
              <ProjectCard
                key={project.title}
                {...project}
                onImageOpen={setActiveImage}
              />
            ))}
          </div>
        </section>

        <div className="projects-footer-actions">
          <button className="back-to-home-btn btn btn-primary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </main>
      {activeImage && (
        <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </>
  );
}

export default Projects;
