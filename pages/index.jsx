import React from "react";
import ContactUsSection from "../components/contactUsSection";
import ExperienceSection from "../components/experienceSection";
import HeroSection from "../components/heroSection";
import ServicesSection from "../components/servicesSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactUsSection />
    </main>
  );
}

export default Home;
