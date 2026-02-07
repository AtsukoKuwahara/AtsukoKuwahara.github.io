import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# About Me

### Music
Blues and Rock are my grounding. I love the feeling of a live room, the texture of vinyl, and the way small details change the whole experience.

### Journey
My 20s were shaped by solo travel and music. In my 30s, I moved to Montreal and built a family. When the pandemic hit, it made me stop and reassess my path — including the things I'd always wanted to learn.

### Making
I completed a 1,200-hour mobile development program and have been building ever since — apps, tools, and experiences meant to feel clear and approachable.  
AI later added a new kind of curiosity and joy to the process.

I'm happiest when I can blend craft and empathy into the products I build.
`;

const About = () => (
  <div>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </div>
);

export default About;
