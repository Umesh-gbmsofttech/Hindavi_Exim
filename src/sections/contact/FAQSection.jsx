import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What services does Hindavi Exim provide?",
    answer:
      "We specialize in import-export services, global sourcing, logistics management, and supply chain solutions across multiple industries.",
  },
  {
    question: "Which countries do you operate in?",
    answer:
      "We have active business operations in India, UAE, UK, and several other international markets through our partner network.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "You can use our contact form or email us directly with your product requirements. Our team will respond with a detailed quotation.",
  },
  {
    question: "Do you handle bulk shipments?",
    answer:
      "Yes, we specialize in bulk and large-scale shipments with complete logistics and documentation support.",
  },
  {
    question: "How long does international shipping take?",
    answer:
      "Delivery time depends on destination and cargo type, but typically ranges between 7–25 business days.",
  },
];

const FAQSection = () => {
  return (
    <Box sx={{ py: 12, background: "#fafafa" }}>
      <Container maxWidth="md">

        {/* TITLE */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
            color: "primary.main",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* ACCORDIONS */}
        <Stack spacing={2}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                "&:before": { display: "none" },
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  background: "white",
                  px: 3,
                  py: 1.5,
                }}
              >
                <Typography sx={{ fontWeight: "600" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 3,
                  py: 2,
                  color: "text.secondary",
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>

      </Container>
    </Box>
  );
};

export default FAQSection;