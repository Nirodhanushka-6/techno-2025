import { useEffect } from "react";

export default function Interdisciplinary() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold  text-red-800 mb-6">
        Department of Interdisciplinary Studies 
      </h1>

      {/* Main Description */}
      <p className="max-w-5xl text-justify text-gray-700 text-lg leading-relaxed mb-10">
        Out of the five departments at the Faculty of Engineering, which was established in July, 1999 at Galle, the Department of 
        Interdisciplinary Studies is the Department, which cater for the managerial skill development while supporting the major streams 
        by providing the necessary background knowledge in Mathematical areas.The Department of Interdisciplinary Studies (DIS) has mainly 
        designed its curriculum to bridge the gap between the student’s technical skills and personal development. The Department offers courses 
        for all students regardless of the discipline. It facilitates all other departments by providing the basic skills required to follow their 
        degree programs. Further, the department provides opportunities to enhance their knowledge in mathematics, management, economics, social science, and personal development under the following subdivisions.
      </p>

      {/* Main Image */}
      <div className="w-full max-w-5xl mb-8">
        <img
          src="/assets/department/is.jpg"
          alt="Interdisiplinary Department"
          className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Sub Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
        <img
          src="/assets/department/is1.jpg"
          alt="Photo 1"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/department/is2.jpg"
          alt="Photo 2"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
        <img
          src="/assets/department/is3.jpg"
          alt="Photo 3"
          className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Extra Description */}
      <p className="max-w-5xl text-justify text-gray-600 text-lg mb-8">
        The department staff and I believe you all are very fortunate to have these kinds of multidisciplinary courses and sophisticated 
        facilities in your learning environment and expect to get the maximum benefit from that. We wish you all the courage to become a 
        competent engineer for the country.
      </p>

      {/* Button */}
      <a
        href="https://www.eng.ruh.ac.lk/dis/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        Visit Department Website
      </a>
    </div>
  );
}
