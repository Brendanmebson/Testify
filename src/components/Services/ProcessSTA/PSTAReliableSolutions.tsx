import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const services = [
  {
    title: "Functional Testing",
    text: "End-to-end functional testing to ensure your applications work correctly across all platforms. We detect issues early, reduce delivery risks, and support your digital roadmap.",
  },
  {
    title: "Performance Testing",
    text: "We simulate real-world usage to verify speed, stability, and scalability. Your systems remain fast and reliable, even during peak load.",
  },
  {
    title: "Security Testing",
    text: "We identify system vulnerabilities, assess risk exposure, and help you strengthen your product against security threats and data breaches.",
  },
];

const ServiceCard = ({ title, text }: { title: string; text: string }) => (
  <Card
    variant="outlined"
    sx={{
      width: 360,
      borderRadius: "14px",
      p: 2,
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    }}
  >
    <CardContent>
      <Typography fontWeight={600} fontSize="16px" mb={1}>
        {title}
      </Typography>
      <Typography color="text.secondary" fontSize="14px" lineHeight="20px">
        {text}
      </Typography>
    </CardContent>
  </Card>
);

export default function PSTAReliableSolutions() {
  return (
    <Box py={10} display="flex" flexDirection="column" alignItems="center" px={2}>
      <Typography variant="h6" fontWeight={700}>
        Reliable Solutions for Every Need
      </Typography>

      <Typography mt={1} mb={5} color="text.secondary">
        These are the core testing services we deliver for product teams.
      </Typography>

      <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </Box>

      <Typography mt={8} mb={2} color="text.secondary">
        Let’s help you choose the right solution for your team.
      </Typography>

      <Button variant="contained" sx={{ borderRadius: "8px", px: 3, py: 1.2 }}>
        Book a Free Consultation →
      </Button>
    </Box>
  );
}
