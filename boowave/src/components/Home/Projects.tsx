import { useState } from 'react';

const IMG_H = 176;

const testimonials = [
  {
    id: 1,
    name: "SHANE WATSON",
    title: "Marketing Director",
    quote: "The team truly understood our vision and turned it into a seamless digital experience. The results exceeded our expectations.",
    img: "/img/2.png"
  },
  {
    id: 2,
    name: "OLIVER BENNETT",
    title: "Creative Director",
    quote: "The team clearly understood our vision and transformed it into a seamless digital experience. The final results exceeded expectations.",
    img: "/img/4.png"
  },
  {
    id: 3,
    name: "DANIEL FOSTER",
    title: "Marketing Strategist",
    quote: "The team deeply understood our vision and crafted a seamless digital experience. The outcome surpassed our expectations.",
    img: "/img/6.png"
  },
  {
    id: 4,
    name: "JAMES CARTER",
    title: "Product Manager",
    quote: "The team quickly understood our vision and delivered a seamless digital experience. The end results exceeded expectations.",
    img: "/img/8.png"
  }
];

const Projects = () => {
  const [active, setActive] = useState(0);

  const arrowTop = active * IMG_H + IMG_H / 2 - 10;

  return (
    <section className="min-h-screen bg-black px-10 pt-14 pb-28">
      <div className="max-w-6xl mx-auto">
        <p className="text-white text-sm tracking-[0.2em] uppercase mb-4">( TESTIMONIAL )</p>
        <h1 className="text-6xl font-black leading-none mb-16">
          <span className="text-white">EXPERT </span>
          <span className="text-[#e11010]">STORIES.</span>
        </h1>

        <div className="flex justify-center items-start gap-0">
          <div className="flex flex-col relative flex-shrink-0">
            <div className="absolute right-[19px] top-0 bottom-0 w-[1px] bg-white/10 z-0" />

            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="relative flex items-center"
                style={{ height: `${IMG_H}px` }}
              >
                <div
                  className="overflow-hidden flex-shrink-0"
                  style={{
                    width: '175px',
                    height: '175px',
                    opacity: active === i ? 1 : 0.35,
                    filter: active === i ? 'none' : 'grayscale(60%)',
                    transition: 'opacity 0.5s ease, filter 0.5s ease'
                  }}
                >
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>

                <div className="w-10 flex items-center justify-center relative z-10 flex-shrink-0">
                  <div
                    className="rounded-full border-2 flex items-center justify-center"
                    style={{
                      width: '18px',
                      height: '18px',
                      borderColor: active === i ? 'white' : 'rgba(255,255,255,0.25)',
                      transition: 'border-color 0.3s ease'
                    }}
                  >
                    <div
                      className="rounded-full bg-white"
                      style={{
                        width: active === i ? '9px' : '0px',
                        height: active === i ? '9px' : '0px',
                        transition: 'width 0.3s ease, height 0.3s ease'
                      }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="relative flex-shrink-0 w-6" style={{ height: `${IMG_H * testimonials.length}px` }}>
            <span
              className="absolute text-[#e11010] text-xl leading-none select-none"
              style={{
                top: `${arrowTop}px`,
                left: '0',
                transition: 'top 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              ◀
            </span>
          </div>

          <div className="ml-6 flex-1 max-w-lg relative" style={{ height: `${IMG_H * testimonials.length}px` }}>
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="absolute left-0 right-0"
                style={{
                  top: `${i * IMG_H + IMG_H / 2 - 80}px`,
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  pointerEvents: active === i ? 'auto' : 'none'
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white font-black text-xl tracking-wide">
                      {t.name}
                    </p>
                    <p className="text-white/50 tracking-wider mt-1">
                      {t.title}
                    </p>
                  </div>
                  <div className="flex gap-1 ml-8 flex-shrink-0">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[#e11010] text-xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-white tracking-wider leading-snug mt-4 ">
                  {t.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;