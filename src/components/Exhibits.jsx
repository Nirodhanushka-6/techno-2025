export default function Exhibits() {
  const departments = [
    {
      name: "Electrical& Electronic Engineering",
      exhibits: [
        {
          title: "AI Smart Glove",
          image: "/assets/smart glove.jpg",
          description:
            "AI Integrated Hand Function Recovery System with Mobile Gaming & Smart Glove for Stroke Rehabilitation.",
        },
        {
          title: "Intelligent Browser",
          image: "/assets/Browser.jpg",
          description: "Intelligent Browser Automation System.",
        },
        {
          title: "Case Study",
          image: "/assets/case study.jpg",
          description:
            "Detection of Nutrient Levels for Plantations via Machine Learning.",
        },
        {
          title: "Enhancing AV Safety and Efficiency",
          image: "/assets/AV.png",
          description:
            "Development of a Scaled Testbed for Evaluating Multiple ANN Architectures.",
        },
        {
          title: "AdSmart",
          image: "/assets/Ads.jpg",
          description:
            "Next-Gen Advertisement Platform: Precision Targeting for Relevant Audiences.",
        },
        {
          title: "Communication",
          image: "/assets/Coomunication.jpg",
          description:
            "Joint communication and sensing at ELF using AI enabled radio receivers.",
        },
      ],
    },
    {
      name: "Mechanical Engineering",
      exhibits: [
        {
          title: "Hybrid VTOL UAV",
          image: "/assets/UAV.jpg",
          description: "Modelling and optimal control of a Hybrid VTOL UAV.",
        },
        {
          title: "Control Model",
          image: "/assets/EM suspension.jpg",
          description:
            "Development of robust controller for 1-DOF magnetic suspension system.",
        },
        {
          title: "Samudra Gen",
          image: "/assets/samudra gen.jpg",
          description:
            "Small-scale wave energy converter using Sri Lankan wave conditions.",
        },
      ],
    },
    {
      name: "Civil Engineering",
      exhibits: [
        {
          title: "Smart Capsule",
          image: "/assets/capsul.jpg",
          description: "Module Smart Capsule.",
        },
        {
          title: "Railway Tracks",
          image: "/assets/railway.jpg",
          description:
            "Effect of particle shape on breakage characteristics of railway ballast aggregates.",
        },
        {
          title: "Autoklub",
          image: "/assets/autoklub.jpg",
          description: "A detailed 3D model of the Autoklub Headquarters.",
        },
      ],
    },
    {
      name: "Marine Engineering",
      exhibits: [
        {
          title: "Coral Garden Monitoring",
          image: "/assets/coral.webp",
          description:
            "Development of Underwater ROV for Coral Garden Monitoring.",
        },
        {
          title: "Project 2",
          image: "/assets/project.jpg",
          description: "Marine project 2 showcase.",
        },
        {
          title: "RC Wing-In-Ground",
          image: "/assets/Wing.jpeg",
          description:
            "Design of a small-scale remote-controlled Wing-In-Ground Craft.",
        },
        {
          title: "Project 4",
          image: "/assets/project.jpg",
          description: "Marine Engineering Project 4.",
        },
      ],
    },
  ];

  return (
    <section id="exhibits" className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {dept.exhibits.map((exhibit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Image (Top Half) */}
                  <div className="h-48 w-full">
                    <img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content (Bottom Half) */}
                  <div className="p-6 flex flex-col items-center text-center">
                    <h4 className="text-lg md:text-xl font-semibold text-red-700 mb-2">
                      {exhibit.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {exhibit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
