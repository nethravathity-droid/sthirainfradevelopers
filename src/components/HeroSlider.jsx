import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1, // Added missing ID for consistency
    type: "video",
    src: "/images/urc5.mp4",
    title: "Luxury Living Redefined",
    subtitle: "Discover premium homes crafted for elegance",
  },

  {
    id: 3,
    type: "image",
    src: "/images/urc3.png",
    title: "Invest in the Future",
    subtitle: "High-return properties in prime locations",
  },
  {
    id: 4,
    type: "image",
    src: "/images/urc4.png",
    title: "Invest in the Future",
    subtitle: "High-return properties in prime locations",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Conditional Rendering: Video vs Image */}
          {slide.type === "video" ? (
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-6">
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6">
                {slide.subtitle}
              </p>
              <Link to="/ProjectDetails" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore Projects
              </Link>
            </div>
          </div>
          
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-yellow-500 w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      
    </div>
    
  );
}