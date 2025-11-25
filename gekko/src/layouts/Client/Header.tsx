import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ClientHeader = () => {
  const [open, setOpen] = useState(false);
  const [visible] = useState(true);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 py-5"
    >
      <div className="max-w-[1280px] mx-auto px-5 h-full flex items-center justify-between">
        <Link to="/" className="text-xl text-white font-oswald font-bold">
          GEKKO
        </Link>
        <nav className="flex items-center text-white space-x-10 text-xl font-oswald font-bold  tracking-tight">
          <Link to="/about">ABOUT</Link>
          <Link to="/work">WORK</Link>
          <button
            onClick={() => {
              const footer = document.querySelector("footer");
              footer?.scrollIntoView({ behavior: "smooth" });
            }}>
            CONTACT
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default ClientHeader;