import Column from "../../../components/Home/Column";
import ScrollText from "../../../components/Home/ScrollText";
import Projects from "../../../components/Home/Projects";
import Testimonials from "../../../components/Home/Testimonials";
import News from "../../../components/Home/News";

const Homepage = () => {
  return (
    <div className="bg-black relative w-full overflow-hidden">
      <div className="relative px-10 py-14">
        <h1 className="text-[180px] text-center text-[#e11010] font-black leading-none tracking-tighter uppercase">
          ALWAYS <span className="text-white">&</span><br/>ALL WAYS<span className="text-white">.</span>
        </h1>
      </div>

      <Column />
      <ScrollText />
      <Projects />
      <Testimonials />
      <News />
    </div>
  );
};

export default Homepage;