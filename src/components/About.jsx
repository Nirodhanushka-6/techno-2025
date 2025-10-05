export default function About() {
  return (
    <section id="about" className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 md:px-6 flex flex-col md:flex-row items-center gap-12 ">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 md:pr-12">
          <h2 className="text-4xl md:text-4xl font-bold text-red-800 drop-shadow-md">
            We are Ruhuna Engineering
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            The <span className="font-semibold">Techno Exhibition 2025</span> is a celebration of 
            engineering innovation and technical brilliance. Organized by the Faculty of Engineering, 
            University of Ruhuna, this exhibition showcases cutting-edge projects, research, and creative 
            problem-solving by our talented students.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Visitors can experience interactive displays, engage with innovative technologies, and witness 
            the future of engineering in action. This event bridges the gap between academic excellence and 
            real-world application, inspiring creativity and collaboration.
          </p>
          <a
            href="#gallery"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-transform transform hover:scale-102 "
          >
            Explore Gallery
          </a>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 relative group overflow-hidden rounded-xl shadow-xl h-80 md:h-108 ">
          <img
            src="/assets/uni (3).jpg"
            alt="Exhibition"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
}
