export default function Hero() {
  const gridItems = Array(6).fill(null);
  return (
    <>
    <section className=" hidden relative min-h-screen lg:flex flex-col justify-center items-center overflow-hidden border-b border-border-gray-dark border-dashed">
      {/* Dotted Grid 6 columns */}
      <div className="absolute inset-0 w-[123.2%] left-[-11.6%] grid grid-cols-6 border-border-gray-dark border-dashed">
        {gridItems.map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-border-gray-dark h-full"
          />
        ))}
      </div>

      {/* Main Content with 6 column grid */}
      <div className="w-[127%] relative z-10 grid grid-cols-6 h-screen">
        {/* Column 1 - Empty */}
        <div className=""></div>

        {/* Column 2 - Name and Title */}
        <div className="pt-[66%] flex flex-col items-end text-start">
          <div className="space-y-1 font-light">
            <p>Chandika Prabshwara</p>
            <p>Passionate Designer</p>
          </div>
        </div>

        {/* Columns 3-4 - Orange Box */}
        <div className="col-span-2 flex justify-center items-center font-monalista">
          <div className="bg-orange-theme w-full h-[27.8125rem] mt-20 flex justify-center items-center relative mx-10">
            <h2 className="absolute lg:text-7xl opacity-70 top-[5rem]">
              Technical Artist
            </h2>
            <h1 className="absolute text-gray-dark whitespace-nowrap lg:text-10xl font-normal">
              Game Developer
            </h1>
          </div>
        </div>

        {/* Column 5 - Lorem Ipsum at bottom */}
        <div className="flex flex-col justify-end lg:ml-8 mr-3 text-justify mb-4 ">
          <p className=" text-[.625rem] lg:text-base">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat.
          </p>
        </div>

        {/* Column 6 - Empty */}
        <div className=""></div>
      </div>
    </section>

    <section className="relative lg:min-h-screen flex lg:hidden flex-col justify-between overflow-hidden border-b border-border-gray-dark border-dashed bg-[#F7F0EC]">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 border-border-gray-dark border-dashed">
        {Array(4).fill(null).map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-border-gray-dark h-full"
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-6 pt-24">
        {/* Top Section - Name and Title */}
        <div className="mb-12">
          <div className="font-light text-sm">
            <p>Chandika Prabshwara</p>
            <p>Passionate Designer</p>
          </div>
        </div>

        {/* Middle Section - Orange Box */}
        <div className="flex justify-center items-center my-12 font-monalista">
          <div className="bg-[#FF7F32] max-w-[16rem]  aspect-[5/3] flex flex-col justify-center items-center relative">
            <h2 className="text-2xl opacity-70 absolute top-8 text-[#2B2826]">
              Technical Artist
            </h2>
            <h1 className="text-6xl text-[#2B2826] font-normal mt-4 overflow-auto whitespace-nowrap">
              Game Developer
            </h1>
          </div>
        </div>

        {/* Bottom Section - Lorem Ipsum */}
        <div className="mt-auto mb-8">
          <p className="text-sm text-[#2B2826] max-w-[48%] ml-auto">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
