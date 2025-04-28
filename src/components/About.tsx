import React from "react";
import Image from "next/image";

function About() {
  const gridItems = Array(6).fill(null);

  return (
    <section className="">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[2.5rem] lg:gap-20">
        {/* Image Section with Orange Circle */}
        <div className="border-border-gray-dark border-dashed border-b w-full lg:w-fit pt-[4rem]">
          <div className="w-full h-full"></div>
          <Image
            src="/about/Group 44.webp"
            alt="Profile Image"
            width={542}
            height={639}
            className=""
          />
        </div>

        {/* Text Content */}
        <div className="max-w-[37.5rem] mx-[1.5625rem]">
          <h1 className=" text-[2rem] lg:text-7xl font-normal mb-[2.5rem] lg:mb-[4.375rem] font-monalista">About</h1>
          <p className="text-gray-700 leading-relaxed text-justify text-base lg:text-xl font-light">
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
      <div className="grid grid-cols-4 border-y border-border-gray-dark border-dashed">
        {[1, 2, 3, 4,].map((item) => (
          <div
            key={item}
            className="text-center py-[1.875rem] border-r border-border-gray-dark last:border-r-0"
          >
            <h3 className=" text-2xl font-monalista font-normal">Tool</h3>
          </div>
        ))}
      </div>

    
    </section>
  );
}

export default About;
