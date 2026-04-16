// src/pages/Services.jsx
import React from "react";
import { Box, Container } from "@mui/material";
import ServicesHero from "../sections/service/ServicesHero";
import AdvancedSolutions from "../sections/service/AdvancedSolutions";
import WorkProcess from "../sections/service/WorkProcess";
import ServicesSectionPage from "../sections/service/Servicessectionpage";
import ConsultationModal from "../sections/service/ConsultationModal";
import CTASection from "../sections/home/CTASection";
const Services = () => {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 } }}>
      <ServicesHero />
      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: "relative", zIndex: 2 }}>
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
