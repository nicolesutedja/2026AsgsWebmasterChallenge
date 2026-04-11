import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import PastEventsSection from "./components/PastEventsSection";
import DetailsSection from "./components/DetailsSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal"; // Import your new wrapper

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel /> 
        
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <PastEventsSection />
        </ScrollReveal>

        <DetailsSection />
      </main>
      <Footer />
    </div>
  );
}