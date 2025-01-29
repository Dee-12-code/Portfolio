import React from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

// Sample project data (you can update or expand this)
const projects = [
  { id: 1, title: "AI-Powered Personal Finance Tracker", description: "Manage your finances with AI." },
  { id: 2, title: "Interactive Resume Builder", description: "Create resumes with ease." },
  { id: 3, title: "E-Library with Smart Search", description: "A dynamic library search platform." },
  { id: 4, title: "Markdown Previewer", description: "Write and Preview Markdown in real time." },
];

const ProjectsSection = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <motion.div
        className="projects-list"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
