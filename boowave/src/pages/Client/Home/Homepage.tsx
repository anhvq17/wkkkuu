import Column from "../../../components/Home/Column";
import ScrollText from "../../../components/Home/ScrollText";
import Projects from "../../../components/Home/Projects";
import Testimonials from "../../../components/Home/Testimonials";
import News from "../../../components/Home/News";

const Homepage = () => {
  return (
    <div className="bg-black relative w-full overflow-hidden">
      <Column />

      <ScrollText />

      <Projects />

      <Testimonials />

      <News />
    </div>
  )
}

export default Homepage;