import { useParams, Navigate, Link } from 'react-router-dom';
import { newsData } from '../../../data/News';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';

const News = () => {
  const { id } = useParams();
  const news = newsData.find(n => n.id === Number(id));

  if (!news) {
    return <Navigate to="/news" replace />;
  }

  const relatedNews = newsData.filter(n => news.relatedNews.includes(n.id));

  return (
    <div className="min-h-screen bg-[#464134]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#f4f4f1] font-mono mb-8 hover:gap-3 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#f4f4f1] font-orbitron mb-6 leading-tight">
            {news.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-[#f4f4f1] font-mono text-sm mb-8">
            <div className="flex items-center gap-2">
              <User size={16} />
              {news.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {news.readTime}
            </div>
            <div>{news.date}</div>
          </div>
        </div>

        <div className="overflow-hidden mb-12">
          <img 
            src={news.image} 
            className="w-full h-[500px] object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-[#f4f4f1] font-mono leading-relaxed mb-8">
            {news.content.intro}
          </p>

          {news.content.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold text-[#f4f4f1] font-orbitron mb-4">
                {section.heading}
              </h2>
              <p className="text-[#f4f4f1] font-mono leading-relaxed text-lg">
                {section.text}
              </p>
            </div>
          ))}

          <div className="bg-[#3d3829] p-8 rounded-lg my-10">
            <p className="text-lg text-[#f4f4f1] font-mono leading-relaxed italic">
              {news.content.conclusion}
            </p>
          </div>
        </article>

        <div className="flex flex-wrap gap-2 mt-10 mb-16">
          <div className="flex items-center gap-2 text-[#f4f4f1] font-mono text-sm mr-4">
            <Tag size={16} />
            Tags:
          </div>
          {news.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-1 bg-[#3d3829] text-[#f4f4f1] text-sm font-mono rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {relatedNews.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#f4f4f1]/20">
            <h2 className="text-4xl font-bold text-[#f4f4f1] font-orbitron mb-10">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedNews.map((related) => (
                <Link 
                  key={related.id}
                  to={`/news/${related.id}`}
                  className="group"
                >
                  <div className="overflow-hidden mb-4">
                    <img 
                      src={related.image}
                      className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f4f4f1] font-orbitron mb-2 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-[#f4f4f1] font-mono text-sm">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;