import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Rating,
  Paper,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Manish Gawade",
    reviews: "3 reviews",
    rating: 5,
    date: "a month ago",
    content:
      "Before I attend session with OHM, EXIM was myth to me but now realizing it's very easy to be part of EXIM industry. Excellent session.",
  },
  {
    name: "Milon Biswas",
    reviews: "2 reviews",
    rating: 5,
    date: "a month ago",
    content:
      "Detailed practical explanation helped me start my export journey. Truly inspiring coaching experience.",
  },
  {
    name: "Sanchi Borkar",
    reviews: "1 review",
    rating: 5,
    date: "a month ago",
    content:
      "Very informative and simple explanation. Loved the real implementation approach.",
  },
  {
    name: "Digvijay Tekale",
    reviews: "7 reviews • 1 photo",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Course is worth every penny. Great for building strong business fundamentals.",
  },
  {
    name: "Bhagyashree Lanjewar",
    reviews: "3 reviews • 1 photo",
    rating: 5,
    date: "a month ago",
    content:
      "Systematic explanation created confidence in me. Now I feel I can do this.",
  },
  {
    name: "Nilesh Pore",
    reviews: "1 review",
    rating: 5,
    date: "5 days ago",
    content:
      "Great workshop, myths cleared. Looking forward to deeper learning in advanced course.",
  },
];

const TestimonialCard = ({ item, active }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        textAlign: "center",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.85)",
        border: "1px solid #eee",
        transition: "all 0.4s ease",
        transform: active ? "scale(1)" : "scale(0.9)",
        opacity: active ? 1 : 0.5,
        height: '100%', // Ensures cards have consistent height
      }}
    >
      <FormatQuoteIcon
        sx={{
          fontSize: 50,
          color: "#ff8a0020",
          mb: 2,
        }}
      />

      <Typography
        sx={{
          fontStyle: "italic",
          color: "#444",
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        “{item.content}”
      </Typography>

      <Avatar
        sx={{
          bgcolor: "#4e2616",
          width: 56,
          height: 56,
          mx: "auto",
          mb: 1,
          fontWeight: 700,
        }}
      >
        {item.name.charAt(0)}
      </Avatar>

      <Typography sx={{ fontWeight: 800, color: "#2b140b" }}>
        {item.name}
      </Typography>

      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {item.reviews}
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Rating value={item.rating} readOnly size="small" sx={{ color: "#ff8a00" }} />
      </Box>

      <Typography variant="caption" sx={{ color: "text.disabled" }}>
        {item.date}
      </Typography>
    </Paper>
  );
};

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        // CHANGED: split py into pt and pb to remove bottom white space
        pt: { xs: 10, md: 15 }, 
        pb: { xs: 2, md: 4 }, // Minimal bottom padding instead of the full 15
        background: "linear-gradient(180deg, #fdf5f2 0%, #ffffff 100%)",
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
            pb: 0, // Ensure container has no extra bottom padding
            mb: 0  // Ensure no margin bottom
        }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              color: "#ff8a00",
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            SUCCESS STORIES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: "#2b140b",
              mt: 1,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            What Our Entrepreneurs Say
          </Typography>
        </Box>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{ paddingBottom: '40px' }} // Space for card shadows/scaling only
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              {({ isActive }) => (
                <TestimonialCard item={item} active={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;