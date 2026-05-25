import { motion } from "framer-motion";
import {
  FaHome,
  FaFileSignature,
  FaRulerCombined,
  FaMapMarkedAlt,
  FaRoad,
  FaWater,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const specs = [
  { title: "Project Type", value: "Residential Plots Layout", icon: <FaHome /> },
  { title: "Approval", value: "RERA / BMRDA Approved", icon: <FaFileSignature /> },
  { title: "Total Area", value: "5+ Acres Development", icon: <FaRulerCombined /> },
  { title: "Plot Sizes", value: "30x40 | 40x60 | Custom", icon: <FaMapMarkedAlt /> },
  { title: "Road Width", value: "30ft & 40ft Roads", icon: <FaRoad /> },
  { title: "Water Facility", value: "24/7 Borewell Supply", icon: <FaWater /> },
  { title: "Electricity", value: "Underground Cabling", icon: <FaBolt /> },
  { title: "Security", value: "Gated Community", icon: <FaShieldAlt /> },
];

export default function ModernSpecs() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#0A1F44] text-white">

      {/* 🔶 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-3xl md:text-5xl text-[#C9A646] mb-16"
      >
        Project Specifications
      </motion.h2>

      {/* 🔶 GRID */}
      <div className="grid md:grid-cols-4 gap-8">

        {specs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg group"
          >

            {/* 🔶 ICON */}
            <div className="text-[#C9A646] text-2xl mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* 🔶 TITLE */}
            <h3 className="text-sm text-gray-300 mb-1">
              {item.title}
            </h3>

            {/* 🔶 VALUE */}
            <p className="text-white font-semibold text-lg">
              {item.value}
            </p>

            {/* 🔥 GOLD GLOW EFFECT */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C9A646] transition"></div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}