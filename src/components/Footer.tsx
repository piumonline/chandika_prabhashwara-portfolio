const Footer = () => {
  return (
    <footer className="relative w-full bg-pink-50">
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
      <div className="container mx-auto px-4 py-8 relative h-[250px]">
        <div className="flex justify-between items-center">
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
          <div
            className="w-full text-[20vw] font-serif leading-none tracking-tight text-black whitespace-nowrap"
            style={{
              transform: "translateY(30%)",
              fontFeatureSettings: '"kern" 1',
            }}
          >
            CONTACT
          </div>
        </div>
      </div>

      {/* Large CONTACT text with bottom cut off */}
    </footer>
  );
};

export default Footer;
