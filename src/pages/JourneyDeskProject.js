import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JourneyDeskProject.css";

import landingHeroImg from "../assets/images/journeydesk_landing_hero.jpg";
import dashboardImg from "../assets/images/journeydesk_dashboard_overview.jpg";
import tripRequestsImg from "../assets/images/journeydesk_trip_requests_list.jpg";
import tripDetailImg from "../assets/images/journeydesk_trip_request_detail.jpg";
import documentsImg from "../assets/images/journeydesk_documents.jpg";
import aiWorkflowImg from "../assets/images/journeydesk_ai_workflow_checker.jpg";

const productPillars = [
  {
    name: "Travel operations workspace",
    detail:
      "JourneyDesk is built for agency staff after a client inquiry arrives: requests, itinerary work, tasks, notes, quotes, bookings, and activity history stay in one role-scoped workspace."
  },
  {
    name: "Local-first AI support",
    detail:
      "The assistant runs through Ollama as a review-only support layer. It can read scoped trip context and local agency knowledge, while staff remain responsible for what to save, send, verify, or book."
  },
  {
    name: "Operational knowledge layer",
    detail:
      "V3 adds current-trip reference documents and reusable Workspace KB so staff can separate active case evidence from reusable agency knowledge."
  }
];

const buildHighlights = [
  "V1 established the full-stack structure: dashboard, clients, trip requests, itinerary builder, tasks, notes, activity logs, authentication, and role-scoped API access.",
  "V2 introduced review-only local AI support with an Ollama provider, structured output validation, saved AI reviews, and human-reviewed suggested tasks.",
  "V3 expanded the operations model with travel styles, service scope, included services, trip reference documents, reusable Workspace KB, and clearer review-only AI boundaries.",
  "The project includes OpenAPI documentation, Docker-based local verification, seeded demo workflows, developer documentation, and tests for the core API and AI response contracts."
];

const v2LearningPoints = [
  "V2 proved that a local LLM could be connected to a full-stack product, but the assistant role was still broad: it could review context and draft suggestions, while the real agency workflow was only lightly modeled.",
  "V3 made the harder problem visible. A travel operations assistant cannot become useful just by adding longer prompts or more sample data. It needs clear workflow roles, reliable source handling, and evaluation against real staff expectations.",
  "The core challenge is deciding what belongs to the app, what belongs to the model, and what must stay with human staff. The app should organize trip records, permissions, source types, and review-only boundaries. The LLM should read policy and case context, compare them, explain gaps, and suggest next steps without updating records, sending messages, or confirming bookings.",
  "The redesign work now focuses on source-aware AI behavior: separating current-trip evidence from reusable Workspace KB, reducing context overload, improving retrieval, and testing model output against cases beyond the seeded demo data.",
  "This learning changed the direction of the project. JourneyDesk is not treating AI as a magic layer on top of a CRM; it is treating AI as one part of a staff workflow system that needs product design, data boundaries, and evaluation before it can be trusted in real operations."
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
    image: tripRequestsImg,
    alt: "JourneyDesk trip requests list",
    title: "Trip Requests",
    description:
      "Staff create and review requests with explicit travel styles, service scope, included services, and planning stage."
  },
  {
    image: tripDetailImg,
    alt: "JourneyDesk trip request detail workspace",
    title: "Trip Workspace",
    description:
      "The active planning surface: request details, itinerary builder, tasks, notes, trip reference documents, and local AI support."
  },
  {
    image: aiWorkflowImg,
    alt: "JourneyDesk AI workflow check drawer",
    title: "Workflow Check",
    description:
      "A review-only readiness drawer designed to separate known, missing, needs-verification, and conflict items before staff move the plan forward."
  },
  {
    image: documentsImg,
    alt: "JourneyDesk Documents workspace knowledge base",
    title: "Documents and KB",
    description:
      "Reusable agency policies, supplier notes, destination insights, and past-trip lessons are searchable without replacing current-trip evidence."
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
              A full-stack travel operations CRM for agency teams with
              review-only local AI support.
            </p>
            <p>
              JourneyDesk helps travel agency staff manage client requests,
              itineraries, booking status, tasks, notes, activity history, and
              reusable agency knowledge in one focused workspace. V3 adds trip
              reference documents, Workspace KB, and an Ollama-backed assistant
              designed to support staff review without updating bookings,
              emails, or records automatically.
            </p>
            <p className="journeydesk-role">
              Role: product framing, UI/UX, full-stack implementation, API
              design, relational modeling, local AI workflow, and documentation.
            </p>
            <div className="featured-tag-list journeydesk-tags">
              <span className="featured-tag">Next.js</span>
              <span className="featured-tag">Express API</span>
              <span className="featured-tag">PostgreSQL</span>
              <span className="featured-tag">Ollama</span>
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
            keeping communication context visible, and using AI as a reviewed
            staff support layer rather than an automatic operator.
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
              These screens show the V3 workflow from public introduction
              through authenticated planning, review-only AI support, and
              reusable agency knowledge.
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

        <section className="journeydesk-section journeydesk-section-learning">
          <div className="section-heading">
            <p className="section-kicker">V2 to V3 Learning</p>
            <h2>Making AI useful requires product architecture</h2>
          </div>
          <article className="v2-learning-card">
            {v2LearningPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </article>
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
