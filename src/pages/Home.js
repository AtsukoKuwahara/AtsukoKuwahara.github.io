import React from 'react';

function Home() {
  return (
    <div className="home-stage">
      <div className="home-copy">
        <p className="section-kicker">Atsuko Kuwahara</p>
        <h1>Built with Warmth and Intention</h1>
        <p className="home-lede">
          Full-stack, mobile, and web work shaped by music, visual thinking,
          and a non-traditional path into software.
        </p>
        <p className="home-body">
          I build products that aim to feel warm, clear, and a little different
          from the default, across mobile apps, web experiences, and
          AI-assisted tools.
        </p>
      </div>
      <div className="home-vinyl-wrap" aria-hidden="true">
        <div className="home-vinyl-glow" />
        <div className="home-vinyl">
          <div className="home-vinyl-ring home-vinyl-ring-one" />
          <div className="home-vinyl-ring home-vinyl-ring-two" />
          <div className="home-vinyl-ring home-vinyl-ring-three" />
          <div className="home-vinyl-label">
            <span className="vinyl-label-primary">Developer</span>
            <span className="vinyl-label-secondary">A&apos;S Records</span>
            <div className="home-vinyl-hole" />
          </div>
        </div>
        <div className="home-vinyl-note">music / systems / warmth</div>
      </div>
    </div>
  );
}

export default Home;
