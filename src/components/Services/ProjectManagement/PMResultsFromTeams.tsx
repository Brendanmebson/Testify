import { Box, Typography, Card, CardContent, Chip, Button } from "@mui/material";
import FormatQuoteOutlined from "@mui/icons-material/FormatQuoteOutlined";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Testify transformed our quality assurance from reactive firefighting to proactive prevention. Our customers now trust every release.",
    name: "Sarah Martinez",
    role: "VP of Engineering, Global FinTech Leader",
    tag: "FinTech",
  },
  {
    quote:
      "The performance testing insights prevented what could have been a catastrophic launch failure. Testify's expertise in telecom testing was invaluable.",
    name: "James Chen",
    role: "Director of Network Operations, Major Telecom Provider",
    tag: "Telecom",
  },
  {
    quote:
      "Testify ensured our portal met the highest standards of accessibility and security. The launch was flawless, and citizens are thrilled with the new services.",
    name: "Robert Thompson",
    role: "Chief Digital Officer, State Government Agency",
    tag: "Government",
  },
];

const TestimonialCard = ({ quote, name, role, tag }: Testimonial) => (
  <Card
    variant="outlined"
    sx={{
      width: 360,
      borderRadius: "16px",
      p: 2,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    }}
  >
    <CardContent>
      <FormatQuoteOutlined sx={{ fontSize: 38, color: "#3A7AFE" }} />

      <Typography sx={{ mt: 1, fontSize: "15px", lineHeight: "22px", color: "#333" }}>
        "{quote}"
      </Typography>

      <Box mt={2}>
        <Typography fontWeight={600}>{name}</Typography>
        <Typography fontSize="14px" color="text.secondary">
          {role}
        </Typography>
      </Box>

      <Chip
        label={tag}
        variant="outlined"
        size="small"
        sx={{ mt: 2, borderRadius: "6px" }}
      />
    </CardContent>
  </Card>
);

export default function PMResultsFromTeams() {
  return (
    <Box
      py={10}
      px={2}
      width="100%"
      display="flex"
      justifyContent="center"
    >
      <Box textAlign="center" maxWidth="1200px" width="100%">

        {/* Section Heading */}
        <Typography variant="h6" fontWeight={700} sx={{ mb: 4 }}>
          Real Results From Product Teams That Choose Quality First
        </Typography>

        {/* Featured Testimonials */}
        <Typography variant="h5" fontWeight={700}>
          Featured Testimonials
        </Typography>

        <Typography color="text.secondary" mt={1} mb={5}>
          What our clients say about working with us
        </Typography>

        <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Box>

        <Button
          variant="outlined"
          sx={{
            mt: 5,
            borderRadius: "8px",
            px: 3,
            py: 1,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          endIcon={<span>→</span>}
        >
          View More
        </Button>

      </Box>
    </Box>
  );
}
