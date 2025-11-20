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
    description: "We build identity \n systems that last.",
    image: "img/column/01.jpg",
  },
  {
    number: "02",
    title: "Marketing",
    description: "Campaigns that connect \n and help drive growth.",
    image: "img/column/02.jpeg",
  },
  {
    number: "03",
    title: "Design",
    description: "Bold visuals for \n digital and print.",
    image: "img/column/03.jpg",
  },
  {
    number: "04",
    title: "Strategy",
    description: "Creative direction fully aligned with your goals.",
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
    <section ref={ref} className="max-w-[1280px] mx-auto px-8 pt-28 pb-28">
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
            <p className="text-[#f4f4f1] font-mono tracking-tight mb-4 whitespace-pre-line">{item.description}</p>
            <div className="relative w-full h-48 overflow-hidden group">
              <img src={item.image} className="w-full h-full object-cover" />
              <img src={item.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-100 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 flex cursor-pointer">
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