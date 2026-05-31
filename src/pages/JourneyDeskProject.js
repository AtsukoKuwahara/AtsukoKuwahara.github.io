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
      "The assistant runs through Ollama and is review-only. It reads scoped trip context and local agency knowledge, but staff decide what to save, send, verify, or book."
  },
  {
    name: "Operational knowledge layer",
    detail:
      "V3 separates current-trip reference documents from reusable Workspace KB so past lessons can guide planning without being treated as proof for the active trip."
  }
];

const buildHighlights = [
  "V1 established the full-stack structure: dashboard, clients, trip requests, itinerary builder, tasks, notes, activity logs, authentication, and role-scoped API access.",
  "V2 introduced a local AI assistant with an Ollama provider, structured output validation, saved AI reviews, and human-reviewed suggested tasks.",
  "V3 strengthened the AI workflow with staff-entered travel styles, service scope, included services, trip reference documents, reusable Workspace KB, and safer source handling.",
  "The backend now keeps readiness decisions stable while the LLM focuses on summarizing, drafting, and planning support. The project includes OpenAPI docs, Docker setup, tests, seeded demo data, and screenshots."
];

const v2LearningPoints = [
  "V2 proved that a local model could be integrated into the product, but V3 showed that prompts alone are not enough for a reliable business workflow.",
  "The V2 challenge was balance: the assistant needed to be helpful enough to reduce staff workload, but limited enough that uncertain supplier, quote, or booking details stayed under human review.",
  "The important design change was separating responsibilities: backend code owns evidence priority, source scope, role permissions, and readiness status; the LLM helps with summaries, next actions, itinerary ideas, and draft messages.",
  "Workflow Check and Travel Assistant became separate tools. Workflow Check reviews what is known, missing, needs verification, or conflicts. Travel Assistant helps staff research itinerary ideas and client follow-up without updating the workspace automatically.",
  "The product also needed more realistic context. Travel style, service scope, included services, planning stage, current-trip documents, and reusable agency knowledge all shape what the AI should and should not say.",
  "A future step would be stronger local retrieval and evaluation over agency-owned documents, plus richer supplier workflows and optional text extraction from PDFs or images."
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
      "A readiness drawer that separates known, missing, needs-verification, and conflict items before staff move the plan forward."
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
              A full-stack travel operations CRM for agency teams, evolved in
              V3 with stronger review-only local AI support.
            </p>
            <p>
              JourneyDesk helps travel agency staff manage client requests,
              itineraries, booking status, tasks, notes, activity history, and
              reusable agency knowledge in one focused workspace. V3 focuses on
              making AI useful inside that workflow, without letting it replace
              staff review.
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
              through authenticated planning, AI review, and reusable agency
              knowledge.
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
            <h2>Making AI useful required product architecture</h2>
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
