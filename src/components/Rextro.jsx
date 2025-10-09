export default function About() {
  return (
    <section id="about" className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Content */}
        <div className="w-full md:w-1/2 relative group overflow-hidden rounded-xl shadow-xl h-80 md:h-108">
          <img
            src="/assets/Rextro.jpg"
            alt="Exhibition"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 md:pr-12">
          <h2 className="text-4xl md:text-4xl font-bold text-red-800 drop-shadow-md">
            Join with us at ReXtro
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
            REXTRO — the grand celebration of innovation and excellence — marks the Silver Jubilee of the Faculty of Engineering, 
            University of Ruhuna. This prestigious event brings together students, alumni, industry partners, and the public to showcase 
            two and a half decades of engineering brilliance, creativity, and technological advancement.Through exhibitions, project 
            demonstrations, and interactive experiences, REXTRO highlights the ingenuity of Ruhuna engineers who continue to shape the 
            future of technology and sustainable development in Sri Lanka.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
           Join us as we celebrate 25 years of engineering excellence and look forward to the next generation of innovators.
          </p>
          <a
            href="https://silver-jubilee.eng.ruh.ac.lk/"
            target="_blank"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-transform transform hover:scale-102"
          >
            Visit Rextro Website
          </a>
        </div>
      </div>
    </section>
  );
}
