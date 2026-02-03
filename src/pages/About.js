import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# About Me

### Music
Blues and Rock are my grounding. I love the feeling of a live room, the texture of vinyl, and the way small details change the whole experience.

### Journey
In my 20s, I traveled alone to the U.S. to explore music culture. In my 30s, I built a life in Montreal, raised my child, and worked in hospitality — a place where calm, care, and timing matter.  
When the pandemic brought unexpected change, it pushed me to pause and rethink my direction.

### Making
That same sense of rhythm pulled me into programming. I completed a 1,200-hour mobile development program and kept building — apps, tools, and experiences that feel thoughtful and approachable.  
My first encounter with AI surprised me in the best way; it deepened my curiosity and added a new layer of excitement to making.

I'm happiest when I can blend craft and empathy into the products I build.
`;

const About = () => (
  <div>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </div>
);

export default About;
