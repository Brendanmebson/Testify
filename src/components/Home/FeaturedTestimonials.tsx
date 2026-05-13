import { Box, Typography, Card, CardContent, Chip, Button, Grid, Container } from "@mui/material";
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
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote:
      "The performance testing insights prevented what could have been a catastrophic launch failure. Testify's expertise was invaluable.",
    name: "James Chen",
    role: "Director of Ops, Major Telecom Provider",
    tag: "Telecom",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote:
      "Testify ensured our portal met the highest standards of accessibility and security. The launch was flawless, and citizens are thrilled.",
    name: "Robert Thompson",
    role: "Chief Digital Officer, Government Agency",
    tag: "Government",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
];

const TestimonialCard = ({ quote, name, role, tag, avatar }: Testimonial & { avatar: string }) => (
  <Card
    elevation={0}
    sx={{
      height: "100%",
      borderRadius: 4,
      border: "1px solid",
      borderColor: "divider",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 20px -10px rgba(0,0,0,0.1)",
        borderColor: "primary.main",
      },
    }}
  >
    <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", height: "100%" }}>
      <FormatQuoteOutlined sx={{ fontSize: 48, color: "primary.light", opacity: 0.5, mb: 1 }} />

      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          lineHeight: 1.7,
          color: "text.primary",
          mb: 4,
          flexGrow: 1,
        }}
      >
        "{quote}"
      </Typography>

      <Box sx={{ borderTop: "1px solid", borderColor: "divider", pt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Box
            component="img"
            src={avatar}
            alt={name}
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid",
              borderColor: "primary.light",
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
              {name}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600, display: "block" }}>
              {role}
            </Typography>
          </Box>
        </Box>
        <Chip
          label={tag}
          size="small"
          sx={{
            borderRadius: 1,
            fontWeight: 800,
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: 1,
            bgcolor: "rgba(36, 84, 255, 0.08)",
            color: "primary.main",
            border: "none",
          }}
        />
      </Box>
    </CardContent>
  </Card>
);

export default function FeaturedTestimonials() {
  return (
    <Box sx={{ width: "100%", py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Featured Testimonials
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            What our clients say about working with us
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TestimonialCard {...t} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<span>→</span>}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 700,
              color: "text.primary",
              borderColor: "divider",
              backgroundColor: "white",
              "&:hover": {
                borderColor: "primary.main",
                backgroundColor: "rgba(36, 84, 255, 0.04)",
              },
            }}
          >
            Read More Success Stories
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
