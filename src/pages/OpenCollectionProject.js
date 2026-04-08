import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OpenCollectionProject.css";

import discoverImg from "../assets/images/open-collection-discover.png";
import searchImg from "../assets/images/open-collection-search.png";
import detailImg from "../assets/images/open-collection-detail.png";
import fullscreenImg from "../assets/images/open-collection-fullscreen.png";
import collectionImg from "../assets/images/open-collection-collection.png";
import v2DiscoverThemeImg from "../assets/images/open-collection-v2-discover-theme.png";
import v3DiscoverImg from "../assets/images/open-collection-v3-discover.png";
import v3CollectionShelvesImg from "../assets/images/open-collection-v3-collection-shelves.png";

const productPillars = [
  {
    name: "Calm Cross-Museum Browsing",
    detail:
      "The app brings together the Art Institute of Chicago and the Cleveland Museum of Art inside one quieter browsing flow.",
  },
  {
    name: "Artwork-First Viewing",
    detail:
      "Discover, detail, and full-screen viewing are designed to keep the artwork at the center instead of treating the app like a data list.",
  },
  {
    name: "Personal Curation",
    detail:
      "Saving, filtering, tags, and shelves make the product useful after the first browse, not just during it.",
  },
];

const releaseCards = [
  {
    label: "V1 / Baseline Product",
    image: discoverImg,
    alt: "Open Collection v1 discover screen",
    title: "The strongest baseline",
    description:
      "V1 established the core product: cross-museum discovery, artist and title search, artwork detail, full-screen viewing, local saving, tags, and collection filtering in one coherent flow.",
    note: "The version that proved the product worked.",
  },
  {
    label: "V2 / Guided Discovery",
    image: v2DiscoverThemeImg,
    alt: "Open Collection v2 guided discovery screen",
    title: "Exploration with limits",
    description:
      "V2 explored guided discovery through themed entry points and tighter featured ranking. It helped clarify that discovery quality depended on source-aware modeling and curation trust, not simply adding more surface area.",
    note: "An iteration that sharpened product judgment.",
  },
  {
    label: "V3 / Shelf-Based Collection",
    image: v3CollectionShelvesImg,
    alt: "Open Collection v3 collection shelves screen",
    title: "A stronger curation flow",
    description:
      "V3 turned Collection into a more expressive curation space through named shelves, shelf detail, and a shelf-wide viewer. It extended the product without adding interaction complexity just for show.",
    note: "The strongest follow-up to the baseline release.",
  },
];

const technicalDecisions = [
  {
    name: "Source-Aware Modeling",
    detail:
      "The museum APIs are not symmetrical, so the app uses shared UI-facing models while keeping source-specific logic inside each integration path.",
  },
  {
    name: "Search Relevance Over Raw Breadth",
    detail:
      "Museum search endpoints can behave like broad metadata search, so I tuned the product around artist and title relevance rather than exposing every weak match.",
  },
  {
    name: "AIC Image Handling",
    detail:
      "The Art Institute of Chicago required custom image handling to keep the visual experience reliable inside the same SwiftUI system.",
  },
  {
    name: "Useful Simplicity In Collection",
    detail:
      "I avoided adding complexity for show. Tags stayed lightweight, and shelves were introduced only when they clearly improved personal organization.",
  },
];

const coreSnapshots = [
  {
    image: discoverImg,
    alt: "Open Collection discover screen",
    title: "Discover",
      description:
        "Cross-museum browsing that feels calm, visual, and clearly guided from the start.",
  },
  {
    image: searchImg,
    alt: "Open Collection search screen",
    title: "Search",
      description:
        "Artist and title search add direct utility without breaking the quieter product tone.",
  },
  {
    image: detailImg,
    alt: "Open Collection artwork detail screen",
    title: "Artwork Detail",
      description:
        "Detail balances image, museum metadata, and continuation paths in one focused reading view.",
  },
  {
    image: collectionImg,
    alt: "Open Collection collection screen",
    title: "Collection",
    description:
      "Saved works persist locally and stay useful through museum and tag-based filtering.",
  },
  {
    image: fullscreenImg,
    alt: "Open Collection full-screen viewer",
    title: "Full-Screen Viewer",
    description:
      "Zoom and rotated viewing let the app function as a closer-looking experience, not just a browser.",
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

function OpenCollectionProject() {
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (src, alt) => setActiveImage({ src, alt });

  return (
    <>
      <main className="open-collection-page">
        <section className="open-collection-hero">
          <div className="open-collection-hero-copy">
            <p className="section-kicker">Featured Case Study</p>
            <h1>Open Collection iOS</h1>
            <p className="open-collection-summary">
              A SwiftUI art browsing app for calm cross-museum discovery and
              personal collection.
            </p>
            <p>
              Open Collection brings together the Art Institute of Chicago and
              the Cleveland Museum of Art in one artwork-first iPhone
              experience.
            </p>
            <p className="open-collection-role">
              Role: concept, product direction, UI/UX, information
              architecture, SwiftUI implementation, and iteration.
            </p>
            <div className="featured-tag-list open-collection-tags">
              <span className="featured-tag">SwiftUI</span>
              <span className="featured-tag">iOS Product Design</span>
              <span className="featured-tag">Cross-Museum App</span>
              <span className="featured-tag">Case Study</span>
            </div>
          </div>

          <div className="open-collection-hero-image">
            <button
              type="button"
              className="open-collection-image-button"
              onClick={() =>
                openImage(
                  v3DiscoverImg,
                  "Open Collection v3 discover screen"
                )
              }
              aria-label="Open larger image for Discover"
            >
              <img
                src={v3DiscoverImg}
                alt="Open Collection v3 discover screen"
                loading="eager"
              />
            </button>
          </div>
        </section>

        <section className="open-collection-section open-collection-section-story">
          <div className="section-heading">
            <p className="section-kicker">Product Direction</p>
            <h2>A quiet product, not a museum data demo</h2>
          </div>
          <p>
            The goal was to make cross-museum browsing feel quiet, coherent,
            and trustworthy on iPhone. Instead of exposing raw source data, I
            shaped the app around a clearer product direction: focused
            discovery, artwork-first detail views, and a local collection space
            for saving and revisiting works.
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

        <section className="open-collection-section open-collection-section-focus">
          <div className="section-heading">
            <p className="section-kicker">Core Experience</p>
            <h2>The product is strongest when it stays clear and direct</h2>
            <p className="section-intro">
              The baseline release already works as a complete iOS product:
              discover works across museums, search directly, open richer
              detail views, and keep a personal collection on device.
            </p>
          </div>
          <div className="snapshot-grid snapshot-grid-core">
            {coreSnapshots.map((snapshot) => (
              <article key={snapshot.title} className="snapshot-card snapshot-card-compact">
                <button
                  type="button"
                  className="open-collection-image-button"
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

        <section className="open-collection-section open-collection-section-system">
          <div className="section-heading">
            <p className="section-kicker">Iteration Across Releases</p>
            <h2>V2 and V3 added depth without replacing the core product</h2>
            <p className="section-intro">
              I did not treat feature count as progress by default. Each later
              release tested a narrower product question and helped clarify
              where the app should deepen and where it should stay restrained.
            </p>
          </div>
          <div className="release-grid">
            {releaseCards.map((card) => (
              <article key={card.label} className="release-card">
                <button
                  type="button"
                  className="open-collection-image-button"
                  onClick={() => openImage(card.image, card.alt)}
                  aria-label={`Open larger image for ${card.label}`}
                >
                  <img src={card.image} alt={card.alt} loading="lazy" />
                </button>
                <p className="release-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p className="release-note">{card.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="open-collection-section">
          <div className="section-heading">
            <p className="section-kicker">Product And Technical Decisions</p>
            <h2>Implementation choices that shaped the experience</h2>
            <p className="section-intro">
              The product only works because the underlying implementation takes
              source differences seriously. These choices mattered as much as
              the UI itself.
            </p>
          </div>
          <div className="role-grid">
            {technicalDecisions.slice(0, 3).map((decision) => (
              <article key={decision.name} className="role-card">
                <h3>{decision.name}</h3>
                <p>{decision.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="open-collection-footer-actions">
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

export default OpenCollectionProject;
