import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ClientHeader = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) setVisible(false);
      else setVisible(true);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 py-5"
    >
      <div className="max-w-[1280px] mx-auto px-5 h-full flex items-center justify-between">
        <Link to="/" className="text-4xl text-[#e11010] font-black">
          B<span className="text-white">⚈⚈</span>WAVE
        </Link>

        <div className="flex items-center gap-2">
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className="relative px-4 py-1.5 rounded-full overflow-hidden text-[#443f32] bg-[#eae7da] duration-300 flex items-center gap-1 font-normal font-mono transition"
          >
            Menu
            <ChevronDown
              size={18}
              className={`transition-transform relative top-0.5 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <Link
            to="/contact"
            className="relative px-4 py-1.5 rounded-full overflow-hidden text-white bg-[#f5797e] font-normal font-mono transition-all duration-300"
          >
            <span className="relative z-10">Contact</span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut", when: "afterChildren" }}
            className="absolute right-8 top-[77px] bg-[#eae7da] shadow-xl rounded-xl p-8 grid grid-cols-4 gap-20 origin-top overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              <div>
                <h3 className="font-orbitron font-bold text-[#443f32] text-xl tracking-wider mb-3">Pages</h3>
                <motion.ul
                  variants={{
                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="text-[#443f32] font-mono text-sm space-y-1"
                >
                  {["Main Page", "About Us", "Our Services", "Get In Touch"].map((page) => (
                    <motion.li
                      key={page}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link to={`/${page.toLowerCase().replace(/ /g, "-")}`}>
                        {page}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              <div>
                <h3 className="font-orbitron font-bold text-[#443f32] text-xl tracking-wider mb-3">Projects</h3>
                <motion.ul
                  variants={{
                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="text-[#443f32] font-mono text-sm space-y-1"
                >
                  {["All Projects", "Our Blog", "Blog Post", "Team Member"].map((page) => (
                    <motion.li
                      key={page}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link to={`/${page.toLowerCase().replace(/ /g, "-")}`}>
                        {page}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              <div>
                <h3 className="font-orbitron font-bold text-[#443f32] text-xl tracking-wider mb-3">Help</h3>
                <motion.ul
                  variants={{
                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="text-[#443f32] font-mono text-sm space-y-1"
                >
                  {["Style Guide", "Licenses", "Changelog", "Instructions"].map((page) => (
                    <motion.li
                      key={page}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link to={`/${page.toLowerCase().replace(/ /g, "-")}`}>
                        {page}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              <div>
                <h3 className="font-orbitron font-bold text-[#443f32] text-xl tracking-wider mb-3">Social</h3>
                <motion.ul
                  variants={{
                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="text-[#443f32] font-mono text-sm space-y-1"
                >
                  {["Facebook", "X (Twitter)", "Instagram", "LinkedIn"].map((page) => (
                    <motion.li
                      key={page}
                      variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link to={`/${page.toLowerCase().replace(/ /g, "-")}`}>
                        {page}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ClientHeader;