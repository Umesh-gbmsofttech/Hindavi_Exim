// src/pages/Contact.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import ContactHero from '../sections/contact/ContactHero';
import ContactFormSection from '../sections/contact/ContactFormSection';
import FAQSection from '../sections/contact/FAQSection';


const Contact = () => {
  return (
    <Box sx={{ pb: 10 }}>
      <ContactHero />
      <Container maxWidth="lg">
        <ContactFormSection />
        <FAQSection/>
      </Container>
    </Box>
  );
};

export default Contact;