import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import StarsIcon from '@mui/icons-material/Stars';

const TechMarquee = () => {
  // Updated content to match the mentorship/entrepreneurship theme
  const labels = [
    "BUSINESS STRATEGY", 
    "LEADERSHIP MENTORING", 
    "STARTUP ROADMAP", 
    "UDYAMI MAHARASHTRA", 
    "GROWTH MINDSET", 
    "MARKETING MASTERY"
  ];
  
  return (
    <Box 
      sx={{ 
        py: 4, 
        bgcolor: '#4e2616', // Deep brown from your theme
        position: 'relative',
        overflow: 'hidden',
        // Creating a "fade" effect on the left and right edges
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: '150px',
          height: '100%',
          zIndex: 2,
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(to right, #4e2616, transparent)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #4e2616, transparent)',
        },
        borderY: '1px solid rgba(255, 138, 0, 0.2)', // Subtle orange border
      }}
    >
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ 
          repeat: Infinity, 
          duration: 30, // Slower for a more premium, relaxed feel
          ease: "linear" 
        }}
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '6rem' 
        }}
      >
        {[...labels, ...labels, ...labels].map((item, i) => (
          <Stack 
            key={i} 
            direction="row" 
            spacing={2} 
            alignItems="center"
            sx={{ flexShrink: 0 }}
          >
            {/* Elegant Icon Divider */}
            <StarsIcon sx={{ color: '#ff8a00', fontSize: '1.2rem', opacity: 0.8 }} />
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#fff', 
                fontWeight: 600, 
                letterSpacing: '3px',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                fontFamily: '"Poppins", sans-serif',
                opacity: 0.9,
                // Subtle glow effect
                textShadow: '0 0 10px rgba(255,138,0,0.2)'
              }}
            >
              {item}
            </Typography>
          </Stack>
        ))}
      </motion.div>
    </Box>
  );
};

export default TechMarquee;