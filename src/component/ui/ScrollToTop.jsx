// src/components/ui/ScrollToTop.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Zoom, Fab, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // --- 1. AUTOMATIC LOGIC ---
  // Resets the window to the top every time the URL path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // --- 2. MANUAL BUTTON LOGIC ---
  // Trigger appears after scrolling 300px down a page
  const trigger = useScrollTrigger({
    threshold: 300,
    disableHysteresis: true,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ 
          position: 'fixed', 
          bottom: 32, 
          right: 32, 
          zIndex: 1000 
        }}
      >
        <Fab 
          color="secondary" 
          size="small" 
          aria-label="scroll back to top"
          sx={{ 
            boxShadow: 3,
            '&:hover': { bgcolor: 'secondary.dark' } 
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;