"use client";

import React, { useState, useEffect } from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const gridItems = Array(6).fill(null);

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
    <footer className="relative w-full" data-testid="footer-section">
      {/* Top border */}
      <div className={`${isMobile ? 'h-12' : 'h-[8rem]'} border-b border-border-gray-dark border-dashed`}></div>

      {/* Main contact section */}
      <div className={`lg:bg-orange-theme ${isMobile ? 'py-12 mx-0' : 'py-20 mx-[9.375rem] 4k:mx-[14.2rem]'} relative overflow-hidden`}>
        <div className="container mx-auto text-center px-4">
          <p className={`text-black/70 ${isMobile ? 'text-sm mb-2' : 'mb-4'}`}>Make Contact, Make Impact</p>
          <h2 className={`${isMobile ? 'text-4xl' : 'text-7xl'} font-monalista ${isMobile ? 'mb-6' : 'mb-8'}`}>Lets Connect</h2>
          <button className={`border border-black ${isMobile ? 'px-6 py-2 text-sm' : 'px-8 py-3'} text-black hover:bg-black hover:text-orange-500 transition-colors`}>
            Click To Connect
          </button>
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center overflow-hidden">
          <div className={`absolute inset-0 ${isMobile ? 'w-full' : 'w-[150%] left-[-24.94%]'} grid grid-cols-6 border-border-gray-dark border-dashed`}>
            {gridItems.map((_, index) => (
              <div
                key={index}
                className="border-r border-dashed border-border-gray-dark h-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer content */}
      {!isMobile ? (
        // Desktop Footer
        <div className="flex justify-center items-start mx-auto px-4 py-8 relative h-[29rem] border-t border-border-gray-dark border-dashed">
          <div className="container flex justify-between items-center mx-[8.4rem] my-5">
            <p className="text-gray-600">2024 All Right Reserved</p>

            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-black">
                Behance
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Dribble
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Linkdin
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <h1
              className="w-full text-center text-[23vw] font-monalista leading-none relative right-[3rem] top-16"
              style={{
                transform: "scaleY(1.5)",
                transformOrigin: "center",
              }}
            >
              CONTACT
            </h1>
          </div>
        </div>
      ) : (
        // Mobile Footer
        <div className="border-t border-border-gray-dark border-dashed">
          {/* Social Links - Mobile */}
          <div className="flex flex-wrap justify-center py-6 gap-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-black">
              Behance
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Dribble
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Linkdin
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              WhatsApp
            </a>
          </div>
          
          {/* Copyright - Mobile */}
          <div className="text-center pb-6">
            <p className="text-gray-600 text-xs">2024 All Right Reserved</p>
          </div>
          
          {/* CONTACT Text - Mobile */}
          <div className="relative w-full overflow-hidden h-[6rem]">
            <h1
              className="w-full text-center text-[23vw] font-monalista leading-none"
              style={{
                transform: "scaleY(1.5)",
                transformOrigin: "center",
              }}
            >
              CONTACT
            </h1>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;