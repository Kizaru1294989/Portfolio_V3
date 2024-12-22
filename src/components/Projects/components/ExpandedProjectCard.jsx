import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export function ExpandedProjectCard({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="bg-card text-card-foreground rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-base mb-6">{project.description}</p>
          <Button onClick={onClose}>Fermer</Button>
        </div>
      </div>
    </motion.div>
  );
}

