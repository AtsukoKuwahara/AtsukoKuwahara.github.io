import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import FloatingNav from './components/FloatingNav';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsOverview from './pages/ProjectsOverview';
import Projects from './pages/Projects';
import ARecordsProject from './pages/ARecordsProject';
import OpenCollectionProject from './pages/OpenCollectionProject';
import JourneyDeskProject from './pages/JourneyDeskProject';
import RijksExplorerProject from './pages/RijksExplorerProject';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import useScrollToTop from './useScrollToTop'; // Import the custom hook

function App() {
  useScrollToTop(); // Use the custom hook
  const location = useLocation();
  const navigate = useNavigate();
  const routeTimerRef = useRef(null);
  const [leavingPath, setLeavingPath] = useState(null);
  const isStandalonePage = location.pathname !== '/';
  const isRouteLeaving = leavingPath === location.pathname;

  useEffect(() => {
    setLeavingPath(null);

    return () => window.clearTimeout(routeTimerRef.current);
  }, [location.pathname]);

  const handleHomeRouteClick = (event, destination) => {
    const isModifiedClick = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

    if (event.defaultPrevented || event.button !== 0 || isModifiedClick) {
      return;
    }

    event.preventDefault();

    if (isRouteLeaving) {
      return;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      navigate(destination);
      return;
    }

    setLeavingPath(location.pathname);
    window.clearTimeout(routeTimerRef.current);
    routeTimerRef.current = window.setTimeout(() => navigate(destination), 180);
  };

  return (
    <div className="App">
      <Header />
      {!isStandalonePage && <FloatingNav />}
      <main
        key={location.pathname}
        className={`route-transition${isRouteLeaving ? ' is-leaving' : ''}`}
      >
        <Routes location={location}>
          <Route path="/" element={
            <div className="content">
              <section id="home" className="full-page">
                <div className="section-inner">
                  <Home onRouteLinkClick={handleHomeRouteClick} />
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
          <Route path="/projects/journeydesk" element={<JourneyDeskProject />} />
          <Route path="/projects/a-s-records-rails-suite" element={<ARecordsProject />} />
          <Route path="/projects/open-collection-ios" element={<OpenCollectionProject />} />
          <Route path="/projects/rijks-explorer-ios" element={<RijksExplorerProject />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
