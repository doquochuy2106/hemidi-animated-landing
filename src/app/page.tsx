import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import FeaturesSection from "@/components/FeaturesSection";
import VisibilitySection from "@/components/VisibilitySection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

// Lazy load 3D WebGL Canvas to maximize PageSpeed and prevent SSR mismatch
const RobotCanvas = dynamic(
  () => import("@/components/Canvas3D/RobotCanvas"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 3D WebGL Interactive Mascot Canvas */}
      <RobotCanvas />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <VisibilitySection />
        <ServicesSection />
        <TeamSection />
        <FAQSection />
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
