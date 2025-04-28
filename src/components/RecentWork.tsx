"use client";


import Image from "next/image";
import React, { useState, useEffect } from "react";

interface RecentWorkProps {}

const RecentWork: React.FC<RecentWorkProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  return (
    <section className="w-full" data-testid="recent-work-section">
      {/* Top border line */}
      <div className="mb-[8.0625rem]"></div>

      {/* Heading */}
      <div className={`${isMobile ? 'px-6 mb-6' : 'container mx-auto mb-[2.5rem]'}`}>
        <h2 className={`${isMobile ? 'text-left text-4xl' : 'text-right text-7xl'} font-monalista`}>
          Recent Work
        </h2>
      </div>

      {/* Image Grid - Responsive */}
      <div className="w-full border-t border-dashed border-border-gray-dark">
        <div className={`${isMobile ? 'mx-0' : 'mx-[9.625rem] 4k:mx-[14.2rem]'} h-full`}>
          {isMobile ? (
            // Mobile layout - Single column
            <div className="flex flex-col">
              {/* Image 1 - Astronaut */}
              <div className="overflow-hidden h-[50vh]">
                <Image
                  src="/recent works/pic1.png"
                  alt="Astronaut in black and white"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={477}
                  height={659}
                />
              </div>

              {/* Image 2 - Abstract Waves */}
              <div className="overflow-hidden h-[50vh]">
                <Image
                  src="/recent works/pic2.png"
                  alt="Abstract wave pattern"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={477}
                  height={659}
                />
              </div>

              {/* Image 3 - Orange Bowl */}
              <div className="overflow-hidden">
                <Image
                  src="/recent works/pic3.png"
                  alt="Orange objects floating above bowl"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={477}
                  height={659}
                />
              </div>

            </div>
          ) : (
            // Desktop layout - 3 column grid
            <div className="grid grid-cols-3 gap-6 h-full">
              {/* Image 1 - Astronaut */}
              <div className="overflow-hidden">
                <Image
                  src="/recent works/work3_BW.webp"
                  alt="Astronaut in black and white"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={477}
                  height={659}
                />
              </div>

              {/* Image 2 - Abstract Waves */}
              <div className="overflow-hidden">
                <Image
                  src="/recent works/work2.webp"
                  alt="Abstract wave pattern"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={477}
                  height={659}
                />
              </div>

              {/* Image 3 - Orange Bowl */}
              <div className="overflow-hidden">
                <Image
                  src="/recent works/work1_urbanOasis.webp"
                  alt="Orange objects floating above bowl"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={477}
                  height={659}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom border line */}
      <div className="border-b border-border-gray-dark border-dashed"></div>
    </section>
  );
};

export default RecentWork;