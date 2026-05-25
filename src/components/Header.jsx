import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">

      {/* 🔝 TOP BAR */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-black text-white text-sm">
        <div>
          📞 +91 98765 43210 &nbsp;&nbsp; | &nbsp;&nbsp; ✉Sthirainfradeveloper@gmail.com
        </div>
        <div className="flex gap-4">
          <span className="hover:text-yellow-400 cursor-pointer">Facebook</span>
          <span className="hover:text-yellow-400 cursor-pointer">Instagram</span>
        </div>
      </div>

      {/* 🔻 MAIN NAVBAR */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold">
              RE
            </div>
            <span
              className={`text-xl font-semibold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              RealEstate
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link className={navLink(scrolled)} to="/">Home</Link>
            <Link className={navLink(scrolled)} to="/ProjectDetails">Projects</Link>
            <Link className={navLink(scrolled)} to="/constructions">Constructions</Link>
            <Link className={navLink(scrolled)} to="/about">About</Link>
            <Link className={navLink(scrolled)} to="/contact">Contact</Link>

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Book Visit
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            <span className={scrolled ? "text-black" : "text-white"}>
              ☰
            </span>
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        <div
          className={`md:hidden bg-white transition-all duration-300 ${
            menuOpen ? "max-h-96 py-4 shadow-lg" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/ProjectDetails" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/Construction" onClick={() => setMenuOpen(false)}>Construction</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link
              to="/contact"
              className="bg-yellow-500 px-4 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Book Visit
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* 🔧 Helper for nav link style */
function navLink(scrolled) {
  return `font-medium ${
    scrolled ? "text-black" : "text-white"
  } hover:text-yellow-500 transition`;
}