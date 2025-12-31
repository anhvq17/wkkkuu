import { useState, useEffect, useRef } from "react";

interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  imageUrl: string;
}

const Gallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Visions in Color",
      artist: "John Smith",
      year: "1642",
      imageUrl: "./img/collections/1.jpg"
    },
    {
      id: 2,
      title: "The Dancer",
      artist: "Marie Laurent",
      year: "1889",
      imageUrl: "./img/collections/2.jpg"
    },
    {
      id: 3,
      title: "Portrait of Grace",
      artist: "Alessandro Rossi",
      year: "1825",
      imageUrl: "./img/collections/3.jpg"
    },
    {
      id: 4,
      title: "Eternal Beauty",
      artist: "Sofia Chen",
      year: "1920",
      imageUrl: "./img/collections/4.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollStart = -rect.top;
      const scrollRange = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <div ref={containerRef} className="relative" style={{ height: `${artworks.length * 120}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-[900px] h-[600px]">
            {artworks.map((artwork, index) => {
              const totalProgress = scrollProgress * (artworks.length + 0.5);
              const itemStart = index;
              const itemMiddle = index + 0.5;
              const itemEnd = index + 1;
              
              let translateY = 100;
              let opacity = 0;
              let scale = 0.9;

              if (totalProgress >= itemStart && totalProgress < itemMiddle) {
                const itemProgress = (totalProgress - itemStart) * 2;
                translateY = (1 - itemProgress) * 100;
                opacity = Math.min(1, itemProgress * 1.5);
                scale = 0.9 + itemProgress * 0.1;
              } else if (totalProgress >= itemMiddle && totalProgress < itemEnd) {
                translateY = 0;
                opacity = 1;
                scale = 1;
              } else if (totalProgress >= itemEnd) {
                const exitProgress = Math.min(1, (totalProgress - itemEnd) * 2);
                translateY = -exitProgress * 100;
                opacity = Math.max(0, 1 - exitProgress * 1.5);
                scale = 1 - exitProgress * 0.1;
              }

              return (
                <div
                  key={artwork.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `translateY(${translateY}%) scale(${scale})`,
                    opacity: opacity,
                    transition: "none"
                  }}
                >
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-8 bg-[#1a1a1a] shadow-2xl"></div>
                    <div className="relative bg-[#f5f5f0] p-10 shadow-2xl">
                      <div className="relative w-[700px] h-[480px] overflow-hidden bg-white border border-gray-200">
                        <img
                          src={artwork.imageUrl}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-20 left-8 text-left">
                      <h3 className="text-3xl font-bbh mb-2 text-white">{artwork.title}</h3>
                      <p className="text-gray-400 text-sm">{artwork.artist} — {artwork.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3"
              style={{
                opacity: scrollProgress > 0.02 ? 1 : 0,
                transition: "opacity 0.3s"
              }}
            >
              {artworks.map((_, index) => {
                const totalProgress = scrollProgress * (artworks.length + 0.5);
                const isActive = totalProgress >= index + 0.25 && totalProgress < index + 0.75;
                return (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isActive ? "w-12 bg-white" : "w-8 bg-gray-600"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-black px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-bbh mb-8">Experience Art</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Each piece in our collection tells a unique story. From classical paintings to contemporary sculptures, 
            discover the evolution of artistic expression through the ages.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bbh mb-2">150+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Masterpieces</div>
            </div>
            <div>
              <div className="text-2xl font-bbh mb-2">12</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Centuries</div>
            </div>
            <div>
              <div className="text-2xl font-bbh mb-2">40+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Artists</div>
            </div>
          </div>
          <button className="px-12 py-4 bg-white text-black tracking-widest text-sm hover:bg-gray-200 transition-all duration-300 group">
            <span className="cursor-pointer">EXPLORE COLLECTION</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;