import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FloatingSocialIcons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      
      <a
        href="https://wa.me/919964482866"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black 
        shadow-lg hover:bg-[#C9A646] hover:text-white transition"
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://www.facebook.com/share/1FydiXCsBA/"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black 
        shadow-lg hover:bg-[#C9A646] hover:text-white transition"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/sthirainfradevelopers?utm_source=qr&igsh=NGduZHBxbjFhNGpq"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black 
        shadow-lg hover:bg-[#C9A646] hover:text-white transition"
      >
        <FaInstagram />
      </a>


    </div>
  );
}