import { Link } from "react-router-dom";
import { projectItems } from "../../data/Projects";

const Projects = () => {
  return (
    <section className="px-7 pb-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-6 auto-rows-[300px]">
          {projectItems.map((item, index) => {
            const isLarge = index % 4 === 0 || index % 4 === 3;
            return (
              <Link
                key={item.id}
                to={`/projects/${item.id}`}
                className={`relative overflow-hidden group ${
                  isLarge ? 'row-span-2' : 'row-span-1'
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold font-oswald uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;