"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface WorkExperienceProps {}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides: number = 3; // Assuming 3 work experiences for the slider

  useEffect((): (() => void) => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return (): void => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Slider indicator with click handlers
  const SliderIndicator: React.FC<{
    total: number;
    current: number;
    onSelect: (index: number) => void;
  }> = ({ total, current, onSelect }) => {
    return (
      <div className="flex items-center justify-center space-x-2 mt-8 pb-4">
        {Array(total)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              onClick={() => onSelect(idx)}
              className={`${
                idx === current
                  ? "bg-white w-2 h-2 rounded-full"
                  : "border border-gray-400 w-2 h-2 rounded-full"
              } cursor-pointer`}
            />
          ))}
      </div>
    );
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="w-full bg-[#2B2826] lg:bg-[#F7F0EC] text-white lg:text-black"
      data-testid="work-experience-section"
    >
      {/* Top border */}
      <div className="border-t border-border-gray-dark border-dashed"></div>

      {/* Heading */}
      <div
        className={`${
          isMobile
            ? "px-8 pt-8 pb-6"
            : "container mx-auto 4k:mx-[12rem] px-8 pt-[7.5rem] pb-[2.75rem]"
        }`}
      >
        <h2 className={`${isMobile ? "text-3xl" : "text-7xl"} font-monalista`}>
          Work Experience
        </h2>
      </div>

      {/* Experience Card */}
      <div className="border border-b border-dashed border-border-gray-dark">
        {!isMobile ? (
          // Desktop layout
          <div className="mx-[7.5rem] 4k:mx-[12rem] px-8">
            <div className="flex h-full">
              {/* Left Company Section */}
              <div className="w-1/2 bg-[#FF7A29] p-8 relative h-[44rem]">
                <div className="flex flex-col h-full">
                  <p className="text-black mb-12">Company</p>

                  {/* Large G Logo */}
                  <div className="flex-grow flex items-center justify-center">
                    <Image
                      src="/Behaviol.svg"
                      alt="Profile Image"
                      width={242}
                      height={339}
                    />
                  </div>

                  <p className="text-black mt-12">Google</p>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="w-1/2 flex items-center justify-end">
                <div className="max-w-[40rem]">
                  <h3 className="text-6xl font-monalista mb-4">Work Title</h3>
                  <p className="text-white lg:text-gray-600 mb-8 text-[2rem] font-light">
                    Jan-2020 - June 2024
                  </p>

                  <div className="space-y-6 text-white lg:text-gray-600 leading-relaxed text-justify text-[1.25rem] font-light">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Mobile layout - stacked
          <div className="px-0">
            {/* Company Section on top */}
            <div className="w-full bg-[#FF7A29] pt-4 pb-4 px-4 relative">
              <div className="flex flex-col">
                <p className="text-black text-sm mb-2">Company</p>

                {/* Large G Logo - smaller on mobile */}
                <div className="flex items-center justify-center py-16">
                  <div className="text-black text-[120px] font-bold">G</div>
                </div>

                <p className="text-black text-sm">Google</p>
              </div>
            </div>

            {/* Content Section below */}
            <div className="w-full p-6">
              <h3 className="text-2xl font-monalista mb-2">Work Title</h3>
              <p className="text-white lg:text-gray-600 mb-4 text-sm font-light">
                Jan-2020 - June 2024
              </p>

              <div className="space-y-4 text-white lg:text-gray-600 leading-relaxed text-sm font-light mb-4">
                <p>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                  Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
                  Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Lorem Ipsum
                  Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
                  Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                  Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi
                  Ut Aliquip Ex Ea Commodo Consequat.
                </p>
              </div>

              {/* Mobile Only Slider Indicator */}
              <SliderIndicator
                total={totalSlides}
                current={currentSlide}
                onSelect={goToSlide}
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom border */}
      <div className="border-b border-gray-200"></div>
    </section>
  );
};

export default WorkExperience;
