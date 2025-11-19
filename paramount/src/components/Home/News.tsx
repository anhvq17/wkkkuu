import { useState, useEffect, useRef } from 'react';

const newsData = [
  {
    id: 1,
    date: "October 31, 2025",
    title: "A London Hub for Sport, Creativity and Community",
    description: "Nike and Palace are joining forces to open Manor Place: a free, public hub for sport, creativity and community in South London.",
    image: "/img/news/01.jpg"
  },
  {
    id: 2,
    date: "October 26, 2023",
    title: "Community Climate Resilience Program",
    description: "Transformed schoolyard at Public School 107, Bronx, New York",
    image: "/img/news/02.jpg"
  }
];

const News = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveCard(0);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-10 pb-28">
      <h1 className="text-7xl text-[#f4f4f1] font-bold font-orbitron tracking-tight text-center mb-10">
        News
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1280px] mx-auto">
        <div 
          className="group cursor-pointer"
          onMouseEnter={() => setActiveCard(0)}
          style={{
            transform: activeCard === 0 ? 'scale(1)' : 'scale(0.98)',
            opacity: activeCard === 0 || activeCard === null ? 1 : 0.7,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="overflow-hidden mb-6">
            <img
              src={newsData[0].image}
              alt={newsData[0].title}
              className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <p className="text-sm text-[#f4f4f1] font-mono mb-3">{newsData[0].date}</p>
          <h2 className="text-4xl text-[#f4f4f1] font-bold font-orbitron mb-4 leading-tight">{newsData[0].title}</h2>
          <p className="text-[#f4f4f1] font-mono mb-6 leading-relaxed">{newsData[0].description}</p>
          <button className="inline-flex items-center gap-3 px-8 py-3 bg-[#d4d2c8] rounded-full text-sm font-medium font-mono transition-all duration-300 hover:gap-5">
            Read Post
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div 
          className="group cursor-pointer"
          onMouseEnter={() => setActiveCard(1)}
          style={{
            transform: activeCard === 1 ? 'scale(1)' : 'scale(0.98)',
            opacity: activeCard === 1 || activeCard === null ? 1 : 0.7,
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="overflow-hidden mb-6">
            <img
              src={newsData[1].image}
              alt={newsData[1].title}
              className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <p className="text-sm text-[#f4f4f1] font-mono mb-3">{newsData[1].date}</p>
          <h2 className="text-4xl text-[#f4f4f1] font-bold font-orbitron mb-4 leading-tight">{newsData[1].title}</h2>
          <p className="text-[#f4f4f1] font-mono mb-6 leading-relaxed">{newsData[1].description}</p>
          <button className="inline-flex items-center gap-3 px-8 py-3 bg-[#d4d2c8] rounded-full text-sm font-medium font-mono transition-all duration-300 hover:gap-5">
            Read Post
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;