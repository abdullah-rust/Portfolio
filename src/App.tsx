// App.jsx
import { useAtom } from "jotai";
import { currentPageAtom } from "./store";
import { AnimatePresence, motion } from "motion/react";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contacts";

import "./App.css";

function App() {
  const [currentPage] = useAtom(currentPageAtom);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app" style={{ overflowX: "hidden", width: "100%" }}>
      <Navigation />
      <Header />

      <main style={{ width: "100%" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
