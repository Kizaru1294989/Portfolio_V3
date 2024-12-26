'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/data'
import styles from './project.module.scss'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All Projects')
  const navigate = useNavigate()

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'All Projects' || project.category === category
    return matchesSearch && matchesCategory
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className={styles.projectsContainer}>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects portfolio
      </motion.h1>

      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search projects by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Projects</option>
          <option>Web Application</option>
          <option>Mobile Application</option>
          <option>UI/UX Design</option>
        </select>
      </div>

      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img src={project.image} alt={project.title} />
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

