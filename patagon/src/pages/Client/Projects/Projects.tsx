import { useParams, Navigate } from 'react-router-dom';
import { projectItems } from '../../../data/Projects';

const Projects = () => {
  const { id } = useParams();
  const project = projectItems.find(p => p.id === Number(id));

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-[#464134]">
      <header className="px-7 pt-28">
        <div className="max-w-7xl mx-auto">
          <h1 className="lg:text-7xl font-bold text-[#f4f4f1] font-orbitron">{project.title}</h1>
          <p className="text-[#f4f4f1] font-mono font-bold text-2xl px-1 py-8">WHAT TO KNOW</p>
          <div className="text-[#f4f4f1] font-mono text-lg px-1 pb-14">
            {project.subtitle.split('\n').map((line, index) => (
              <p key={index} className="flex">
                <div className="w-4 h-2 rounded-full border-2 border-[#f4f4f1] flex-shrink-0 mt-2.5 mr-5"></div>{line.trim()}
              </p>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden
                ${image.type === 'wide' ? 'lg:col-span-2' : ''}
                ${image.type === 'tall' ? 'lg:row-span-2' : ''}
                bg-neutral-900
              `}
            >
              <img
                src={image.url}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;