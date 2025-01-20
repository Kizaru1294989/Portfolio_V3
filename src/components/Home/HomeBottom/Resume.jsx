import React from "react";
import { motion } from "framer-motion";
import { services } from "./constants";
import { fadeIn, textVariant } from "./utils/motion";
import { SectionWrapper } from "./hoc";
import "./index.css";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="card-gradient"
    >
      <div className="card-content">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  return (
    <div style={{ marginTop: "-6rem" }}>
      <motion.div variants={textVariant()}>
        {/* <p className="section-sub-text">Introduction</p> */}
        <h2 className="section-head-text">Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 section-sub-text"
      >
        Passionné par la cybersécurité offensive et déterminé à m’investir dans
        le Red Team, j’apporte une expérience riche et complète en tant que
        développeur fullstack, architecte réseau et expert en environnement
        Linux. Cette combinaison unique de compétences techniques et
        stratégiques me permet de comprendre les systèmes dans leur globalité,
        d’identifier leurs vulnérabilités et de contribuer efficacement à des
        simulations d’attaques réalistes et percutantes
      </motion.p>

      <div
        className="mt-20 flex-center"
        style={{ gap: "40px", flexWrap: "wrap" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
