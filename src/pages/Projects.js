import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faJava, faNodeJs, faReact, faStripe } from "@fortawesome/free-brands-svg-icons";
import ImageLightbox from "../components/ImageLightbox";
import featuredProjects from "../data/featuredProjects";
import "./Projects.css";

import adobeXdImg from "../assets/images/adobe-xd.jpg";
import adobePremiereImg from "../assets/images/adobe-premiere.jpg";
import chicagoMuseumAppImg from "../assets/images/chicago-museum-app.jpg";
import kaleidoscopeAppImg from "../assets/images/kaleidoscope-app.jpg";
import leafletWebAppImg from "../assets/images/leaflet-web-app.jpg";
import apwStoreRailsImg from "../assets/images/apw-store-rails.jpg";
import asRecordsStoreImg from "../assets/images/as-records-store.jpg";
import aRecordsPortfolioImg from "../assets/images/asrecords_landing_ps.jpg";
import journeyDeskPortfolioImg from "../assets/images/journeydesk_landing_pf.jpg";
import orangebotImg from "../assets/images/orange-bot.jpg";

const techCatalog = {
  rails: { label: "Rails", shortLabel: "RoR", tone: "ruby" },
  ruby: { label: "Ruby", shortLabel: "Rb", tone: "ruby" },
  react: { label: "React", icon: faReact, tone: "react" },
  nextjs: { label: "Next.js", shortLabel: "Nx", tone: "slate" },
  typescript: { label: "TypeScript", shortLabel: "TS", tone: "slate" },
  node: { label: "Node.js", icon: faNodeJs, tone: "green" },
  express: { label: "Express", shortLabel: "Ex", tone: "slate" },
  postgres: { label: "PostgreSQL", shortLabel: "Pg", tone: "green" },
  prisma: { label: "Prisma", shortLabel: "Pr", tone: "violet" },
  openapi: { label: "OpenAPI", shortLabel: "OA", tone: "amber" },
  swiftui: { label: "SwiftUI", shortLabel: "Sw", tone: "swift" },
  ios: { label: "iOS", shortLabel: "iOS", tone: "slate" },
  api: { label: "API", shortLabel: "API", tone: "amber" },
  localData: { label: "Local Persistence", shortLabel: "DB", tone: "green" },
  docker: { label: "Docker", icon: faDocker, tone: "docker" },
  ollama: { label: "Ollama", shortLabel: "Ol", tone: "slate" },
  hotwire: { label: "Hotwire", shortLabel: "Hw", tone: "amber" },
  stimulus: { label: "Stimulus", shortLabel: "St", tone: "green" },
  importmap: { label: "Importmap", shortLabel: "Im", tone: "slate" },
  stripe: { label: "Stripe", icon: faStripe, tone: "violet" },
  ci: { label: "CI", shortLabel: "CI", tone: "slate" },
  flask: { label: "Flask", shortLabel: "Fl", tone: "slate" },
  mongodb: { label: "MongoDB", shortLabel: "Mg", tone: "green" },
  llm: { label: "Local LLM", shortLabel: "AI", tone: "amber" },
  javascript: { label: "JavaScript", shortLabel: "JS", tone: "javascript" },
  css: { label: "CSS", shortLabel: "CSS", tone: "css" },
  html: { label: "HTML", shortLabel: "HTML", tone: "html" },
  reactNative: { label: "React Native", shortLabel: "RN", tone: "react-native" },
  java: { label: "Java", icon: faJava, tone: "java" },
  premiere: { label: "Premiere Pro", shortLabel: "Pr", tone: "violet" },
  xd: { label: "Adobe XD", shortLabel: "Xd", tone: "pink" },
};

const selectedWebProjects = [
  {
    id: "journeydesk",
    imgSrc: journeyDeskPortfolioImg,
    title: "JourneyDesk",
    eyebrow: "Full-Stack Product Evolution / Local AI",
    description:
      "A React / TypeScript travel operations CRM for agency workflows, with review-only local AI added as a bounded support feature.",
    detailLink: "/projects/journeydesk",
    stack: ["react", "typescript", "node", "postgres", "docker", "openapi"],
    progression: ["V1 CRM Foundation", "V2 Local AI Support", "V3 Workflow + Knowledge"],
    note:
      "Shows React full-stack architecture, REST/OpenAPI documentation, Docker, CI, and a deliberately bounded local AI workflow.",
  },
  {
    id: "a-records-rails-suite",
    imgSrc: aRecordsPortfolioImg,
    title: "A'S RECORDS Rails Suite",
    eyebrow: "Three Rails Applications / Integrated System",
    description:
      "A Rails learning project developed as a brand website, record store, and community/events application, then connected into one coherent suite.",
    detailLink: "/projects/a-s-records-rails-suite",
    stack: ["rails", "postgres", "hotwire", "stripe", "ci"],
    progression: ["Website Hub", "Record Store", "Community / Events"],
    note:
      "Contrasts JourneyDesk by showing Rails conventions, CI, and system integration across three related applications.",
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
    isSupporting: true,
  },
  {
    imgSrc: adobeXdImg,
    title: "Adobe XD Form & Prototyping",
    description: "A UI prototyping study focused on form flow and interaction structure.",
    videoLink: process.env.REACT_APP_ONE_DRIVE_LINK_ADOBE_XD,
    stack: ["xd"],
    role: "UI Prototype / Interaction Flow",
    isSupporting: true,
    visualClassName: "project-card-xd",
  },
];

const ProjectCard = ({
  imgSrc,
  title,
  description,
  videoLink,
  repoLink,
  stack = [],
  role,
  onImageOpen,
  isSupporting = false,
  visualClassName = "",
}) => (
  <article
    className={`project-card reveal-card${isSupporting ? " project-card-supporting" : ""}${
      visualClassName ? ` ${visualClassName}` : ""
    }`}
  >
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
        <StackBadges stack={stack} label={`${title} technology stack`} />
      </div>
    </div>
  </article>
);

const StackBadges = ({ stack = [], label }) => (
  <div className="languages" aria-label={label}>
    {stack.map((techKey) => {
      const tech = techCatalog[techKey];

      if (!tech) {
        return null;
      }

      return tech.icon ? (
        <span
          key={tech.label}
          className={`technology-badge-tooltip tech-badge tech-badge-text tech-badge-icon tech-badge-${tech.tone || "slate"}`}
          data-tooltip={tech.label}
          aria-label={tech.label}
        >
          <FontAwesomeIcon icon={tech.icon} />
        </span>
      ) : tech.src ? (
        <span
          key={tech.label}
          className="technology-badge-tooltip tech-badge tech-badge-image"
          data-tooltip={tech.label}
          aria-label={tech.label}
        >
          <img src={tech.src} alt={tech.label} loading="lazy" />
        </span>
      ) : (
        <span
          key={tech.label}
          className={`technology-badge-tooltip tech-badge tech-badge-text tech-badge-${tech.tone || "slate"}`}
          data-tooltip={tech.label}
          aria-label={tech.label}
        >
          {tech.shortLabel}
        </span>
      );
    })}
  </div>
);

const SelectedWebProject = ({
  id,
  imgSrc,
  title,
  eyebrow,
  description,
  detailLink,
  stack,
  progression,
  note,
  onImageOpen,
}) => (
  <article className="selected-web-project reveal-card" aria-labelledby={`${id}-heading`}>
    <button
      type="button"
      className="project-image-button selected-web-project-media"
      onClick={() => onImageOpen({ src: imgSrc, alt: title })}
      aria-label={`Open larger image for ${title}`}
    >
      <img src={imgSrc} alt={title} loading="lazy" />
    </button>
    <div className="selected-web-project-content">
      <p className="project-role">{eyebrow}</p>
      <h4 id={`${id}-heading`}>{title}</h4>
      <p>{description}</p>
      <div className="project-progression" aria-label={`${title} project progression`}>
        {progression.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
      <p className="selected-web-note">{note}</p>
      <div className="project-stack selected-web-stack">
        <p className="project-stack-label">Stack</p>
        <StackBadges stack={stack} label={`${title} technology stack`} />
      </div>
      <div className="project-card-actions selected-web-project-actions">
        <Link to={detailLink} className="btn btn-primary">
          View Case Study
        </Link>
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
          <h2>Selected Work</h2>
          <p className="projects-lede">
            Product-focused work across iOS, full-stack development, and
            connected web systems. These projects show not only what I built,
            but the technical constraints, trade-offs, and product decisions
            that shaped each result.
          </p>
        </header>

        <section className="featured-case-studies" aria-labelledby="featured-case-studies-heading">
          <div className="projects-list-heading reveal-card">
            <p className="section-kicker">Featured iOS Applications</p>
            <h3 id="featured-case-studies-heading">Two Museums, Two Data Challenges</h3>
            <p>
              Two SwiftUI products shaped around complex public collections.
              Each app takes a different approach to building a calm,
              trustworthy museum experience from inconsistent source data.
            </p>
          </div>
          <div className="ios-feature-grid">
            {featuredProjects.map((project, index) => (
              <section
                key={project.id}
                className={`featured-project featured-project-${index === 0 ? "primary" : "secondary"} reveal-card`}
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
                  <p className="section-kicker">Museum App 0{index + 1}</p>
                  <h3 id={`${project.id}-heading`}>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="featured-project-note">{project.note}</p>
                  <div className="featured-tag-list" aria-label="featured project tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="featured-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="featured-project-role">{project.role}</p>
                  {project.detailLink && (
                    <div className="project-card-actions featured-actions">
                      <Link to={project.detailLink} className="btn btn-primary">
                        View Case Study
                      </Link>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="selected-web-section" aria-labelledby="selected-web-heading">
          <div className="projects-list-heading reveal-card">
            <p className="section-kicker">Selected Web Projects</p>
            <h3 id="selected-web-heading">React Product / Rails Product Suite</h3>
            <p>
              Two web projects with different development paths: one full-stack
              React product with bounded local AI support, and one Rails suite
              that connects three applications into a shared product world.
            </p>
          </div>
          <div className="selected-web-projects">
            {selectedWebProjects.map((project) => (
              <SelectedWebProject
                key={project.id}
                {...project}
                onImageOpen={setActiveImage}
              />
            ))}
          </div>
        </section>

        <section className="projects-list-section" aria-labelledby="more-projects-heading">
          <div className="projects-list-heading reveal-card">
            <p className="section-kicker">More Projects</p>
            <h3 id="more-projects-heading">Additional Work</h3>
            <p>
              Focused prototypes, earlier iterations, and standalone projects,
              with demos and repository links where available.
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
