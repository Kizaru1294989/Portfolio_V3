import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importer AnimatePresence
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Main/Home/Home";
import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import "./scss/main.scss";
// import "./scss/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preview from "./components/Loading/Preview/preview";
import { lazy, Suspense } from 'react';
import Projects from "./components/Projects/Projects";
import ProjectSingle from "./components/Projects/ProjectPage";

// const Projects = lazy(() => import('./components/Projects/Projects'));
// const ProjectSingle = lazy(() => import('./components/Projects/ProjectSingle'));

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000); // Transition après 5 secondes
    return () => clearTimeout(timer);
  }, []);

  // Animation des transitions
  const transitionVariants = {
    initial: { opacity: 1, scale: 1 }, // État initial
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // Animation de sortie
    enter: { opacity: 0 }, // (facultatif) Effet avant la sortie
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {load ? (
          <motion.div
            key="preview"
            initial="initial"
            animate="initial"
            exit="exit"
            variants={transitionVariants}
          >
            <Preview />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial="enter"
            animate="initial"
            variants={transitionVariants}
            exit={{ opacity: 0 }} 
          >
            <Router>
              <div className="App">
                <NavBar />
                <ScrollToTop />
              
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route
                    path="/projects/single-project"
                    element={<ProjectSingle />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
          
                <Footer />
              </div>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
