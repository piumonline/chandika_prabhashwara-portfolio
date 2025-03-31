import About from "@/components/About";
import CreativeHeading from "@/components/CreativeHeading";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import RecentWork from "@/components/RecentWork";
import TextMaskSection from "@/components/TextMaskSection";
import WorkExperience from "@/components/WorkExperience";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Website Title",
  description: "Your Website Description",
  other: {
    "trustpilot-one-time-domain-verification-id": "056da7dd-a47d-4be3-864c-d2e64163a1ae",
  },
};


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
      <WorkExperience />
      <Footer />
    </main>
  );
}
