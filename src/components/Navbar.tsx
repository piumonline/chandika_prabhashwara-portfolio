import React from "react";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-[8%] py-[1rem] border-b border-border-gray-dark border-dashed z-50 bg-[#F7F0EC] text-gray-dark">
        <h1 className=" lg:text-7xl font-normal font-monalista">
          CP
        </h1>
        <ul className="flex space-x-[5.8125rem] text-xl text-[#2B2826] font-light pl-[9rem]">
          <li className="cursor-pointer hover:font-semibold">About</li>
          <li className="cursor-pointer hover:font-semibold">Project</li>
          <li className="cursor-pointer hover:font-semibold">Contact</li>
        </ul>
        <button className="border border-dashed border-gray-dark py-4 px-8 text-xl font-light">
          Download CV
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
