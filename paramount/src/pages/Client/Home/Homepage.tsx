import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Homepage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="relative w-full overflow-hidden">
      <section
        ref={ref}
        className="relative w-full flex justify-center px-0 pb-3"
      >
        <motion.div style={{ opacity, y }} className="relative w-full flex justify-center">
          <img src="/img/6.2.png" className="w-full  h-[639px] object-cover mx-auto" />
          <div className="max-w-[1280px] font-mono text-white sm:text-base [&>p]:leading-tight [&>p]:drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)]">
            <p className="absolute bottom-6 left-6 w-[300px]">
              We are a branding and creative agency specializing in strategy, identity and digital design for companies ready to stand.
            </p>
            <p className="absolute bottom-6 right-6 w-[300px] text-right">
              We craft bold strategies and striking visual identities that empower brands to stand taller with clarity and precision.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray/40 pointer-events-none"></div>
        </motion.div>
      </section>
    </div>
  )
}

export default Homepage;