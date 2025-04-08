import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavLinks from "./components/NavbarSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <NavLinks />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
