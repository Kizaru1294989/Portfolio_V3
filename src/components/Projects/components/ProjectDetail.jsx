"use client";

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/data";
import styles from "./detail.module.scss";
import ImageSlideshow from "./SlideShow/index";
export default function ProjectDetail() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Pour la navigation
  const project = projects.find((p) => p.id === Number(id)); // Trouver le projet correspondant

  if (!project) return <div>Project not found</div>;

  return (
    <div style={{ justifyContent: "center", marginTop: "100px" }}>
      <motion.div
        className={styles.projectDetail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.header}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          <button
            onClick={() => navigate(-1)} // Retour à la page précédente
            className={styles.backButton}
            aria-label="Return to projects list"
          >
            &larr; Back
          </button>
          <h1>{project.title}</h1>
          <div className={styles.meta}>
            <span>{new Date().toLocaleDateString()}</span>
            <span>{project.category}</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.gallery}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.images.map((image, index) => (
            <motion.img
              style={{ height: "auto" }}
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.sidebar}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.info}>
              <h2>A propos </h2>
              <p>Name: {project.client.name}</p>
              <p>Services: {project.client.services}</p>
            </div>

            <div className={styles.tools}>
              <h2>Tools & Technologies</h2>
              <p>{project.tools.join(", ")}</p>
            </div>
            {/* 
          <div className={styles.share}>
            <h2>Liens</h2>
            <p>Website: {project.client.website}</p>
          </div> */}
          </motion.div>

          <motion.div
            className={styles.mainContent}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h2>Objective</h2>
              <p>{project.objective}</p>
            </div>
          </motion.div>
        </div>
        {project.slide ? (
          <ImageSlideshow
            image1={project.slide1}
            image2={project.slide2}
            image3={project.slide3}
          />
        ) : null}
      </motion.div>
    </div>
  );
}
