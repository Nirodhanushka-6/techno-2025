import { Link } from "react-router-dom";

export default function Departments() {
  const departments = [
    {
      name: "Civil & Environmental Engineering",
      image: "/assets/civil eng department.jpg",
      description: "Designing sustainable infrastructure and resilient environments through innovation and technology.",
      path: "/civil",
    },
    {
      name: "Mechanical & Manufacturing Engineering",
      image: "/assets/mech department.jpg",
      description: "Advancing mechanical design, automation, and manufacturing solutions for modern industries.",
      path: "/mechanical",
    },
    {
      name: "Electrical & Information Engineering",
      image: "/assets/elec eng department.jpg",
      description: "Developing intelligent systems, IoT innovations, and cutting-edge electronic technologies.",
      path: "/electrical",
    },
    {
      name: "Marine Engineering and Naval Architecture",
      image: "/assets/marine eng department.jpg",
      description: "Exploring ocean technologies, ship design, and marine systems for sustainable maritime progress.",
      path: "/marine",
    },
    {
      name: "Interdisciplinary Studies",
      image: "/assets/IS Department.jpg", 
      description: "Bridging multiple engineering fields to create integrated, real-world technological solutions.",
      path: "/interdisciplinary",
    }
  ];

  
  const degreePrograms = [
    "BSc Eng (Hons) in Civil and Environmental Engineering",
    "BSc Eng (Hons) in Mechanical and Manufacturing Engineering",
    "BSc Eng (Hons) in Electrical and Information Engineering",
    "BSc Eng (Hons) in Computer Engineering",
    "BSc Eng (Hons) in Marine Engineering and Naval Architecture "
  ];

  return (
    <section
      id="departments"
      className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 text-center mb-12 drop-shadow-md">
        Our Departments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 px-6 md:px-32 max-w-full mx-auto">
        {departments.map((dept, idx) => (
          <Link key={idx} to={dept.path}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="w-full h-40 md:w-full md:h-60 p-2">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-xl md:text-lg font-semibold text-red-700 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {dept.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Degree Programs Section */}
      <div className="mt-24 max-w-full mx-auto px-6 md:px-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-10 drop-shadow-md">
          Our Degree Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left md:text-justify">
          {/* Left Text Block */}
          <div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We offer a range of undergraduate degree programs designed to equip students 
              with the skills and knowledge needed to excel in the engineering field. 
              Our programs emphasize <span className="font-semibold text-red-800">practical experience</span>, 
              <span className="font-semibold text-red-800"> innovation</span>, and 
              <span className="font-semibold text-red-800"> interdisciplinary collaboration</span> — 
              preparing graduates to shape the future of technology and sustainable development.
            </p>
          </div>

          {/* Right Degree List */}
          <ul className="space-y-4">
            {degreePrograms.map((deg, idx) => (
              <li
                key={idx}
                className="bg-white rounded-xl shadow-md p-5 text-gray-700 font-medium text-center md:text-left border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                🎓 {deg}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="https://www.eng.ruh.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.7)] transition-transform transform hover:scale-102"
          >
            Visit Faculty Website
          </a>
        </div>
      </div>
    </section>
  );
}
