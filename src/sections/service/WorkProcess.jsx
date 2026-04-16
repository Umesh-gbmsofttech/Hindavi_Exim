// src/components/sections/WorkProcess.jsx
import React from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';

const steps = ['Inquiry & Sourcing', 'Quality Inspection', 'Logistics Planning', 'Final Delivery'];

const WorkProcess = () => (
  <Box sx={{ py: 10 }}>
    <Typography variant="h4" textAlign="center" sx={{ mb: 8, fontWeight: 'bold' }}>
      Our Operational Workflow [cite: 77]
    </Typography>
    <Stepper alternativeLabel activeStep={-1}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>
            <Typography sx={{ fontWeight: 'bold' }}>{label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
    <Typography variant="body2" textAlign="center" sx={{ mt: 4, color: 'text.secondary' }}>
      A streamlined process ensuring transparency from origin to destination[cite: 78].
    </Typography>
  </Box>
);

export default WorkProcess;