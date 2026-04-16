// src/components/sections/FoundersPerspective.jsx
import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";

const founders = [
 
  {
    name: "Rohan Sharma",
    role: "Director, Indo Global Logistics",
    quote:
      "Our mission is to connect India to the world with seamless logistics.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Export Head, Bharat Supply Chain",
    quote:
      "We believe in building long-term trade relationships, not just transactions.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Aditya Kulkarni",
    role: "CEO, OceanLink Exports",
    quote:
      "Every container we ship represents India's growing global presence.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Karan Desai",
    role: "Managing Director, Global Trade Hub",
    quote:
      "Efficiency and trust define modern export excellence.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Arjun Nair",
    role: "Founder, Seaway Logistics",
    quote:
      "Logistics is not just movement of goods, it is movement of opportunity.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Siddharth Iyer",
    role: "Director, Indian Export Network",
    quote:
      "We empower Indian businesses to think and trade globally.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Rahul Verma",
    role: "CEO, ExportMax India",
    quote:
      "Quality, consistency, and commitment define our export philosophy.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Nikhil Joshi",
    role: "Founder, BlueOcean Trade",
    quote:
      "We bridge continents through reliable trade infrastructure.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Manish Gupta",
    role: "MD, Global Freight Solutions",
    quote:
      "India is not just exporting goods, we are exporting trust.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.4 } },
};

const FoundersPerspective = () => {
  const [index, setIndex] = useState(0);

  // AUTO SWAP
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % founders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % founders.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + founders.length) % founders.length);

  const founder = founders[index];

  return (
    <Box sx={{ py: 10 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 8 },
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={4} alignItems="center">

          {/* IMAGE SIDE */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={founder.image}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Avatar
                  src={founder.image}
                  sx={{
                    width: 180,
                    height: 180,
                    margin: "auto",
                    border: "5px solid white",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </Grid>

          {/* CONTENT SIDE */}
          <Grid item xs={12} md={8}>
            <FormatQuoteIcon sx={{ fontSize: 60, opacity: 0.3 }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Typography
                  variant="h5"
                  sx={{ fontStyle: "italic", mb: 3, lineHeight: 1.8 }}
                >
                  "{founder.quote}"
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  {founder.name}
                </Typography>

                <Typography variant="subtitle2">
                  {founder.role}
                </Typography>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}
            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              <IconButton
                onClick={prev}
                sx={{ color: "white", border: "1px solid white" }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{ color: "white", border: "1px solid white" }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FoundersPerspective;