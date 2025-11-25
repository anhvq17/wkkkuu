import { useParams, Navigate, Link } from 'react-router-dom';
import { projectItems } from '../../../data/Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectItems.find(p => p.id === Number(id));

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <Link to="/" className="w-24 h-10 rounded-full border-2 text-white border-white flex items-center justify-center hover:w-32 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 font-oswald">
          <div>
            <h1 className="text-7xl text-white font-black uppercase my-14 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-white font-extralight leading-relaxed whitespace-pre-line">
              {project.preface}
            </p>
          </div>
          <div className="relative h-[400px]">
            <img src={project.img} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-gray-300 pt-16 mb-16 font-oswald text-white">
          <div>
            <h2 className="text-4xl font-black mb-8">
              WHAT TO KNOW
            </h2>
            <p className="text-2xl font-extralight mb-6 max-w-xl">
              {project.wtk.split("\n").map((line, index) => (
                line.trim() === "" ? (
                  <div key={index} className="h-8" />
                ) : (
                  <div key={index} className="flex gap-2">
                    <span>.</span>
                    <span>{line}</span>
                  </div>
                )
              ))}
            </p>
          </div>
          <div className="relative h-[400px]">
            <img src={project.images[0]?.url} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="mb-16 bg-gray-100 p-12 max-w-xl font-oswald">
            <p className="text-2xl text-gray-400 mb-4">"Quotes</p>
            <p className="text-xl leading-relaxed mb-4">
              {project.quotes}
            </p>
            <p className="text-2xl text-gray-400 text-right">"</p>
          </div>
          <div className="relative h-[354px]">
            <img src={project.images[1]?.url} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white font-oswald">
          <p className="text-2xl font-extralight mb-6 max-w-xl whitespace-pre-line">
            {project.description}
          </p>
          <div className="flex flex-col relative h-[400px] gap-16">
            <img src={project.images[2]?.url} className="w-full h-full object-cover" />
            <img src={project.images[3]?.url} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;