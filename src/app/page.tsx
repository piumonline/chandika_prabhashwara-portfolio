"use client";

import { SectionWrapper } from "@/components/SectionWrapper";

// Home page component
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

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <SectionWrapper id="about">
        <About />
        <TextMaskSection />
      </SectionWrapper>

      <SectionWrapper id="expertise">
        <ExpertiseSection />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <ProjectSection />
      </SectionWrapper>

      <SectionWrapper id="recent-work">
        <RecentWork />
      </SectionWrapper>

      <SectionWrapper id="creative-heading">
        <CreativeHeading />
      </SectionWrapper>

      <SectionWrapper id="work-experience">
        <WorkExperience />
      </SectionWrapper>

      <SectionWrapper id="footer">
        <Footer />
      </SectionWrapper>
    </main>
  );
}
