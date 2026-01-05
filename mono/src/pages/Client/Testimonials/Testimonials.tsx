import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
  avatars: string[];
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The new brand helped us stand out and attract our ideal customers. Highly recommend!",
      author: "Maria S.",
      role: "CEO of NextWave",
      image: "./img/testimonials/1.jpg",
      avatars: ["./img/testimonials/avatar1.jpg", "./img/testimonials/avatar2.jpg", "./img/testimonials/avatar3.jpg"]
    },
    {
      id: 2,
      quote: "This redesign was a game changer. We saw an immediate boost in engagement. Truly fantastic work!",
      author: "Kevin R.",
      role: "Founder of Vision",
      image: "./img/testimonials/2.jpg",
      avatars: ["./img/testimonials/avatar4.jpg", "./img/testimonials/avatar5.jpg", "./img/testimonials/avatar6.jpg"]
    },
    {
      id: 3,
      quote: "They grasped our core concept and delivered beyond all expectations. We are very impressed!",
      author: "Danna P.",
      role: "CMO of Aero Inc.",
      image: "./img/testimonials/3.jpg",
      avatars: ["./img/testimonials/avatar7.jpg", "./img/testimonials/avatar8.jpg", "./img/testimonials/avatar9.jpg"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 100);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid grid-cols-2 gap-0 items-center">
        <div className="relative h-[600px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transform: index === currentIndex ? "scale(1)" : "scale(1.1)",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="bg-black px-16 py-12 relative">
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute inset-0 transition-all duration-1000 ease-in-out"
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transform: index === currentIndex ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <blockquote className="text-3xl font-light leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>

                <div className="mb-8">
                  <p className="text-gray-400 text-lg">
                    {testimonial.author}, {testimonial.role}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {testimonial.avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-gray-600"
                    >
                      <img
                        src={avatar}
                        alt={`Client ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-12 bg-white" : "w-8 bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;