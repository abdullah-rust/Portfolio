import { motion } from "motion/react";
import { useState } from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Zyra",
      title: "Real-Time Chat Application",
      description:
        "A modern real-time chat application with seamless messaging, friend search, offline message storage, and secure authentication. Built with React on the frontend and a robust backend using Node.js, Rust, and Socket.io.",
      fullDescription:
        "Zyra is a feature-rich chat application enabling real-time communication between users. On the frontend, it uses React with module.css for styling and IndexedDB for offline message storage. The backend combines Socket.io and Rust for fast, reliable messaging, along with Node.js and Express for API handling. JWT tokens (HTTP-only) ensure secure authentication. The application supports friend search, group chats, offline messages, message encryption, and online status tracking. Databases include MongoDB, PostgreSQL, and Redis for optimized performance and message persistence.",
      image: "💬",
      technologies: [
        "React",
        "Module.css",
        "IndexedDB",
        "Node.js",
        "Express",
        "Socket.io",
        "Rust",
        "JWT (HttpOnly)",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "CSS3",
      ],
      features: [
        "Real-time Messaging",
        "Friend Search",
        "Offline Message Storage",
        "User Authentication",
      ],
      githubLink: "https://github.com/abdullah-rust/zyra",
      color: "#154075ff",
      status: "Live",
    },
    {
      id: 2,
      name: "Dyzora",
      title: "Modern E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with product catalog, shopping cart, product categories, user profile management, and an admin panel.",
      fullDescription:
        "Dyzora is a modern e-commerce platform built with Next.js and module.css on the frontend for a fast, responsive UI. Users can browse products by category, search for items, add products to the cart, and manage their profiles with address and order history. The backend is powered by Node.js, Express, and TypeScript, with PostgreSQL for data storage, Minio for file storage, and JWT for secure authentication. Google Login is integrated for easy sign-in. Admins can add, edit, and view products and manage orders efficiently.",
      image: "🛒",
      technologies: [
        "Next.js",
        "Module.css",
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "JWT (HttpOnly)",
        "Google Login",
        "Minio",
        "CSS3",
      ],
      features: [
        "Product Catalog & Categories",
        "Search Products",
        "Shopping Cart",
        "User Profile Management",
        "Address & Order History",
        "Admin Panel (Add/View/Edit Products)",
        "Order Tracking",
      ],
      githubLink: "https://github.com/abdullah-rust/dyzora",
      liveLink: "https://dyzora-store.vercel.app",
      color: "#10b981",
      status: "Live",
    },
    {
      id: 3,
      name: "Filora",
      title: "Cloud File Management System",
      description:
        "An intuitive file management system for organizing, storing, and sharing files in the cloud with advanced features.",
      fullDescription:
        "Filora is a powerful cloud-based file management system that allows users to upload, organize, share, and manage their files efficiently. It includes features like file preview, folder management, sharing links, and secure storage.",
      image: "📁",
      technologies: [
        "React",
        "Module.css",
        "LocalForage",
        "Jotai",
        "Node.js",
        "Express",
        "JWT (HttpOnly)",
        "PostgreSQL",
        "Redis",
        "CSS3",
      ],
      features: [
        "File Upload",
        "Folder Management",
        "File Sharing",
        "File Preview",
        "Secure Storage",
      ],
      githubLink: "https://github.com/abdullah-rust/filora",
      liveLink: "https://filora-cloud.vercel.app",
      color: "#f59e0b",
      status: "Live",
    },
  ];

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <motion.section
      className={styles.projects}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <motion.div
          className={styles.header}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className={styles.badge}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            🚀 My Projects
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Creative <span className={styles.gradientText}>Projects</span> That
            Define My Journey
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            From real-time chat apps to e-commerce solutions - each project
            tells a story of innovation and technical excellence
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.7 + index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              {/* Project Header */}
              <div className={styles.projectHeader}>
                <motion.div
                  className={styles.projectIcon}
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                    border: `2px solid ${project.color}30`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span style={{ fontSize: "2rem" }}>{project.image}</span>
                </motion.div>
                <div className={styles.projectNameWrapper}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <motion.span
                    className={styles.projectStatus}
                    style={{ backgroundColor: project.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {project.status}
                  </motion.span>
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={styles.techTag}
                      style={{
                        borderColor: project.color,
                        color: project.color,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 1.2 + index * 0.3 + techIndex * 0.1,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: project.color,
                        color: "#000",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Footer */}
              <div className={styles.projectFooter}>
                <motion.button
                  className={styles.viewDetailsBtn}
                  style={{
                    background: `linear-gradient(45deg, ${project.color}, ${project.color}cc)`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 10px 30px ${project.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                >
                  View Details
                </motion.button>

                <div className={styles.projectLinks}>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>📂</span>
                  </motion.a>
                  {/* <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>🌐</span>
                  </motion.a> */}
                </div>
              </div>

              {/* Project Glow Effect */}
              <div
                className={styles.projectGlow}
                style={{
                  background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`,
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.cta}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p
            className={styles.ctaText}
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Interested in working together? Let's build something amazing! 🚀
          </motion.p>
        </motion.div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleSection}>
                <div
                  className={styles.modalIcon}
                  style={{
                    background: `linear-gradient(135deg, ${activeProject.color}20, ${activeProject.color}40)`,
                    border: `2px solid ${activeProject.color}30`,
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }}>
                    {activeProject.image}
                  </span>
                </div>
                <div>
                  <h2 className={styles.modalProjectName}>
                    {activeProject.name}
                  </h2>
                  <h3 className={styles.modalProjectTitle}>
                    {activeProject.title}
                  </h3>
                </div>
              </div>
              <motion.button
                className={styles.closeButton}
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className={styles.modalContent}>
              <div className={styles.modalDescription}>
                <h4>About This Project</h4>
                <p>{activeProject.fullDescription}</p>
              </div>

              <div className={styles.modalFeatures}>
                <h4>Key Features</h4>
                <div className={styles.featuresGrid}>
                  {activeProject.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className={styles.featureItem}
                      style={{ borderLeftColor: activeProject.color }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={styles.modalTechnologies}>
                <h4>Technologies Used</h4>
                <div className={styles.techGrid}>
                  {activeProject.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className={styles.modalTechTag}
                      style={{
                        backgroundColor: activeProject.color,
                        color: "#000",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={styles.modalFooter}>
              <motion.a
                href={activeProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
                style={{
                  background: `linear-gradient(45deg, ${activeProject.color}, ${activeProject.color}cc)`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📂 View Code
              </motion.a>
              {/* <motion.a
                href={activeProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
                style={{
                  background: `linear-gradient(45deg, ${activeProject.color}, ${activeProject.color}cc)`,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               >
                🌐 Live Demo
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
