import React from "react";

const ExpertiseSection = () => {
  const gridItems = Array(6).fill(null);

  const expertiseCards = [
    {
      number: "01",
      title: "Tech Art",
      description:
        "Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod Tempor Incidid",
      skills: ["Unity C#", "Unreal Blueprints", "Three.Js"],
    },
    {
      number: "02",
      title: "Tech Art",
      description:
        "Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod Tempor Incidid",
      skills: ["Unity C#", "Unreal Blueprints", "Three.Js"],
    },
    {
      number: "03",
      title: "Tech Art",
      description:
        "Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod Tempor Incidid",
      skills: ["Unity C#", "Unreal Blueprints", "Three.Js"],
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#2A2A2A] text-white overflow-hidden">
      {/* Dotted Grid Background with exactly 6 columns */}
      <div className="absolute inset-0 w-[120%] left-[-10%] grid grid-cols-6 border-gray-300 border-dashed">
        {gridItems.map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-gray-700 h-full"
          />
        ))}
      </div>

      {/* Top Border Row */}
      <div className="w-[120%] relative border-t border-dashed border-gray-700">
        <div className="h-20"></div>
      </div>

      {/* Main Content with 6 column grid */}
      <div className="w-[120%] relative z-10 grid grid-cols-6">
        {/* Column 1 - Empty */}
        <div className=""></div>

        {/* Column 2 - Expertise Intro */}
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mb-6">Expertise</h2>
          <p className="text-gray-400 mb-8">
            Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod
            Tempor Incidid
          </p>
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="mr-2">←</span>
            Compress
          </button>
        </div>

        {/* Columns 3-5 - Expertise Cards */}
        {expertiseCards.map((card, index) => (
          <div key={index} className="flex flex-col">
            <div className="mb-6">
              <span className="text-4xl font-bold">{card.number}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-gray-400 mb-8">{card.description}</p>
            <ul className="space-y-4">
              {card.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center text-gray-400"
                >
                  <span className="w-4 h-4 border border-gray-400 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 6 - Empty */}
        <div className=""></div>
      </div>

      {/* Bottom Border Row */}
      <div className="w-[120%] relative border-t border-dashed border-gray-700">
        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
