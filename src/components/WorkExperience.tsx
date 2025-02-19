const WorkExperience = () => {
  return (
    <section className="w-full h-screen">
      {/* Top border */}
      <div className="border-t border-border-gray-dark border-dashed"></div>

      {/* Heading */}
      <div className="container mx-auto px-8 pt-[7.5rem] pb-[2.75rem] ">
        <h2 className=" text-7xl font-monalista">Work Experience</h2>
      </div>

      {/* Experience Card */}
      <div className="border-t border-b border-dashed border-border-gray-dark">
        <div className="mx-[7.5rem] px-8">
          <div className="flex h-full">

            {/* Left Company Section */}
            <div className="w-1/2 bg-[#FF7A29] p-8 relative h-[44rem]">
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
            <div className="w-1/2 flex items-center justify-end">
              <div className="max-w-[40rem]">
                <h3 className=" text-6xl font-monalista mb-4">Work Title</h3>
                <p className="text-gray-600 mb-8 text-[2rem] font-light">Jan-2020 - June 2024</p>

                <div className="space-y-6 text-gray-600 leading-relaxed text-justify text-[1.25rem] font-light">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      </div>

      {/* Bottom border */}
      <div className="border-b border-gray-200"></div>
    </section>
  );
};

export default WorkExperience;
