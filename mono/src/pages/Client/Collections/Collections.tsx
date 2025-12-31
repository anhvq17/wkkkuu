import Gallery from "../../../components/Collections/Gallery";

const Collections = () => {
  return (
    <div className="relative w-full bg-black">
      <section className="flex flex-col justify-center max-w-[1280px] mx-auto px-8 pt-28 pb-3">
        <div className="max-w-[1200px] flex items-start gap-72">
            <h1 className="text-lg font-bbh text-white whitespace-nowrap">
                Collections
            </h1>
            <h1 className="text-2xl text-white text-left md:text-justify">
                <span className="font-medium tracking-tighter">
                    From ancient artifacts to contemporary masterpieces, our collections
                    span centuries of human creativity and innovation.
                    Each gallery invites you to explore history, culture and art through
                    objects that have shaped the world.
                </span>
            </h1>
        </div>
      </section>

      <Gallery />
    </div>
  );
};

export default Collections;