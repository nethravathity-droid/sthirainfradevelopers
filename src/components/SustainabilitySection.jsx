import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Premium Quality Construction",
  "Transparent Legal Process",
  "Prime Locations",
  "On-Time Delivery",
  "Modern Architecture",
  "Customer First Approach",
];
export default function SustainabilitySection() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <section className="bg-white text-black py-20 overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* IMAGE */}
        <div
          className={`transform transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <img
            src="/images/company.png"
            className="rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.2)]" alt="sustainability"
          />
        </div>

        {/* CONTENT */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-500">
            Commitment to Sustainability
          </h2>

          <p className="text-[#0A1F44]-300 mb-6 leading-relaxed">
            We are redefining Property Developers with sustainability at the core.
            Our developments are designed to minimize environmental impact
            while maximizing quality of life.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-6 text-sm">

            <div className="flex gap-3">
              <span className="text-yellow-500 text-xl">🌿</span>
              <p>15% reduction in carbon emissions</p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 text-xl">🏆</span>
              <p>14.8M sq.ft green certified portfolio</p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 text-xl">💧</span>
              <p>84% wastewater recycling increase</p>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 text-xl">♻️</span>
              <p>100% treated water reuse</p>
            </div>

          </div>
<br/>
          {/* BUTTON */}
                              <Link
            to="/about"
className="bg-yellow-500 text-black px-4 py-2 w-fit rounded hover:bg-yellow-600"
          >
          Know More →
          </Link> 
        </div>
        
      </div><br/><br/>
 <section className="py-24 px-6 md:px-20 bg-[#F8F5F0] relative overflow-hidden">

      {/* 🔶 SOFT GOLD + NAVY GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A646]/10 via-white to-[#0A1F44]/5"></div>

      {/* 🔶 TITLE */}
<h2 className="text-center text-3xl md:text-5xl font-semibold tracking-wide mb-16
  bg-gradient-to-r from-[#0A1F44] via-[#C9A646] to-[#0A1F44]
  bg-clip-text text-transparent animate-shine">
        Why Choose Sthira Infra Developers
      </h2>

      {/* 🔶 GRID */}
      <div className="grid md:grid-cols-3 gap-10 perspective">

        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              rotateY: 6,
              rotateX: -4,
              scale: 1.05,
            }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >

            {/* 🔥 GLOW LAYER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C9A646]/30 via-white/40 to-[#0A1F44]/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            {/* 🔶 CARD */}
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-black/5 backdrop-blur-md">

              {/* GOLD TOP LINE */}
              <div className="w-10 h-[3px] bg-[#C9A646] mb-4 mx-auto"></div>

              {/* TEXT */}
              <p className="text-[#1A1A1A] font-medium text-sm md:text-base">
                {item}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>

    </section>
    
  );
}