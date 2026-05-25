import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Trees,
  Landmark,
  MapPinned,
} from "lucide-react";

export default function SthiraCompanyAbout() {
  return (
    <section className="relative overflow-hidden bg-[#0A1F44] text-white py-32 px-6 lg:px-14">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-200px] left-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-180px] right-[-100px] w-[420px] h-[420px] bg-blue-600/20 blur-[150px] rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full backdrop-blur-xl mb-8">
              <Building2 size={18} className="text-cyan-400" />
              <span className="text-sm tracking-[3px] text-gray-300 uppercase">
                Sthira Infra Developers
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Turning Dreams  

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                Into Premium
              </span>
              Living Experiences
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-lg leading-[2] mb-10 max-w-2xl">
        Sthira Infra Developers creates thoughtfully designed layouts that combine modern infrastructure with long-term value. We specialize in residential plots, villa plots, commercial plots, and other development projects that are ideal for both living and investment. With a focus on transparency, quality, and trust, we aim to deliver developments that support a better future.
            </p>

            {/* BUTTONS */}
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* MAIN IMAGE CARD */}
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative max-w-[540px]"
            >

              {/* GLASS EFFECT */}
              <div className="absolute inset-0 rounded-[40px] bg-white/5 backdrop-blur-2xl border border-white/10" />

              {/* IMAGE */}
              <div className="relative p-5">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop"
                  alt="Sthira Infra"
                  className="w-full h-[680px] object-cover rounded-[35px]"
                />
              </div>

              {/* FLOATING CARD 1 */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -left-10 bottom-10 bg-[#0E1628]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-[250px]"
              >
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                  20+
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Premium residential plots delivered with legal clarity &
                  modern infrastructure.
                </p>
              </motion.div>

              {/* FLOATING CARD 2 */}
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute top-8 -right-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 w-[230px] shadow-[0_20px_60px_rgba(0,170,255,0.35)]"
              >
                <h4 className="text-3xl font-bold mb-2">2+</h4>

                <p className="text-white/90 leading-relaxed">
                  Years of excellence in plotted development projects.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">

          <FeatureCard
            icon={<ShieldCheck />}
            title="Legally Approved"
            desc="RERA, BMRDA & authority approved layouts with secure documentation."
          />

          <FeatureCard
            icon={<Trees />}
            title="Green Living"
            desc="Eco-friendly planning with parks, trees & open landscapes."
          />

          <FeatureCard
            icon={<Landmark />}
            title="Premium Infrastructure"
            desc="Underground drainage & street lighting."
          />

          <FeatureCard
            icon={<MapPinned />}
            title="Prime Connectivity"
            desc="Strategically located layouts near future growth corridors."
          />
        </div>

        {/* COMPANY DETAILS SECTION */}
        

      </div><br/><br/>
      {/* VISION & MISSION SECTION */}
<section className="relative py-28 px-6 lg:px-14 bg-[#050816] overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-cyan-500/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-[-140px] right-[-100px] w-[320px] h-[320px] bg-blue-600/20 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="text-center mb-20">

      <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm tracking-[3px] uppercase mb-6">
        Vision & Mission
      </span>

      <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.15]">
        Building
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
          Future Communities
        </span>
      </h2>
    </div>

    {/* CARDS */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* VISION CARD */}
      <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 hover:-translate-y-2 transition duration-500">

        {/* ICON */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-8 shadow-[0_20px_50px_rgba(0,180,255,0.25)]">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* CONTENT */}
        <h3 className="text-4xl font-bold text-white mb-6">
          Our Vision
        </h3>

        <p className="text-gray-400 text-lg leading-[2]">
          To become a trusted leader in premium layout development by
          creating sustainable communities, modern infrastructure, and
          future-focused layouts that enhance lifestyles and deliver
          long-term investment value.
        </p>

        {/* LIGHT EFFECT */}
        <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* MISSION CARD */}
      <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 hover:-translate-y-2 transition duration-500">

        {/* ICON */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-8 shadow-[0_20px_50px_rgba(0,100,255,0.25)]">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        </div>

        {/* CONTENT */}
        <h3 className="text-4xl font-bold text-white mb-6">
          Our Mission
        </h3>

        <p className="text-gray-400 text-lg leading-[2]">
          Our mission is to deliver legally approved layouts with modern
          amenities, transparent processes, and quality infrastructure while
          building lasting relationships based on trust, innovation, and
          customer satisfaction.
        </p>

        {/* LIGHT EFFECT */}
        <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-blue-500/10 blur-[100px]" />
      </div>
    </div>
  </div>
</section>
    </section>
  );
}

/* FEATURE CARD */
function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 rounded-[30px] p-7 backdrop-blur-xl"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

