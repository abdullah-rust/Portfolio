// components/About/About.jsx
import { motion } from "motion/react";
import styles from "./About.module.css";
import profilePic from "/image.png"; // ✅ Apna real image yahan import karo

const About = () => {
  const stats = [
    { number: "3", label: "Projects Completed" },
    { number: "1", label: "Year Experience" },
  ];

  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column - Image & Personal Info */}
          <motion.div
            className={styles.leftColumn}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image */}
            <motion.div
              className={styles.imageContainer}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profilePic}
                alt="Abdullah Riaz"
                className={styles.profileImage}
              />

              <div className={styles.imageGlow}></div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              className={styles.personalInfo}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className={styles.infoTitle}>Personal Info</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Name:</span>
                  <span className={styles.infoValue}>Abdullah Riaz</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span className={styles.infoValue}>ariaz7556@gmail.com</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span className={styles.infoValue}>
                    Hafizabad,Punjab,Pakistan
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Status:</span>
                  <span className={styles.infoValue}>
                    Available for Backend Projects
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className={styles.rightColumn}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Title Section */}
            <motion.div className={styles.titleSection}>
              <motion.span
                className={styles.sectionBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                About Me
              </motion.span>
              <motion.h1
                className={styles.mainTitle}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Building Robust{" "}
                <span className={styles.gradientText}>Backend Systems</span>{" "}
                That Scale
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.div
              className={styles.description}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>
                Hi! I'm a self-taught <strong>Backend Developer</strong> with a
                focus on building scalable and efficient server-side
                applications. I work with databases, APIs, and cloud deployments
                to make sure the systems perform reliably under load.
              </p>
              <p>
                My goal is to write clean, maintainable code and create backend
                architectures that not only work but are optimized for
                performance and scalability.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className={styles.statsGrid}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
