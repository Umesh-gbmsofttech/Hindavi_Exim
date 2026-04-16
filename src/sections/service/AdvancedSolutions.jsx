import React from "react";
import { Box, Typography, Grid, Paper, Stack, Chip } from "@mui/material";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SecurityIcon from "@mui/icons-material/Security";

const AdvancedSolutions = () => (
  <Box sx={{ py: { xs: 7, md: 9 } }}>
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 6,
        bgcolor: "rgba(255,255,255,0.84)",
        border: "1px solid rgba(93,51,29,0.08)",
        boxShadow: "0 20px 48px rgba(47,23,13,0.06)",
      }}
    >
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
        <Chip label="Trade Support" color="secondary" sx={{ fontWeight: 700 }} />
        <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main" }}>
          Added value that improves confidence around every shipment.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              height: "100%",
              borderRadius: 5,
              bgcolor: "#fffaf6",
              border: "1px solid rgba(217,137,54,0.12)",
            }}
          >
            <AutoGraphIcon color="secondary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ color: "primary.main", fontWeight: 700 }}>
              Market Readiness
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Product positioning, buyer expectations, and shipment planning are
              approached with commercial practicality so transactions feel more
              aligned from the start.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3.5,
              height: "100%",
              borderRadius: 5,
              bgcolor: "#fffaf6",
              border: "1px solid rgba(217,137,54,0.12)",
            }}
          >
            <SecurityIcon color="secondary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h5" gutterBottom sx={{ color: "primary.main", fontWeight: 700 }}>
              Process Reliability
            </Typography>
            <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              We prioritize documentation discipline, shipment awareness, and
              communication consistency so buyers feel better supported
              throughout export execution.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

export default AdvancedSolutions;
