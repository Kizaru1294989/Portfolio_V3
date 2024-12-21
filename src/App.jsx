import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importer AnimatePresence
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Main/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Preview from "./components/Loading/Preview/preview";

const LoaderCircle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000", // Couleur de fond du chargement
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid white",
          borderTopColor: "transparent",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

function App() {
  const [load, setLoad] = useState(true);
  const [showLoader, setShowLoader] = useState(false); // Nouvel état pour le loader circulaire

  useEffect(() => {
    // Premier timer : affiche le loader après 5 secondes
    const previewTimer = setTimeout(() => {
      setShowLoader(true); // Affiche le LoaderCircle
    }, 5000); // Temps d'affichage du Preview (ajustable)

    // Deuxième timer : après le loader, affiche l'application
    const appTimer = setTimeout(() => {
      setLoad(false);
    }, 10000); // Total : 5 secondes de Preview + 5 secondes de LoaderCircle

    return () => {
      clearTimeout(previewTimer);
      clearTimeout(appTimer);
    };
  }, []);

  // Animation des transitions
  const transitionVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    enter: { opacity: 0 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {load ? (
          showLoader ? (
            <motion.div
              key="loaderCircle"
              initial="initial"
              animate="initial"
              exit="exit"
              variants={transitionVariants}
            >
              <LoaderCircle />
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial="initial"
              animate="initial"
              exit="exit"
              variants={transitionVariants}
            >
              <Preview />
            </motion.div>
          )
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
                  <Route path="/project" element={<Projects />} />
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
