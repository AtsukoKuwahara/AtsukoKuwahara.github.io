import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import FloatingNav from './components/FloatingNav';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsOverview from './pages/ProjectsOverview';
import Projects from './pages/Projects';
import ARecordsProject from './pages/ARecordsProject';
import Contact from './pages/Contact';
import useScrollToTop from './useScrollToTop'; // Import the custom hook
import './styles/App.css';

function App() {
  useScrollToTop(); // Use the custom hook
  const location = useLocation();
  const isStandalonePage = location.pathname !== '/';

  return (
    <div className="App">
      <Header />
      {!isStandalonePage && <FloatingNav />}
      <Routes>
        <Route path="/" element={
          <div className="content">
            <section id="home" className="full-page">
              <div className="section-inner">
                <Home />
              </div>
            </section>
            <section id="about" className="full-page">
              <div className="section-inner">
                <About />
              </div>
            </section>
            <section id="projects-overview" className="full-page">
              <div className="section-inner">
                <ProjectsOverview />
              </div>
            </section>
            <section id="contact" className="full-page">
              <div className="section-inner">
                <Contact />
              </div>
            </section>
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/a-s-records-rails-suite" element={<ARecordsProject />} />
      </Routes>
    </div>
  );
}

export default App;
