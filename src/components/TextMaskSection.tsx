import React from 'react';

const TextMaskSection = () => {
  return (
    <div className="relative w-full h-[30rem] lg:h-[41.6875rem] overflow-hidden -top-10">
      {/* Background Text Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
        className="w-full text-center text-[61vw] lg:text-[21vw] font-monalista text-gray-200 leading-none relative right-[5rem]"
        style={{
          transform: 'scaleY(1.5)',
          transformOrigin: 'center'
        }}
        >
          CHANDIKA
        </h1>
      </div>

      {/* Image Mask Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
          className="w-full text-center text-[61vw] lg:text-[21vw] text-transparent bg-clip-text leading-none font-monalista relative right-[5rem]"
          style={{
           backgroundImage: `url('/text bg.webp')`,
            WebkitBackgroundClip: 'text',
             transform: 'scaleY(1.5)',
            transformOrigin: 'center',

            backgroundSize: '95% 90%', 
            backgroundPosition: '180% 170%', 
            backgroundRepeat: 'no-repeat',

            
          }}
        >
          CHANDIKA
        </h1>
      </div>
    </div>
  );
};

export default TextMaskSection;