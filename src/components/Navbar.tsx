import React from "react";

function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 border-b border-gray-300 z-50 bg-[#fdfaf6]">
        <h1 className="text-2xl font-bold">CP</h1>
        <ul className="flex space-x-8 text-gray-700">
          <li className="cursor-pointer hover:text-black">About</li>
          <li className="cursor-pointer hover:text-black">Project</li>
          <li className="cursor-pointer hover:text-black">Contact</li>
        </ul>
        <button className="border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
          Download CV
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
