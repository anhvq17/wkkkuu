import { useRef } from "react";
import Column from "../../../components/Home/Column";
import ScrollText from "../../../components/Home/ScrollText";
import Projects from "../../../components/Home/Projects";
import Testimonials from "../../../components/Home/Testimonials";
import News from "../../../components/Home/News";

const Homepage = () => {
  const ref = useRef(null);

  return (
    <div className="bg-[#464134] relative w-full overflow-hidden">
      <section
        ref={ref}
        className="relative w-full flex justify-center px-0 pb-3"
      >
        <div className="relative w-full flex justify-center">
          <img src="/img/banner.png" className="w-full  h-[639px] object-cover mx-auto" />
          <div className="absolute inset-0 flex justify-between items-end px-6 pb-6 max-w-[1280px] mx-auto pointer-events-none">
            <p className="w-[300px] text-white font-mono text-sm sm:text-base leading-tight drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)]">
              We are a branding and creative agency specializing in strategy, identity and digital design for companies ready to stand.
            </p>
            <p className="w-[300px] text-white font-mono text-sm sm:text-base leading-tight drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)] text-right">
              We craft bold strategies and striking visual identities that empower brands to stand taller with clarity and precision.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray/40 pointer-events-none"></div>
        </div>
      </section>

      <Column />

      <ScrollText />

      <Projects />

      <Testimonials />

      <News />
    </div>
  )
}

export default Homepage;