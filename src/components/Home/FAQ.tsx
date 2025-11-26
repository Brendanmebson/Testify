import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const questions = [
    "What industries do you work with?",
    "How quickly can you onboard and start testing?",
    "Do you offer flexible contract options?",
    "What tools and frameworks do you use?",
    "Can you help train our internal QA team?",
    "What makes Testify different from other QA providers?",
  ];

  return (
    <Box sx={{ width: "100%", py: "60px" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            mb: 1,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: 15,
            color: "#4b5563",
            mb: 4,
          }}
        >
          Everything you need to know about working with Testify
        </Typography>

        {questions.map((q, i) => (
          <Accordion
            key={i}
            disableGutters
            elevation={0}
            sx={{
              borderBottom: "1px solid #e5e7eb",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 15 }}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#4b5563" }}>
                {/* Placeholder answer */}
                We will fill answers once you provide content.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
