import React from 'react';
import Image from 'next/image';

const TextMaskSection = () => {
  return (
    <div className="relative h-[200px] w-full bg-[#fdfaf6] overflow-hidden">
      {/* Background Text Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[180px] font-serif text-gray-200">CHANDIKA</h1>
      </div>

      {/* Image Mask Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <h1 className="text-[180px] font-serif text-transparent bg-clip-text"
              style={{
                backgroundImage: `url('/about/Group 44.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text'
              }}>
            CHANDIKA
          </h1>
        </div>
      </div>


    </div>
  );
};

export default TextMaskSection;