import Image from "next/image";

const RecentWork = () => {
  return (
    <section className="w-full">
      {/* Top border line */}
      <div className=" mb-[8.0625rem]"></div>

      {/* Heading */}
      <div className="container mx-auto mb-[2.5rem] text-7xl">
        <h2 className="text-right font-monalista">Recent Work</h2>
      </div>

      {/* Image Grid */}
      <div className=" w-full border-t border-dashed border-border-gray-dark">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-3 gap-6 h-full">
            {/* Image 1 - Astronaut */}
            <div className="overflow-hidden">
              <Image
                src="/recent works/pic1.png"
                alt="Astronaut in black and white"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={477}
                height={659}
              />
            </div>

            {/* Image 2 - Abstract Waves */}
            <div className="overflow-hidden">
              <Image
                src="/recent works/pic2.png"
                alt="Abstract wave pattern"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={477}
                height={659}
              />
            </div>

            {/* Image 3 - Orange Bowl */}
            <div className="overflow-hidden">
              <Image
                src="/recent works/pic3.png"
                alt="Orange objects floating above bowl"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={477}
                height={659}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="border-b border-border-gray-dark border-dashed"></div>
    </section>
  );
};

export default RecentWork;
