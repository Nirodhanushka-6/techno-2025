import { useEffect } from "react";

export default function Civil() {
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
      <p className="max-w-5xl text-justify text-gray-700 text-lg leading-relaxed mb-10">
        The Department of Civil & Environmental Engineering (DCEE) at the University of Ruhuna, 
        established in 2000, is a leading centre of excellence in engineering education and research in Sri Lanka.
        The department provides internationally recognized academic programs and innovative research opportunities 
        that address the growing needs of society in infrastructure, environmental sustainability, and technology advancement.
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        <img
          src="/assets/civil1.jpg"
          alt="Photo 1"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/civil-sub2.jpg"
          alt="Photo 2"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/civil-sub3.jpg"
          alt="Photo 3"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Extra Description */}
      <p className="max-w-2xl text-gray-600 text-lg mb-8">
        Graduates have career opportunities in civil construction, structural engineering, geotechnics, water resources, 
        environmental consultancy, infrastructure management, and academia.
      </p>

      {/* Button */}
      <a
        href="https://www.eng.ruh.ac.lk/dcee/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Visit Department Website
      </a>
    </div>
  );
}
