import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    // 👇 Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.8, // Adjust for slower or faster scroll (2.0 = slower)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing curve
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="px-0 min-h-screen flex flex-col">
      {/* 🧠 Custom Cursor */}
      <Cursor />

      {/* ⏳ Loader */}
      <Loader />

      {/* 📌 Fixed Navbar */}
      <Navbar />

      {/* 🧩 Main Content Wrapper */}
      <div className="pt-20 px-2 md:px-0">
        <Hero />
        <About />
        <Rextro />
        <Departments />
        <Exhibits />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
