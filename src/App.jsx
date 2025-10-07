import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rextro from "./components/Rextro";
import Departments from "./components/Departments";
import Exhibits from "./components/Exhibits";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";

// Department pages
import Civil from "./pages/Civil.jsx";
import Mechanical from "./pages/Mechanical.jsx";
import Electrical from "./pages/Electrical.jsx";
import Marine from "./pages/Marine.jsx";
import Interdisciplinary from "./pages/Interdisciplinary.jsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="px-0 min-h-screen flex flex-col">
      <Cursor />
      <Loader />
      <Navbar />

      <div className="pt-20 px-2 md:px-0">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Departments />
                <Exhibits />
                <Gallery />
                <Rextro />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/civil" element={<Civil />} />
          <Route path="/mechanical" element={<Mechanical />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/marine" element={<Marine />} />
          <Route path="/interdisciplinary" element={<Interdisciplinary />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
