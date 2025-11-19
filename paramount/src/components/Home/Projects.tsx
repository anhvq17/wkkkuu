const works = [
  {
    img: "/img/projects/01.jpeg",
    number: "01",
    title: "Carry With Intent",
    description:
      "Defining Auré's brand story, visual identity, and digital presence as a premium lifestyle brand.",
    points: [
      "Timeless brand identity system",
      "Defined elegant brand voice",
      "Campaign visuals for launch",
    ],
  },
  {
    img: "/img/projects/02.jpg",
    number: "02",
    title: "Shades of Summer",
    description:
      "Created a bold brand identity and campaign visuals to captura Solara's summer lifestyle.",
    points: [
      "Distinctive brand identity system",
      "Poolside-inspired lifestyle photography",
      "Seasonal campaign design",
    ],
  },
  {
    img: "/img/projects/03.jpg",
    number: "03",
    title: "Built to Move",
    description:
      "Developing a clear brand strategy and dynamic design system for Vetra athletes and everyday movers.",
    points: [
      "Market positioning strategy",
      "Brand voice and messaging framework",
      "Product-focused campaign design",
    ],
  },
  {
    img: "/img/projects/04.jpg",
    number: "04",
    title: "Evolution of Time",
    description: "Shaping Chrono's strategy and design direction to highlight innovation, usability, and everyday appeal.",
    points: [
      "Distinctive brand identity system",
      "Poolside-inspired lifestyle photography",
      "Seasonal campaign design",
    ],
  },
];

const Projects = () => {
  return (
    <section className="px-10 pt-20 pb-28 max-w-[1280px] mx-auto">
      <h1 className="text-7xl text-center text-[#f4f4f1] font-bold font-orbitron tracking-tight mb-20">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-16">
        {works.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            <div className="overflow-hidden group cursor-pointer">
              <img
                src={item.img}
                className="w-full aspect-[16/9] object-cover transition-all duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="text-[#f4f4f1] font-mono">
              <span className="text-[#f57e81] text-4xl font-orbitron">
                {item.number}
              </span>
              <h3 className="text-3xl font-bold font-orbitron mt-2 mb-4">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
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