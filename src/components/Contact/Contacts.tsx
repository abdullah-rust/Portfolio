import { motion } from "motion/react";
import { useState } from "react";
import styles from "./Contact.module.css";
import { sendEmail } from "../../others/EmailSent";
import instagram from "/instagram.png";
import github from "/github.png";
import linkdin from "/linkedin.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    const response = await sendEmail({ name, email, subject, message });

    setIsSubmitting(false);

    if (response.success) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert("Failed to send email. Please try again.");
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "ariaz7556@gmail.com",
      link: "mailto:ariaz7556@gmail.com",
      color: "#ff6b00",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+92 3167651584",
      link: "tel:+923167651584",
      color: "#10b981",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Hafizabad, pakistan",
      link: "#",
      color: "#6366f1",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/abdullah-riaz-4092462b1",
      link: "https://www.linkedin.com/in/abdullah-riaz-4092462b1/",
      color: "#0ea5e9",
    },
  ];

  const socialLinks = [
    {
      icon: github,
      name: "GitHub",
      url: "https://github.com/abdullah-rust",
      color: "#333",
    },
    {
      icon: linkdin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdullah-riaz-4092462b1/",
      color: "#0077b5",
    },
    {
      icon: instagram,
      name: "Instagram",
      url: "https://www.instagram.com/abdullah_riaz_____/",
      color: "#e4405f",
    },
  ];

  return (
    <motion.section
      className={styles.contact}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingMessage}>💬</div>
        <div className={styles.floatingMessage}>📧</div>
        <div className={styles.floatingMessage}>📱</div>
        <div className={styles.floatingMessage}>🚀</div>
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
            📞 Get In Touch
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Let's <span className={styles.gradientText}>Connect</span> & Create
            Something Amazing
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind? Let's discuss how we can turn your ideas
            into reality
          </motion.p>
        </motion.div>

        <div className={styles.content}>
          {/* Left Side - Contact Info */}
          <motion.div
            className={styles.contactInfo}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.h3
              className={styles.infoTitle}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Let's Start a Conversation
            </motion.h3>

            <motion.p
              className={styles.infoDescription}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              I'm always excited to hear about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </motion.p>

            {/* Contact Methods */}
            <div className={styles.contactMethods}>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  className={styles.contactMethod}
                  style={
                    { "--method-color": method.color } as React.CSSProperties
                  }
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{
                    x: 10,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <div
                    className={styles.methodIcon}
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{method.icon}</span>
                  </div>
                  <div className={styles.methodInfo}>
                    <div className={styles.methodTitle}>{method.title}</div>
                    <div className={styles.methodValue}>{method.value}</div>
                  </div>
                  <div className={styles.methodArrow}>→</div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className={styles.socialSection}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.7 }}
            >
              <h4 className={styles.socialTitle}>Follow Me On</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    style={
                      { "--social-color": social.color } as React.CSSProperties
                    }
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 1.9 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className={styles.contactForm}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className={styles.form}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className={styles.successIcon}>✅</div>
                  <div className={styles.successText}>
                    <h4>Message Sent Successfully!</h4>
                    <p>
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                </motion.div>
              )}

              <div className={styles.formRow}>
                <motion.div
                  className={styles.formGroup}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <label htmlFor="name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div
                  className={styles.formGroup}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Enter your email address"
                  />
                </motion.div>
              </div>

              <motion.div
                className={styles.formGroup}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <label htmlFor="message" className={styles.label}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  required
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 10px 30px rgba(255, 107, 0, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={styles.spinner}
                    >
                      ⏳
                    </motion.span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <motion.span
                      className={styles.buttonIcon}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      🚀
                    </motion.span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className={styles.footerNote}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <motion.p
            className={styles.footerText}
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Thank you for visiting my portfolio! Let's create something
            extraordinary together! ✨
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
