import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

// ✅ Import scroll components
import ScrollToTop from "./component/ui/ScrollToTop";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5d331d",
      dark: "#2f170d",
      light: "#8f5b41",
    },
    secondary: {
      main: "#d98936",
      dark: "#a9621d",
      light: "#f3c178",
    },
    background: {
      default: "#f8f4ef",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f1a17",
      secondary: "#655750",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Segoe UI", "Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 700 },
    button: {
      fontWeight: 700,
      textTransform: "none",
      letterSpacing: 0.2,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <ScrollToTop />

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />

          {/* Pages */}
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          <Footer />

          
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
