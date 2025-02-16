const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Top border */}
      <div className="border-t border-gray-200"></div>

      {/* Main contact section */}
      <div className="bg-orange-500 py-20">
        <div className="container mx-auto text-center px-4">
          <p className="text-black/70 mb-4">Make Contact, Make Impact</p>
          <h2 className="text-5xl font-serif mb-8">Lets Connect</h2>
          <button className="border border-black px-8 py-3 text-black hover:bg-black hover:text-orange-500 transition-colors">
            Click To Connect
          </button>
        </div>
      </div>

      {/* Footer content */}
      <div className=" flex justify-center items-start mx-auto px-4 py-8 relative h-[450px]">
        <div className="container flex justify-between items-center">
          <p className="text-gray-600">2024 All Right Reserved</p>

          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-black">
              Behance
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Dribble
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Linkdin
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full  overflow-hidden">
          <h1
            className="w-full text-center text-[23vw] font-monalista leading-none relative right-[3rem] top-16"
            style={{
              transform: "scaleY(1.5)",
              transformOrigin: "center",
            }}
          >
            CONTACT
          </h1>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
