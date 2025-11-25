import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.5"]
  });

  const lines = [
    "OH FOR SURE,",
    "THOSE PROJECTS",
    "ARE TOTALLY",
    "VIBING WITH MY",
    "CREATIVE FLOW!",
    "WE'RE AND",
    "ABSOLUTELY SO",
    "IN THE ZONE,",
    "YEP.COOL."
  ];

  return (
    <section ref={ref} className="relative py-40">
      <div className="max-w-7xl mx-auto px-6">
        {lines.map((line, index) => {
          const start = index / lines.length;
          const end = (index + 1) / lines.length;
          
          const opacity = useTransform(
            scrollYProgress,
            [start - 0.15, start + 0.05, end - 0.05, end + 0.15],
            [0.15, 1, 1, 0.15]
          );

          const blur = useTransform(
            scrollYProgress,
            [start - 0.15, start + 0.05, end - 0.05, end + 0.15],
            [10, 0, 0, 10]
          );

          const scale = useTransform(
            scrollYProgress,
            [start - 0.15, start + 0.05, end - 0.05, end + 0.15],
            [0.95, 1, 1, 0.95]
          );

          return (
            <motion.h2
              key={index}
              style={{ 
                opacity,
                filter: useTransform(blur, (value) => `blur(${value}px)`),
                scale
              }}
              className="text-9xl text-white font-black font-oswald uppercase leading-none mb-2 tracking-tighter"
            >
              {line}
            </motion.h2>
          );
        })}
      </div>
    </section>
  );
};

export default TextScroll;