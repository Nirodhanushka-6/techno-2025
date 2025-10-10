import { useEffect, useRef, useState } from "react";

export default function Exhibits() {
  const departments = [
    {
      name: "Electrical & Information Engineering",
      exhibits: [
        {
          title: "Smart Glove for Stroke Rehab",
          image: "/assets/Exibits/Smart Glove.webp",
          flyer: "/assets/Posters/Poster_Elec_4.2.png",
          description:
            "AI Integrated Hand Function Recovery System with Mobile Gaming & Smart Glove for Stroke Rehabilitation.",
        },
        {
          title: "Browz AI:Smart Web Navigator",
          image: "/assets/Exibits/Browser.webp",
          flyer: "/assets/Posters/Poster_Elec_1.2.png",
          description: "Intelligent Browser Automation System.",
        },
        {
          title: "Elf Based Drone Detector",
          image: "/assets/Exibits/Drone.webp",
          flyer: "/assets/Posters/Poster_Elec_2.2.png",
          description:
           "To develop an optimized modular steel shelter system suitable for post- disaster use in Sri Lanka",
        },
        {
          title: "AI- Driven Vehicle Safety Testbed",
          image: "/assets/Exibits/AV.webp",
          flyer: "/assets/Posters/Poster_Elec_3.2.png",
          description:
            "Development of a Scaled Testbed for Evaluating Multiple ANN Architectures.",
        },
      ],
    },
    {
      name: "Mechanical & Manufacturing Engineering",
      exhibits: [
        {
          title: "Hybrid VTOL aircraft",
          image: "/assets/Exibits/UAV.webp",
          flyer: "/assets/Posters/Poster_Mechanical_2.2.png",
          description: "Modelling and optimal control of a Hybrid VTOL UAV.",
        },
        {
          title: "Zero-Power Magnetic Suspension System",
          image: "/assets/Exibits/EMController.webp",
          flyer: "/assets/Posters/Poster_Mechanical_1.2.png",
          description:
            "Development of robust controller for 1-DOF magnetic suspension system.",
        },
        {
          title: "CeylonSURGE",
          image: "/assets/Exibits/samudra gen.webp",
          flyer: "/assets/Posters/Poster_Mechanical_3.2.png",
          description:
            "Small-scale wave energy converter using Sri Lankan wave conditions.",
        },
      ],
    },
    {
      name: "Civil & Environmental Engineering",
      exhibits: [
        {
          title: "Smart Modular Tourist Capsule",
          image: "/assets/Exibits/capsul.webp",
          flyer: "/assets/Posters/Poster_Civil_1.2.png",
          description: "Module Smart Capsule.",
        },
        {
          title: "Ballest Breakage Behavior Study",
          image: "/assets/Exibits/railway.webp",
          flyer: "/assets/Posters/Poster_Civil_3.2.png",
          description:
            "Effect of particle shape on breakage characteristics of railway ballast aggregates.",
        },
        {
          title: "Rapid Deploy Disaster Shelter",
          image: "/assets/Exibits/shelter.webp",
          flyer: "/assets/Posters/Poster_Civil_2.2.png",
          description: "To develop an optimized modular steel shelter system suitable for post- disaster use in Sri Lanka",
        },
      ],
    },
    {
      name: "Marine Engineering and Naval Architecture",
      exhibits: [
        {
          title: "Coral Monitoring Vehicle",
          image: "/assets/Exibits/coral.webp",
          flyer: "/assets/Posters/Poster_Marine_2.2.png",
          description:
            "Development of Underwater ROV for Coral Garden Monitoring.",
        },
        {
          title: "Wing-In-Ground Craft",
          image: "/assets/Exibits/Wing.webp",
          flyer: "/assets/Posters/Poster_Marine_1.2.png",
          description:
            "Design of a small-scale remote-controlled Wing-In-Ground Craft.",
        },
      ],
    },
  ];

  const openFlyer = (flyer) => {
    window.open(flyer, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="exhibits"
      className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-[6px] md:px-8">
        <h2 className="text-4xl md:text-4xl font-bold text-red-800 text-center mb-4 drop-shadow-md">
          Explore Our Exhibits
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Learn about innovative projects from each department
        </p>

        {departments.map((dept, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-red-700 mb-8 text-left">
              {dept.name}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 will-change-transform">
              {dept.exhibits.map((exhibit, idx) => (
                <OptimizedExhibitCard
                  key={idx}
                  exhibit={exhibit}
                  openFlyer={openFlyer}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* OPTIMIZED EXHIBIT CARD COMPONENT */
function OptimizedExhibitCard({ exhibit, openFlyer }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => openFlyer(exhibit.flyer)}
      className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer group will-change-transform"
    >
      {loaded ? (
        <>
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            <img
              src={exhibit.image}
              alt={exhibit.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-300">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View Flyer
              </span>
            </div>
          </div>
          <div className="p-5 flex flex-col items-center text-center">
            <h4 className="text-lg md:text-xl font-semibold text-red-700 mb-2">
              {exhibit.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {exhibit.description}
            </p>
          </div>
        </>
      ) : (
        <div className="h-64 bg-gray-200 animate-pulse rounded-xl" />
      )}
    </div>
  );
}
