import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./index.js";
// Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PremiumCarousel from "./components/PremiumCarousel";
import SustainabilitySection from "./components/SustainabilitySection";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonial from "./components/Testimonial";
import Constructions from "./pages/Constructions";
import Interiors from "./components/Interiors";
import Houses from "./components/Houses";
import Project from "./components/Project";
import Socialmedia from "./components/Socialmedia";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>

     <div className="relative overflow-hidden">
        <ScrollToTop />

      {/* Golden curves SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* SVG content */}
      </svg>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Premium" element={<PremiumCarousel />} />
        <Route path="/Sustainability" element={<SustainabilitySection />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/ProjectDetails" element={<ProjectDetails />} />
 <Route path="/Testimonial" element={<Testimonial />} />
  <Route path="/Constructions" element={<Constructions />} />
  <Route path="/Interiors" element={<Interiors />} />
  <Route path="/Houses" element={<Houses />} />
  <Route path="/Project" element={<Project />} />


      </Routes>
          <Socialmedia/>

<index/>
      <Footer />
      {/* Your entire site */}
      <div className="relative z-10">
        {/* Navbar, sections, etc */}
      </div>
    </div>
      <Navbar />


    </>
  );
}

export default App;