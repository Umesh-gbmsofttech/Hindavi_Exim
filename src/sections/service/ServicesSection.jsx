// src/components/sections/ServicesSection.jsx
import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Box } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const services = [
  { title: 'Global Sourcing', desc: 'Finding high-quality raw materials across continents.', icon: <PublicIcon fontSize="large" color="primary" /> },
  { title: 'Freight Forwarding', desc: 'Secure air, sea, and land logistics management.', icon: <LocalShippingIcon fontSize="large" color="primary" /> },
  { title: 'Quality Assurance', desc: 'Strict compliance and international standards.', icon: <VerifiedUserIcon fontSize="large" color="primary" /> },
];

const ServicesSection = () => (
  <Container sx={{ py: 10 }}>
    <Typography variant="h3" textAlign="center" gutterBottom>Our Expertise</Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {services.map((s, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card sx={{ height: '100%', textAlign: 'center', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
            <CardContent>
              <Box sx={{ mb: 2 }}>{s.icon}</Box>
              <Typography variant="h5" gutterBottom>{s.title}</Typography>
              <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesSection;