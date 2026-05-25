import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Houses from "../components/Houses";
import Interiors from "../components/Interiors";

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};



export default function InteriorSection() {
  return (
    <div className="bg-[#F8F5F0] text-[#1A1A1A] overflow-hidden">

      {/* 🔶 HERO INTERIOR */}
      <section className="relative h-screen flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          className="absolute w-full h-full object-cover" alt="construction"
        />

        <div className="absolute inset-0 bg-[#0A1F44]/60"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center z-10 px-6"
        >
          <h1 className="text-4xl md:text-7xl font-semibold text-[#C9A646] tracking-wide">
            Luxury Interior Design
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-lg">
            Transforming spaces into elegant living experiences
          </p>
        </motion.div>
      </section>

      {/* 🔶 SLIDING CONTENT */}
      <section className="py-20 px-6 md:px-20 bg-white">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="text-3xl md:text-5xl text-[#0A1F44] mb-6">
              Modern Living Interiors
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We design interiors that blend elegance, comfort, and functionality.
              From modular kitchens to luxury living rooms, every detail is crafted
              with precision and premium materials.
            </p><br/>
          <Link
            to="/Interiors" className="mt-6 px-6 py-3 bg-[#C9A646] text-white rounded-full hover:opacity-90 transition"
            >
            Explore Designs
          </Link>
 
          </motion.div>

          <motion.img
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* 🔶 SERVICES GRID */}
      <section className="py-20 bg-[#0A1F44] text-white text-center px-6 md:px-20">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-4xl text-[#C9A646] mb-12"
        >
          Interior Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-md p-6 rounded-xl">

          {[
            "Modular Kitchen",
            "Wardrobe Design",
            "False Ceiling",
            "Lighting Design",
            "Living Room Interiors",
            "Bedroom Interiors",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}

        </div>
      </section>

      <Interiors/>
 <Houses/>
      {/* 🔶 IMAGE SLIDER STYLE GRID */}
      <br/>
  

      

      {/* 🔶 CTA */}
      <section className="py-20 bg-[#C9A630] text-center text-white">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl md:text-5xl mb-6"
        >
          Design Your Dream Interior
        </motion.h2>

        <p className="mb-6">
          Get customized interior solutions with premium finish.
        </p>

        <button className="px-8 py-3 bg-[#0A1F44] rounded-full">
          Get Free Consultation
        </button>
      </section>

    </div>
  );
}