import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import PastEventsSection from "./components/PastEventsSection";
import DetailsSection from "./components/DetailsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <PastEventsSection />
        <DetailsSection />
      </main>
      <Footer />
    </div>
  );
}
