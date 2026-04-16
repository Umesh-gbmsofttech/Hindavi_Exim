import React from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const principles = [
  "Transparent communication at every stage of fulfillment",
  "Reliable sourcing with quality-first export discipline",
  "Documentation and shipment coordination handled with care",
];

const AboutVision = () => (
  <Box sx={{ pt: { xs: 0, md: 2 }, pb: { xs: 8, md: 10 } }}>
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 6,
        border: "1px solid rgba(93,51,29,0.08)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(247,241,235,0.98))",
        boxShadow: "0 24px 60px rgba(47,23,13,0.08)",
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <Stack spacing={2.5}>
              <Chip
                label="Vision & Mission"
                color="secondary"
                sx={{ width: "fit-content", fontWeight: 700 }}
              />
              <Typography
                variant="h3"
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.1,
                }}
              >
                A grounded export partner for buyers who value quality and
                follow-through.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.9, fontSize: "1.05rem" }}
              >
                Our mission is to make cross-border trade feel organized,
                dependable, and commercially practical. We focus on consistency,
                supply readiness, and responsive coordination so international
                buyers can work with confidence.
              </Typography>

              <Stack spacing={1.6}>
                {principles.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                  >
                    <CheckCircleOutlineRoundedIcon
                      sx={{ color: "secondary.main", mt: "2px" }}
                    />
                    <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              bgcolor: "#2f170d",
              color: "common.white",
              minHeight: "100%",
            }}
          >
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ letterSpacing: 2, color: "secondary.light" }}>
                What We Prioritize
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                Trade relationships built on preparation, clarity, and timely execution.
              </Typography>
              <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h4" sx={{ color: "secondary.light", fontWeight: 800 }}>
                    01
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.76)" }}>
                    Strong sourcing alignment before any shipment moves.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: "secondary.light", fontWeight: 800 }}>
                    02
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.76)" }}>
                    Clear documentation and export handling for smoother delivery.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: "secondary.light", fontWeight: 800 }}>
                    03
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.76)" }}>
                    Long-term reliability over one-time transactional wins.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default AboutVision;
