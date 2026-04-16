// src/components/sections/ServicesHero.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, #4a140a 0%, #1c0502 100%)",
        color: "#fff",
        pt: { xs: 12, md: 14 },
        pb: { xs: 10, md: 12 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Top Glow Line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #ff8a00, transparent)",
          opacity: 0.6,
        }}
      />

      {/* 🌟 Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "rgba(255,138,0,0.12)",
          filter: "blur(140px)",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* ✨ Subtle radial overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,138,0,0.08), transparent 70%)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* SMALL TAG */}
          <Typography
            sx={{
              color: "#ff8a00",
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: "0.9rem",
              mb: 1,
            }}
          >
            OUR SERVICES
          </Typography>

          {/* MAIN HEADING */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              letterSpacing: "-1px",
            }}
          >
            Our Specialized Services
          </Typography>

          {/* SUBTEXT */}
          <Typography
            variant="h5"
            sx={{
              opacity: 0.75,
              fontWeight: 300,
              maxWidth: 650,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Tailored import-export solutions designed to scale your business globally.
          </Typography>
        </motion.div>

        {/* 🔥 Optional CTA (adds life to empty space) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 4,
              display: "inline-flex",
              alignItems: "center",
              px: 3,
              py: 1.3,
              borderRadius: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                background: "linear-gradient(135deg, #ff8a00, #ffb347)",
                boxShadow: "0 10px 30px rgba(255,138,0,0.3)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Typography sx={{ fontSize: "0.9rem", fontWeight: 500 }}>
              Explore Services →
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesHero;