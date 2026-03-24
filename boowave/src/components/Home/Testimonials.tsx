import { useState } from 'react';

const faqs = [
  {
    question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
    answer: "Smaller pages take 3–5 days. Full sites or apps vary between 2–4 weeks depending on complexity."
  },
  {
    question: "DO YOU HANDLE DEVELOPMENT?",
    answer: "Yes, we handle both design and development end-to-end, from wireframes to production-ready code."
  },
  {
    question: "WHAT DO I NEED TO GET STARTED?",
    answer: "Just a brief about your project goals, target audience, and any references you like. We'll take it from there."
  }
];

const Testimonials = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-14 pt-14 pb-14">
      <p className="text-white text-sm tracking-[0.2em] uppercase mb-4">( FAQ )</p>

      <h1 className="text-6xl text-white font-black mb-10">
        HELP & <span className="text-[#e11010]">ANSWERS.</span>
      </h1>

      <div className="grid grid-cols-2 gap-6 max-w-6xl">
        <div className="mt-4 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-black text-sm tracking-wide ${openIndex === i ? 'text-[#e11010]' : 'text-[#1a1a1a]'}`}>
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-[#1a1a1a] ml-4 flex-shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#555]  leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 rounded-lg overflow-hidden h-fit">
          <img
            src="/img/1.png"
            className="w-full h-full object-cover"
          />
          <div className="bg-white p-8 flex flex-col justify-between">
            <div>
              <p className="font-black text-sm text-[#1a1a1a] mb-3 ">
                STILL GOT UNANSWERED QUESTIONS?
              </p>
              <p className="text-sm text-[#555] leading-relaxed">
                We're always ready to help you out!
              </p>
            </div>
            <button className="bg-black text-white text-xs font-black tracking-widest px-5 py-3 rounded-full hover:bg-black transition-colors duration-200  w-fit">
              CONTACT SUPPORT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;