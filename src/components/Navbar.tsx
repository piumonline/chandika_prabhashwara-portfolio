"use client";


import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-[8%] py-[1rem] border-b border-border-gray-dark border-dashed z-50 bg-[#F7F0EC] text-gray-dark">
        <h1 
          className="lg:text-7xl text-4xl font-normal font-monalista cursor-pointer"
          onClick={toggleMenu}
        >
          CP
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-[5.8125rem] text-xl text-[#2B2826] font-light pl-[9rem]">
          <li className="cursor-pointer hover:font-semibold">About</li>
          <li className="cursor-pointer hover:font-semibold">Project</li>
          <li className="cursor-pointer hover:font-semibold">Contact</li>
        </ul>
        
        <button className="hidden md:block border border-dashed border-gray-dark py-4 px-8 text-xl font-light">
          Download CV
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F7F0EC] z-40 pt-20 md:hidden">
          <div className="flex flex-col items-center px-4">
            <ul className="flex flex-col items-center space-y-8 text-2xl text-[#2B2826] font-light w-full py-12">
              <li className="cursor-pointer hover:font-semibold w-full text-center py-2">About</li>
              <li className="cursor-pointer hover:font-semibold w-full text-center py-2">Project</li>
              <li className="cursor-pointer hover:font-semibold w-full text-center py-2">Contact</li>
            </ul>
            <button className="border border-dashed border-gray-dark py-3 px-6 text-lg font-light mt-8">
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;