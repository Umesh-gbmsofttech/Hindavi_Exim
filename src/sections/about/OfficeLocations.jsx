import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const locations = [
  {
    city: "Mumbai",
    type: "Headquarters",
    address: "BKC Export Zone, Mumbai, India",
  },
  {
    city: "Pune",
    type: "Operations Hub",
    address: "MIDC Industrial Area, Pune, India",
  },
  {
    city: "Nashik",
    type: "Manufacturing & Supply",
    address: "Industrial Estate, Nashik, India",
  },
];

const OfficeLocations = () => {
  const [active, setActive] = useState(null);

  return (
    <Box sx={{ py: 12, position: "relative" }}>

      {/* TITLE */}
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Global Presence
      </Typography>

      {/* SNAKE LINE BACKGROUND */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "10%",
          right: "10%",
          height: "4px",
          background:
            "linear-gradient(90deg, #8B5A2B, #D2B48C, #8B5A2B)",
          borderRadius: 5,
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      {/* DOTS ANIMATION */}
      {locations.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 300, 600],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "15%",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#8B5A2B",
            zIndex: 1,
          }}
        />
      ))}

      {/* LOCATIONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
        }}
      >
        {locations.map((loc, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              style={{ flex: 1, minWidth: 250 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "0.4s",
                  boxShadow: isActive
                    ? "0 20px 50px rgba(139,90,43,0.4)"
                    : "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(139,90,43,0.2)",
                  position: "relative",
                  overflow: "hidden",
                  "&:before": isActive
                    ? {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        background: "#8B5A2B",
                      }
                    : {},
                }}
              >
                <CardContent sx={{ py: 4 }}>
                  <LocationOnIcon
                    sx={{
                      fontSize: 40,
                      color: "#8B5A2B",
                      mb: 2,
                    }}
                  />

                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {loc.city}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#8B5A2B", mb: 1 }}
                  >
                    {loc.type}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    {loc.address}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default OfficeLocations;