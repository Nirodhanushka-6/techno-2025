import { useEffect } from "react";

export default function Electrical() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold  text-red-800 mb-6">
        Department of the Electrical and Information Engineering
      </h1>

      {/* Main Description */}
      <p className="max-w-5xl text-justify text-gray-700 text-lg leading-relaxed mb-10">
        The Department of Electrical and Information Engineering (DEIE) at the University of Ruhuna, established in 2000 in Hapugala, 
        Galle, is a leading academic unit of the Faculty of Engineering. It has produced over 850 graduates who now serve in industry 
        and academia worldwide. The department offers a fully accredited undergraduate program covering Electric Power, Electronics, 
        Telecommunications, and Software Engineering, supported by modern labs in areas such as power systems, renewable energy, robotics, 
        and communication
      </p>

      {/* Main Image */}
      <div className="w-full max-w-5xl mb-8">
        <img
          src="/assets/department/elec.jpg"
          alt="Electrical Engineering Department"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Sub Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        <img
          src="/assets/department/elec1.jpg"
          alt="Photo 1"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/department/elec2.jpg"
          alt="Photo 2"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/department/elec3.jpg"
          alt="Photo 3"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Extra Description */}
      <p className="max-w-5xl text-justify text-gray-600 text-lg mb-8">
        In addition to undergraduate education, DEIE contributes to research and postgraduate studies, 
        offering M.Phil. programs and preparing to launch a Master’s in Telecommunication and Information Engineering. 
        A Computer Engineering specialization was introduced in 2019/2020, supported by a new seven-story laboratory complex.
      </p>

      {/* Button */}
      <a
        href="https://www.eng.ruh.ac.lk/deie/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Visit Department Website
      </a>
    </div>
  );
}
