import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ bgcolor: "white", color: "#000" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "primary.main",
              cursor: "pointer",
            }}
            component={NavLink}
            to="/"
          >
            HINDAVI EXIM
          </Typography>

          {/* NAV */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  mx: 1,
                  fontWeight: 500,
                  color: "#333",
                  textTransform: "none",
                  position: "relative",

                  "&.active": {
                    color: "#d45637",
                    fontWeight: 600,
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    bgcolor: "#d45637",
                    transition: "0.3s",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* CTA */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 2,
                textTransform: "none",
                borderRadius: "20px",
                px: 3,
              }}
            >
              Get Quote
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;