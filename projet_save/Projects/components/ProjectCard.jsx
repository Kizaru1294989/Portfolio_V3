import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project, index, onExpand }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <Button onClick={() => onExpand(project.id)}>Voir plus</Button>
      </div>
    </motion.div>
  );
}

