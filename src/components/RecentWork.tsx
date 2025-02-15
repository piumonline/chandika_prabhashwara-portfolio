const RecentWork = () => {
    return (
      <section className="w-full bg-pink-50 px-8 py-16">
        {/* Top border line */}
        <div className="border-t border-gray-200 mb-8"></div>
        
        {/* Heading */}
        <div className="container mx-auto mb-12">
          <h2 className="text-5xl font-serif text-right">Recent Work</h2>
        </div>
        
        {/* Image Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {/* Image 1 - Astronaut */}
            <div className="aspect-square overflow-hidden">
              <img 
                src="/projects/Rectangle 14.png"
                alt="Astronaut in black and white"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 2 - Abstract Waves */}
            <div className="aspect-square overflow-hidden">
              <img 
                src="/projects/Rectangle 14.png"
                alt="Abstract wave pattern"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 3 - Orange Bowl */}
            <div className="aspect-square overflow-hidden">
              <img 
                src="/projects/Rectangle 14.png"
                alt="Orange objects floating above bowl"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="border-b border-gray-200 mt-8"></div>
      </section>
    );
  };
  
  export default RecentWork;