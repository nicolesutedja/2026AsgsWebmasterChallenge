import { useState, useEffect } from "react";
import imgAsceBgVidnet2025Nov71 from "figma:asset/632d4de2295ca7ce14d306447f86bc0a0f26384e.png";
import imgAsceBgRevealTheTheme2025Nov71 from "figma:asset/1424246431724903d8a0e7ab2351b55e8e6cbf82.png";
import imgAsgsBearGardenSpringTeaser2026March121 from "figma:asset/d8770d97fc735f7dea5471be11ecc64d7f68573d.png";

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

      {/* Hero Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl text-center px-6 font-['Ogg'] max-w-6xl">
          Lorem Ipsum
        </h1>
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
    </section>
  );
}
