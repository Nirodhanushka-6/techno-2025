import { useEffect } from "react";

export default function Mechanical() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold  text-red-800 mb-6">
        Department of Mechanical and Manufacturing Engineering 
      </h1>

      {/* Main Description */}
      <p className="max-w-5xl text-justify text-gray-700 text-lg leading-relaxed mb-10">
        Department of Mechanical and Manufacturing Engineering is one of the pioneering departments of the Faculty of Engineering 
        which commenced in the Year 2000. The department presently conducts BSc. Honors Engineering degree program in Mechanical and 
        Manufacturing Engineering (MME). 
      </p>

      {/* Main Image */}
      <div className="w-full max-w-5xl mb-8">
        <img
          src="/assets/mech_main.jpg"
          alt="Mechanical Engineering Department"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Sub Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        <img
          src="/assets/mech1.jpg"
          alt="Photo 1"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/mech2.jpg"
          alt="Photo 2"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/mech3.jpg"
          alt="Photo 3"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Extra Description */}
      <p className="max-w-5xl text-justify text-gray-600 text-lg mb-8">
        The degree program received the IESL Recognition status from its inception and has been fully accredited since 2010 by IESL. 
        In year 2018, a comprehensive curriculum revision was carried out in the areas of Materials, Manufacturing, Applied Mechanics, 
        Control and Mechatronics, and, Thermal and Fluid Engineering to accommodate the Washington Accord Accreditation needs to achieve 
        12 programme outcomes.
      </p>

      {/* Button */}
      <a
        href="https://www.eng.ruh.ac.lk/dmme/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Visit Department Website
      </a>
    </div>
  );
}
