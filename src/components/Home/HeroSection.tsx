import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";

// One single long image for all bank logos
import company from "../../assets/company.png";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#F7FAFF",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Top Badge */}
      <Typography
        sx={{
          color: "#2454FF",
          fontWeight: 700,
          fontSize: ".9rem",
          letterSpacing: 1,
          mb: 1,
        }}
      >
        TESTIFY
      </Typography>

      {/* Headline */}
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          fontWeight: 800,
          maxWidth: 800,
          lineHeight: 1.25,
        }}
      >
        Product Quality Engineering & Software Testing You Can Trust
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          mt: 2,
          maxWidth: 720,
          fontSize: "1.1rem",
          color: "#4B5563",
          lineHeight: 1.8,
        }}
      >
        We help product-led companies; fintechs, telecoms, government teams, and
        high-growth startups, launch reliable, scalable, high-quality software
        through expert QA testing, project management, process setup, and
        coaching.
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
        <Button
          variant="contained"
          endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
          sx={{
            background: "#2454FF",
            textTransform: "none",
            px: 3,
            py: 1.4,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          Book a Free Consultation
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#D0D5DD",
            textTransform: "none",
            px: 3,
            py: 1.4,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "1rem",
            background: "#fff",
          }}
        >
          Drop Us a Message
        </Button>
      </Box>

{/* Stats - FLEX row only */}
<Box
  sx={{
    mt: 6,
    display: "flex",
    gap: 3,
    maxWidth: 1000,
    alignItems: "center",
    marginRight: "auto",  
    marginLeft: "auto",
    width: "100%",
    justifyContent: "space-between", // distribute evenly
  }}
>
  {[
    { value: "30+", label: "Trusted Clients" },
    { value: "72+", label: "Successful Product Launches" },
    { value: "100%", label: "Client Satisfaction" },
  ].map((item, index) => (
    <Card
      key={index}
      elevation={0}
      sx={{
        flex: "1 1 0", // each takes equal space
        p: 3,
        borderRadius: 3,
        textAlign: "center",
        border: "1px solid #E5E7EB",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "#2454FF",
        }}
      >
        {item.value}
      </Typography>

      <Typography sx={{ color: "#6B7280", mt: 1 }}>
        {item.label}
      </Typography>
    </Card>
  ))}
</Box>


      {/* Trusted By */}
      <Typography
        sx={{
          textAlign: "center",
          mt: 6,
          color: "#6B7280",
          fontSize: ".9rem",
        }}
      >
        Trusted by Africa's Leading Product Teams
      </Typography>

      {/* Banks Logos */}
      <Box
        component="img"
        src={company}
        alt="Banks logos"
        sx={{
          color: "#d64343f3",
          alignContent: "center",
          display: "block",
          mx: "auto",
          mt: 3,
          width: "100%",
          maxWidth: 600,
          opacity: 1,
        }}
      />
    </Box>
  );
};

export default HeroSection;
