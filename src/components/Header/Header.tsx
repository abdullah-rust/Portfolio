import { useAtom } from "jotai";
import { currentPageAtom, pages } from "../../store";
import { motion } from "motion/react";
import styles from "./Header.module.css";

const Header = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className={styles.container}>
        {/* Logo Section */}
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className={styles.logoText}>Abdullah Riaz</span>
          <div className={styles.logoDot}></div>
        </motion.div>

        {/* Navigation Menu */}
        <nav className={styles.nav}>
          {pages.map((page, index) => (
            <motion.div
              key={page}
              className={styles.navItemWrapper}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className={`${styles.navLink} ${
                  currentPage === page ? styles.active : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}

                {/* Active Indicator */}
                {currentPage === page && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Hover Effect */}
              <motion.div
                className={styles.hoverEffect}
                whileHover={{ width: "100%" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </motion.div>
          ))}
        </nav>

        {/* Theme Toggle & CTA Button */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className={styles.ctaButton}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(45deg, #ff6b00, #ff8c00, #ffa500)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage("contact")}
          >
            <span>Let's Talk</span>
            <motion.div
              className={styles.buttonIcon}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
