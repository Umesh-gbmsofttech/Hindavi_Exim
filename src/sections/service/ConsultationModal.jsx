// src/components/sections/ConsultationModal.jsx
import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

const ConsultationModal = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Get a Trade Quote [cite: 24]
      </Typography>
      <TextField fullWidth label="Full Name" sx={{ mb: 2 }} />
      <TextField fullWidth label="Email Address" sx={{ mb: 2 }} />
      <TextField fullWidth label="Business Requirements" multiline rows={4} sx={{ mb: 3 }} />
      <Button variant="contained" fullWidth size="large" onClick={handleClose}>
        Submit Request [cite: 25]
      </Button>
    </Box>
  </Modal>
);

export default ConsultationModal;