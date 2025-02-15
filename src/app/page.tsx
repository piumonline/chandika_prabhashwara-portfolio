import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TextMaskSection from "@/components/TextMaskSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <TextMaskSection />
    </main>
  );
}
