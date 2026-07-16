import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

const languageBadges = [
  { label: 'Swift', tone: 'swift' },
  { label: 'Java', tone: 'java' },
  { label: 'Python', tone: 'python' },
  { label: 'JavaScript', tone: 'javascript' },
  { label: 'TypeScript', tone: 'slate' },
  { label: 'Ruby', tone: 'ruby' },
  { label: 'Rails', tone: 'ruby' },
  { label: 'React', tone: 'react' },
];

function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-hero">
        <p className="section-kicker">Resume overview</p>
        <h1>Atsuko Kuwahara</h1>
        <p className="resume-lede">
          Software developer building mobile apps, web systems, and AI-assisted
          tools with attention to product clarity, UI structure, and practical
          implementation.
        </p>
        <div className="resume-actions">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <a href="mailto:kuwahara.atsuko@gmail.com" className="btn btn-outline">
            Email Atsuko
          </a>
        </div>
      </section>

      <section className="resume-grid" aria-label="Resume summary">
        <article className="resume-card">
          <h2>Technical Focus</h2>
          <div className="resume-language-strip" aria-label="Primary programming languages and frameworks">
            {languageBadges.map((tech) => (
              <span
                key={tech.label}
                className={`resume-tech-badge resume-tech-badge-${tech.tone}`}
                aria-label={tech.label}
              >
                {tech.label}
              </span>
            ))}
          </div>
          <ul>
            <li>SwiftUI, iOS, Android fundamentals, API integration, and mobile product flow</li>
            <li>React, TypeScript, Rails, REST APIs, and full-stack systems</li>
            <li>LLM evaluation, chatbot systems, local AI, and RAG experiments</li>
          </ul>
        </article>

        <article className="resume-card">
          <h2>Recent Experience</h2>
          <p>
            Queue Manager for LLM data quality and evaluation work, coordinating
            contributor workflows and reviewing coding-related AI training data.
          </p>
          <p>
            Previous AI chatbot developer experience with RASA, FlowiseAI, and
            enterprise chatbot migration support.
          </p>
        </article>

        <article className="resume-card">
          <h2>Selected Builds</h2>
          <ul>
            <li>Open Collection iOS: cross-museum SwiftUI discovery app</li>
            <li>RijksExplorer iOS: Rijksmuseum data and product decision study</li>
            <li>JourneyDesk: React product with local AI assistant workflow</li>
            <li>A&apos;S Records Rails Suite: connected Rails applications</li>
          </ul>
        </article>

        <article className="resume-card">
          <h2>Background</h2>
          <p>
            AEC in Mobile Application Development from John Abbott College,
            covering iOS and Android application development, with a prior
            creative and operations background that informs product tone,
            structure, and user-facing detail.
          </p>
          <p>Based in Montreal, QC. English professional, Japanese native.</p>
        </article>
      </section>
      <div className="resume-bottom-actions">
        <Link to="/" className="back-to-home-btn btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default Resume;
