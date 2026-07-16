import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import "./ARecordsProject.css";

import websiteHomeImg from "../assets/images/a-records-website-home.jpg";
import sideShopHomeImg from "../assets/images/a-records-sideshop-home.jpg";
import communityHomeIndieImg from "../assets/images/a-records-community-home-indie.jpg";
import communityLiveDetailsImg from "../assets/images/a-records-community-live-details.jpg";
import communityReservationsImg from "../assets/images/a-records-community-reservations.jpg";
import communityInboxImg from "../assets/images/a-records-community-inbox.jpg";

const appRoles = [
  {
    name: "Website",
    detail:
      "Acts as the hub for the suite. It introduces the concept, connects the other apps, and brings the separate learning tracks back into one system.",
  },
  {
    name: "Store",
    detail:
      "Focuses on building out the e-commerce side of the project, including browsing flow and the kinds of functionality needed for secondhand, one-of-a-kind record inventory.",
  },
  {
    name: "Community / Events",
    detail:
      "Focuses on the separate participation features a community-facing music space needs, beyond storefront behavior alone.",
  },
];

const navigationSteps = [
  "The website works as the main entry point and establishes the shared A'S RECORDS identity.",
  "From the hub, visitors can move into the store app or the community / events app depending on what they want to do.",
  "Those focused apps stay distinct, but both route back through the website so the system still reads as one connected project.",
];

const focusPoints = [
  {
    name: "Ruby / Rails Learning",
    detail:
      "I used the rebuild to learn Ruby and work through a framework-based web application structure rather than repeating the earlier Flask build directly.",
  },
  {
    name: "Feature Separation",
    detail:
      "I split the project into focused apps so storefront features and community features could be explored as different kinds of web behavior.",
  },
  {
    name: "Hub Integration",
    detail:
      "The website ties those focused apps back together, so the suite still reads as one A'S RECORDS system rather than separate experiments.",
  },
];

function ARecordsProject() {
  const [activeImage, setActiveImage] = useState(null);

  const snapshots = [
    {
      image: websiteHomeImg,
      alt: "A'S RECORDS website home",
      title: "Website Hub",
      description:
        "The hub site introduces the brand, shop framing, and cross-links into the rest of the suite.",
    },
    {
      image: sideShopHomeImg,
      alt: "A'S RECORDS side shop home",
      title: "Store Surface",
      description:
        "The store app focuses on practical shopping flow and its own dedicated browsing tone.",
    },
    {
      image: communityHomeIndieImg,
      alt: "A'S RECORDS community indie home",
      title: "Community Front Door",
      description:
        "The community front page now leans into a louder indie-show concept and presents the app as a live board for local signals rather than a quiet archive.",
    },
  ];

  const adminSnapshots = [
    {
      image: communityLiveDetailsImg,
      alt: "A'S RECORDS community live details page",
      title: "Live Detail Page",
      description:
        "The live detail screen shows the new visual direction more clearly, with event context, poster-style presentation, and public-facing venue information.",
    },
    {
      image: communityReservationsImg,
      alt: "A'S RECORDS community reservations admin page",
      title: "Reservations Management",
      description:
        "Reservation handling now has a dedicated management view for confirmed guests, waitlist movement, cancellations, and attendance tracking.",
    },
    {
      image: communityInboxImg,
      alt: "A'S RECORDS community inbox page",
      title: "Inbox Messages",
      description:
        "The inbox adds another operational layer, letting the community app hold incoming contact notes and reservation-related messages in one place.",
    },
  ];

  return (
    <>
      <main className="case-study-page a-records-page">
        <section className="case-study-hero case-study-hero--balanced a-records-hero">
          <div className="case-study-hero-copy case-study-surface">
            <p className="section-kicker">Selected Web Case Study</p>
            <h1>A'S RECORDS Rails Suite</h1>
            <p className="case-study-summary a-records-summary">
              A three-app Rails portfolio project built as a connected system: a
              hub website, a storefront, and a community / events experience.
            </p>
            <p>
              This is the current evolution of A'S RECORDS. I rebuilt the idea in
              Rails as a way to study Ruby, practice framework-based web
              development, and rethink the project as a connected system rather
              than a single storefront alone.
            </p>
            <p className="case-study-role">
              My role: concept development, UI direction, app structure,
              navigation flow, and Rails-based implementation.
            </p>
            <div className="featured-tag-list case-study-tags">
              <span className="featured-tag">Ruby on Rails</span>
              <span className="featured-tag">Three-App Suite</span>
              <span className="featured-tag">Portfolio Case Study</span>
            </div>
          </div>
          <div className="case-study-hero-media a-records-hero-media">
            <button
              type="button"
              className="case-study-image-button"
              onClick={() =>
                setActiveImage({
                  src: websiteHomeImg,
                  alt: "A'S RECORDS website screenshot",
                })
              }
              aria-label="Open larger image for A'S RECORDS website screenshot"
            >
              <img className="case-study-image" src={websiteHomeImg} alt="A'S RECORDS website screenshot" loading="eager" />
            </button>
          </div>
        </section>

        <section className="case-study-section case-study-surface a-records-section-story">
          <div className="case-study-section-heading">
            <p className="section-kicker">Why I Rebuilt It</p>
            <h2>From One Store Prototype To A Three-App Learning Project</h2>
          </div>
          <p>
            The original A&apos;S RECORDS project started as a self-built Flask and
            MongoDB record store. When I began studying Ruby and Rails, I did
            not want to simply recreate the same storefront one more time. I
            used the rebuild as a way to learn the language, work inside a
            full-featured web framework, and redesign the project around
            clearer responsibilities.
          </p>
          <p>
            The three-app structure came from that learning goal. I wanted one
            app to focus on the e-commerce side, one to focus on the separate
            community and events features, and one website layer to act as the
            hub that ties the whole system together. Each app could then focus
            on a different kind of web behavior, while still belonging to a
            single A&apos;S RECORDS concept.
          </p>
        </section>

        <section className="case-study-section case-study-surface a-records-section-focus">
          <div className="case-study-section-heading">
            <p className="section-kicker">What This Version Focuses On</p>
            <h2>Three Separate Learning Goals Inside One System</h2>
          </div>
          <div className="case-study-grid case-study-role-grid">
            {focusPoints.map((point) => (
              <article key={point.name} className="case-study-card case-study-surface case-study-role-card">
                <h3>{point.name}</h3>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-surface a-records-section-system">
          <div className="case-study-section-heading">
            <p className="section-kicker">How The Suite Works</p>
            <h2>Role Separation With A Hub-Led Flow</h2>
            <p className="case-study-section-intro">
              The suite works because each app has a clearer role, while the
              website still acts as the shared entry point and connector.
            </p>
          </div>
          <div className="case-study-grid case-study-role-grid">
            {appRoles.map((role) => (
              <article key={role.name} className="case-study-card case-study-surface case-study-role-card">
                <h3>{role.name}</h3>
                <p>{role.detail}</p>
              </article>
            ))}
          </div>
          <div className="flow-list" aria-label="Navigation flow steps">
            {navigationSteps.map((step) => (
              <p key={step} className="flow-step">
                <span className="flow-step-icon" aria-hidden="true">↳</span>
                <span className="flow-step-text">{step}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-surface">
          <div className="case-study-section-heading">
            <p className="section-kicker">Visual Snapshot</p>
            <h2>Current Screens Across The Suite</h2>
          </div>
          <div className="case-study-grid case-study-snapshot-grid snapshot-grid-three">
            {snapshots.map((snapshot) => (
              <article key={snapshot.title} className="case-study-card case-study-surface case-study-snapshot-card">
                <button
                  type="button"
                  className="case-study-image-button"
                  onClick={() =>
                    setActiveImage({
                      src: snapshot.image,
                      alt: snapshot.alt,
                    })
                  }
                  aria-label={`Open larger image for ${snapshot.title}`}
                >
                  <img className="case-study-image" src={snapshot.image} alt={snapshot.alt} loading="lazy" />
                </button>
                <h3>{snapshot.title}</h3>
                <p className="case-study-card-copy">{snapshot.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-surface">
          <div className="case-study-section-heading">
            <p className="section-kicker">Community Focus</p>
            <h2>Features Added Beyond The Original Store Idea</h2>
            <p className="case-study-section-intro">
              These screens show how the project expanded past storefront logic
              into separate public and admin-facing community features.
            </p>
          </div>
          <div className="case-study-grid admin-snapshot-grid">
            {adminSnapshots.map((snapshot) => (
              <article key={snapshot.title} className="case-study-card case-study-surface case-study-snapshot-card admin-snapshot-card">
                <button
                  type="button"
                  className="case-study-image-button"
                  onClick={() =>
                    setActiveImage({
                      src: snapshot.image,
                      alt: snapshot.alt,
                    })
                  }
                  aria-label={`Open larger image for ${snapshot.title}`}
                >
                  <img className="case-study-image" src={snapshot.image} alt={snapshot.alt} loading="lazy" />
                </button>
                <h3>{snapshot.title}</h3>
                <p className="case-study-card-copy">{snapshot.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-surface previous-iteration">
          <div className="case-study-section-heading">
            <p className="section-kicker">Previous Iteration</p>
            <h2>Earlier Flask / MongoDB Version</h2>
          </div>
          <p>
            The earlier Flask / MongoDB version remains in the portfolio as the
            starting point for the concept. The Rails suite is the next step: a
            rebuild that turns one store prototype into a broader system with
            clearer responsibilities and a stronger overall structure.
          </p>
        </section>

        <div className="case-study-footer-actions">
          <Link to="/projects" className="btn btn-primary">
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

export default ARecordsProject;
