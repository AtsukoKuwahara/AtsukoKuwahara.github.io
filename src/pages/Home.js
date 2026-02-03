import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Blue Notes, Clean Code
Hi, I'm **Atsuko Kuwahara** - a mobile app and full-stack developer who loves vintage sound, modern tools, and human-centered design.

I build experiences that feel warm, clear, and intentional - from mobile apps to AI-powered tools.
`;

const Home = () => (
  <div>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </div>
);

export default Home;
