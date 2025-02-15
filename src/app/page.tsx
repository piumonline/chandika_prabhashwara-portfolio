import About from "@/components/About";
import CreativeHeading from "@/components/CreativeHeading";
import ExpertiseSection from "@/components/ExpertiseSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import RecentWork from "@/components/RecentWork";
import TextMaskSection from "@/components/TextMaskSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <TextMaskSection />
      <ExpertiseSection />
      <ProjectSection />
      <RecentWork />
      <CreativeHeading />
    </main>
  );
}
