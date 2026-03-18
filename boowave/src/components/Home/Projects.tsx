import { Link } from "react-router-dom";
import { projectItems } from "../../data/Projects";

const Projects = () => {
  return (
    <section className="px-10 pt-14 pb-28 max-w-[1280px] mx-auto">
      <h1 className="text-7xl text-center text-[#f4f4f1] font-bold font-orbitron tracking-tight mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-16 ml-24">
        {projectItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          >
            <Link to={`/projects/${item.id}`} className="relative w-full aspect-[16/9] overflow-hidden group">
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