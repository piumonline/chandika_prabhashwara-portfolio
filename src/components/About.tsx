'use client';

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

function About() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isParagraphInView = useInView(paragraphRef, { once: true, amount: 0.3 });

  const tools = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Premiere Pro",
    "Blender",
    "Cinema 4D",
    "Webflow",
  ];

  // Duplicate tools array for seamless loop
  const duplicatedTools = [...tools, ...tools];

  // Text reveal animation variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

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
          <motion.h1 
            ref={headingRef}
            variants={headingVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            className="text-[2rem] lg:text-7xl font-normal mb-[2.5rem] lg:mb-[4.375rem] font-monalista"
          >
            About
          </motion.h1>
          
          <motion.p 
            ref={paragraphRef}
            variants={paragraphVariants}
            initial="hidden"
            animate={isParagraphInView ? "visible" : "hidden"}
            className="text-gray-700 leading-relaxed text-justify text-base lg:text-xl font-light"
          >
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
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Tools Section */}
      <div className="border-y border-border-gray-dark border-dashed overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{
            x: [0, -10 * tools.length + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-center py-[1.875rem] px-12 border-r border-border-gray-dark"
              style={{ minWidth: "200px" }}
            >
              <h3 className="text-2xl font-monalista font-normal whitespace-nowrap">
                {tool}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;