import React from "react";
import { Box, Typography, Container, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const AboutHero = () => (
  <Box
    sx={{
      position: "relative",
      color: "common.white",
      pt: { xs: 15, md: 19 },
      pb: { xs: 14, md: 18 },
      overflow: "hidden",
      background:
        'linear-gradient(135deg, rgba(47,23,13,0.94), rgba(93,51,29,0.82)), url("https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1600&q=80") center/cover',
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at top right, rgba(217,137,54,0.34), transparent 34%)",
      }}
    />
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Stack spacing={3} sx={{ maxWidth: 760 }}>
          <Chip
            label="About Hindavi Exim"
            sx={{
              width: "fit-content",
              bgcolor: "rgba(255,255,255,0.12)",
              color: "common.white",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          />
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.7rem", md: "4.6rem" },
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Built to move Indian products into global markets with confidence.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 640,
              color: "rgba(255,255,255,0.82)",
              fontWeight: 400,
              lineHeight: 1.8,
            }}
          >
            Hindavi Exim combines dependable sourcing, export discipline, and
            practical trade execution to help buyers and partners work with
            clarity, consistency, and trust.
          </Typography>
        </Stack>
      </motion.div>
    </Container>
  </Box>
);

export default AboutHero;
