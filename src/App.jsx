import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedCursor from 'react-animated-cursor';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Home } from './pages/Home/Home.jsx';
import { About } from './pages/About/About.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import './index.css';

// eslint-disable-next-line react/prop-types
const PageWrapper = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: [0, 1], y:[100, 0] }}
      exit={{ opacity: 0, y: 100}}
      transition={{ type: "linear" }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.section>
  );
};

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (for SSR/Next.js compatibility)
    if (typeof window !== "undefined") {
      // Initial check
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile(); // Set initial value

      // Listen for resize events
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const location = useLocation();
  return (
    <div id='app'>
      {!isMobile && (
        <AnimatedCursor 
          innerSize={8}
          outerSize={32}
          innerScale={1}
          outerScale={1.5}
          outerAlpha={1}
          innerStyle={{ backgroundColor: 'var(--bg-light)' }}
          outerStyle={{ backgroundColor: 'var(--text-muted)', mixBlendMode: 'exclusion' }}
        />
      )}
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
            <Route path='/about' element={<PageWrapper><About /></PageWrapper>} />
            <Route path='/projects' element={<PageWrapper><Projects /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}

export default App
