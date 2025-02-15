const WorkExperience = () => {
    return (
      <section className="w-full bg-pink-50">
        {/* Top border */}
        <div className="border-t border-gray-200"></div>
        
        {/* Heading */}
        <div className="container mx-auto px-8 py-12">
          <h2 className="text-5xl font-serif">Work Experience</h2>
        </div>
        
        {/* Experience Card */}
        <div className="container mx-auto px-8 pb-16">
          <div className="flex">
            {/* Left Company Section */}
            <div className="w-1/2 bg-orange-500 p-8 relative">
              <div className="flex flex-col h-full">
                <p className="text-black mb-12">Company</p>
                
                {/* Large G Logo */}
                <div className="flex-grow flex items-center justify-center">
                  <div className="text-black text-[200px] font-bold">G</div>
                </div>
                
                <p className="text-black mt-12">Google</p>
              </div>
            </div>
            
            {/* Right Content Section */}
            <div className="w-1/2 bg-white p-12">
              <div className="max-w-xl">
                <h3 className="text-4xl font-serif mb-4">Work Title</h3>
                <p className="text-gray-600 mb-8">Jan-2020 - June 2024</p>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="border-b border-gray-200"></div>
      </section>
    );
  };
  
  export default WorkExperience;