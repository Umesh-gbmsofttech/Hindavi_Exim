// src/pages/Services.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import ServicesHero from '../sections/service/ServicesHero'; // [cite: 57]
import AdvancedSolutions from '../sections/service/AdvancedSolutions'; // [cite: 18]
import WorkProcess from '../sections/service/WorkProcess'; // [cite: 77]
import ServicesSectionPage from '../sections/service/Servicessectionpage'; // [cite: 63]
import ConsultationModal from '../sections/service/ConsultationModal'; // 
import CTASection from '../sections/home/CTASection'; // [cite: 77]
const Services = () => {
  return (
    <Box sx={{ pb: 8 }}>
      <ServicesHero />
      <Container maxWidth="lg">
        <ServicesSectionPage />
        <AdvancedSolutions />
        <WorkProcess />
      </Container>
      <CTASection />
      <ConsultationModal />
    </Box>
  );
};

export default Services;