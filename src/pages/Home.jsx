import HeroSlider from "../components/HeroSlider";
import PremiumCarousel from "../components/PremiumCarousel";
import SustainabilitySection from "../components/SustainabilitySection";
import TestimonialSlider from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <PremiumCarousel />
      <SustainabilitySection />
      <TestimonialSlider />
    </div>
  );
}