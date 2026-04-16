import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion, useInView } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";

/* =======================
   📊 EXPORT BUSINESS STATS
======================= */
const stats = [
  {
    label: "Tons Exported",
    value: 2500,
    suffix: "+",
    icon: <TrendingUpIcon />,
  },
  {
    label: "Global Clients",
    value: 120,
    suffix: "+",
    icon: <GroupsIcon />,
  },
  {
    label: "Countries Served",
    value: 15,
    suffix: "+",
    icon: <PublicIcon />,
  },
  {
    label: "Quality Assurance",
    value: 100,
    suffix: "%",
    icon: <VerifiedIcon />,
  },
];

/* =======================
   🔢 COUNTER HOOK
======================= */
const useCounter = (end, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1400;
    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return count;
};

/* =======================
   💎 STAT CARD
======================= */
const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCounter(stat.value, isInView);

  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        <Box
          sx={{
            p: 3,
            borderRadius: "16px",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.05)",
            textAlign: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 20px 50px rgba(255,138,0,0.15)",
            },
          }}
        >
          {/* ICON */}
          <Box
            sx={{
              mb: 2,
              display: "inline-flex",
              p: 1.5,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #ff8a00, #ffb347)",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(255,138,0,0.25)",
            }}
          >
            {stat.icon}
          </Box>

          {/* NUMBER */}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              color: "#222",
              lineHeight: 1,
            }}
          >
            {count}
            <span style={{ color: "#ff8a00" }}>{stat.suffix}</span>
          </Typography>

          {/* LABEL */}
          <Typography
            sx={{
              mt: 1,
              color: "#666",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            {stat.label}
          </Typography>
        </Box>
      </motion.div>
    </Grid>
  );
};

/* =======================
   🌍 MAIN SECTION
======================= */
const StatsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #fff7f2 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        
        {/* HEADER */}
        <Stack spacing={1.5} textAlign="center" mb={6}>
          <Typography
            sx={{
              color: "#ff8a00",
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: "0.8rem",
            }}
          >
            OUR GLOBAL REACH
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              color: "#222",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
            }}
          >
            Delivering Indian Turmeric Worldwide
          </Typography>

          <Typography
            sx={{
              color: "#666",
              maxWidth: 500,
              mx: "auto",
              fontSize: "0.9rem",
            }}
          >
            We connect Indian farms to global markets with quality,
            consistency, and trusted supply chains.
          </Typography>
        </Stack>

        {/* STATS GRID */}
        <Grid container spacing={3}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
