"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const ExpertiseSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const gridItems = Array(6).fill(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % expertiseCards.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  const goToSlide = useCallback((index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  }, []);

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

  const SliderIndicator = ({ total, current, onSelect }: { total: number, current: number, onSelect: (index: number) => void }) => {
    return (
      <div className="flex items-center justify-center space-x-2 mt-8">
        {Array(total).fill(null).map((_, idx) => (
          <div 
            key={idx}
            onClick={() => onSelect(idx)}
            className={`${idx === current ? 'bg-white w-2 h-2 rounded-full' : 'border border-gray-400 w-2 h-2 rounded-full'} cursor-pointer`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#2A2A2A] text-[#F7F0EC] overflow-hidden">
      {/* Dotted Grid Background */}
      <div className={`absolute inset-0 ${isMobile ? 'w-full' : 'w-[123.2%] left-[-11.6%]'} grid ${isMobile ? 'grid-cols-4' : 'grid-cols-6'} border-[#F7F0EC4D] border-dashed`}>
        {gridItems.slice(0, isMobile ? 4 : 6).map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-[#F7F0EC4D] h-full"
          />
        ))}
      </div>

      {/* Top Border Row */}
      <div className={`${isMobile ? 'w-full' : 'w-[120%]'} relative border-t border-dashed border-[#F7F0EC4D]`}>
        <div className="h-20 4k:h-40"></div>
      </div>

      {!isMobile ? (
        <div className="w-[120%] relative z-10 grid grid-cols-6">
          {/* Column 1 - Empty */}
          <div className=""></div>

          {/* Column 2 - Expertise Intro */}
          <div className="flex flex-col gap-[50px] pl-8">
            <h2 className="text-7xl font-normal font-monalista">Expertise</h2>
            <p className="text-justify pr-[4.2rem] text-xl font-light">
              Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod
              Tempor Incidid
            </p>
            <button className="flex items-center transition-colors font-light text-xl">
              <span className="mr-2">←</span>
              Compress
            </button>
          </div>

          {/* Columns 3-5 - Expertise Cards with 3D Flip Effect */}
          {expertiseCards.map((card, index) => (
            <div 
              key={index}
              className="perspective-container"
              style={{ perspective: '1500px' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative w-full h-full min-h-[600px]"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  rotateY: hoveredCard === index ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Front Side - Default View */}
                <div 
                  className="absolute inset-0 flex flex-col justify-center items-center px-4 py-8"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="">
                    <span className="text-7xl font-monalista">{card.number}</span>
                  </div>
                  <h3 className="text-[2rem] font-normal font-monalista py-8">{card.title}</h3>
                  <p className="text-center font-light text-xl">{card.description}</p>
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

                {/* Back Side - Orange View */}
                <div 
                  className="absolute inset-0 flex flex-col justify-center items-center bg-[#FF6B35] text-white px-4 py-8"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="">
                    <span className="text-7xl font-monalista">{card.number}</span>
                  </div>
                  <h3 className="text-[2rem] font-normal font-monalista py-8">{card.title}</h3>
                  <p className="text-center font-light text-xl px-4">{card.description}</p>
                  <ul className="space-y-[1.25rem] pt-16">
                    {card.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center"
                      >
                        <span className="w-4 h-4 border border-white border-dotted rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Column 6 - Empty */}
          <div className="h-0"></div>
          <div className="h-20 4k:h-40"></div>
        </div>
      ) : (
        // Mobile Layout
        <div className="w-full relative z-10 px-6 transition-all duration-300">
          <div className="mb-8">
            <h2 className="text-4xl font-normal font-monalista mb-4">Expertise</h2>
            <p className="text-sm font-light">
              Lorem Ipsum Dolor Sit Amet, Onsectetur Adscing Elit, Sed Do Eiusmod
              Tempor Incidid
            </p>
            <button className="flex items-center mt-4 transition-colors font-light text-sm">
              <span className="mr-2">←</span>
              Compress
            </button>
          </div>

          <div className="flex flex-col items-center mt-8 transition-opacity duration-300 ease-in-out">
            <div className="">
              <span className="text-5xl font-monalista">{expertiseCards[currentSlide].number}</span>
            </div>
            <h3 className="text-2xl font-normal font-monalista py-4">{expertiseCards[currentSlide].title}</h3>
            <p className="text-center font-light text-sm">{expertiseCards[currentSlide].description}</p>
            <ul className="space-y-3 pt-8 w-full">
              {expertiseCards[currentSlide].skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center"
                >
                  <span className="w-3 h-3 border border-gray-400 border-dotted rounded-full mr-2"></span>
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <SliderIndicator 
            total={expertiseCards.length} 
            current={currentSlide} 
            onSelect={goToSlide} 
          />
        </div>
      )}

      {/* Bottom Border Row */}
      <div className={`${isMobile ? 'w-full' : 'w-[120%]'} relative border-t border-dashed border-[#F7F0EC4D] mt-12`}>
        <div className="h-0"></div>
      </div>
    </section>
  );
};

export default ExpertiseSection;