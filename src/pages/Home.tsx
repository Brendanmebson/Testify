import React from "react";
import { Box } from "@mui/material";

// Import your components
import HeroSection from "../components/Home/HeroSection";
import WhyWorkWithTestify from "../components/Home/WhyWorkWithTestify";
import FAQ from "../components/Home/FAQ";
import CaseStudies from "../components/Home/CaseStudies";
import HowWeWork from "../components/Home/HowWeWork";
import FeaturedBlogInsights from "../components/Home/FeaturedBlogInsights";
import FeaturedTestimonials from "../components/Home/FeaturedTestimonials";

const Home: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Why Work With Us Section */}
      <WhyWorkWithTestify />
        <HowWeWork />
        <FAQ />
        <CaseStudies />
        <FeaturedBlogInsights />
        <FeaturedTestimonials />
    </Box>
  );
};

export default Home;
