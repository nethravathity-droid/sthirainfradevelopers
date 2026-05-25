import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white pt-16 pb-8 relative overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-[#C9A646] via-transparent to-[#C9A646] blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          
          <img 
            src="/images/logo1.png" 
            alt="Logo" 
            className="w-40 md:w-48 object-contain drop-shadow-[0_5px_10px_rgba(201,166,70,0.4)]"
          />

          <h2 className="text-xl font-semibold bg-gradient-to-r from-[#C9A646] to-[#E5C76B] bg-clip-text text-transparent">
            Sthira Infra Developers
          </h2>

          <p className="text-gray-400 text-sm">
            Crafting luxury living spaces with elegance, comfort, and modern design.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#C9A646] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-[#C9A646] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#C9A646] transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9A646] transition">Contact</Link></li>
          </ul>
        </div>

        {/* PROJECTS */}
        <div>
          <h3 className="text-lg font-semibold text-[#C9A646] mb-4">
            Properties
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/projectdetails" className="hover:text-[#C9A646] transition">Projects</Link></li>
            <li> <Link to="/constructions" className="hover:text-[#C9A646] transition">Construction</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-[#C9A646] mb-4">
            Contact Us
          </h3>

        <div className="space-y-4">

  {/* Location */}
  <div className="flex items-center gap-3 group">
    <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#C9A646] to-[#E5C76B] text-black 
      shadow-[0_0_10px_rgba(201,166,70,0.6)] 
      group-hover:shadow-[0_0_20px_rgba(201,166,70,1)] transition">
      <FaMapMarkerAlt />
    </div>
    <p className="text-gray-300 group-hover:text-white transition">
     Bangalore, India
    </p>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3 group">
    <div className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-gradient-to-br from-[#C9A646] to-[#E5C76B] text-black 
      shadow-[0_0_10px_rgba(201,166,70,0.6)] 
      group-hover:shadow-[0_0_20px_rgba(201,166,70,1)] transition">
      <FaPhoneAlt />
    </div>
    <p className="text-gray-300 group-hover:text-white transition">
      +91 99644 82860 / 73539 71754
    </p>
  </div>

  {/* Email */}
  <div className="flex items-start gap-3 group min-w-0">
  
  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full 
    bg-gradient-to-br from-[#C9A646] to-[#E5C76B] text-black 
    shadow-[0_0_10px_rgba(201,166,70,0.6)] 
    group-hover:shadow-[0_0_20px_rgba(201,166,70,1)] transition">
    <FaEnvelope />
  </div>

  <p className="text-gray-300 group-hover:text-white transition break-all text-sm leading-tight">
    sthirainfradeveloper@gmail.com <br/>
  </p>

</div>

</div><br/>
          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            
            <a href="https://www.facebook.com/share/1FydiXCsBA/" className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-white/10 backdrop-blur-md border border-[#C9A646]/30 
              hover:bg-[#C9A646] hover:text-black transition shadow-lg hover:shadow-[0_0_15px_#C9A646]">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/sthirainfradevelopers?utm_source=qr&igsh=NGduZHBxbjFhNGpq" className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-white/10 backdrop-blur-md border border-[#C9A646]/30 
              hover:bg-[#C9A646] hover:text-black transition shadow-lg hover:shadow-[0_0_15px_#C9A646]">
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#C9A646]/30 my-8 mx-6"></div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sthira Infra Developers. All rights reserved.
      </div>

    </footer>
  );
}