import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ravi Kumar",
    text: "Aurum Estates delivered exactly what they promised. The quality and transparency were outstanding.",
  },
  {
    name: "Sneha Reddy",
    text: "Very professional team. Smooth process from booking to handover. Highly recommended.",
  },
  {
    name: "Arjun Mehta",
    text: "Premium construction quality and great customer support throughout the project.",
  },
  {
    name: "Priya Sharma",
    text: "Loved the design and finishing. Truly a luxury experience working with them.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#EFEAE2] text-center px-6 relative overflow-hidden">

      <h2 className="text-3xl md:text-4xl text-[#C9A646] mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-4xl mx-auto relative">

        {/* SLIDE */}
        <div className="relative h-[200px] flex items-center justify-center">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out px-6 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">

                <p className="text-gray-700 italic mb-6 text-sm md:text-base leading-relaxed">
                  “{item.text}”
                </p>

                <h4 className="text-[#1A1A1A] font-semibold">
                  – {item.name}
                </h4>

              </div>
            </div>
          ))}

        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-[#C9A646] hover:text-white transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-[#C9A646] hover:text-white transition"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? "bg-[#C9A646]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}