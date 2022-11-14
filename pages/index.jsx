import React from "react";
import ContactUsSection from "../components/contactUsSection";
import ExperienceSection from "../components/experienceSection";
import FeaturedSection from "../components/featuredSection";
import HeroSection from "../components/heroSection";
import PoliciesSection from "../components/policiesSection";
import ServicesSection from "../components/servicesSection";
import TestimonialSlider from "../components/testimonialSlider";

function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <PoliciesSection />
      <TestimonialSlider />
      <FeaturedSection />
    </main>
  );
}

export default Home;
