import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Modern Luxury Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Contemporary House Design",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    title: "Premium Elevation Design",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    title: "Minimal Modern Home",
  },
];

export default function ConstructionSlider() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <section className="relative h-[80vh] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* 🔶 OVERLAY */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">

        <motion.h2
          key={images[index].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-5xl font-semibold"
        >
          {images[index].title}
        </motion.h2>

      </div>

      {/* 🔶 ARROWS */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md w-10 h-10 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md w-10 h-10 rounded-full"
      >
        ›
      </button>

      {/* 🔶 DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-[#C9A646]" : "bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}