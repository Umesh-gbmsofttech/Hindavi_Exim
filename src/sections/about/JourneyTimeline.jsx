import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";

const data = [
  {
    year: "2015",
    title: "Foundation in India",
    text: "Started operations in India focusing on import-export trade and sourcing excellence.",
    image:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2018",
    title: "Global Trade Expansion",
    text: "Expanded business into international markets with strong logistics network.",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2021",
    title: "Shipping & Logistics Growth",
    text: "Strengthened shipping operations, warehousing, and supply chain systems.",
    image:
    "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    year: "2026",
    title: "Global Export Leader",
    text: "Recognized as a trusted Indian export company with global presence.",
    image:
      "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80",
  },
];

const leftAnim = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const rightAnim = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const JourneyTimeline = () => {
  return (
    <Box sx={{ py: 12, bgcolor: "background.default" }}>
      <Container maxWidth="lg">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
            }}
          >
            Our Journey
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: 6,
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            From India’s strong trade roots to global export excellence,
            our journey reflects trust, quality, and international growth.
          </Typography>
        </motion.div>

        {/* TIMELINE */}
        <Box>

          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={isLeft ? leftAnim : rightAnim}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isLeft ? "row" : "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 5,
                    mb: 8,
                  }}
                >

                  {/* TEXT */}
                  <Paper
                    elevation={3}
                    sx={{
                      flex: 1,
                      p: 4,
                      borderRadius: 4,
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.03)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        mb: 1,
                        fontSize: "16px",
                      }}
                    >
                      {item.year}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Paper>

                  {/* IMAGE */}
                  <Box
                    sx={{
                      flex: 1,
                      height: 280,
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                      transition: "0.3s",
                      "&:hover img": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "0.5s",
                      }}
                    />
                  </Box>

                </Box>
              </motion.div>
            );
          })}

        </Box>
      </Container>
    </Box>
  );
};

export default JourneyTimeline;