export default function About() {
  return (
    <section id="about" className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 ">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 md:pr-12">
          <h2 className="text-4xl md:text-4xl font-bold text-red-800 drop-shadow-md">
            We are Ruhuna Engineering
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            The <span className="font-semibold">Techno Exhibition 2025</span> is Sri Lanka’s 
            largest engineering exhibition, celebrating innovation and technical excellence. 
            Representing the <span className="font-semibold">Faculty of Engineering, University of Ruhuna</span>, 
            our students proudly showcase cutting-edge projects, research, and creative solutions that reflect 
            the spirit of engineering innovation.
          </p>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Visitors can explore interactive displays and innovative technologies presented by 
            the <span className="font-semibold">Faculty of Engineering, University of 
            Ruhuna</span> at <span className="font-semibold">Techno Exhibition 2025</span>, showcasing how 
            academic excellence drives real-world innovation.
          </p>

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
