import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#0A1F44] text-white min-h-screen">

      {/* HEADER */}
      <div className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A646]/20 via-transparent to-[#C9A646]/20 blur-3xl"></div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-wide bg-gradient-to-r from-[#C9A646] to-[#E5C76B] bg-clip-text text-transparent">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-300">
          Connect with us for premium living experiences
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <div className="bg-white/10 backdrop-blur-lg border border-[#C9A646]/30 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-[#C9A646]">
            Get in Touch
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-gray-400/40 p-3 rounded focus:outline-none focus:border-[#C9A646]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-400/40 p-3 rounded focus:outline-none focus:border-[#C9A646]"
            />

<input
  type="tel"
  placeholder="Phone Number"
  pattern="[6-9]{1}[0-9]{9}"
  maxLength="10"
  required
              className="w-full bg-transparent border border-gray-400/40 p-3 rounded focus:outline-none focus:border-[#C9A646]"
/>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent border border-gray-400/40 p-3 rounded focus:outline-none focus:border-[#C9A646]"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-black 
              bg-gradient-to-r from-[#C9A646] to-[#E5C76B]
              shadow-[0_0_15px_rgba(201,166,70,0.6)]
              hover:shadow-[0_0_25px_rgba(201,166,70,1)]
              transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="space-y-6">

          <h2 className="text-2xl font-semibold text-[#C9A646]">
            Our Office
          </h2>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-gradient-to-br from-[#C9A646] to-[#E5C76B] text-black shadow-lg">
              <FaMapMarkerAlt />
            </div>
            <p className="text-gray-300">
             Bengaluru,
              Karnataka, India
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-gradient-to-br from-[#C9A646] to-[#E5C76B] text-black shadow-lg">
              <FaPhoneAlt />
            </div>
            <a href="tel:+918217341627" className="text-gray-300 hover:text-white transition">
              +91 99644 8286
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full 
              bg-gradient-to-br from-[#C9A646] to-[#E5C76B] text-black shadow-lg">
              <FaEnvelope />
            </div>
            <a
              href="mailto:sthirainfradevelopers@gmail.com"
              className="text-gray-300 break-all text-sm hover:text-white transition font-size-50px"
            >
              sthirainfradeveloper@gmail.com

            </a>
          </div>



        </div>
      </div>

    </div>
  );
};

export default Contact;