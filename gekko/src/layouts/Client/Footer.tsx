import { Link } from "react-router-dom"
import { useState } from "react"

const ClientFooter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="mx-auto bg-black font-oswald">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="text-center mt-6 mb-12">
          <h1 className="text-5xl font-light text-white mb-2 leading-tight tracking-tight inline-block max-w-full text-center">
            I WOULD LOVE TO HEAR FOR YOU
          </h1>
          <p className="text-gray-400 font-light text-xl">
            For questions, queries or just to say hi, your message is welcome. Don't be shy!
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          {submitted ? (
            <div className="border-2 border-white font-light text-center py-12 px-6">
              <p className="text-white text-2xl mb-2">Thank you!</p>
              <p className="text-white text-2xl">Your submission has been received!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="email" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-2 py-5 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 outline-none focus:border-white transition-colors text-lg"
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-10 rounded-full border-2 text-white border-white flex items-center justify-center hover:w-32 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          )}
        </div>

        <div className="flex justify-center gap-16 mb-16 text-white italic font-light text-xl tracking-tight">
          <Link to="#" className="inline-block transition-all duration-300 hover:tracking-wider">
            STYLE GUIDE
          </Link>
          <Link to="#" className="inline-block transition-all duration-300 hover:tracking-wider">
            LICENSING
          </Link>
          <Link to="#" className="inline-block transition-all duration-300 hover:tracking-wider">
            CHANGE LOG
          </Link>
          <Link to="#" className="inline-block transition-all duration-300 hover:tracking-wider">
            INSTRUCTIONS
          </Link>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center font-light text-xl tracking-tight italic">
          <div className="flex gap-16">
            <p className="text-white inline-block transition-all duration-300 hover:tracking-wider">
              DEVELOPED BY <span className="text-[#f57e81]">WKKKUU</span>
            </p>
            <p className="text-white inline-block transition-all duration-300 hover:tracking-wider">
              POWERED BY <span className="text-[#f57e81]">WEBFLOW</span>
            </p>
          </div>
          <button 
            className="text-white mt-3 sm:mt-0 items-center italic inline-block transition-all duration-300 hover:tracking-wider" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SCROLL TO<span className="text-[#f57e81] ml-1">TOP</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default ClientFooter;