import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lines = [
    "Patagon works with startups in fashion and lifestyle brands to scale their identity. We bring strategy and creativity together to build brands that inspire, connect and grow."
  ];

  return (
    <section ref={ref} className="max-w-[1280px] mx-auto px-8 pt-14 pb-28">
      <h2 className="md:text-6xl font-bold font-orbitron tracking-tighter mr-14 text-justify [text-justify:inter-word]">
        {lines.map((line, lineIndex) => {
          const words = line.split(" ");
          const totalWords = lines.flatMap(l => l.split(" ")).length;
          return (
            <div key={lineIndex} className="mb-2">
              {words.map((word, wordIndex) => {
                const globalIndex =
                  lines
                    .slice(0, lineIndex)
                    .reduce((acc, l) => acc + l.split(" ").length, 0) +
                  wordIndex;

                const start = (globalIndex / totalWords) * 0.7;
                const end = start + 1 / totalWords;

                const color = useTransform(
                  scrollYProgress,
                  [start, end],
                  ["#aeaa9e", "#f4f4f1"]
                );

                return (
                  <motion.span
                    key={wordIndex}
                    style={{ color }}
                    className="contents transition-colors duration-300"
                  >
                    {word + (wordIndex !== words.length - 1 ? " " : "")}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </h2>
    </section>
  );
};

export default ScrollText;