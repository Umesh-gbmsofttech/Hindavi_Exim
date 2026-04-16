import React from "react";
import { Box, Typography, Paper, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const milestones = [
  {
    phase: "Foundation",
    title: "Export mindset shaped around consistency",
    text: "We built our operating model around dependable sourcing, clean communication, and realistic shipment planning.",
  },
  {
    phase: "Growth",
    title: "Processes refined for repeatable execution",
    text: "As buyer expectations expanded, we strengthened how we handle coordination, documentation, and dispatch readiness.",
  },
  {
    phase: "Scale",
    title: "Trade support aligned to long-term partnerships",
    text: "Our focus continues to be practical service: quality products, responsive support, and more confident cross-border trade.",
  },
];

const JourneyTimeline = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} sx={{ maxWidth: 720, mb: 5 }}>
        <Chip label="Our Journey" color="secondary" sx={{ width: "fit-content", fontWeight: 700 }} />
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main" }}
        >
          A clear progression from sourcing discipline to export reliability.
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
          We have grown by strengthening the fundamentals that matter in global
          trade: product confidence, process clarity, and dependable execution.
        </Typography>
      </Stack>

      <Stack spacing={3}>
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                border: "1px solid rgba(93,51,29,0.1)",
                background: "rgba(255,255,255,0.86)",
                boxShadow: "0 16px 40px rgba(47,23,13,0.06)",
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 4 }}
                alignItems={{ xs: "flex-start", md: "center" }}
              >
                <Box
                  sx={{
                    minWidth: { md: 160 },
                    px: 2.2,
                    py: 1,
                    borderRadius: 999,
                    bgcolor: "rgba(217,137,54,0.12)",
                    color: "secondary.dark",
                    fontWeight: 700,
                  }}
                >
                  {item.phase}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ mb: 1, color: "primary.main" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default JourneyTimeline;
