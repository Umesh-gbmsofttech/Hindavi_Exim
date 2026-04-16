// src/sections/about/AboutHero.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const AboutHero = () => (
  <Box sx={{ 
    bgcolor: 'primary.dark', 
    color: 'white', 
    py: { xs: 8, md: 12 }, 
    textAlign: 'center',
    backgroundImage: 'linear-gradient(rgba(93, 64, 55, 0.8), rgba(93, 64, 55, 0.8)), url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <Container maxWidth="md">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="overline" 
          sx={{ 
            color: 'secondary.main', 
            fontWeight: 'bold', 
            letterSpacing: 2 
          }}
        >
          Our Story
        </Typography>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ fontWeight: 'bold', mt: 2, mb: 3 }}
        >
          Global Trade, Rooted in Excellence
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 'light' }}>
          Bridging the gap between Indian quality and global demand since inception.
        </Typography>
      </motion.div>
    </Container>
  </Box>
);

export default AboutHero;