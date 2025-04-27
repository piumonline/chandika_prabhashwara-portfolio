"use client";


import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Assuming 3 projects for the slider

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener("resize", checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Slider indicator with click handlers
  const SliderIndicator = ({ total, current, onSelect }: { total: number, current: number, onSelect: (index: number) => void }) => {
    return (
      <div className="flex items-center justify-center space-x-2 mt-8 pb-4">
        {Array(total).fill(null).map((_, idx) => (
          <div 
            key={idx}
            onClick={() => onSelect(idx)}
            className={`${idx === current ? 'bg-black w-2 h-2 rounded-full' : 'border border-gray-700 w-2 h-2 rounded-full'} cursor-pointer`}
          />
        ))}
      </div>
    );
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <section className={`${isMobile ? 'flex flex-col' : 'flex'} w-full h-screen overflow-hidden relative border-b border-border-gray-dark border-dashed`}>
      {!isMobile && (
        <div className="absolute border-b border-dashed border-border-gray-dark pt-[6.25rem] z-50 w-full 4k:top-[5.9rem]"></div>
      )}

      {/* Orange Section - Full width on mobile */}

      <div className="hidden lg:block w-1/2 bg-orange-theme px-[7rem] py-[2.2rem] 4k:py-[8rem] 4k:px-[11.6rem] relative border-dashed border-border-gray-dark border-r ">
        <div className="flex flex-col h-full px-10">
          <div className="flex justify-between mb-[2.35rem] font-light text-xl">
            <span className="text-lg">#1</span>
            <span className="text-lg">Work</span>
          </div>

          {/* Image Container */}
          <div className="relative aspect-square w-full h-full">
            <Image
              src="/projects/Rectangle 14.png"
              alt="Abstract 3D waves"
              className=""
              layout="fill"
            />
          </div>

          <span className="font-light text-xl pt-[2rem]">Art</span>
        </div>
      </div>


      <div className={`${isMobile ? 'w-full' : 'w-1/2'} bg-orange-theme ${isMobile ? 'px-6 py-6' : 'px-[7rem] py-[2.2rem] 4k:py-[8rem] 4k:px-[11.6rem]'} lg:hidden relative border-dashed border-border-gray-dark ${isMobile ? 'border-b' : 'border-r'}`}>
        <div className={`flex flex-col h-full ${isMobile ? 'px-4' : 'px-10'}`}>
          <div className="flex justify-between mb-[2.35rem] font-light text-xl">
            <span className="text-lg">#1</span>
            <span className="text-lg">Work</span>
          </div>

          {/* Image Container */}
          <div className={`relative ${isMobile ? 'aspect-[4/3]' : 'aspect-square'} w-full`}>
            <Image
              src="/projects/Rectangle 14.png"
              alt="Abstract 3D waves"
              className=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <span className="font-light text-xl pt-[2rem]">Art</span>
        </div>
      </div>



      {/* Content Section - Full width on mobile */}
      <div className={`${isMobile ? 'w-full' : 'w-1/2'} ${isMobile ? 'px-6 py-8' : 'px-[8.125rem]'} flex flex-col ${isMobile ? 'justify-start' : 'justify-center'} 4k:pr-[15rem] bg-orange-theme lg:bg-[#F7F0EC]`}>
        <h1 className={`font-monalista ${isMobile ? 'text-4xl' : 'text-7xl'} pb-4`}>
          Project Title
        </h1>
        <h2 className={`font-monalista ${isMobile ? 'text-xl' : 'text-[2rem]'} pb-4`}>
          Work Subtitle
        </h2>
        <p className={`${isMobile ? 'text-sm leading-relaxed' : 'leading-relaxed text-xl'} font-light`}>
          Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
        </p>
        
        {/* Mobile only slider indicators */}
        {isMobile && (
          <SliderIndicator 
            total={totalSlides} 
            current={currentSlide} 
            onSelect={goToSlide} 
          />
        )}
      </div>

      {!isMobile && (
        <div className="absolute bottom-[5.65rem] 4k:bottom-[11.5rem] border-b border-dashed border-border-gray-dark z-50 w-full"></div>
      )}
    </section>
  );
};

export default ProjectSection;