import Image from "next/image";
//localhost:3000/#
import Hero from "./components/home/HeroSection";
import Features from "./components/home/Features";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import CallToAction from "./components/home/CallToAction";
import Blog from "./components/home/Blog";
export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
  );
}
