import React from "react";
import { Paper, Typography, Box, Grid, Stack, Chip } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import { motion } from "framer-motion";

const highlights = [
  "Thoughtful buyer communication",
  "Export readiness before dispatch",
  "Execution that respects timelines and quality expectations",
];

const FoundersPerspective = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 6,
          bgcolor: "primary.main",
          color: "common.white",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 28px 64px rgba(47,23,13,0.18)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(243,193,120,0.2), transparent 34%)",
          }}
        />
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={2.5}>
                <Chip
                  label="Leadership Perspective"
                  sx={{
                    width: "fit-content",
                    bgcolor: "rgba(255,255,255,0.12)",
                    color: "common.white",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                />
                <FormatQuoteRoundedIcon sx={{ fontSize: 54, color: "secondary.light", opacity: 0.9 }} />
                <Typography
                  variant="h4"
                  sx={{ lineHeight: 1.45, fontWeight: 600, maxWidth: 680 }}
                >
                  We believe credibility in export business is earned through
                  preparation, responsiveness, and consistent delivery, not
                  through overstatement.
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.74)", lineHeight: 1.8 }}>
                  Hindavi Exim is focused on being dependable where it matters
                  most: product alignment, shipment coordination, and partner
                  confidence from inquiry to dispatch.
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              {highlights.map((item) => (
                <Paper
                  key={item}
                  elevation={0}
                  sx={{
                    p: 2.2,
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <TaskAltRoundedIcon sx={{ color: "secondary.light" }} />
                    <Typography>{item}</Typography>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FoundersPerspective;
