// src/pages/About.jsx
import React from "react";
import { Container, Box } from "@mui/material";
import AboutHero from "../sections/about/AboutHero";
import AboutVision from "../sections/about/AboutVision";
import JourneyTimeline from "../sections/about/JourneyTimeline";
import FoundersPerspective from "../sections/about/FoundersPerspective";
import OfficeLocations from "../sections/about/OfficeLocations";

const About = () => {
  return (
    <Box sx={{ pb: { xs: 8, md: 12 } }}>
      <AboutHero />
      <Container maxWidth="lg" sx={{ mt: { xs: -5, md: -7 }, position: "relative", zIndex: 2 }}>
        <AboutVision />
        <JourneyTimeline />
        <FoundersPerspective />
        <OfficeLocations />
      </Container>
    </Box>
  );
};

export default About;
