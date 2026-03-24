const MARQUEE_IMAGES = [
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png',
  '/img/5.png',
  '/img/6.png',
  '/img/7.png',
  '/img/8.png',
  '/img/9.png',
  '/img/10.png',
  '/img/11.png',
  '/img/12.png',
  '/img/13.png',
  '/img/14.png',
  '/img/15.png',
  '/img/16.png',
];

const News = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
      `}</style>

      <div className="py-24 text-center px-6">
        <p className="text-white text-sm tracking-[0.2em] uppercase mb-8">
          Bring your ideas to life together. So...
        </p>

        <h2 className="font-black uppercase leading-none mb-10">
          <span className="block text-[#e11010] text-[100px]">LET'S BUILD</span>
          <span className="block text-[100px] bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            SOMETHING GREAT.
          </span>
        </h2>

        <button className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-colors duration-200">
          MAKE THE MOVE
        </button>
      </div>

      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden pb-20">
        <div className="marquee-track">
          {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[220px] h-[280px] mr-2">
              <img
                src={src}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;