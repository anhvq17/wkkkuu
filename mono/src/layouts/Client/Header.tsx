const ClientHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[70px] bg-transparent z-50">
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
        <a href="/" className="font-bbh text-white opacity-80">
          MONO MUSEUM
        </a>

        <nav className="flex items-center space-x-12 text-sm font-medium tracking-wider text-white opacity-80">
          <a href="/about" className="relative group transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10">ABOUT</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300"></span>
          </a>
          <a href="/exhibitions" className="relative group transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10">EXHIBITIONS</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300"></span>
          </a>
          <a href="/collections" className="relative group transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10">COLLECTIONS</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300"></span>
          </a>
          <a href="/testimonials" className="relative group transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10">TESTIMONIALS</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300"></span>
          </a>
        </nav>

        <div className="text-sm font-sans tracking-wider text-white">
          HANOI, VIETNAM
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;