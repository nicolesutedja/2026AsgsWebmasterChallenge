import { useState, useEffect } from "react";
import imgAsceBgVidnet2025Nov71 from "/src/assets/hero-carousel/header-1.png";
import imgAsceBgRevealTheTheme2025Nov71 from "/src/assets/hero-carousel/header-2.png";
import imgAsgsBearGardenSpringTeaser2026March121 from "/src/assets/hero-carousel/header-3.png";
import leftArrow from "/src/assets/left-arrow.png";
import rightArrow from "/src/assets/right-arrow.png";

const heroImages = [
  imgAsceBgVidnet2025Nov71,
  imgAsceBgRevealTheTheme2025Nov71,
  imgAsgsBearGardenSpringTeaser2026March121,
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    // Adding heroImages.length ensures the number is never negative
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative bg-[#00588c]">
      {/* Carousel Images */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[828px] overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <img src="/src/assets/left-arrow.png" alt="Prev" className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all"
        aria-label="Next slide"
      >
        <img src="/src/assets/right-arrow.png" alt="Next" className="w-8 h-8" />
      </button>
    </section>
  );
}
