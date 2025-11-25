import { motion } from "framer-motion";
import { useRef } from "react";

const TextLayer = () => {
  const ref = useRef(null);
  const lines = [
    "Airphoria combines the signature design elements of Nike Air Max with the dynamic and ever evolving landscape of Fortnite, allowing players to engage with Air Max sneakers in new, captivating ways."
  ];

  return (
    <section ref={ref} className="max-w-[1280px] mx-auto px-2">
      <h2 className="text-7xl font-extralight font-oswald leading-relaxed tracking-tight mx-48 text-justify [text-justify:inter-word]" style={{ transform: "scaleX(1.4) scaleY(0.6)" }}>
        {lines.map((line, lineIndex) => {
          const words = line.split(" ");
          return (
            <div key={lineIndex} className="mb-2">
              {words.map((word, wordIndex) => {
                return (
                  <motion.span
                    key={wordIndex}
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

export default TextLayer;