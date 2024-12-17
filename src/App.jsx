import React, { useState, useEffect } from "react";
import { Loading } from "./components/Loading/Loading"
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

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <Router>
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <NavBar/>
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
      )}
    </>
  );
}

export default App;
