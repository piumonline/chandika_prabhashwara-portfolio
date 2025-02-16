export default function Hero() {
  const gridItems = Array(6).fill(null);
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center  overflow-hidden">
      {/* Dotted Grid 6 columns */}
      <div className="absolute inset-0 w-[127%] left-[-13%] grid grid-cols-6 border-gray-300 border-dashed">
        {gridItems.map((_, index) => (
          <div
            key={index}
            className="border-r border-dashed border-gray-300 h-full"
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
          <div className="bg-orange-theme w-full h-[445px] mt-20 flex justify-center items-center relative mx-10">
            <h2 className="absolute text-7xl opacity-70 top-14">
              Technical Artist
            </h2>
            <h1 className="absolute text-gray-dark whitespace-nowrap lg:text-10xl font-normal">
              Game Developer
            </h1>
          </div>
        </div>

        {/* Column 5 - Lorem Ipsum at bottom */}
        <div className="flex flex-col justify-end ml-8 mr-3 text-justify mb-4">
          <p className=" text-base">
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
  );
}
