const Homepage = () => {
  return (
    <div className="relative w-full">
      <section className="relative h-screen bg-[#5a5a5a] overflow-hidden">
        <img src="./img/banner.jpg" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="absolute inset-0 max-w-[1280px] mx-auto flex items-center justify-between px-9">
          <h1 className="text-[70px] font-bbh font-bold tracking-tight leading-none text-white opacity-80">
            MONO
          </h1>
          <h1 className="text-[70px] font-bbh font-bold tracking-tight leading-none text-white opacity-80">
            MUSEUM
          </h1>
        </div>
        <div className="absolute bottom-8 right-12 text-right text-white max-w-md">
          <p className="font-sans leading-relaxed mb-4">
            Step into a world of timeless<br />stories, rare
            collections and<br />unforgettable experiences.
          </p>
          <p className="text-sm text-gray-300">(Since 2025)</p>
        </div>
        <div className="absolute bottom-6 left-8 flex flex-col space-y-4 text-white text-sm font-sans">
          <a href="#" className="flex items-center space-x-2 transition-colors">
            <span>X</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="#" className="flex items-center space-x-2 transition-colors">
            <span>LINKEDIN</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="#" className="flex items-center space-x-2 transition-colors">
            <span>INSTAGRAM</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a href="#" className="flex items-center space-x-2 transition-colors">
            <span>HELP@MONO.COM</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;