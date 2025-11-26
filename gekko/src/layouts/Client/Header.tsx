import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ClientHeader = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "work"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 py-5"
    >
      <div className="max-w-[1280px] mx-auto px-5 h-full flex items-center justify-between">
        <Link to="/" className="text-xl text-white font-oswald font-bold">
          GEKKO
        </Link>
        <nav className="flex items-center text-white space-x-10 text-xl font-oswald font-bold tracking-tight">
          <button
            onClick={() => scrollToSection("about")}
            className={`transition-all duration-300 ${
              isActive("about") 
                ? "text-white scale-x-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                : "text-white"
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className={`transition-all duration-300 ${
              isActive("work") 
                ? "text-white scale-x-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                : "text-white"
            }`}
          >
            WORK
          </button>
          <button
            onClick={() => {
              const footer = document.querySelector("footer");
              footer?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white"
          >
            CONTACT
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default ClientHeader;