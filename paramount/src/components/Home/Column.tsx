import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ColumnItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

const items: ColumnItem[] = [
  {
    number: "01",
    title: "Branding",
    description: "We create brand identities that reflect your essence and build recognition.",
    image: "img/column/01.jpg",
  },
  {
    number: "02",
    title: "Marketing",
    description: "We craft campaigns that connect audiences, increase reach, and drive growth.",
    image: "img/column/02.jpeg",
  },
  {
    number: "03",
    title: "Design",
    description: "We deliver bold visuals that elevate brands across digital and print touchpoints.",
    image: "img/column/03.jpg",
  },
  {
    number: "04",
    title: "Strategy",
    description: "We align business goals with creative direction to ensure every move achieves success.",
    image: "img/column/04.jpeg",
  },
];

const Column = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="max-w-[1280px] mx-auto px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.number}
            className="flex flex-col items-start text-left border-r border-[#aeaa9e] last:border-r-0 pr-4"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <span className="text-4xl font-orbitron text-[#f57e81] mb-2">{item.number}</span>
            <h3 className="md:text-2xl text-[#aeaa9e] font-black font-orbitron tracking-tight mb-2">{item.title}</h3>
            <p className="text-[#f4f4f1] font-mono tracking-tight mb-4">{item.description}</p>
            <div className="relative w-full h-48 overflow-hidden group">
              <img src={item.image} className="w-full h-full object-cover" />
              <img src={item.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-100 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-black/20 transition-transform duration-700 group-hover:-translate-x-full"></div>
                <div className="w-1/2 h-full bg-black/20 transition-transform duration-700 group-hover:translate-x-full"></div>
              </div>   
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Column;