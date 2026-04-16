import React from "react";
import { Box, Typography, Container, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        pt: { xs: 14, md: 17 },
        pb: { xs: 12, md: 15 },
        overflow: "hidden",
        background: "linear-gradient(180deg, #31180e 0%, #1c0d07 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top, rgba(217,137,54,0.24), transparent 34%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65 }}
        >
          <Stack spacing={3} alignItems="center" textAlign="center" sx={{ maxWidth: 760, mx: "auto" }}>
            <Chip
              label="Services"
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                color: "common.white",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "4.25rem" },
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
              }}
            >
              Export services designed to feel structured, not vague.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 680,
                color: "rgba(255,255,255,0.78)",
                fontWeight: 400,
                lineHeight: 1.8,
              }}
            >
              From sourcing coordination to documentation support and shipment
              readiness, our services are arranged around clarity, efficiency,
              and buyer confidence.
            </Typography>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesHero;
