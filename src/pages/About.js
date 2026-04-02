import React from 'react';

const beats = [
  {
    title: 'Music',
    text: 'Blues and rock are my grounding. I care about texture, atmosphere, and the way small details can change the entire feeling of an experience.',
  },
  {
    title: 'Journey',
    text: 'My path into development was not early or linear. Travel, family life in Montreal, and the pause of the pandemic all pushed me toward learning how to build the products I wanted to see.',
  },
  {
    title: 'Making',
    text: 'After a 1,200-hour mobile development program, I kept building across mobile, web, and AI-assisted projects. I am most interested in work that feels coherent, usable, and lived in.',
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
          products with a point of view.
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
