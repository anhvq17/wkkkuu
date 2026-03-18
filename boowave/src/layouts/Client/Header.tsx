import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ClientHeader = () => {
  const [open, setOpen] = useState(false);

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
    <header className="bg-black relative top-0 left-0 w-full z-50 py-5">
      <div className="max-w-[1280px] mx-auto pt-3 px-10 h-full flex items-center justify-between">
        <Link to="/" className="text-4xl text-[#e11010] font-bold tracking-tighter">
          B<span className="text-white">⚈⚈</span>WAVE.
        </Link>

        <div className="flex items-center gap-2">
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className="relative px-7 py-2.5 rounded-full bg-white flex flex-col items-center justify-center gap-1 transition"
          >
            <span className={`block w-4 h-[2px] bg-[#e11010] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-4 h-[2px] bg-[#e11010] transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-4 h-[2px] bg-[#e11010] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-[100px] bg-white shadow-xl overflow-hidden"
          >
            <div className="max-w-[1280px] mx-auto px-10 py-12 grid grid-cols-[1fr_400px] gap-16">
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-4 gap-10">
                  {[
                    { label: "Main Page", items: ["Home", "About", "Contact Us"] },
                    { label: "Others", items: ["Services", "Projects", "Blogs"] },
                    { label: "Utilities", items: ["Style Guide", "License", "Changelog"] },
                    { label: "Socials", items: ["Instagram", "LinkedIn", "X (Twitter)"] },
                  ].map((col) => (
                    <motion.div
                      key={col.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-black mb-5">( {col.label} )</p>
                      <ul className="space-y-3">
                        {col.items.map((item) => (
                          <li key={item}>
                            <Link
                              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                              onClick={() => setOpen(false)}
                              className="text-black text-xl font-semibold hover:text-[#e11010] transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl pt-24 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-black font-medium">
                    <span>🔗</span>
                    <span className="underline">www.boowave.com</span>
                  </div>
                  <div className="flex items-center gap-2 pr-14">
                    <button className="bg-black text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-gray-800 transition">
                      ALL PAGES
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-[#e11010] text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-red-700 transition"
                    >
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-5">
                <p className="text-[#e11010] font-black text-xl tracking-tight">
                  B<span className="text-white">⚈⚈</span>WAVE.
                </p>
                <p className="text-white font-bold text-2xl leading-tight tracking-tight">
                  CREATIVE DIGITAL AGENCY<br />WEBFLOW TEMPLATE.
                </p>
                <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition">
                  LEARN MORE
                </button>
                <div className="w-full bg-white rounded-xl p-4 mt-2">
                  <p className="text-[#e11010] font-black text-xl leading-none">ALWAYS & ALL WAYS.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ClientHeader;