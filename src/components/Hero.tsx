export default function Hero() {
  const gridItems = Array(6).fill(null);
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#fdfaf6] overflow-hidden">
    {/* Dotted Grid Background with exactly 6 columns */}
    <div className="absolute inset-0 w-[120%] left-[-10%] grid grid-cols-6 border-gray-300 border-dashed">
      {gridItems.map((_, index) => (
        <div key={index} className="border-r border-dashed border-gray-300 h-full" />
      ))}
    </div>

       {/* Main Content with 6 column grid */}
    <div className="w-[120%] relative z-10 grid grid-cols-6 h-screen">
      {/* Column 1 - Empty */}
      <div className=""></div>

      {/* Column 2 - Name and Title */}
      <div className="pt-40 flex flex-col items-end text-start">
        <div>

        <p className="text-sm text-gray-600">Chandika Prabshwara</p>
        <p className="text-xs text-gray-500">Passionate Designer</p>
        </div>
      </div>

      {/* Columns 3-4 - Orange Box */}
      <div className="col-span-2 flex justify-center items-center">
        <div className="bg-orange-500 w-full h-48 flex justify-center items-center relative mx-10">
          {/* "Technical Artist" - Semi Transparent */}
          <h2 className="absolute text-xl font-bold text-orange-900 opacity-70 top-6">
            Technical Artist
          </h2>
          {/* "Game Developer" - Bold */}
          <h1 className="text-6xl font-extrabold absolute text-black whitespace-nowrap">
            Game Developer
          </h1>
        </div>
      </div>

      {/* Column 5 - Lorem Ipsum at bottom */}
      <div className="flex flex-col justify-end pb-20">
        <p className="text-xs text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim
          Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea
          Commodo Consequat.
        </p>
      </div>

      {/* Column 6 - Empty */}
      <div className=""></div>
    </div>
  </section>
  );
}
