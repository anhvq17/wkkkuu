const MARQUEE_IMAGES = [
  'https://url-shortener.me/HR4U',
  'https://url-shortener.me/HR5N',
  'https://url-shortener.me/HR5O',
  'https://url-shortener.me/HR5P',
  'https://url-shortener.me/HR5Q',
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
          animation: marquee 24s linear infinite;
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
            <div key={i} className="flex-shrink-0 w-[300px] h-[360px] mr-2">
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