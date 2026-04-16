// src/components/sections/AboutVision.jsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const AboutVision = () => (
  <Box sx={{ py: 10 }}>
    {/* Ensure 'container' is only on the Grid component */}
    <Grid container spacing={6} sx={{ alignItems: 'center' }}>
      
      {/* Ensure 'item' is only on the Grid component */}
      <Grid item xs={12} md={6}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 2 }}>
            Our Vision & Mission
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: 'text.secondary' }}>
            To be the most trusted global partner in the import-export industry by providing seamless, 
            transparent, and ethical trade solutions.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" color="primary" sx={{ mb: 1 }}>Innovating Logistics</Typography>
            <Typography variant="body2" color="text.secondary">
              Leveraging technology to ensure real-time tracking and efficient supply chain management.
            </Typography>
          </Box>
        </motion.div>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box 
          component="img" 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
          sx={{ width: '100%', borderRadius: 4, boxShadow: 10 }}
          alt="Logistics and Trade"
        />
      </Grid>
    </Grid>
  </Box>
);

export default AboutVision;