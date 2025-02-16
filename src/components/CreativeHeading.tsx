import Image from "next/image";

const CreativeHeading = () => {
  const gridItems = Array(6).fill(null);

  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden">
      {/* Dotted Grid Background with exactly 6 columns */}
      <div className="absolute inset-0 w-[120%] left-[-10%] grid grid-cols-6 border-gray-300 border-dashed">
        {gridItems.map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-gray-300 h-full"
          />
        ))}
      </div>

      {/* Main Content with 6 column grid */}
      <div className="w-[120%] relative z-10 grid grid-cols-6">
        {/* Column 1 - Empty */}
        <div className=""></div>

        {/* Column 2 - Name and Title */}
        <div className="pt-40 flex flex-col items-end text-start">
          <div>
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
            <h1 className=" text-11xl leading-tight font-monalista ">
              <div className="mb-4">Making</div>
              <div className="relative inline-block">
                <span className="relative z-10">C</span>
                <div className="absolute top-0 left-[calc(1ch-0.2rem)] h-full w-[400px] bg-orange-500" />
                <span className="relative z-10">reative</span>
              </div>
              <span className=" whitespace-nowrap">

              <div className="mt-4">Shits Since</div>
              <div className="mt-4">Birth</div>
              </span>
            </h1>
          </div>
        </div>

        {/* Column 5 - Lorem Ipsum at bottom */}
        <div className="flex flex-col justify-end pb-20">
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
