// components/Navigation/Navigation.jsx
import { useAtom } from "jotai";
import { currentPageAtom, pages } from "../../store";
import { motion } from "motion/react"; // ✅ Naya import
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        {pages.map((page) => (
          <motion.button
            key={page}
            className={`${styles.navItem} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => setCurrentPage(page)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: page.length * 0.1 }}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
