import React from 'react';
import './About.css';

const beats = [
  {
    title: 'Music',
    text: 'Blues and rock are my grounding. Music is one of the clearest through-lines in who I am, and it influences the tone, atmosphere, and feeling I care about in the things I make.',
  },
  {
    title: 'Journey',
    text: 'The pandemic turned a long-standing interest in digital products into a decision to make them. What began as curiosity became a deliberate change in direction.',
  },
  {
    title: 'Making',
    text: 'A 1,200-hour mobile development program gave me the foundation. Since then, I have built on it through self-directed work across iOS, web, and AI-assisted tools, one working product at a time.',
  },
];

const RippleMotif = () => (
  <div className="about-ripple-motif">
    <span className="about-drop" />
    <span className="about-impact" />
    <span className="about-ripple about-ripple-one" />
    <span className="about-ripple about-ripple-two" />
    <span className="about-ripple about-ripple-three" />
    <span className="about-surface-line" />
    <p>clarity / rhythm / craft</p>
  </div>
);

function About() {
  return (
    <div className="about-stage">
      <div className="about-atmosphere" aria-hidden="true">
        <RippleMotif />
      </div>
      <div className="about-heading">
        <p className="section-kicker">About Me</p>
        <h2>Late to tech, close to craft</h2>
        <p>
          I came to software later, after years shaped by travel, family life,
          and creative work. My path was not linear, and each part of it remains
          part of who I am.
        </p>
      </div>
      <div className="about-beats">
        {beats.map((beat) => (
          <section key={beat.title} className="about-beat">
            <h3>{beat.title}</h3>
            <p>{beat.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default About;
