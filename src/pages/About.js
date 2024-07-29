import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# About Me

Music has always been a significant part of my life, especially blues and rock. In my 20s, my passion for music led me to travel alone to the US, where I immersed myself in vibrant musical cultures. 

In my 30s, a special connection through music brought me to Montreal, where I built a fulfilling life, raising my child and working in a restaurant. However, when the pandemic struck, it brought about unexpected changes, prompting me to reevaluate my path.

Seizing the moment, I decided to pursue a long-standing interest in programming. With the support and encouragement of those around me, I successfully completed a 1,200-hour bootcamp program in college, acquiring new skills and knowledge in the tech field.

My journey continues as I embrace new challenges and opportunities, driven by a passion for innovation and continuous learning.
`;

const About = () => (
  <div>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </div>
);

export default About;
