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
  const faqs = [
    {
      q: "What industries do you work with?",
      a: "We specialize in fintech, telecoms, government sectors, and high-growth startups, but our quality engineering principles apply to any product-led company."
    },
    {
      q: "How quickly can you onboard and start testing?",
      a: "We pride ourselves on speed. Typically, we can onboard and begin assessing your product within 3-5 business days."
    },
    {
      q: "Do you offer flexible contract options?",
      a: "Yes, we offer retainer-based, project-based, and hybrid models to fit your specific needs and budget."
    },
    {
      q: "What tools and frameworks do you use?",
      a: "We work with industry-standard tools like Selenium, Playwright, Cypress, JMeter, and many others, tailoring the stack to your existing infrastructure."
    },
    {
      q: "Can you help train our internal QA team?",
      a: "Absolutely. We offer QA coaching and corporate training programs designed to upskill your internal teams and implement best practices."
    },
  ];

  return (
    <Box sx={{ width: "100%", py: { xs: 10, md: 15 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Everything you need to know about working with Testify
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
        </Box>

        <Box sx={{ mt: 4 }}>
          {faqs.map((faq, i) => (
            <Accordion
              key={i}
              elevation={0}
              sx={{
                mb: 2,
                borderRadius: "12px !important",
                border: "1px solid",
                borderColor: "divider",
                "&:before": { display: "none" },
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(4px)",
                "&.Mui-expanded": {
                  borderColor: "primary.main",
                  boxShadow: "0 4px 20px -10px rgba(0,0,0,0.1)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                sx={{ px: 3, py: 1 }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "1.05rem" }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
