import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JourneyDeskProject.css";

import landingHeroImg from "../assets/images/journeydesk_landing_hero.jpg";
import dashboardImg from "../assets/images/journeydesk_dashboard_overview.jpg";
import tripDetailImg from "../assets/images/journeydesk_trip_request_detail.jpg";
import swaggerImg from "../assets/images/journeydesk_swagger_ui_light.jpg";

const productPillars = [
  {
    name: "Operations-First CRM",
    detail:
      "JourneyDesk is built for travel agency staff, not consumers. The interface centers client requests, owners, status, tasks, and operational context."
  },
  {
    name: "Full-Stack TypeScript",
    detail:
      "The project uses a separate Next.js frontend and Express API so the frontend, backend, REST contracts, validation, auth, and database layer are visible."
  },
  {
    name: "Mock-First AI Assistance",
    detail:
      "The AI panel is intentionally mock-first, with practical staff workflows like suggested next actions and draft client emails ready for a future AI provider."
  }
];

const buildHighlights = [
  "Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for the frontend.",
  "Node.js, Express, Prisma, PostgreSQL, JWT auth, role-scoped access, and activity logs for the backend.",
  "Docker Compose, OpenAPI / Swagger documentation, README screenshots, and a clear portfolio presentation."
];

const snapshots = [
  {
    image: landingHeroImg,
    alt: "JourneyDesk landing page hero",
    title: "Landing Page",
    description:
      "A polished public product surface that positions JourneyDesk as a travel operations workspace."
  },
  {
    image: dashboardImg,
    alt: "JourneyDesk dashboard overview",
    title: "Dashboard Overview",
    description:
      "Role-scoped operational metrics, priority trip requests, tasks, and recent client context."
  },
  {
    image: tripDetailImg,
    alt: "JourneyDesk trip request detail workspace",
    title: "Trip Request Workspace",
    description:
      "The main staff workspace: itinerary builder, request details, tasks, notes, activity timeline, and AI assistant."
  },
  {
    image: swaggerImg,
    alt: "JourneyDesk Swagger UI",
    title: "OpenAPI Documentation",
    description:
      "Swagger documentation for the Express REST API, including auth, clients, trip requests, and workflow endpoints."
  }
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

function JourneyDeskProject() {
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (src, alt) => setActiveImage({ src, alt });

  return (
    <>
      <main className="journeydesk-page">
        <section className="journeydesk-hero">
          <div className="journeydesk-hero-copy">
            <p className="section-kicker">Featured Case Study</p>
            <h1>JourneyDesk</h1>
            <p className="journeydesk-summary">
              A full-stack travel operations CRM for agency teams.
            </p>
            <p>
              JourneyDesk helps travel agency staff manage client requests,
              itineraries, booking status, tasks, notes, activity history, and
              AI-assisted client communication in one focused operations
              dashboard.
            </p>
            <p className="journeydesk-role">
              Role: product framing, UI/UX, full-stack implementation, API
              design, relational modeling, and documentation.
            </p>
            <div className="featured-tag-list journeydesk-tags">
              <span className="featured-tag">Next.js</span>
              <span className="featured-tag">Express API</span>
              <span className="featured-tag">PostgreSQL</span>
              <span className="featured-tag">OpenAPI</span>
            </div>
          </div>

          <div className="journeydesk-hero-media">
            <button
              type="button"
              className="journeydesk-image-button"
              onClick={() =>
                openImage(landingHeroImg, "JourneyDesk landing page hero")
              }
              aria-label="Open larger image for JourneyDesk landing page hero"
            >
              <img
                src={landingHeroImg}
                alt="JourneyDesk landing page hero"
                loading="eager"
              />
            </button>
          </div>
        </section>

        <section className="journeydesk-section">
          <div className="section-heading">
            <p className="section-kicker">Product Direction</p>
            <h2>A staff workflow tool, not a booking clone</h2>
          </div>
          <p>
            The project is intentionally designed away from e-commerce and
            consumer travel planning. Instead, it focuses on the operational
            work travel agents handle after a client inquiry arrives: tracking
            status, shaping itinerary details, assigning tasks, recording notes,
            and keeping communication context visible.
          </p>
          <div className="role-grid">
            {productPillars.map((point) => (
              <article key={point.name} className="role-card">
                <h3>{point.name}</h3>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journeydesk-section journeydesk-section-build">
          <div className="section-heading">
            <p className="section-kicker">Build Scope</p>
            <h2>What the project demonstrates</h2>
          </div>
          <div className="flow-list" aria-label="JourneyDesk build highlights">
            {buildHighlights.map((item) => (
              <p key={item} className="flow-step">
                <span className="flow-step-icon" aria-hidden="true">↳</span>
                <span className="flow-step-text">{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="journeydesk-section">
          <div className="section-heading">
            <p className="section-kicker">Core Screens</p>
            <h2>The main product surfaces</h2>
            <p className="section-intro">
              These screens show the product from public introduction through
              authenticated operations work and backend documentation.
            </p>
          </div>
          <div className="journeydesk-snapshot-grid">
            {snapshots.map((snapshot) => (
              <article key={snapshot.title} className="snapshot-card">
                <button
                  type="button"
                  className="journeydesk-image-button"
                  onClick={() => openImage(snapshot.image, snapshot.alt)}
                  aria-label={`Open larger image for ${snapshot.title}`}
                >
                  <img src={snapshot.image} alt={snapshot.alt} loading="lazy" />
                </button>
                <h3>{snapshot.title}</h3>
                <p>{snapshot.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="journeydesk-footer-actions">
          <Link to="/projects" className="btn btn-secondary">
            Back to Projects
          </Link>
        </div>
      </main>
      {activeImage && (
        <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
      )}
    </>
  );
}

export default JourneyDeskProject;
