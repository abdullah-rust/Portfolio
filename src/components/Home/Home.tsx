// components/Home/Home.jsx
import { motion } from "motion/react";
import { useAtom } from "jotai";
import { currentPageAtom } from "../../store";
import styles from "./Home.module.css";
import profilePic from "/image.png"; // <-- Apni image yahan add karo

const Home = () => {
  const [, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContentWrapper}>
        {/* Left Image Box */}
        <motion.div
          className={styles.heroImageBox}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.heroImageContainer}>
            <img src={profilePic} alt="Abdullah" className={styles.heroImage} />
            <div className={styles.heroImageGlow}></div>
          </div>
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          className={styles.heroTextBox}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1 className={styles.heroTitle}>
            Hello, I'm <span className={styles.gradientText}>Abdullah</span>
          </motion.h1>

          <motion.p className={styles.heroSubtitle}>
           Full Stack Developer & Passionate Creator Bringing Ideas
            to Life
          </motion.p>

          <motion.div className={styles.heroButtons}>
            <motion.button
              className={styles.primaryBtn}
              onClick={() => setCurrentPage("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.button
              className={styles.secondaryBtn}
              onClick={() => setCurrentPage("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
