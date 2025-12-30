import { Link } from "react-router-dom";

const ClientFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[14rem] tracking-tighter font-bbh text-[#e9e9e9] leading-none pointer-events-none select-none">
        ©MONO
      </div>

      <div className="px-10 pt-20 pb-56 relative z-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="text-center md:text-left">
            <p className="text-4xl text-white font-sans tracking-tighter">
              Great design isn’t just about<br />what you make. It’s about<br />who you make it with.
            </p>
            <p className="text-white font-medium tracking-tight pt-4">
              ©2025 Mono. Powered by Wkkkuu
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-36 justify-center md:justify-end text-center tracking-tighter md:text-right">
            <div>
              <ul className="space-y-2 text-white font-sans">
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">About</Link></li>
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">Exhibitions</Link></li>
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">Collections</Link></li>
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-white font-sans">
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">X</Link></li>
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">Linkedin</Link></li>
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">Instagram</Link></li>
                <li><Link to="#" className="font-medium text-2xl mt-5 mb-6">Help@mono.com</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;