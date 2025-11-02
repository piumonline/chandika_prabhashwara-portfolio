'use client';

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CreativeHeading = () => {
  const gridItems = Array(6).fill(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Move orange box through all 4 lines
  const orangeY = useTransform(
    scrollYProgress, 
    [0, 0.33, 0.66, 1], 
    ['0%', '130%', '260%', '390%']
  );

  // Change width based on which line it's on
  const orangeWidth = useTransform(
    scrollYProgress,
    [0, 0.25, 0.33, 0.5, 0.66, 0.83, 1],
    ['45%', '45%', '70%', '70%', '85%', '85%', '40%'] // Making -> Creative -> Shits Since -> Birth
  );

  return (
    <section ref={sectionRef} className="relative flex flex-col justify-center items-center overflow-hidden min-h-screen">
      {/* Dotted Grid Background with exactly 6 columns */}
      <div className="absolute inset-0 w-[123.2%] left-[-11.6%] grid grid-cols-6 border-border-gray-dark border-dashed">
        {gridItems.map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-border-gray-dark h-full"
          />
        ))}
      </div>

      {/* Main Content with 6 column grid */}
      <div className="w-[120%] relative z-10 grid grid-cols-6">
        {/* Column 1 - Empty */}
        <div className=""></div>

        {/* Column 2 - Name and Title */}
        <div className="pt-40 flex flex-col items-end text-start">
          <div className="lg:block hidden">
            <Image
              src="/recent works/work2_BW.webp"
              alt="Abstract 3D waves"
              className="w-full p-8"
              width={180}
              height={335}
            />
          </div>
        </div>

        {/* Columns 3-4 - Text with Moving Orange Box */}
        <div className="col-span-2 flex justify-center items-center relative w-full text-center py-[9rem]">
          <div className="w-full flex justify-center items-center relative">
            <div className="relative">
              {/* Animated Orange Box with Dynamic Width */}
              <motion.div 
                className="absolute h-[6rem] lg:h-[11rem] bg-orange-theme pointer-events-none"
                style={{
                  y: orangeY,
                  width: orangeWidth,
                  top: '-0.5rem',
                  left: '50%',
                  x: '-50%',
                }}
                transition={{ type: "tween", ease: "easeInOut" }}
              />

              <h1 className="text-[4.6875rem] lg:text-11xl leading-tight font-monalista relative">
                {/* Line 1: Making */}
                <div className="mb-4 relative mix-blend-difference text-white">
                  Making
                </div>
                
                {/* Line 2: Creative */}
                <div className="relative mix-blend-difference text-white">
                  Creative
                </div>

                {/* Line 3: Shits Since */}
                <div className="mt-4 whitespace-nowrap relative mix-blend-difference text-white">
                  Shits Since
                </div>

                {/* Line 4: Birth */}
                <div className="mt-4 relative mix-blend-difference text-white">
                  Birth
                </div>
              </h1>
            </div>
          </div>
        </div>

        {/* Column 5 - Lorem Ipsum at bottom */}
        <div className="lg:flex flex-col justify-end pb-20 hidden">
          <Image
            src="/recent works/work1_BW.webp"
            alt="Abstract 3D waves"
            className="w-full p-[4.375rem]"
            width={280}
            height={235}
          />
        </div>

        {/* Column 6 - Empty */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default CreativeHeading;