'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const gridItems = Array(6).fill(null);

  return (
    <>
      {/* DESKTOP SECTION */}
      <section className="hidden relative min-h-screen lg:flex flex-col justify-center items-center overflow-hidden border-b border-border-gray-dark border-dashed">
        {/* Animated Grid */}
        <div className="absolute inset-0 w-[123.2%] left-[-11.6%] grid grid-cols-6 border-border-gray-dark border-dashed">
          {gridItems.map((_, index) => (
            <motion.div
              key={index}
              className="border-r border-dashed border-border-gray-dark h-full"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="w-[127%] relative z-10 grid grid-cols-6 h-screen">
          <div></div>

          {/* Name & Title */}
          <motion.div
            className="pt-[66%] flex flex-col items-end text-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-1 font-light">
              <p>Chandika Prabshwara</p>
              <p>Passionate Designer</p>
            </div>
          </motion.div>

          {/* Orange Box + Headings */}
          <motion.div
            className="col-span-2 flex justify-center items-center font-monalista"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
          >
            <div className="bg-orange-theme w-full h-[27.8125rem] mt-20 flex justify-center items-center relative mx-10">
              <motion.h2
                className="absolute lg:text-7xl opacity-70 top-[5rem]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Technical Artist
              </motion.h2>
              <motion.h1
                className="absolute text-gray-dark whitespace-nowrap lg:text-10xl font-normal"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                Game Developer
              </motion.h1>
            </div>
          </motion.div>

          {/* Lorem Ipsum */}
          <motion.div
            className="flex flex-col justify-end lg:ml-8 mr-3 text-justify mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p className="text-[.625rem] lg:text-base">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
              Nisi Ut Aliquip Ex Ea Commodo Consequat.
            </p>
          </motion.div>

          <div></div>
        </div>
      </section>

      {/* MOBILE SECTION */}
      <section className="relative lg:min-h-screen flex lg:hidden flex-col justify-between overflow-hidden border-b border-border-gray-dark border-dashed bg-[#F7F0EC]">
        {/* Grid */}
        <div className="absolute inset-0 grid grid-cols-4 border-border-gray-dark border-dashed">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                className="border-r border-dashed border-border-gray-dark h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-6 pt-24">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-light text-sm">
              <p>Chandika Prabshwara</p>
              <p>Passionate Designer</p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center my-12 font-monalista"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
          >
            <div className="bg-[#FF7F32] z-50 max-w-[16rem] aspect-[5/3] flex flex-col justify-center items-center relative">
              <motion.h2
                className="text-2xl opacity-70 absolute top-8 text-[#2B2826]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Technical Artist
              </motion.h2>
              <motion.h1
                className="text-6xl text-[#2B2826] font-normal mt-4 whitespace-nowrap "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Game Developer
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            className="mt-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-sm text-[#2B2826] max-w-[48%] ml-auto">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
