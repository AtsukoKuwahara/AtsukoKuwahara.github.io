import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Welcome to My Portfolio!
Hi, I'm **Atsuko Kuwahara**, a Mobile App and Full Stack Developer.

I recently embarked on my career journey in tech, and I'm passionate about learning new things and building innovative solutions.
`;

const Home = () => (
  <div>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </div>
);

export default Home;
