import { motion } from "motion/react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 70, color: "#61DAFB" },
        { name: "JavaScript", level: 80, color: "#F7DF1E" },
        { name: "TypeScript", level: 80, color: "#3178C6" },
        { name: "Motion", level: 40, color: "#c6bc31ff" },
        { name: "Jotai", level: 60, color: "#ffffffff" },
        { name: "Module.css", level: 80, color: "#e4119dff" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 50, color: "#339933" },
        { name: "Express.js", level: 80, color: "#000000" },
        { name: "Rust/Axum", level: 50, color: "#DEA584" },
        { name: "REST APIs", level: 80, color: "#FF6B6B" },
        { name: "Socket.IO", level: 50, color: "#04ebb1ff" },
      ],
    },
    {
      category: "Databases & Cache",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 70, color: "#47A248" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Redis", level: 50, color: "#DC382D" },
        { name: "MinIO", level: 70, color: "#FF9900" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Docker", level: 60, color: "#2496ED" },
        { name: "Caddy", level: 50, color: "#00A878" },
        { name: "Linux", level: 50, color: "#FCC624" },
        { name: "Git/GitHub", level: 70, color: "#F05032" },
        { name: "VS Code", level: 96, color: "#007ACC" },
      ],
    },
  ];

  const achievements = [
    { number: "3+", text: "Projects Completed", icon: "🚀" },
    { number: "1+", text: "Years Experience", icon: "⏳" },
    { number: "100%", text: "Code Reliability", icon: "💻" },
    { number: "∞", text: "Coffee Cups", icon: "☕" },
  ];

  return (
    <motion.section
      className={styles.skills}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingCode}>&lt;div&gt;</div>
        <div className={styles.floatingCode}>&#123; &#125;</div>
        <div className={styles.floatingCode}>console.log</div>
        <div className={styles.floatingCode}>const</div>
        <div className={styles.floatingCode}>function</div>
        <div className={styles.floatingCode}>return</div>
      </div>

      <div className={styles.container}>
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
            🚀 Skills & Technologies
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My <span className={styles.gradientText}>Tech Stack</span>
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tools and technologies I use to build robust backend systems
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.achievements}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.text}
              className={styles.achievementCard}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className={styles.achievementIcon}>{achievement.icon}</div>
              <div className={styles.achievementNumber}>
                {achievement.number}
              </div>
              <div className={styles.achievementText}>{achievement.text}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.categories}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className={styles.category}
              initial={{ x: categoryIndex % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + categoryIndex * 0.2 }}
            >
              <motion.div
                className={styles.categoryHeader}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.categoryLine}></div>
              </motion.div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.2 + categoryIndex * 0.3 + skillIndex * 0.1,
                    }}
                  >
                    <div className={styles.skillHeader}>
                      <div className={styles.skillNameWrapper}>
                        <span
                          className={styles.skillColorDot}
                          style={{ backgroundColor: skill.color }}
                        ></span>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillPercent}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: `0 0 20px ${skill.color}40`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: 1.5 + categoryIndex * 0.3 + skillIndex * 0.1,
                          duration: 1.5,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileInView={{ width: `${skill.level}%` }}
                      >
                        <div className={styles.progressGlow}></div>
                      </motion.div>
                    </div>

                    <div className={styles.skillLevel}>
                      {[20, 40, 60, 80, 90].map((lvl, i) => (
                        <div
                          key={i}
                          className={`${styles.levelDot} ${
                            skill.level >= lvl ? styles.active : ""
                          }`}
                          style={{
                            backgroundColor:
                              skill.level >= lvl ? skill.color : "#333",
                          }}
                        ></div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
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
            Ready to build scalable backend systems? Let's do it together! ⚡
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
