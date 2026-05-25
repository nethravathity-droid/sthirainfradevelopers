import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* LOGO LEFT (BIGGER + PREMIUM) */}
<Link
  to="/"
  className="flex items-center gap-2 md:gap-3 max-w-[75%] md:max-w-none"
>

  {/* LOGO */}
  <img
    src="/images/logo1.png"
    alt="Logo"
    className="w-[42px] h-[42px] md:w-[65px] md:h-[65px] object-contain shrink-0
    drop-shadow-[0_6px_15px_rgba(201,166,70,0.5)]"
  />

  {/* TEXT */}
  <div className="leading-none overflow-hidden">

    <h1
      className={`text-[15px] sm:text-[18px] md:text-[24px] font-bold tracking-wide truncate ${
        scrolled ? "text-[#0A1F44]" : "text-white"
      }`}
    >
      <span className="text-[#C9A646]">
        STHIRA
      </span>{" "}
      INFRA
    </h1>

    <p
      className={`text-[8px] sm:text-[9px] md:text-[11px] tracking-[2px] md:tracking-[4px] uppercase truncate mt-1 ${
        scrolled
          ? "text-[#0A1F44]/70"
          : "text-white/70"
      }`}
    >
      Developers
    </p>

  </div>

</Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/ProjectDetails" },
            { name: "Constructions", path: "/Constructions" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`relative font-medium transition ${
                scrolled ? "text-[#0A1F44]" : "text-white"
              } hover:text-[#C9A646]`}
            >
              {item.name}

              {/* gold underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9A646] transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}

          {/* CTA BUTTON */}
          <button
            onClick={() => (window.location.href = "tel:+919964482866")}
            className="relative px-6 py-2 rounded-full font-semibold 
            bg-gradient-to-r from-[#C9A646] to-[#E5C76B] text-black
            shadow-[0_0_10px_rgba(201,166,70,0.6)]
            hover:shadow-[0_0_20px_rgba(201,166,70,1)]
            transition"
          >
            Enquire Now
          </button>
        </div>


            {/* MOBILE MENU BUTTON */}
           {/* MOBILE BUTTON */}
<button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span className={scrolled ? "text-[#0A1F44]" : "text-white"}>
    ☰
  </span>
</button>
      </div>
    {/* MOBILE MENU */}
          {/* MOBILE MENU */}
<div
  className={`md:hidden transition-all duration-500 overflow-hidden ${
    menuOpen ? "max-h-[500px] py-6" : "max-h-0"
  } bg-[#0A1F44] text-white`}
>

           {/* MOBILE MENU BUTTON */}
<button
  className="md:hidden w-11 h-11 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center"
  onClick={() => setMenuOpen(!menuOpen)}
>

  <span
    className={`text-2xl ${
      scrolled ? "text-[#0A1F44]" : "text-white"
    }`}
  >
    {menuOpen ? "✕" : "☰"}
  </span>

</button>

{/* MOBILE MENU */}
<div
  className={`md:hidden overflow-hidden transition-all duration-500 ${
    menuOpen
      ? "max-h-[500px] opacity-100"
      : "max-h-0 opacity-0"
  }`}
>

  <div className="mx-4 mt-3 mb-2 rounded-[30px] border border-white/10 bg-[#071120]/95 backdrop-blur-xl p-6">

    <div className="flex flex-col gap-6">

      {[
        { name: "Home", path: "/" },
        { name: "Projects", path: "/ProjectDetails" },
        { name: "Constructions", path: "/Constructions" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ].map((item, i) => (

        <Link
          key={i}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className="text-white uppercase tracking-[2px] text-[14px] hover:text-[#C9A646] transition"
        >

          {item.name}

        </Link>

      ))}

      {/* MOBILE BUTTON */}
      <button
        onClick={() =>
          (window.location.href = "tel:+919964482866")
        }
        className="mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A646] to-[#E5C76B] text-black py-4 rounded-full font-semibold"
      >

        ☎ Enquire Now

      </button>

    </div>

  </div>

</div>

          </div>

    </nav>
  );
}