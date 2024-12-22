import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";
import { ExpandedProjectCard } from "./components/ExpandedProjectCard";
import "../../scss/index.css"

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleExpand = (id) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setExpandedProject(project);
    }
  };

  const handleClose = () => {
    setExpandedProject(null);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Mes Projets</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onExpand={handleExpand}
          />
        ))}
      </motion.div>
      <AnimatePresence>
        {expandedProject && (
          <ExpandedProjectCard project={expandedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}

