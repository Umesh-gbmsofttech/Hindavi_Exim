// src/components/sections/Servicessectionpage.jsx
import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import SailingIcon from '@mui/icons-material/Sailing';
import PolicyIcon from '@mui/icons-material/Policy';

const serviceList = [
  { title: 'Global Sourcing', icon: <InventoryIcon />, desc: 'Connecting you with verified suppliers across international borders[cite: 63].' },
  { title: 'Ocean & Air Freight', icon: <SailingIcon />, desc: 'Strategic logistics planning for cost-effective cargo movement[cite: 65].' },
  { title: 'Customs Compliance', icon: <PolicyIcon />, desc: 'Navigating complex regulatory frameworks for seamless clearance[cite: 63].' }
];

const ServicesSectionPage = () => (
  <Box sx={{ py: 8 }}>
    <Grid container spacing={4}>
      {serviceList.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card elevation={0} sx={{ textAlign: 'center', p: 2, border: '1px solid #eee' }}>
            <CardContent>
              <Box sx={{ color: 'secondary.main', mb: 2 }}>{item.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServicesSectionPage;