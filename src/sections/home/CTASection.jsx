import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        // Swapped dark gradient for a soft light gradient
        background: "linear-gradient(180deg, #fffbf7 0%, #fdf2ea 100%)",
        color: "#2b140b", // Swapped white text for deep coffee brown
        textAlign: "center",
      }}
    >
      {/* 🌟 Background Glow (Now softer peach instead of deep orange) */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background: "rgba(255,183,71,0.15)", // Softer peach glow
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        {/* Title */}
        <Typography
          variant="h3" // Using semantic variant
          sx={{
            fontWeight: 800,
            // Playfair Display adds that premium brand feel seen in the screenshot
            fontFamily: '"Playfair Display", serif', 
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 2.5,
            letterSpacing: 0.5,
          }}
        >
          Ready to Start Your Journey?
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            mb: 5,
            color: "#666", // Soft charcoal gray for description readability
            fontSize: "1.05rem",
            lineHeight: 1.8,
            maxWidth: '480px',
            mx: 'auto'
          }}
        >
          Get expert guidance and take the first step toward building your
          business or upgrading your project with confidence.
        </Typography>

        {/* CTA BUTTON - Matching the bright glow style from the image */}
        <motion.div
          whileHover={{ y: -5 }} // Changed scale to 'lift' on hover
          whileTap={{ scale: 0.96 }}
        >
          <Button
            variant="contained"
            sx={{
              px: 6,
              py: 1.8,
              borderRadius: "50px", // Pill shape feels more premium
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              // Slightly lightened the gradient to match light mode
              background: "linear-gradient(45deg, #ff9933, #ffb347)",
              // Added subtle outer glow ring like the screenshot
              border: '2px solid rgba(255, 138, 0, 0.15)',
              boxShadow: "0 10px 25px rgba(255,138,0,0.3)",
              transition: "0.4s ease-out",
              "&:hover": {
                // Increased glow and lift on hover
                boxShadow: "0 20px 50px rgba(255,138,0,0.5)",
                borderColor: 'rgba(255, 138, 0, 0.3)',
              },
            }}
          >
            Contact Us Now
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;