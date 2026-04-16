import React from "react";
import { Box, Typography, Grid, Card, CardContent, Chip, Stack } from "@mui/material";

const steps = [
  {
    step: "01",
    title: "Inquiry & Requirement Review",
    text: "We begin by understanding the product need, market expectations, and shipment priorities.",
  },
  {
    step: "02",
    title: "Sourcing & Quality Alignment",
    text: "Supplier fit, product consistency, and export readiness are checked before movement begins.",
  },
  {
    step: "03",
    title: "Documentation & Dispatch Planning",
    text: "Trade paperwork and shipment coordination are handled with more structure and transparency.",
  },
  {
    step: "04",
    title: "Delivery Tracking & Support",
    text: "We stay responsive through execution so the buyer experience remains clear and dependable.",
  },
];

const WorkProcess = () => (
  <Box sx={{ py: { xs: 7, md: 9 } }}>
    <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
      <Chip label="Workflow" color="secondary" sx={{ fontWeight: 700 }} />
      <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main" }}>
        A simpler, clearer process from inquiry to delivery.
      </Typography>
      <Typography sx={{ maxWidth: 740, color: "text.secondary", lineHeight: 1.85 }}>
        This replaces the old stepper with cards that explain each stage more
        clearly and sit better on both desktop and mobile.
      </Typography>
    </Stack>

    <Grid container spacing={3}>
      {steps.map((item) => (
        <Grid key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 5,
              border: "1px solid rgba(93,51,29,0.08)",
              boxShadow: "0 16px 38px rgba(47,23,13,0.05)",
            }}
          >
            <CardContent sx={{ p: 3.2 }}>
              <Typography variant="h4" sx={{ color: "secondary.main", fontWeight: 800, mb: 1 }}>
                {item.step}
              </Typography>
              <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700, mb: 1.2 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default WorkProcess;
