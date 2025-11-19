import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Patagon completely redefined how we present ourselves. Their team turned our scattered ideas into a cohesive brand identity.",
    name: "Philip H. Knight",
    title: "Chairman Emeritus",
    img: "/img/testimonials/01.jpg"
  },
  {
    quote: "Patagon was like an extension of our team. They brought clarity to our strategy and delivered campaign assets that actually moved the needle.",
    name: "Mark Parker",
    title: "Executive Chairman",
    img: "/img/testimonials/02.jpg"
  },
  {
    quote: "We wanted a brand presence that would impress Fortune 500 clients while still feeling approachable. Patagon struck that balance perfectly.",
    name: "Nicole Graham",
    title: "Chief Marketing Officer",
    img: "/img/testimonials/03.jpg"
  },
  {
    quote: "From logo to launch campaign, Patagon guided us every step of the way. Their process was seamless, and the end result elevated our brand to a new level.",
    name: "Phil McCartney",
    title: "Product Officer",
    img: "/img/testimonials/04.jpg"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="px-10 pt-14 pb-28">
      <h1 className="text-7xl text-[#f4f4f1] font-bold font-orbitron tracking-tight text-center mb-10">
        Client Words
      </h1>

      <div className="relative flex items-center justify-center mx-auto" style={{ maxWidth: '1400px' }}>
        <div 
          className="absolute bg-[#eae7da] p-6 flex flex-col justify-between shadow-2xl"
          style={{
            width: '240px',
            height: '420px',
            transform: isVisible
              ? 'translateX(-510px) translateY(0) scale(1)' 
              : 'translateX(0) translateY(20px) scale(0.95)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: isVisible ? 1 : 5
          }}
        >
          <p className="text-base mb-6 leading-relaxed font-mono text-center text-[#443f32]">
            "{testimonials[0].quote}"
          </p>
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={testimonials[0].img}
              className="w-20 h-20 rounded-full object-cover"
              alt={testimonials[0].name}
            />
            <div className="font-mono">
              <p className="font-semibold text-base text-[#443f32]">{testimonials[0].name}</p>
              <p className="text-sm text-gray-500">{testimonials[0].title}</p>
            </div>
          </div>
        </div>

        <div 
          className="absolute bg-[#eae7da] p-6 flex flex-col justify-between shadow-2xl"
          style={{
            width: '240px',
            height: '420px',
            transform: isVisible
              ? 'translateX(-270px) translateY(0) scale(1)' 
              : 'translateX(0) translateY(20px) scale(0.95)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            zIndex: isVisible ? 2 : 4
          }}
        >
          <p className="text-base mb-6 leading-relaxed font-mono text-center text-[#443f32]">
            "{testimonials[1].quote}"
          </p>
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={testimonials[1].img}
              className="w-20 h-20 rounded-full object-cover"
              alt={testimonials[1].name}
            />
            <div className="font-mono">
              <p className="font-semibold text-base text-[#443f32]">{testimonials[1].name}</p>
              <p className="text-sm text-gray-500">{testimonials[1].title}</p>
            </div>
          </div>
        </div>

        <div 
          className="relative shadow-2xl"
          style={{
            width: '300px',
            height: '420px',
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            opacity: isVisible ? 1 : 0.5,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            zIndex: 3
          }}
        >
          <img
            src="/img/testimonials/center.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="absolute bg-[#eae7da] p-6 flex flex-col justify-between shadow-2xl"
          style={{
            width: '240px',
            height: '420px',
            transform: isVisible 
              ? 'translateX(270px) translateY(0) scale(1)' 
              : 'translateX(0) translateY(20px) scale(0.95)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            zIndex: isVisible ? 2 : 4
          }}
        >
          <p className="text-base mb-6 leading-relaxed font-mono text-center text-[#443f32]">
            "{testimonials[2].quote}"
          </p>
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={testimonials[2].img}
              className="w-20 h-20 rounded-full object-cover"
              alt={testimonials[2].name}
            />
            <div className="font-mono">
              <p className="font-semibold text-base text-[#443f32]">{testimonials[2].name}</p>
              <p className="text-sm text-gray-500">{testimonials[2].title}</p>
            </div>
          </div>
        </div>

        <div 
          className="absolute bg-[#eae7da] p-6 flex flex-col justify-between shadow-2xl"
          style={{
            width: '240px',
            height: '420px',
            transform: isVisible 
              ? 'translateX(510px) translateY(0) scale(1)' 
              : 'translateX(0) translateY(20px) scale(0.95)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: isVisible ? 1 : 5
          }}
        >
          <p className="text-base mb-6 leading-relaxed font-mono text-center text-[#443f32]">
            "{testimonials[3].quote}"
          </p>
          <div className="flex flex-col items-center text-center gap-3">
            <img
              src={testimonials[3].img}
              className="w-20 h-20 rounded-full object-cover"
              alt={testimonials[3].name}
            />
            <div className="font-mono">
              <p className="font-semibold text-base text-[#443f32]">{testimonials[3].name}</p>
              <p className="text-sm text-gray-500">{testimonials[3].title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;