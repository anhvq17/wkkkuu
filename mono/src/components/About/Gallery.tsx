import { useState, useEffect, useRef } from "react";

interface Collection {
  id: number;
  title: string;
  subtitle: string;
  layout: string;
  images: string[];
}

const Gallery = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const collections: Collection[] = [
    {
      id: 1,
      title: "Renaissance Masters",
      subtitle: "15th - 17th Century",
      layout: "split",
      images: [
        "https://images.unsplash.com/photo-1578926078716-da60436e18c0?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Modern Expressions",
      subtitle: "20th Century",
      layout: "carousel",
      images: [
        "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551993005-75c4131b6bd8?w=800&h=1000&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Contemporary Vision",
      subtitle: "21st Century",
      layout: "stack",
      images: [
        "https://images.unsplash.com/photo-1576397142485-4adb464216c0?w=800&h=1000&fit=crop",
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1200&h=600&fit=crop",
        "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&h=600&fit=crop"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      
      const relativeScroll = scrollY - containerTop + windowHeight;
      const progress = Math.max(0, Math.min(1, relativeScroll / (containerHeight + windowHeight)));
      setScrollProgress(progress);

      const sectionIndex = Math.floor(progress * collections.length);
      setActiveSection(Math.min(sectionIndex, collections.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [collections.length]);

  const renderSplitLayout = (collection, idx, sectionProgress) => {
    const scale = 0.8 + (sectionProgress * 0.2);
    
    return (
      <div className="grid grid-cols-2 gap-8 items-center">
        <div 
          className="relative group cursor-pointer"
          style={{
            transform: `translateX(${(1 - sectionProgress) * -150}px) rotate(${(1 - sectionProgress) * -5}deg) scale(${scale})`,
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="relative overflow-hidden aspect-[4/5] bg-gray-900 shadow-2xl">
            <img 
              src={collection.images[0]}
              alt={`${collection.title} artwork 1`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div 
            className="relative group cursor-pointer"
            style={{
              transform: `translateX(${(1 - sectionProgress) * 150}px) scale(${scale})`,
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
            }}
          >
            <div className="relative overflow-hidden aspect-square bg-gray-900 shadow-2xl">
              <img 
                src={collection.images[1]}
                alt={`${collection.title} artwork 2`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div 
            className="relative group cursor-pointer"
            style={{
              transform: `translateY(${(1 - sectionProgress) * 100}px) scale(${scale})`,
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            <div className="relative overflow-hidden aspect-[16/9] bg-gray-900 shadow-2xl">
              <img 
                src={collection.images[2]}
                alt={`${collection.title} artwork 3`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCarouselLayout = (collection, idx, sectionProgress) => {
    const rotateAngle = (1 - sectionProgress) * 15;
    
    return (
      <div className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute w-[500px] h-[600px] group cursor-pointer"
          style={{
            transform: `translateX(-250px) rotate(${rotateAngle}deg) scale(${0.7 + sectionProgress * 0.3})`,
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 1
          }}
        >
          <div className="relative overflow-hidden w-full h-full bg-gray-900 shadow-2xl rounded-lg">
            <img 
              src={collection.images[0]}
              alt={`${collection.title} carousel 1`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div 
          className="absolute w-[550px] h-[650px] group cursor-pointer"
          style={{
            transform: `translateY(${(1 - sectionProgress) * -100}px) scale(${0.8 + sectionProgress * 0.2})`,
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            zIndex: 3
          }}
        >
          <div className="relative overflow-hidden w-full h-full bg-gray-900 shadow-2xl rounded-lg">
            <img 
              src={collection.images[1]}
              alt={`${collection.title} carousel 2`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-sm tracking-wider">FEATURED</p>
            </div>
          </div>
        </div>

        <div 
          className="absolute w-[500px] h-[600px] group cursor-pointer"
          style={{
            transform: `translateX(250px) rotate(${-rotateAngle}deg) scale(${0.7 + sectionProgress * 0.3})`,
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            zIndex: 2
          }}
        >
          <div className="relative overflow-hidden w-full h-full bg-gray-900 shadow-2xl rounded-lg">
            <img 
              src={collection.images[2]}
              alt={`${collection.title} carousel 3`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    );
  };

  const renderStackLayout = (collection, idx, sectionProgress) => {
    return (
      <div className="relative flex items-center justify-center h-[700px]">
        <div 
          className="absolute w-[800px] h-[500px] group cursor-pointer"
          style={{
            transform: `translateZ(${sectionProgress * -100}px) rotateX(${(1 - sectionProgress) * 20}deg) scale(${0.85 + sectionProgress * 0.15})`,
            transition: 'transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 1,
            opacity: sectionProgress
          }}
        >
          <div className="relative overflow-hidden w-full h-full bg-gray-900 shadow-2xl">
            <img 
              src={collection.images[2]}
              alt={`${collection.title} stack 1`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div 
          className="absolute w-[900px] h-[560px] group cursor-pointer"
          style={{
            transform: `translateZ(${sectionProgress * -50}px) rotateX(${(1 - sectionProgress) * 10}deg) scale(${0.9 + sectionProgress * 0.1})`,
            transition: 'transform 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            zIndex: 2,
            opacity: sectionProgress
          }}
        >
          <div className="relative overflow-hidden w-full h-full bg-gray-900 shadow-2xl">
            <img 
              src={collection.images[1]}
              alt={`${collection.title} stack 2`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div 
          className="absolute w-[1000px] h-[620px] group cursor-pointer"
          style={{
            transform: `scale(${0.95 + sectionProgress * 0.05})`,
            transition: 'transform 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            zIndex: 3
          }}
        >
          <div className="relative overflow-hidden w-full h-full bg-gray-900 shadow-2xl">
            <img 
              src={collection.images[0]}
              alt={`${collection.title} stack 3`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-12 right-12 bg-white text-black px-8 py-4 text-sm tracking-widest">
              LATEST ADDITION
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-white">
      <div ref={containerRef} className="relative" style={{ height: `${collections.length * 150}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-[1280px] w-full px-8">
            {collections.map((collection, idx) => {
              const sectionProgress = Math.max(0, Math.min(1, (scrollProgress * collections.length) - idx));
              const opacity = idx === activeSection ? 1 : 0;
              
              return (
                <div
                  key={collection.id}
                  className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
                  style={{ opacity }}
                >
                  <div 
                    className="text-center mb-16 transition-all duration-1000"
                    style={{
                      transform: `translateY(${(1 - sectionProgress) * 80}px)`,
                      opacity: sectionProgress
                    }}
                  >
                    <h2 className="text-7xl font-serif mb-3">{collection.title}</h2>
                    <p className="text-gray-400 text-2xl font-light">{collection.subtitle}</p>
                  </div>

                  {collection.layout === "split" && renderSplitLayout(collection, idx, sectionProgress)}
                  {collection.layout === "carousel" && renderCarouselLayout(collection, idx, sectionProgress)}
                  {collection.layout === "stack" && renderStackLayout(collection, idx, sectionProgress)}

                  <div 
                    className="text-center mt-16"
                    style={{
                      transform: `translateY(${(1 - sectionProgress) * 50}px)`,
                      opacity: sectionProgress,
                      transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                    }}
                  >
                    <div className="inline-block">
                      <div className="text-sm tracking-widest text-gray-400 mb-2">
                        {String(idx + 1).padStart(2, '0')} / {String(collections.length).padStart(2, '0')}
                      </div>
                      <div className="w-48 h-0.5 bg-gray-800">
                        <div 
                          className="h-full bg-white transition-all duration-300"
                          style={{ width: `${sectionProgress * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;