import React from 'react';
import { Box } from '@mui/material';
import Hero from '../sections/home/Hero';
import TechMarquee from '../sections/home/TechMarquee';
import AboutPreview from '../sections/home/AboutPreview';
import StatsSection from '../sections/home/StatsSection';
import CTASection from '../sections/home/CTASection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import SuccessHeroSection from '../sections/home/SuccessHeroSection'; 
import ServicesSection from '../sections/home/ServicesSection'; // [cite: 63]
const Home = () => {
  return (
    <Box component="main" sx={{ overflowX: 'hidden', flexGrow: 1 }}>
      <Hero />
      <AboutPreview />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <SuccessHeroSection />
      <TechMarquee /> 
      <CTASection />
    </Box>
  );
};

export default Home;