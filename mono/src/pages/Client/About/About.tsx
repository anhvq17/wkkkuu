import Gallery from "../../../components/About/Gallery";

const About = () => {

  return (
    <div className="relative w-full bg-black">
      <section className="flex flex-col justify-center max-w-[1280px] mx-auto px-8 pt-28 pb-3">
        <div className="max-w-[1200px]">
          <h1 className="text-6xl leading-[1.1] indent-28 text-white">
            <span className="font-medium tracking-tighter">Founded to preserve and celebrate art, history and culture, our
              museum brings together treasures from across centuries and
              continents. Whether you’re passionate about ancient civilizations,
              fascinated by modern art or looking for an inspiring day out, our
              galleries and experiences offer something for everyone.</span> <br />
          </h1>
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default About;