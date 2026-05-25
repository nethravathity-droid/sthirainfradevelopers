import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
];

export default function InteriorGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 px-6 md:px-20 bg-[#F8F5F0]">

      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-5xl text-[#C9A646] mb-16">
        Interior Gallery
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setActive(img)}
          >

            {/* IMAGE */}
            <img
              src={img}
              className="w-full h-60 md:h-72 object-cover transition duration-700 hover:scale-110" alt=""
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-sm tracking-wide">
                View Design
              </p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔥 MODAL VIEW */}
      {active && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            className="max-w-[90%] max-h-[90%] rounded-xl" alt=""
          />
        </div>
      )}

    </section>
  );
}