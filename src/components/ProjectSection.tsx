import Image from "next/image";

const ProjectSection = () => {
    return (
      <section className="flex w-full max-h-screen">
        {/* Left Orange Section */}
        <div className="w-1/2 bg-orange-500 px-[7rem] py-[3.75rem] relative">
          <div className="flex flex-col h-full">
            <div className="flex justify-between text-white mb-6">
              <span className="text-lg">#1</span>
              <span className="text-lg">Work</span>
            </div>
            
            {/* Image Container */}
            <div className="relative aspect-square w-full">
              <Image 
                src="/projects/Rectangle 14.png"
                alt="Abstract 3D waves"
                className=""
                layout="fill"
              />
            </div>
            
            <span className="text-white mt-4">Art</span>
          </div>
        </div>
  
        {/* Right Content Section */}
        <div className="w-1/2 px-[8.125rem] flex flex-col justify-center">
          <h1 className=" font-monalista text-7xl pb-[2.6875rem]">Project Title</h1>
          <h2 className=" font-monalista text-[2rem] pb-[2.6875rem]">Work Subtitle</h2>
          <p className="leading-relaxed text-xl font-light">
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