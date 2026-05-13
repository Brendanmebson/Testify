import {
  Box,
  Typography,
  Paper,
  Grid,
  Container,
} from "@mui/material";

// OUTLINE ICONS
import BoltOutlined from "@mui/icons-material/BoltOutlined";
import PublicOutlined from "@mui/icons-material/PublicOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import TrendingUpOutlined from "@mui/icons-material/TrendingUpOutlined";

import ShieldOutlined from "@mui/icons-material/ShieldOutlined";
import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";

export default function WhyWorkWithTestify() {
  const whyItems = [
    {
      icon: <BoltOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Super Fast Onboarding",
      text: "Smooth onboarding that lets your team start seeing value quickly.",
    },
    {
      icon: <PublicOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Global Expertise",
      text: "Top-tier global professionals delivering solutions tailored to your unique product needs.",
    },
    {
      icon: <DescriptionOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Flexible Contracts",
      text: `• Retainer-Based – ideal for ongoing support
• Project-Based – for well-defined projects
• Hybrid – for evolving projects`,
      preserve: true,
    },
    {
      icon: <TrendingUpOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Proven Results",
      text: "Over 300 clients and a 100% satisfaction rate across various industries.",
    },
  ];

  const servicesItems = [
    {
      icon: <ShieldOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Software Testing",
      text: "Comprehensive testing services including functional, performance, security, and automation testing to ensure flawless product delivery.",
    },
    {
      icon: <BusinessCenterOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Project Management",
      text: "Expert project delivery using Agile methodologies, risk management, and resource optimization for successful product launches.",
    },
    {
      icon: <SettingsOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "Process Setup & Team Augmentation",
      text: "Implement best practices, establish QMS, and augment your team with skilled QA professionals to scale efficiently.",
    },
    {
      icon: <SchoolOutlined sx={{ fontSize: 34, color: "primary.main" }} />,
      title: "QA Coaching & Training",
      text: "Upskill your team with customized training programs, workshops, and coaching sessions tailored to your needs.",
    },
  ];

  const renderCards = (items: typeof whyItems | typeof servicesItems) => (
    <Grid container spacing={3} justifyContent="center">
      {items.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              p: 4,
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(4px)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 20px -10px rgba(0,0,0,0.1)",
                borderColor: "primary.light",
              },
            }}
          >
            <Box sx={{ mb: 2 }}>{item.icon}</Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3 }}>
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                whiteSpace: (item as any).preserve ? "pre-line" : "normal",
              }}
            >
              {item.text}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
      {/* WHY SECTION */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Why Work With Testify
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
      </Box>

      {renderCards(whyItems)}

      {/* SERVICES SECTION */}
      <Box sx={{ mt: { xs: 12, md: 18 }, mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
              Our Services
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              End-to-end quality engineering solutions tailored to your product's
              unique requirements. We provide the expertise and tools needed to
              deliver flawless software at scale.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", borderRadius: 2 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071823991-b9671f99c1ae?auto=format&fit=crop&q=80&w=1200"
              alt="Our Services"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {renderCards(servicesItems)}
    </Container>
  );
}
