import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import FeaturesSection from "./FeaturesSection";
import Play from "./play";
import Tstmoinas from "./testmoinas";
import { CTASection } from "./CTASection";
import { Footer } from "./Footar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Play />
      <Tstmoinas />
      <CTASection />
      <Footer />
    </div>
  );
}
