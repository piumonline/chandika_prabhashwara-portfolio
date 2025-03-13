import Image from "next/image";

const ProjectSection = () => {
  return (
    <section className="flex w-full h-screen overflow-hidden relative border-b border-border-gray-dark border-dashed">
      <div className="absolute border-b border-dashed border-border-gray-dark pt-[6.25rem] z-50 w-full"></div>

      {/* Left Orange Section */}
      <div className="w-1/2 bg-orange-theme px-[7rem] py-[2.2rem] relative border-dashed border-border-gray-dark border-r">
        <div className="flex flex-col h-full px-10">
          <div className="flex justify-between mb-[2.35rem] font-light text-xl">
            <span className="text-lg">#1</span>
            <span className="text-lg">Work</span>
          </div>

          {/* Image Container */}
          <div className="relative aspect-square w-full h-full">
            <Image
              src="/projects/Rectangle 14.png"
              alt="Abstract 3D waves"
              className=""
              layout="fill"
            />
          </div>

          <span className="font-light text-xl pt-[2rem]">Art</span>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-1/2 px-[8.125rem] flex flex-col justify-center">
        <h1 className=" font-monalista text-7xl pb-[2.6875rem]">
          Project Title
        </h1>
        <h2 className=" font-monalista text-[2rem] pb-[2.6875rem]">
          Work Subtitle
        </h2>
        <p className="leading-relaxed text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="absolute bottom-[5.65rem] border-b border-dashed border-border-gray-dark z-50 w-full"></div>
    </section>
  );
};

export default ProjectSection;
