import { useRef, useState, useEffect } from "react";
import TextLayer from "../../../components/Home/TextLayer";
import TextScroll from "../../../components/Home/TextScroll";

const Homepage = () => {
  const ref = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const circleRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const trail = useRef<{ x: number; y: number }[]>([]);
  const TRAIL_LENGTH = 5;

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = (x: number, y: number) => {
      circleRef.current.x = lerp(circleRef.current.x, x, 0.1);
      circleRef.current.y = lerp(circleRef.current.y, y, 0.1);
      setMousePosition({ x: circleRef.current.x, y: circleRef.current.y });

      trail.current.unshift({ x: circleRef.current.x, y: circleRef.current.y });
      if (trail.current.length > TRAIL_LENGTH) trail.current.pop();

      if (isHovering) animationFrameRef.current = requestAnimationFrame(() => animate(x, y));
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      animate(x, y);
    };

    const section = ref.current;
    if (!section) return;

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", () => setIsHovering(true));
    section.addEventListener("mouseleave", () => {
      setIsHovering(false);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      trail.current = [];
    });

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", () => setIsHovering(true));
      section.removeEventListener("mouseleave", () => {
        setIsHovering(false);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        trail.current = [];
      });
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isHovering]);

  return (
    <div className="bg-black relative w-full overflow-hidden">
      <section ref={ref} className="relative w-full flex justify-center px-0 pb-3 cursor-none">
        <div className="relative w-full flex justify-center h-[639px]">
          <div className="absolute inset-0 w-full h-full">
            <img src="img/banner.jpg" className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute inset-0 w-full h-full bg-black"
            style={{
              clipPath: isHovering
                ? `circle(250px at ${mousePosition.x}px ${mousePosition.y}px)`
                : "circle(0px at 50% 50%)",
              transition: isHovering ? "none" : "clip-path 0.5s ease-out",
            }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-white text-6xl font-extralight font-oswald text-center px-8 leading-tight">
                <div className="drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)]">
                  <TextLayer />
                </div>
              </div>
            </div>
          </div>

          {isHovering &&
            trail.current.map((pos, i) => (
              <div
                key={i}
                className="absolute pointer-events-none rounded-full border-white"
                style={{
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  width: "500px",
                  height: "500px",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 50px rgba(255,255,255,0.3)",
                  opacity: (1 - i / TRAIL_LENGTH) * 0.6,
                }}
              />
            ))}
        </div>
      </section>

      <TextScroll />
    </div>
  );
};

export default Homepage;
