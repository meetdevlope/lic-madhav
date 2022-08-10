import React from "react";
import ContactUsSection from "../components/contactUsSection";
import ExperienceSection from "../components/experienceSection";
import FeaturedSection from "../components/featuredSection";
import HeroSection from "../components/heroSection";
import ServicesSection from "../components/servicesSection";
import TestimonialSlider from "../components/testimonialSlider";

function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactUsSection />
      <TestimonialSlider />
      <FeaturedSection />
    </main>
  );
}

export default Home;
