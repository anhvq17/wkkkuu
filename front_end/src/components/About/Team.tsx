import { Link } from "react-router-dom";

const us = [
  {
    img: "/img/about/1.png",
    name: "Michael Bierut",
    exp: "Creative Director"
  },
  {
    img: "/img/about/2.png",
    name: "Michael Gericke",
    exp: "Art Director"
  },
  {
    img: "/img/about/3.png",
    name: "Luke Hayman",
    exp: "Art Director"
  },
  {
    img: "/img/about/4.png",
    name: "Jody Hudson-Powell",
    exp: "Art Director"
  },
  {
    img: "/img/about/5.png",
    name: "Angus Hyland",
    exp: "Senior Designer"
  },
  {
    img: "/img/about/6.png",
    name: "Natasha Jen",
    exp: "Designer"
  },
  {
    img: "/img/about/7.png",
    name: "Domenic Lippa",
    exp: "Designer"
  },
  {
    img: "/img/about/8.png",
    name: "Giorgia Lupi",
    exp: "Photographer"
  },
  {
    img: "/img/about/9.png",
    name: "Samar Maakaroun",
    exp: "Photographer"
  },
  {
    img: "/img/about/10.png",
    name: "Jon Marshall",
    exp: "Videographer"
  },
  {
    img: "/img/about/11.png",
    name: "Abbott Miller",
    exp: "Videographer"
  },
  {
    img: "/img/about/12.png",
    name: "Hugh Miller",
    exp: "Stylist / Visual Curator"
  },
  {
    img: "/img/about/13.png",
    name: "Emily Oberman",
    exp: "Stylist / Visual Curator"
  },
  {
    img: "/img/about/14.png",
    name: "Justus Oehler",
    exp: "Production Manager"
  },
  {
    img: "/img/about/15.png",
    name: "Eddie Opara",
    exp: "Marketing & Communications"
  },
  {
    img: "/img/about/16.png",
    name: "Harry Pearce",
    exp: "Operations / Project Coordinator"
  },
];

const Team = () => {
  return (
    <section className="px-10 pt-40 pb-60 max-w-[1280px] mx-auto">
      <h1 className="text-7xl font-medium tracking-tighter mb-10">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {us.map((item, index) => (
          <Link to={`/about/details/${index}`} key={index} className="group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">{item.exp}</p>
            <h3 className="text-lg font-semibold leading-snug mb-8">{item.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Team;