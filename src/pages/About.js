import React from 'react';

const beats = [
  {
    title: 'Music',
    text: 'Blues and rock are my grounding. Music is one of the clearest through-lines in who I am, and it influences the tone, atmosphere, and feeling I care about in the things I make.',
  },
  {
    title: 'Journey',
    text: 'My path into development was not early or linear. Travel, family life in Montreal, and the pause of the pandemic all pushed me toward building the kinds of products I wanted to see instead of only imagining them.',
  },
  {
    title: 'Making',
    text: 'After a 1,200-hour mobile development program, I kept building across mobile, web, and AI-assisted projects. I care about taking ideas through interface direction, structure, and implementation so they become coherent, usable, working experiences.',
  },
];

function About() {
  return (
    <div className="about-stage">
      <div className="about-heading">
        <p className="section-kicker">About Me</p>
        <h2>Late to tech, close to craft</h2>
        <p>
          I am not trying to look like the loudest developer in the room. What
          matters more to me is building steadily, thinking clearly, and making
          products that feel intentional from concept to interface.
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
