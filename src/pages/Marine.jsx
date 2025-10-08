import { useEffect } from "react";

export default function Marine() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold  text-red-800 mb-6">
        Department of Marine Engineering and Naval Architecture
      </h1>

      {/* Main Description */}
      <p className="max-w-5xl text-justify text-gray-700 text-lg leading-relaxed mb-10">
        The Bachelor of Science in Engineering Honors (B.Sc.EngHons) specialization in Marine engineering and Naval Architecture is a 
        newly offered degree programme by the Department of Marine Engineering and Naval Architecture (DMENA).
      </p>

      {/* Main Image */}
      <div className="w-full max-w-5xl mb-8">
        <img
          src="/assets/elec_main.jpg"
          alt="Marine Engineering Department"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Sub Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        <img
          src="/assets/elec1.jpg"
          alt="Photo 1"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/elec2.jpg"
          alt="Photo 2"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/elec3.jpg"
          alt="Photo 3"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Extra Description */}
      <p className="max-w-5xl text-justify text-gray-600 text-lg mb-8">
        Afterwards, a limited number of students are selected in to the MENA specialization course based on the students’ preference and 
        their academic performance in the first year. Also to be eligible for this course, the students must pass an interview and a medical 
        test as well. 
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
