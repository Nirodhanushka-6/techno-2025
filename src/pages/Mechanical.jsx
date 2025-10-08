import { useEffect } from "react";

export default function Mechanical() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
        Department of Civil & Environmental Engineering
      </h1>

      {/* Main Description */}
      <p className="max-w-3xl text-gray-700 text-lg leading-relaxed mb-10">
        Explore sustainable designs, innovative water systems, and modern infrastructure
        projects developed by our talented students and faculty. Civil Engineering at
        Ruhuna focuses on building a safer and more resilient future.
      </p>

      {/* Main Image */}
      <div className="w-full max-w-5xl mb-8">
        <img
          src="/assets/civil-main.jpg"
          alt="Civil Engineering Department"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Sub Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mb-10">
        <img
          src="/assets/civil-sub1.jpg"
          alt="Project 1"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/civil-sub2.jpg"
          alt="Project 2"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/civil-sub3.jpg"
          alt="Project 3"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Extra Description */}
      <p className="max-w-2xl text-gray-600 text-base mb-8">
        Our students actively engage in real-world engineering challenges—ranging from
        water management to earthquake-resistant construction—preparing them to make a
        meaningful impact on society.
      </p>

      {/* Button */}
      <a
        href="https://www.ruh.ac.lk/dept/civil/" // Replace with actual department URL
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Visit Department Website
      </a>
    </div>
  );
}
