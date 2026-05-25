import { useState } from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";

const project = {
  name: "Sthira Emerald Fields",
  location: "Hosur Road, Near Attibele",
  price: " ₹18 Lakhs onwards",
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "/images/farm.jpeg",
    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
  ],
  amenities: [
    "Underground Drainage",
    "Electricity",
    "Wide Roads",
    "Street Lights",
    "Water Supply",
    "Gated Layout",
  ],
};

const projects = [
  {
    name: "Sthira Prime Meadows",
    location: " Kanakapura Road, Bengaluru",
    price: "₹52 Lakhs onwards",
    highlights: [
      "Easy to access Highway",
      "Near metro station",
      "Clear Titles & Legal Approvals",
      "Ready for Construction",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Sthira Silver Acres",
    location: "Chandapura, Bengaluru",
    price: "₹38 Lakhs onwards",
    highlights: [
      "Prime Location Growth Area",
      "Easy Access to Bangalore City",
      "Wide Roads & Layout Planning",
      "Investment Friendly Zone",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
];

export default function ProjectDetailPage() {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-[#F8F5F0]">

      {/* 🔶 IMAGE SLIDER */}
      <section className="relative h-[70vh]">

        <img
          src={project.images[index]}
          className="w-full h-full object-cover transition duration-700" alt="project"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            {project.name}
          </h1>
          <p className="text-gray-200">{project.location}</p>
        </div>

        {/* ARROWS */}
        <button
          onClick={() =>
            setIndex((index - 1 + project.images.length) % project.images.length)
          }
          className="absolute left-5 top-1/2 bg-white/30 w-10 h-10 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setIndex((index + 1) % project.images.length)
          }
          className="absolute right-5 top-1/2 bg-white/30 w-10 h-10 rounded-full"
        >
          ›
        </button>

      </section>


      <section className="py-24 px-6 md:px-20 bg-[#F8F5F0]">

      {/* 🔶 TITLE */}
      <h2 className="text-center text-3xl md:text-5xl text-[#C9A646] mb-16">
        Our Premium Layout Projects
      </h2>

      <div className="space-y-20">

        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={proj.image}
                className="w-full h-[350px] object-cover hover:scale-110 transition duration-700" alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">
                  {proj.name}
                </h3>
                <p className="text-sm">{proj.location}</p>
              </div>
            </div>

            {/* CONTENT */}
            <div>

              <h3 className="text-2xl md:text-3xl text-[#0A1F44] mb-4">
                {proj.name}
              </h3>

              <p className="text-gray-600 mb-4">
                Located in {proj.location}, this premium layout offers
                excellent connectivity and high future appreciation value.
              </p>

              {/* PRICE */}
              <p className="text-xl text-[#C9A646] font-semibold mb-6">
                {proj.price}
              </p>

              {/* HIGHLIGHTS */}
              <ul className="space-y-2 mb-6 text-gray-700">
                {proj.highlights.map((item, idx) => (
                  <li key={idx}>✔ {item}</li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <button className="bg-[#C9A646] text-white px-6 py-3 rounded-full hover:opacity-90">
                  View Details
                </button>

                <button className="border border-[#C9A646] text-[#C9A646] px-6 py-3 rounded-full">
                  Get Quote
                </button>
              </div>

            </div>

          </motion.div>
        ))}

      </div><br/><br/>
    </section>

    <Project/>

<section className="py-16 px-6 md:px-20 bg-[#F8F5F0]">

  <h2 className="text-3xl text-[#C9A646] mb-10 text-center">
    Location Advantages
  </h2>

  <div className="grid md:grid-cols-3 gap-6 text-gray-700">

    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Highway Access</h3>
      <p>"Excellent road connectivity"</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Nearby Developments</h3>
      <p>Close to Metro & Industrial Zones</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Connectivity</h3>
      <p>Close to shopping and entertainment zones</p>
    </div>

  </div>
</section>

<section className="py-16 px-6 md:px-20 bg-white text-center">

  <h2 className="text-3xl text-[#C9A646] mb-10">
    Investment Highlights
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {[
      "High appreciation potential",
      "Ideal for long-term investment",
      "Premium infrastructure development",
      "Smart asset creation opportunity",
    ].map((item, i) => (
      <div key={i} className="bg-[#F8F5F0] p-6 rounded-xl shadow">
        {item}
      </div>
    ))}

  </div>
</section>

<section className="py-16 px-6 md:px-20 bg-[#0A1F44] text-white text-center">

  <h2 className="text-3xl text-[#C9A646] mb-6">
    Legal & Documentation
  </h2>

  <p className="max-w-2xl mx-auto text-gray-300">
    All projects come with clear titles, legal approvals, and transparent
    documentation ensuring safe and secure investment for our clients.
  </p>

</section>


    </div>
  );
}