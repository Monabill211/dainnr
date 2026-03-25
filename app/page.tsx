import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./hero";
import FeaturesSection from "./FeaturesSection";
import Play from "./play";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Play />
    </div>
  );
}
