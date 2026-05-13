import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";

// One single long image for all bank logos
import company from "../../assets/company.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 15, md: 25 },
        px: { xs: 2, md: 6 },
        textAlign: { xs: "center", md: "left" },
        position: "relative",
        backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.95) 30%, rgba(15, 23, 42, 0.4)), url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        mb: 10,
      }}
    >
      {/* Top Badge */}
      <Typography
        variant="overline"
        sx={{
          color: "primary.light",
          fontWeight: 800,
          letterSpacing: 2,
          mb: 2,
          display: "block",
        }}
      >
        TESTIFY
      </Typography>

      {/* Headline */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.25rem", md: "3.5rem" },
          fontWeight: 900,
          maxWidth: 900,
          lineHeight: 1.1,
          mb: 3,
          mx: { xs: "auto", md: 0 },
        }}
      >
        Product Quality Engineering & Software Testing You Can Trust
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 720,
          fontSize: { xs: "1.05rem", md: "1.2rem" },
          color: "rgba(255, 255, 255, 0.7)",
          lineHeight: 1.8,
          mb: 5,
          mx: { xs: "auto", md: 0 },
        }}
      >
        We help product-led companies launch reliable, scalable, high-quality software
        through expert QA testing, project management, process setup, and
        coaching.
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, mb: 8, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
        <Button
          variant="contained"
          size="large"
          endIcon={<span>→</span>}
          sx={{
            py: 1.8,
            px: 4,
            fontSize: "1rem",
            boxShadow: "0 10px 15px -3px rgba(36, 84, 255, 0.3)",
          }}
        >
          Book a Consultation
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            py: 1.8,
            px: 4,
            fontSize: "1rem",
            backgroundColor: "white",
            borderColor: "divider",
            color: "text.primary",
            "&:hover": {
              borderColor: "primary.main",
              backgroundColor: "rgba(36, 84, 255, 0.04)",
            },
          }}
        >
          Drop Us a Message
        </Button>
      </Box>

      {/* Stats - Grid for better responsiveness */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 3,
          maxWidth: 1100,
          mb: 8,
        }}
      >
        {[
          { value: "30+", label: "Trusted Clients" },
          { value: "72+", label: "Successful Launches" },
          { value: "100%", label: "Satisfaction Rate" },
        ].map((item, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: "center",
              border: "1px solid",
              borderColor: "divider",
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(4px)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                mb: 1,
              }}
            >
              {item.value}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600 }}>
              {item.label}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Trusted By */}
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mb: 4,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Trusted by Africa's Leading Product Teams
      </Typography>

      {/* Banks Logos */}
      <Box
        component="img"
        src={company}
        alt="Partner companies"
        sx={{
          display: "block",
          mx: "auto",
          width: "100%",
          maxWidth: 800,
          filter: "grayscale(100%) invert(100%) opacity(0.6)",
          transition: "all 0.3s ease",
          "&:hover": { filter: "grayscale(0%) invert(0%) opacity(1)" },
        }}
      />
    </Box>
  );
};

export default HeroSection;
