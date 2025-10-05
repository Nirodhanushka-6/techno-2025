import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "assets/images/hero1.jpg",
    "assets/images/hero2.jpg",
    "assets/images/hero3.jpg",
    "assets/images/hero4.jpg",
    "assets/images/hero5.jpg",
    "assets/images/hero6.jpg",
    "assets/images/hero7.jpg",
    "assets/images/hero8.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden -mt-5"
    >
      {/* Background Slideshow */}
      {images.map((img, index) => (
      <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      />
    ))}


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg  ">
          Techno Exhibition 2025
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-3">
          Faculty of Engineering - University of Ruhuna
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Discover innovation, creativity, and engineering excellence.
        </p>
        <a
        href="#about"
        className="relative inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white rounded-xl bg-red-800 shadow-[0_8px_20px_rgb(239,68,68,0.6)] transition-all duration-300 hover:scale-102 hover:bg-red-700"
        >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </a>



      </div>
    </header>
  );
}
