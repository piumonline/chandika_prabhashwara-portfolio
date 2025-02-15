const CreativeHeading = () => {
  const gridItems = Array(6).fill(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] overflow-hidden">
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
      <div className="w-[120%] relative z-10 grid grid-cols-6 h-screen">
        {/* Column 1 - Empty */}
        <div className=""></div>

        {/* Column 2 - Name and Title */}
        <div className="pt-40 flex flex-col items-end text-start">
          <div>
            <img
              src="/projects/Rectangle 14.png"
              alt="Abstract 3D waves"
              className="w-full p-8"
            />
          </div>
        </div>

        {/* Columns 3-4 - Orange Box */}
        <div className="col-span-2 flex justify-center items-center relative max-w-5xl w-full text-center">
          <div className="w-full h-48 flex justify-center items-center relative mx-10">
            <h1 className="font-serif text-7xl leading-tight">
              <div className="mb-4">Making</div>
              <div className="relative inline-block">
                <span className="relative z-10">C</span>
                <div className="absolute top-0 left-[calc(1ch-0.5rem)] h-full w-48 bg-orange-500" />
                <span className="relative z-10">reative</span>
              </div>
              <div className="mt-4">Shits Since</div>
              <div className="mt-4">Birth</div>
            </h1>
          </div>
        </div>

        {/* Column 5 - Lorem Ipsum at bottom */}
        <div className="flex flex-col justify-end pb-20">
          <img
            src="/projects/Rectangle 14.png"
            alt="Abstract 3D waves"
            className="w-full p-8"
          />
        </div>

        {/* Column 6 - Empty */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default CreativeHeading;
