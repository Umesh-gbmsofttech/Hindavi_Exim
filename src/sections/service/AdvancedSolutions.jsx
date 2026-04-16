// src/components/sections/AdvancedSolutions.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SecurityIcon from '@mui/icons-material/Security';

const AdvancedSolutions = () => (
  <Box sx={{ py: 10, bgcolor: 'grey.50', px: 4, borderRadius: 4 }}>
    <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 'bold' }}>
      Advanced Trade Solutions [cite: 18]
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 4, height: '100%' }}>
          <AutoGraphIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
          <Typography variant="h5" gutterBottom>Market Analysis</Typography>
          <Typography variant="body2">
            Real-time data insights to help you identify emerging markets and demand trends[cite: 20].
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 4, height: '100%' }}>
          <SecurityIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
          <Typography variant="h5" gutterBottom>Risk Mitigation</Typography>
          <Typography variant="body2">
            Comprehensive insurance and secure payment gateway solutions for international trade[cite: 21].
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default AdvancedSolutions;