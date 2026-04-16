// src/components/sections/ContactHero.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const ContactHero = () => (
  <Box sx={{ 
    bgcolor: 'primary.dark', 
    color: 'white', 
    py: { xs: 8, md: 10 }, 
    textAlign: 'center',
    backgroundImage: 'linear-gradient(rgba(93, 64, 55, 0.85), rgba(93, 64, 55, 0.85)), url("https://images.unsplash.com/photo-1521791136364-798a7bc0d26c?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Let's Connect
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 'light' }}>
          Have questions about global logistics or sourcing? Our team is ready to assist you. [cite: 32]
        </Typography>
      </motion.div>
    </Container>
  </Box>
);

export default ContactHero;