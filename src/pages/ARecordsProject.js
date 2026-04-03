import React from "react";
import { Link } from "react-router-dom";
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
      "Acts as the hub for the suite. It introduces the brand, explains the concept, and routes visitors toward the store and community areas.",
  },
  {
    name: "Store",
    detail:
      "Focuses on product browsing and storefront flow. It now sits inside the wider A'S RECORDS system instead of carrying the whole concept alone.",
  },
  {
    name: "Community / Events",
    detail:
      "Adds a participation layer to the project, giving the suite a community-facing role beyond shopping alone.",
  },
];

const navigationSteps = [
  "Website works as the main entry point and presents the shared A'S RECORDS identity.",
  "From the hub, visitors can move into the dedicated store experience or the community / events area.",
  "Store and community pages both include a return path back to the website so the suite stays connected.",
];

function ARecordsProject() {
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
    <main className="a-records-page">
      <section className="a-records-hero">
        <div className="a-records-hero-copy">
          <p className="section-kicker">Featured Case Study</p>
          <h1>A'S RECORDS Rails Suite</h1>
          <p className="a-records-summary">
            A three-app Rails portfolio project built as a connected system: a
            hub website, a storefront, and a community / events experience.
          </p>
          <p>
            This is the current evolution of A'S RECORDS. Instead of rebuilding
            the earlier store prototype as a single app, I used Rails study to
            separate responsibilities and design navigation between related
            products.
          </p>
          <div className="a-records-hero-actions">
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
          <div className="featured-tag-list a-records-tags">
            <span className="featured-tag">Ruby on Rails</span>
            <span className="featured-tag">System Design</span>
            <span className="featured-tag">Navigation Flow</span>
            <span className="featured-tag">Portfolio Case Study</span>
          </div>
        </div>
        <div className="a-records-hero-media">
          <img src={websiteHomeImg} alt="A'S RECORDS website screenshot" loading="eager" />
        </div>
      </section>

      <section className="a-records-section">
        <div className="section-heading">
          <p className="section-kicker">System Roles</p>
          <h2>How The Three Apps Divide The Work</h2>
        </div>
        <div className="role-grid">
          {appRoles.map((role) => (
            <article key={role.name} className="role-card">
              <h3>{role.name}</h3>
              <p>{role.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="a-records-section">
        <div className="section-heading">
          <p className="section-kicker">Navigation Flow</p>
          <h2>Hub-Led Movement Across The Suite</h2>
        </div>
        <ol className="flow-list">
          {navigationSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="a-records-section">
        <div className="section-heading">
          <p className="section-kicker">Visual Snapshot</p>
          <h2>Current Screens Across The Suite</h2>
        </div>
        <div className="snapshot-grid snapshot-grid-three">
          {snapshots.map((snapshot) => (
            <article key={snapshot.title} className="snapshot-card">
              <img src={snapshot.image} alt={snapshot.alt} loading="lazy" />
              <h3>{snapshot.title}</h3>
              <p>{snapshot.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="a-records-section">
        <div className="section-heading">
          <p className="section-kicker">Community Deep Dive</p>
          <h2>New Direction And Added Features</h2>
          <p className="section-intro">
            These screens focus only on the community / events app. They show
            the updated concept, stronger public presentation, and newer admin
            features added after the original portfolio pass.
          </p>
        </div>
        <div className="admin-snapshot-grid">
          {adminSnapshots.map((snapshot) => (
            <article key={snapshot.title} className="snapshot-card admin-snapshot-card">
              <img src={snapshot.image} alt={snapshot.alt} loading="lazy" />
              <h3>{snapshot.title}</h3>
              <p>{snapshot.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="a-records-section previous-iteration">
        <div className="section-heading">
          <p className="section-kicker">Previous Iteration</p>
          <h2>Earlier Flask / MongoDB Version</h2>
        </div>
        <p>
          The earlier A&apos;S RECORDS prototype remains part of the portfolio as
          a separate card. That version explored the storefront concept,
          introduced a local-LLM trivia feature, and now serves as a clear
          before-and-after reference for how the idea evolved in Rails.
        </p>
      </section>
    </main>
  );
}

export default ARecordsProject;
