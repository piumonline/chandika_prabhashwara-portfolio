import Image from "next/image";

const CreativeHeading = () => {
  const gridItems = Array(6).fill(null);

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden">
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
          <div className=" lg:block hidden">
            <Image
              src="/projects/Rectangle 14.png"
              alt="Abstract 3D waves"
              className="w-full p-8"
              width={180}
              height={235}
            />
          </div>
        </div>

        {/* Columns 3-4 - Orange Box */}
        <div className="col-span-2 flex justify-center items-center relative w-full text-center py-[9rem]">
          <div className="w-full flex justify-center items-center relative">
            <h1 className=" text-[4.6875rem]  lg:text-11xl leading-tight font-monalista">
              <div className="mb-4">Making</div>
              <div className="relative inline-block">
                <div className="absolute top-0 left-[calc(1ch-0.2rem)] h-full w-[13rem] lg:w-[26.25rem] bg-orange-theme" />
                <span className="relative z-10 text-black">C</span>
                <span className="relative z-10 text-white">reativ</span>
                <span className="relative z-10 text-black">e</span>
              </div>
              <span className="whitespace-nowrap">
                <div className="mt-4">Shits Since</div>
                <div className="mt-4">Birth</div>
              </span>
            </h1>
          </div>
        </div>

        {/* Column 5 - Lorem Ipsum at bottom */}
        <div className="lg:flex flex-col justify-end pb-20 hidden">
          <Image
            src="/projects/Rectangle 14.png"
            alt="Abstract 3D waves"
            className="w-full p-[4.375rem]"
            width={180}
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
