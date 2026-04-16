// src/pages/About.jsx
import React from 'react';
import { Container, Box } from '@mui/material';
import AboutHero from '../sections/about/AboutHero'; // [cite: 8]
import AboutVision from '../sections/about/AboutVision'; // [cite: 14]
import JourneyTimeline from '../sections/about/JourneyTimeline'; // 
import FoundersPerspective from '../sections/about/FoundersPerspective'; // [cite: 38]
import OfficeLocations from '../sections/about/OfficeLocations'; // [cite: 51]

const About = () => {
  return (
    <Box sx={{ pb: 10 }}>
      <AboutHero />
      <Container maxWidth="lg">
        <AboutVision />
        <JourneyTimeline />
        <FoundersPerspective />
        <OfficeLocations />
      </Container>
    </Box>
  );
};

export default About;