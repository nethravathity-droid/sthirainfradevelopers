import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "300+", label: "Happy Clients" },
  { number: "100%", label: "Legal Clear Titles" },
];

const services = [
  "Residential Plots",
  "Commercial Plots",
  "FarmLand",
  "Apartments",
  "Gated Villa Communities",
  "Township Layout",
];

const slides = [
  {
    id: 1,
    image: "/images/plot.png",
    title: "Residential Plots",
    subtitle: "Well‑planned Gated Community Plots.",
  },
  {
    id: 2,
    image: "/images/villa.png",
    title: "Villa Plots",
    subtitle: "Spacious plots for independent villas.",
  },
  {
    id: 3,
    image: "/images/farmland.png",
    title: "Farm Land",
    subtitle: "Peaceful farmland options for weekend homes and investment.",
  },
];


export default function PremiumCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="bg-white py-20 relative overflow-hidden">
 <div className="bg-[#F8F5F0] text-[#1A1A1A] font-sans overflow-x-hidden">

      {/* 🔶 HERO VIDEO */}
        <section className="py-20 bg-black text-white relative overflow-hidden">

      {/* 🔶 GOLD GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A646]/10 via-transparent to-[#C9A646]/10"></div>

      {/* 🔶 CONTENT */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center relative z-10">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative group p-6"
          >

            {/* 🔥 SHINING GOLD NUMBER */}
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C9A646] via-[#FFF3C4] to-[#C9A646] bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
              {item.number}
            </h3>

            {/* 🔶 LABEL */}
            <p className="text-gray-400 mt-3 text-sm tracking-wide">
              {item.label}
            </p>

            {/* 🔥 UNDERLINE GLOW */}
            <div className="mt-4 h-[2px] w-0 bg-[#C9A646] group-hover:w-full transition-all duration-500 mx-auto"></div>

          </motion.div>
        ))}

      </div>

    </section>

      {/* 🔶 ABOUT */}
<motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative py-20 md:py-28 px-6 md:px-20 bg-white text-center overflow-hidden"
    >

      {/* 🔶 SOFT NAVY GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44]/5 via-transparent to-[#0A1F44]/5"></div>

      {/* 🔶 CARD CONTAINER */}
      <div className="relative max-w-3xl mx-auto p-10 rounded-2xl border border-white/40 shadow-xl backdrop-blur-md">

        {/* 🔥 SHINING BORDER EFFECT */}
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#0A1F44]/20 via-white/60 to-[#0A1F44]/20 opacity-40 blur-sm"></div>

        {/* 🔶 TITLE */}
        <h2 className="relative text-3xl md:text-5xl mb-6 font-semibold
          bg-gradient-to-r from-[#0A1F44] via-[#C9A646] to-[#0A1F44]
          bg-clip-text text-transparent animate-shine">
          About Us
        </h2>

        {/* 🔶 TEXT */}
        <p className="relative text-gray-600 leading-relaxed text-sm md:text-base
          bg-gradient-to-r from-gray-500 via-gray-700 to-gray-500
          bg-clip-text text-transparent animate-shine-slow">
          Sthira Infra Developers focused on creating sustainable, value‑driven residential and commercial properties for modern families and investors, with an emphasis on well‑planned plots, clear titles and long‑term stability.
        </p>

      </div>
    </motion.section>

      {/* 🔶 PROJECTS */}
      
      {/* 🔶 SERVICES */}
      <section className="py-20 md:py-28 px-6 md:px-20 bg-[#0A1F44] text-white relative overflow-hidden">

      {/* 🔶 GOLD BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A646]/10 via-transparent to-[#C9A646]/10"></div>

      {/* 🔶 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl text-center mb-16 font-semibold
        bg-gradient-to-r from-[#C9A646] via-[#FFF3C4] to-[#C9A646]
        bg-clip-text text-transparent animate-shine"
      >
        Our Services
      </motion.h2>

      {/* 🔶 GRID */}
      <div className="grid gap-8 md:grid-cols-3 relative z-10">

        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative p-[2px] rounded-2xl group"
          >

            {/* 🔥 GLOW BORDER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C9A646] via-[#1E3A8A] to-[#C9A646] opacity-30 blur-md group-hover:opacity-60 transition"></div>

            {/* 🔶 CARD */}
            <div className="relative bg-[#0F2A5A] backdrop-blur-md rounded-2xl p-8 text-center border border-white/10">

              {/* ✨ SERVICE TEXT */}
              <h3 className="text-lg md:text-xl font-medium
                bg-gradient-to-r from-white via-[#FFF3C4] to-white
                bg-clip-text text-transparent animate-shine">
                {service}
              </h3>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
      {/* 🔶 CTA */}    <section className="relative py-24 px-6 text-center overflow-hidden bg-[#F6F1E7]">

      {/* 🔶 SOFT GOLD GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A646]/20 via-white to-[#C9A646]/20"></div>

      {/* 🔶 NAVY + BLACK GLITTER LAYER */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#0A1F44_1px,_transparent_1px)] [background-size:20px_20px]"></div>

      {/* 🔶 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative max-w-3xl mx-auto p-10 rounded-2xl border border-[#0A1F44]/20 backdrop-blur-md shadow-xl"
      >

        {/* 🔥 SHINING BORDER EFFECT */}
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#0A1F44]/30 via-[#C9A646]/40 to-[#0A1F44]/30 opacity-40 blur-sm"></div>

        {/* 🔶 TITLE */}
        <h2 className="relative text-3xl md:text-5xl mb-4 font-semibold
          bg-gradient-to-r from-white via-[#FFF3C4] to-white
          bg-clip-text text-transparent animate-shine">
          Build Your Dream Property
        </h2>

        {/* 🔶 TEXT */}
        <p className="relative mb-8 text-gray-700 text-sm md:text-base
          bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600
          bg-clip-text text-transparent animate-shine-slow">
Premium residential and commercial projects, crafted with integrity, sustainability.        </p>

        {/* 🔶 BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="relative px-10 py-3 rounded-full font-semibold overflow-hidden border border-[#0A1F44]/30"
        >

          {/* BUTTON BACKGROUND */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#C9A646] to-[#0A1F44] opacity-90"></span>

          {/* BUTTON TEXT */}

          <Link
            to="/contact"
className="relative text-white tracking-wide"
          >
           Contact Us
          </Link>   
        </motion.button>

      </motion.div>

    </section>

      {/* 🔶 FOOTER */}

    </div> <br/><br/>
      {/* TITLE */}
<h2 className="text-center text-3xl md:text-5xl font-semibold tracking-wide mb-16
  bg-gradient-to-r from-[#0A1F44] via-[#C9A646] to-[#0A1F44]
  bg-clip-text text-transparent animate-shine">
  EXPLORE OUR PROJECTS
</h2>

<div className="relative flex items-center justify-center bg-[#0A1F44] py-16 rounded-2xl overflow-hidden">

        {/* LEFT ARROW */}
       <button
    onClick={prev}
    className="absolute left-5 z-20 w-12 h-12 rounded-full flex items-center justify-center
    bg-white/10 backdrop-blur-md border border-white/20 text-white
    hover:bg-[#C9A646] hover:text-black transition"
  >
    ‹
  </button>

        {/* SLIDES */}
        <div className="flex items-center justify-center gap-6 w-full max-w-6xl">

          {slides.map((slide, index) => {
            const isActive = index === current;
            const isSide =
              index === (current - 1 + slides.length) % slides.length ||
              index === (current + 1) % slides.length;

            return (
              <div
                key={slide.id}
                className={`transition-all duration-500 rounded-xl overflow-hidden ${
                  isActive
                    ? "w-[60%] scale-100 opacity-100 z-10"
                    : isSide
                    ? "w-[20%] scale-90 opacity-40"
                    : "hidden"
                }`}
              >
                <div className="relative">
                  <img
                    src={slide.image} alt=""
                    className="w-full h-[400px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {slide.subtitle}
                    </p>

 
                              <Link
            to="/Projectdetails"
className="bg-yellow-500 text-black px-4 py-2 w-fit rounded hover:bg-yellow-600"
          >
          Know More →
          </Link>   
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-5 z-20 bg-white/20 hover:bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center"
        >
          ›
        </button>
      </div>

      {/* BOTTOM ACTION BAR */}
  
    </div>
  );
}