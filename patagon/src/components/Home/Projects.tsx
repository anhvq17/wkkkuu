import { Link } from "react-router-dom";

const projects = [
  {
    img: "/img/projects/01.jpeg",
    number: "01",
    title: "Carry With Intent",
    description:
      "Building Auré’s brand foundation—from story to \n visuals—to shape a premium lifestyle identity.",
    points: [
      "Timeless identity system",
      "Elegant brand voice",
      "Launch campaign visuals",
    ],
  },
  {
    img: "/img/projects/02.jpg",
    number: "02",
    title: "Shades of Summer",
    description:
      "Capturing summer spirit through bold color, \n motion and a cohesive seasonal design system.",
    points: [
      "Distinctive identity system",
      "Lifestyle photography",
      "Seasonal campaign design",
    ],
  },
  {
    img: "/img/projects/03.jpg",
    number: "03",
    title: "Built to Move",
    description:
      "Creating a movement-driven brand system for Vetra, \n built on performance and modern athletic culture.",
    points: [
      "Positioning strategy",
      "Messaging framework",
      "Product-focused campaign",
    ],
  },
  {
    img: "/img/projects/04.jpg",
    number: "04",
    title: "Evolution of Time",
    description:
      "Evolving identity with a refined strategy and \n elevated design rooted in precision and innovation.",
    points: [
      "Distinctive identity system",
      "Lifestyle photography",
      "Seasonal campaign design",
    ],
  },
];

const Projects = () => {
  return (
    <section className="px-10 pt-14 pb-28 max-w-[1280px] mx-auto">
      <h1 className="text-7xl text-center text-[#f4f4f1] font-bold font-orbitron tracking-tight mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-16 ml-24">
        {projects.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          >
            <Link to={"/projects"} className="relative w-full aspect-[16/9] overflow-hidden group">
              <img
                src={item.img}
                className="w-full h-full object-cover"
              />

              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-100 transition-opacity duration-700 group-hover:opacity-0"
              />

              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-black/20 transition-transform duration-700 group-hover:-translate-x-full"></div>
                <div className="w-1/2 h-full bg-black/20 transition-transform duration-700 group-hover:translate-x-full"></div>
              </div>
            </Link>

            <div className="text-[#aeaa9e] font-mono">
              <span className="text-[#f57e81] text-4xl font-orbitron">
                {item.number}
              </span>
              <h3 className="text-2xl font-bold font-orbitron mt-5 mb-5">
                {item.title}
              </h3>
              <p className="text-[#f4f4f1] tracking-tight mb-5 whitespace-pre-line">{item.description}</p>
              <ul className="list-disc list-inside space-y-1 text-[#f4f4f1]">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;