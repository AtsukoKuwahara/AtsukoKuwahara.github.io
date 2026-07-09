import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox";
import "./RijksExplorerProject.css";

import masterpiecesImg from "../assets/images/rijks-explorer-masterpieces.png";
import exploreImg from "../assets/images/rijks-explorer-explore.png";
import detailImg from "../assets/images/rijks-explorer-detail.png";
import viewerImg from "../assets/images/rijks-explorer-viewer.png";

const productPillars = [
  {
    name: "Story-first masterpieces",
    detail:
      "Masterpieces uses a canonical local dataset so official story links stay stable even when live search results shift.",
  },
  {
    name: "Live collection explore",
    detail:
      "Explore uses Rijksmuseum live collection search for title and maker-based discovery, saved works, and push navigation into detail.",
  },
  {
    name: "Trust over feature breadth",
    detail:
      "Unreliable category filters and anonymous-maker paths were intentionally reduced instead of exposing weak navigation.",
  },
];

const technicalDecisions = [
  {
    name: "Canonical and live data split",
    detail:
      "Masterpieces and Explore do not share one data strategy. Stable editorial stories use local canonical records; discovery uses live API results.",
  },
  {
    name: "Source-aware maker fallback",
    detail:
      "Artwork detail resolves maker data through API metadata first, then collection page HTML, then Anonymous as a clear final fallback.",
  },
  {
    name: "Reliable update behavior",
    detail:
      "Live search work included scroll and result-update fixes so older responses do not overwrite newer UI state.",
  },
  {
    name: "Dark mode and visual polish",
    detail:
      "Text, card, and clear-button colors were adjusted directly where SwiftUI automatic colors did not preserve readability.",
  },
];

const snapshots = [
  {
    image: masterpiecesImg,
    alt: "RijksExplorer masterpieces tab",
    title: "Masterpieces",
    description:
      "A story-first entry point into Rijksmuseum highlights and official editorial flows.",
  },
  {
    image: exploreImg,
    alt: "RijksExplorer explore tab",
    title: "Explore",
    description:
      "Live collection search with title and maker narrowing, saved works, and visual browsing.",
  },
  {
    image: detailImg,
    alt: "RijksExplorer artwork detail",
    title: "Artwork Detail",
    description:
      "A focused detail view with maker metadata and related work behavior where the source data is reliable.",
  },
  {
    image: viewerImg,
    alt: "RijksExplorer fullscreen viewer",
    title: "Fullscreen Viewer",
    description:
      "A larger viewing surface for artwork images, including landscape presentation.",
  },
];

function RijksExplorerProject() {
  const [activeImage, setActiveImage] = useState(null);
  const openImage = (src, alt) => setActiveImage({ src, alt });

  return (
    <>
      <main className="rijks-page">
        <section className="rijks-hero">
          <div className="rijks-hero-copy">
            <p className="section-kicker">Featured iOS Case Study</p>
            <h1>RijksExplorer iOS</h1>
            <p className="rijks-summary">
              A SwiftUI museum app for Rijksmuseum masterpiece stories and live
              collection exploration.
            </p>
            <p>
              RijksExplorer started as a richer faceted discovery concept, but
              live museum data made the product problem more interesting:
              deciding which data could be trusted, which navigation should be
              withheld, and where the app should separate stable editorial
              stories from live search.
            </p>
            <p className="rijks-role">
              Role: concept, product direction, UI/UX, SwiftUI implementation,
              live API integration, data fallback design, and polish.
            </p>
            <div className="featured-tag-list rijks-tags">
              <span className="featured-tag">SwiftUI</span>
              <span className="featured-tag">Rijksmuseum API</span>
              <span className="featured-tag">Live Data</span>
              <span className="featured-tag">Product Judgment</span>
            </div>
          </div>

          <div className="rijks-hero-image">
            <button
              type="button"
              className="rijks-image-button"
              onClick={() =>
                openImage(masterpiecesImg, "RijksExplorer masterpieces tab")
              }
              aria-label="Open larger image for RijksExplorer masterpieces"
            >
              <img src={masterpiecesImg} alt="RijksExplorer masterpieces tab" loading="eager" />
            </button>
          </div>
        </section>

        <section className="rijks-section rijks-section-story">
          <div className="section-heading">
            <p className="section-kicker">Core Challenge</p>
            <h2>Available data is not the same as reliable product data</h2>
          </div>
          <p>
            The hardest part was not showing Rijksmuseum data on screen. The
            harder part was deciding which metadata could support a trustworthy
            product experience. Some planned filters were possible technically,
            but not reliable enough across objects, categories, and detail
            pages.
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

        <section className="rijks-section rijks-section-system">
          <div className="section-heading">
            <p className="section-kicker">Engineering Response</p>
            <h2>Designing boundaries around uneven live data</h2>
          </div>
          <div className="role-grid">
            {technicalDecisions.map((decision) => (
              <article key={decision.name} className="role-card">
                <h3>{decision.name}</h3>
                <p>{decision.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rijks-section">
          <div className="section-heading">
            <p className="section-kicker">Screens</p>
            <h2>Current product surfaces</h2>
          </div>
          <div className="rijks-snapshot-grid">
            {snapshots.map((snapshot) => (
              <article key={snapshot.title} className="snapshot-card">
                <button
                  type="button"
                  className="rijks-image-button"
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

        <section className="rijks-section rijks-section-note">
          <div className="section-heading">
            <p className="section-kicker">Final Judgment</p>
            <h2>Reliable paths over broad filters</h2>
          </div>
          <p>
            The final version is intentionally narrower than the original
            faceted-exploration idea. That was a product decision: the app keeps
            the story-first masterpiece flow stable, gives Explore a live search
            surface, and avoids presenting weak data relationships as if they
            were dependable.
          </p>
        </section>

        <div className="rijks-footer-actions">
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

export default RijksExplorerProject;
