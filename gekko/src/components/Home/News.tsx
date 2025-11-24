import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/News';

const NewsList = () => {
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
    <section ref={sectionRef} className="px-10 pt-14 pb-32">
      <h1 className="text-7xl text-[#f4f4f1] font-bold font-orbitron tracking-tight text-center mb-10">
        News
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1280px] mx-auto">
        {newsData.map((news, index) => (
          <Link 
            key={news.id}
            to={`/news/${news.id}`} 
            className="group"
            onMouseEnter={() => setActiveCard(index)}
            style={{
              transform: activeCard === index ? 'scale(1)' : 'scale(0.98)',
              opacity: activeCard === index || activeCard === null ? 1 : 0.7,
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="overflow-hidden mb-6">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-[#f4f4f1] font-mono mb-3">{news.date}</p>
            <h2 className="text-4xl text-[#f4f4f1] font-bold font-orbitron mb-4 leading-tight">{news.title}</h2>
            <p className="text-[#f4f4f1] font-mono leading-relaxed">{news.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewsList;