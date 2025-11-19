const projects = [
  {
    img: "/img/projects/01.jpeg",
    number: "01",
    title: "Carry With Intent",
    description:
      "Crafting Auré’s complete brand foundation—from narrative to visual language—to position the label as a premium lifestyle brand with purpose-driven elegance. The process included refining how the brand communicates, behaves and appears across every touchpoint.",
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
      "Building a bold and expressive identity for Solara by capturing the essence of summer through color, motion, and mood. The work spanned visual direction, campaign storytelling, and a cohesive design system tailored for seasonal brand expression.",
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
      "Developing a strategic and design-forward brand system for Vetra, shaped around movement, performance, and modern athletic culture. We refined their positioning, messaging, and visual execution to empower both athletes and everyday movers.",
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
    description:
      "Leading Chrono’s brand evolution through a refined strategic framework and elevated design direction. The goal was to communicate precision, innovation and everyday wearability — resulting in a clear identity system that strengthens the brand’s long-term presence.",
    points: [
      "Distinctive brand identity system",
      "Poolside-inspired lifestyle photography",
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

      <div className="grid grid-cols-1 gap-16">
        {projects.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden group cursor-pointer">
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
            </div>

            <div className="text-[#aeaa9e] font-mono">
              <span className="text-[#f57e81] text-4xl font-orbitron">
                {item.number}
              </span>
              <h3 className="text-2xl font-bold font-orbitron mt-2 mb-4">
                {item.title}
              </h3>
              <p className="text-[#f4f4f1] mb-4">{item.description}</p>
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