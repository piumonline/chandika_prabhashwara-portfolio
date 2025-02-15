const ProjectSection = () => {
    return (
      <section className="flex w-full min-h-screen">
        {/* Left Orange Section */}
        <div className="w-1/2 bg-orange-500 p-8 relative">
          <div className="flex flex-col h-full">
            <div className="flex justify-between text-white mb-6">
              <span className="text-lg">#1</span>
              <span className="text-lg">Work</span>
            </div>
            
            {/* Image Container */}
            <div className="relative aspect-square w-full bg-black">
              <img 
                src="/projects/Rectangle 14.png"
                alt="Abstract 3D waves"
                className="w-full h-full object-cover"
              />
            </div>
            
            <span className="text-white mt-4">Art</span>
          </div>
        </div>
  
        {/* Right Content Section */}
        <div className="w-1/2 bg-pink-50 p-16 flex flex-col justify-center">
          <h1 className="text-5xl font-serif mb-4">Project Title</h1>
          <h2 className="text-2xl text-gray-700 mb-8">Work Subtitle</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    );
  };
  
  export default ProjectSection;