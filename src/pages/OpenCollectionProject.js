import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OpenCollectionProject.css";

import discoverImg from "../assets/images/open-collection-discover.png";
import searchImg from "../assets/images/open-collection-search.png";
import detailImg from "../assets/images/open-collection-detail.png";
import fullscreenImg from "../assets/images/open-collection-fullscreen.png";
import collectionImg from "../assets/images/open-collection-collection.png";
import collectionTagsImg from "../assets/images/open-collection-collection-tags.png";

const focusPoints = [
  {
    name: "Cross-Museum Discovery",
    detail:
      "The app brings together the Art Institute of Chicago and the Cleveland Museum of Art inside one browsing experience.",
  },
  {
    name: "Clean Fetch And Display",
    detail:
      "A main goal was fetching the artwork data I wanted and presenting it clearly on the device, not just exposing raw API results.",
  },
  {
    name: "Tagged Collection",
    detail:
      "Saved works, tags, and filters turn the app into a personal collection tool instead of one flat favorites list.",
  },
];

const challengePoints = [
  {
    name: "Two APIs, One UI Model",
    detail:
      "Each museum returned data differently, so I had to normalize the responses into one artwork model for list and detail screens.",
  },
  {
    name: "Image + Metadata Differences",
    detail:
      "Image delivery and metadata quality differed by source, especially on the AIC side, so the UI needed to stay clean even when the data did not.",
  },
  {
    name: "Search And Collection UX",
    detail:
      "I spent time refining artist and title search relevance and the collection UI so filtering by museum and tag felt useful rather than busy.",
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

  const snapshots = [
    {
      image: discoverImg,
      alt: "Open Collection discover screen",
      title: "Discover",
      description:
        "The home browsing view establishes the app's tone with cross-museum artwork discovery rather than a purely utilitarian feed.",
    },
    {
      image: searchImg,
      alt: "Open Collection search screen",
      title: "Search",
      description:
        "Artist and title search give the app a direct utility layer without losing the calmer browsing experience.",
    },
    {
      image: detailImg,
      alt: "Open Collection artwork detail screen",
      title: "Artwork Detail",
      description:
        "Detail brings together image, museum source, metadata, and saving actions in a more complete product view than a simple API result page.",
    },
  ];

  const experienceSnapshots = [
    {
      image: fullscreenImg,
      alt: "Open Collection full-screen viewer",
      title: "Full-Screen Viewer",
      description:
        "The viewer supports closer looking with full-screen presentation, zoom, and portrait or landscape viewing.",
    },
    {
      image: collectionImg,
      alt: "Open Collection saved collection screen",
      title: "Saved Collection",
      description:
        "Saved works persist locally with tags and filters, helping the app act like a personal collection tool instead of a one-time browser.",
    },
    {
      image: collectionTagsImg,
      alt: "Open Collection tag editing screen",
      title: "Tag Editing",
      description:
        "Tag editing helps saved works turn into smaller themed collections, which was one of the key product goals for the app.",
    },
  ];

  return (
    <>
      <main className="open-collection-page">
        <section className="open-collection-hero">
          <div className="open-collection-hero-copy">
            <p className="section-kicker">Featured Case Study</p>
            <h1>Open Collection iOS</h1>
            <p className="open-collection-summary">
              A SwiftUI art discovery app built around cross-museum browsing,
              clear on-device presentation, and personal saved collections.
            </p>
            <p>
              Open Collection is a small product built from an earlier museum
              app idea. This version focuses on using two museum APIs well,
              showing artworks clearly on device, and making saved works useful
              through tags and filtering.
            </p>
            <p className="open-collection-role">
              My role: concept development, product direction, UI design,
              information architecture, SwiftUI implementation, and iterative
              refinement.
            </p>
            <div className="featured-tag-list open-collection-tags">
              <span className="featured-tag">SwiftUI</span>
              <span className="featured-tag">Cross-Museum App</span>
              <span className="featured-tag">Portfolio Case Study</span>
            </div>
          </div>
          <div className="open-collection-hero-media">
            <button
              type="button"
              className="open-collection-image-button"
              onClick={() =>
                setActiveImage({
                  src: discoverImg,
                  alt: "Open Collection discover screen",
                })
              }
              aria-label="Open larger image for Open Collection discover screen"
            >
              <img src={discoverImg} alt="Open Collection discover screen" loading="eager" />
            </button>
          </div>
        </section>

        <section className="open-collection-section open-collection-section-story">
          <div className="section-heading">
            <p className="section-kicker">What I Wanted To Make</p>
            <h2>Not Just An API Sample</h2>
          </div>
          <p>
            The goal was not only to fetch museum data. I wanted an iOS app
            that could support quiet browsing across two collections, stronger
            search, and a personal collection feature that felt worth returning
            to.
          </p>
        </section>

        <section className="open-collection-section open-collection-section-focus">
          <div className="section-heading">
            <p className="section-kicker">What Matters Here</p>
            <h2>The Main Product Points</h2>
          </div>
          <div className="role-grid">
            {focusPoints.map((point) => (
              <article key={point.name} className="role-card">
                <h3>{point.name}</h3>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="open-collection-section open-collection-section-system">
          <div className="section-heading">
            <p className="section-kicker">What Was Challenging</p>
            <h2>Three Places I Had To Push The Build Further</h2>
            <p className="section-intro">
              The hard part was making the app feel clean and coherent even
              though the data sources, images, and user flows all behaved
              differently.
            </p>
          </div>
          <div className="role-grid">
            {challengePoints.map((point) => (
              <article key={point.name} className="role-card">
                <h3>{point.name}</h3>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="open-collection-section">
          <div className="section-heading">
            <p className="section-kicker">Visual Snapshot</p>
            <h2>Core Screens Across The App</h2>
          </div>
          <div className="snapshot-grid snapshot-grid-three">
            {snapshots.map((snapshot) => (
              <article key={snapshot.title} className="snapshot-card">
                <button
                  type="button"
                  className="open-collection-image-button"
                  onClick={() =>
                    setActiveImage({
                      src: snapshot.image,
                      alt: snapshot.alt,
                    })
                  }
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

        <section className="open-collection-section">
          <div className="section-heading">
            <p className="section-kicker">Viewing Experience</p>
            <h2>What Pushes It Beyond A Sample</h2>
            <p className="section-intro">
              Full-screen viewing, saved works, and tag editing are the parts
              that make the app feel more like a small product than a simple
              museum browser.
            </p>
          </div>
          <div className="experience-grid">
            {experienceSnapshots.map((snapshot) => (
              <article key={snapshot.title} className="snapshot-card experience-card">
                <button
                  type="button"
                  className="open-collection-image-button"
                  onClick={() =>
                    setActiveImage({
                      src: snapshot.image,
                      alt: snapshot.alt,
                    })
                  }
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
