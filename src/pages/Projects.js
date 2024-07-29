import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// Import images
import adobeXdImg from '../assets/images/adobe-xd.jpg';
import adobePremiereImg from '../assets/images/adobe-premiere.jpg';
import chicagoMuseumAppImg from '../assets/images/chicago-museum-app.jpg';
import kaleidoscopeAppImg from '../assets/images/kaleidoscope-app.jpg';
import todoListImg from '../assets/images/todo-list.jpg';
import leafletWebAppImg from '../assets/images/leaflet-web-app.jpg';
import apwStoreImg from '../assets/images/apw-store.jpg';
import asRecordsStoreImg from '../assets/images/as-records-store.jpg';
import javaImg from '../assets/images/java.png';
import reactNativeImg from '../assets/images/react_native.png';
import jsImg from '../assets/images/js.png';
import htmlImg from '../assets/images/html.png';
import cssImg from '../assets/images/css.png';

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on:</p>
      <div className="projects-grid">
        <div className="project-card">
          <img src={adobeXdImg} alt="Adobe XD Form & Prototyping" />
          <div className="project-card-content">
          <h5>Adobe XD Form & Prototyping</h5>
          <p>Form and prototyping created using Adobe XD.</p>
          <a href="https://onedrive.live.com/embed?resid=2AB692488CD6D727%2131605&filename=screenshot%20FormAndPrototyping.mov&authkey=!AOgQuvPwcWj4WJA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Watch Video</a>
          <div className="languages"><p>Adobe XD</p></div>
          </div>
        </div>
        <div className="project-card">
          <img src={adobePremiereImg} alt="Adobe PremierePro short video" />
          <div className="project-card-content">
          <h5>Adobe PremierePro short video</h5>
          <p>Short video created using Adobe PremierePro.</p>
          <a href="https://onedrive.live.com/redir?resid=2AB692488CD6D727%2131420&authkey=%21ALaq-dwIrDoGjZ4&page=View&wd=target%28Projects_John%20Abbott%20College.one%7Cf24b7b04-c7d9-6c46-8fe9-b2d249b2317a%2FInfographic%2002%20-%20Adobe%20PremierePro%7C74db4eb1-7f78-904e-bc1e-1d835dc603e3%2F%29&wdorigin=703" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Watch Video</a>
          <div className="languages"><p>Adobe PremierePro</p></div>
          </div>
        </div>
        <div className="project-card">
          <img src={chicagoMuseumAppImg} alt="Chicago Museum API App" />
          <div className="project-card-content">
          <h5>Chicago Museum API App - Java</h5>
          <p>Mobile App for Android implemented in Java. This app allows users to browse the collection of the Art Institute of Chicago.</p>
          <a href="https://onedrive.live.com/embed?resid=2AB692488CD6D727%2131607&filename=screenshot_API_app.mov&authkey=!AEKVoxR78NssKc0" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Watch Video</a>
          <div className="languages"><img src={javaImg} alt="Java" /></div>
          </div>
        </div>
        <div className="project-card">
          <img src={kaleidoscopeAppImg} alt="Kaleidoscope App" />
          <div className="project-card-content">
          <h5>Kaleidoscope App - React Native</h5>
          <p>Mobile App for Android and iOS implemented in React Native. This is a flea market app that allows users to upload their stuff for sale, and send messages to make purchases.</p>
          <div className="languages"><img src={reactNativeImg} alt="React Native" /></div>
          </div>
        </div>
        <div className="project-card">
          <img src={todoListImg} alt="My Simple To-Do List" />
          <div className="project-card-content">
         <h5>My Simple To-Do List</h5>
          <p>This Todo List application is a modern web app built using React with Vite as a build tool, allowing for a fast development environment.</p>
          <a href="https://github.com/AtsukoKuwahara/my_simple_todos" target="_blank" rel="noopener noreferrer" className="btn btn-dark-green">GitHub</a>
          <div className="languages">
            <img src={jsImg} alt="JavaScript" />
            <img src={cssImg} alt="CSS" />
            <img src={htmlImg} alt="HTML" />
            <img src={reactNativeImg} alt="React Native" />
          </div>
          </div>
        </div>
        <div className="project-card">
          <img src={leafletWebAppImg} alt="Leaflet Web App" />
          <div className="project-card-content">
          <h5>Leaflet Web App - Urban Feedback Map</h5>
          <p>UrbanFeedbackMap extends the LeafletWebMap (interactive web mapping application) for urban planning and public feedback integration.</p>
          <a href="https://github.com/AtsukoKuwahara/urban_feedback_map" className="btn btn-dark-green" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://onedrive.live.com/embed?resid=2AB692488CD6D727%2131870&filename=UrbanFeedbackMap.mov&authkey=!AKH0pUCpg70odfA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Watch Video</a>
          <div className="languages">
            <img src={jsImg} alt="JavaScript" />
            <img src={cssImg} alt="CSS" />
            <img src={htmlImg} alt="HTML" />
          </div>
          </div>
        </div>
        <div className="project-card">
          <img src={apwStoreImg} alt="APW Store Web App" />
          <div className="project-card-content">
          <h5>APW Store Web App - JavaScript</h5>
          <p>Web Application implemented in JavaScript for the online store "APW Store".</p>
          <a href="https://github.com/AtsukoKuwahara/apw_store" target="_blank" rel="noopener noreferrer" className="btn btn-dark-green">GitHub</a>
          <div className="languages">
            <img src={jsImg} alt="JavaScript" />
            <img src={cssImg} alt="CSS" />
            <img src={htmlImg} alt="HTML" />
          </div>
          </div>
        </div>
        <div className="project-card">
          <img src={asRecordsStoreImg} alt="A's Records Store Web App" />
          <div className="project-card-content">
          <h5>A's Records Store Web App</h5>
          <p>A web application for A's Records, an online store selling music records, built with Flask and MongoDB.</p>
          <a href="https://github.com/AtsukoKuwahara/a_records_store" target="_blank" rel="noopener noreferrer" className="btn btn-dark-green">GitHub</a>
          <div className="languages"><p>Flask / MongoDB</p></div>
          </div>
        </div>
      </div>
      <button className="back-to-home-btn" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Projects;
