import { Link } from "react-router-dom";

interface ColumnItem {
  number: string;
  title: string;
  description: string;
  image: string;
  services: string[];
  caseStudy: {
    title: string;
    description: string;
    thumbnail: string;
  };
}

const items: ColumnItem[] = [
  {
    number: "01",
    title: "Branding",
    description: "At Patagon, we build brand identities that are strategic, memorable and adaptable. Our focus is on creating visuals and narratives that stand out and stay relevant as markets evolve. Every brand is crafted with clarity, consistency and long-term impact in mind.",
    image: "img/column/01.01.jpg",
    services: [
      "Brand strategy development",
      "Logo and visual identity design",
      "Brand voice and messaging strategy",
      "Brand strategy development"
    ],
    caseStudy: {
      title: "Carry With Intent",
      description: "Defining Auré's brand story, visual identity, and digital presence as a premium lifestyle brand.",
      thumbnail: "img/column/01.jpg"
    }
  },
  {
    number: "02",
    title: "Marketing",
    description: "A great brand deserves the right audience and the right strategy to reach them. We craft campaigns that go beyond clicks, focusing on genuine engagement and measurable growth. Our marketing blends creativity with performance to help your brand connect with the people who matter most.",
    image: "img/column/02.02.jpg",
    services: [
      "Campaign creative and assets",
      "Social content design",
      "Audience engagement frameworks",
      "Performance-driven paid promotion"
    ],
    caseStudy: {
      title: "Shades of Summer",
      description: "Created a bold brand identity and campaign visuals to capture Solara's summer lifestyle.",
      thumbnail: "img/column/02.jpeg"
    }
  },
  {
    number: "03",
    title: "Design",
    description: "We create bold, refined designs that communicate clearly across digital and print. Our work blends creativity with purpose, ensuring visuals that attract attention and convey meaning. From design systems to packaging, we deliver cohesive and impactful experiences.",
    image: "img/column/03.03.jpg",
    services: [
      "Digital design systems",
      "Print collateral design",
      "Packaging design",
      "Art direction and creative concepting"
    ],
    caseStudy: {
      title: "Visual Excellence",
      description: "Crafting memorable visual experiences that elevate brands and engage audiences across all touchpoints.",
      thumbnail: "img/column/03.jpg"
    }
  },
  {
    number: "04",
    title: "Strategy",
    description: "We develop strategic frameworks that align creative direction with real business goals. Through research and insight-driven thinking, we help brands position themselves effectively and grow with intention. Every strategy is built to guide decisions and support measurable results.",
    image: "img/column/04.04.jpeg",
    services: [
      "Business and brand positioning",
      "Content strategy planning",
      "Go-to-market strategies",
      "Competitive analysis and insights"
    ],
    caseStudy: {
      title: "Strategic Growth",
      description: "Building strategies that drive business growth and brand evolution in competitive markets.",
      thumbnail: "img/column/04.jpeg"
    }
  }
];

const OurServices = () => {
  return (
    <div className="w-full bg-[#464134]">
      <div className="px-7 pt-28 max-w-[1280px] mx-auto">
        <h1 className="lg:text-7xl font-bold text-[#f4f4f1] font-orbitron">Our Services</h1>
      </div>
      <div className="max-w-[1280px] mx-auto">
        {items.map((item) => (
          <div key={item.number} className="px-8 lg:px-16 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-6 max-w-[1280px] mx-auto">
                <div className="text-4xl font-orbitron text-[#f57e81] mb-2">{item.number}</div>
                
                <h2 className="md:text-4xl text-[#aeaa9e] font-black font-orbitron tracking-tight mb-2">
                  {item.title}
                </h2>
                
                <p className="text-[#f4f4f1] font-mono tracking-tight whitespace-pre-line">
                  {item.description}
                </p>

                <div className="space-y-3 pt-2">
                  {item.services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-3 rounded-full border-2 border-[#f4f4f1] flex-shrink-0 mt-1.5"></div>
                      <p className="text-[#f4f4f1] font-mono tracking-tight">{service}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#aeaa9e] p-6 font-mono flex items-center gap-4 mt-8">
                  <img 
                    src={item.caseStudy.thumbnail}
                    className="w-20 h-20 object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#464134] font-bold text-xl mb-2">
                      {item.caseStudy.title}
                    </h3>
                    <p className="text-[#464134] text-sm leading-relaxed">
                      {item.caseStudy.description}
                    </p>
                    <Link to={"/contact"} className="text-[#464134] text-sm mt-3 flex items-center gap-2 hover:gap-3 transition-all">
                      Get In Touch <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;