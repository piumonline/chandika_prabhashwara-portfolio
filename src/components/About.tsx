import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className=" bg-[#fdfaf6]">
      {/* Main Content */}
      <div className="flex items-center justify-center  gap-20 ">
        {/* Image Section with Orange Circle */}
        <div className="">
          <div className="w-full h-full"></div>
          <Image
            src="/about/Group 44.png"
            alt="Profile Image"
            width={542}
            height={639}
            className=""
          />
        </div>

        {/* Text Content */}
        <div className="max-w-[600px]">
          <h1 className="text-6xl font-bold mb-8">About</h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Tools Section */}
      <div className="grid grid-cols-4 border-t border-gray-300">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="text-center py-6 border-r border-gray-300 last:border-r-0"
          >
            <h3 className="text-xl font-medium">Tool</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
