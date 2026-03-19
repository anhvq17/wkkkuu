import { Link } from "react-router-dom"
import type { ReactNode } from "react"

const NavPill = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="inline-block text-white px-4 py-2 border border-[#c8c4bb] rounded-full text-xs font-black tracking-wide transition-all duration-200 hover:bg-white hover:text-black"
  >
    {children}
  </Link>
)

const ClientFooter = () => {
  return (
    <footer className="mx-auto bg-black">
      <div className="px-12 pt-12">
        <div className="text-[#d0190f] font-black leading-none tracking-tighter select-none mb-10 text-[clamp(80px,14vw,200px)] text-center">
          B<span className="text-white">⚈⚈</span>WAVE.
        </div>

        <div className="grid grid-cols-2 gap-20 pb-12">
          <div>
            <p className="font-black text-white uppercase leading-tight mt-5 max-w-sm text-2xl">
              CREATING MEANINGFUL BRANDS THROUGH <br />STRATEGY AND DESIGN. <span className="text-[#d0190f]">ALWAYS & ALL WAYS.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="text-white mb-4">Explore</p>
              <div className="flex flex-wrap gap-2">
                {["HOME", "ABOUT", "SERVICES", "PROJECTS", "BLOGS", "CONTACT US"].map((item) => (
                  <NavPill key={item} to="#">{item}</NavPill>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white mb-4">Utilities</p>
              <div className="flex flex-wrap gap-2">
                {["STYLE GUIDE", "LICENSE", "PROTECTED PASSWORD", "404 ERROR", "CHANGELOG"].map((item) => (
                  <NavPill key={item} to="#">{item}</NavPill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white px-12 py-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <p className="text-white">wave us</p>
          <p className="font-black text-[#d0190f] tracking-wide">
            BOOWAVE@GMAIL.COM
          </p>
        </div>

        <p className="text-white text-center mt-2">
          © Copyright - <span className="text-[#d0190f] font-bold">Boowave.</span> | Powered by{" "}
          <span className="text-[#d0190f] font-bold">Webflow</span>
          {" "}| Made By{" "}
          <span className="text-[#d0190f] font-bold">Wkkkuu</span>
        </p>

        <div className="flex items-center bg-[#1a1a1a] rounded-full pl-4 pr-2 py-2 gap-3">
          <div className="flex gap-2 items-center">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-black block" />
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-black block" />
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white flex items-center gap-1 bg-transparent border-none cursor-pointer">
            scroll to <span className="text-[14px]">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default ClientFooter;