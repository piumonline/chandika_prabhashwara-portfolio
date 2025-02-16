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
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#2A2A2A] text-[#F7F0EC] overflow-hidden">
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
        <div className="flex flex-col gap-[50px] pl-8">
          <h2 className="text-7xl font-normal font-monalista">Expertise</h2>
          <p className=" text-justify pr-[4.2rem] text-xl font-light">
            Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod
            Tempor Incidid
          </p>
          <button className="flex items-center transition-colors font-light text-xl">
            <span className="mr-2">←</span>
            Compress
          </button>
        </div>

        {/* Columns 3-5 - Expertise Cards */}
        {expertiseCards.map((card, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div className="">
              <span className=" text-7xl font-monalista">{card.number}</span>
            </div>
            <h3 className=" text-[2rem] font-normal font-monalista py-8">{card.title}</h3>
            <p className=" text-center font-light text-xl">{card.description}</p>
            <ul className="space-y-[1.25rem] pt-16">
              {card.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center"
                >
                  <span className="w-4 h-4 border border-gray-400 border-dotted rounded-full mr-3"></span>
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
