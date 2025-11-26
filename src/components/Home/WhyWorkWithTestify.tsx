import {
  Box,
  Typography,
  Paper,
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
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "60px",
        pb: "80px",
      }}
    >
      {/* TITLE */}
      <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: "40px" }}>
        Why Work With Testify
      </Typography>

      {/* TOP ROW */}
      <Box sx={{ display: "flex", gap: "24px", mb: "80px" }}>
        {[
          {
            icon: <BoltOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />,
            title: "Super Fast Onboarding",
            text: "Smooth onboarding that lets your team start seeing value quickly.",
          },
          {
            icon: <PublicOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />,
            title: "Global Expertise",
            text: "Top-tier global professionals delivering solutions tailored to your unique product needs.",
          },
          {
            icon: (
              <DescriptionOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />
            ),
            title: "Flexible Contracts",
            text: `• Retainer-Based – ideal for ongoing support or continuous QA
• Project-Based – for well-defined, time-bound projects
• Hybrid – for evolving projects needing flexible scope and pricing`,
            preserve: true,
          },
          {
            icon: <TrendingUpOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />,
            title: "Proven Results",
            text: "Over 300 clients, 72+ product launches, and a 100% satisfaction rate.",
          },
        ].map((item, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              width: "230px",
              p: "24px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
          >
            {item.icon}

            <Typography sx={{ fontSize: "17px", fontWeight: 600, mt: 2, mb: 1 }}>
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#4b5563",
                whiteSpace: item.preserve ? "pre-line" : "normal",
              }}
            >
              {item.text}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* SERVICES SECTION */}
      <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
        Our Services
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          maxWidth: "550px",
          mt: "8px",
          mb: "40px",
          color: "#4b5563",
          fontSize: "15px",
        }}
      >
        End-to-end quality engineering solutions tailored to your product's
        unique requirements.
      </Typography>

      {/* BOTTOM ROW */}
      <Box sx={{ display: "flex", gap: "24px" }}>
        {[
          {
            icon: <ShieldOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />,
            title: "Software Testing",
            text: "Comprehensive testing services including functional, performance, security, and automation testing to ensure flawless product delivery.",
          },
          {
            icon: (
              <BusinessCenterOutlined
                sx={{ fontSize: 34, color: "#4f7df3" }}
              />
            ),
            title: "Project Management",
            text: "Expert project delivery using Agile methodologies, risk management, and resource optimization for successful product launches.",
          },
          {
            icon: <SettingsOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />,
            title: "Process Setup & Team Augmentation",
            text: "Implement best practices, establish QMS, and augment your team with skilled QA professionals to scale efficiently.",
          },
          {
            icon: <SchoolOutlined sx={{ fontSize: 34, color: "#4f7df3" }} />,
            title: "QA Coaching & Corporate Training",
            text: "Upskill your team with customized training programs, workshops, and coaching sessions tailored to your needs.",
          },
        ].map((item, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              width: "230px",
              p: "24px",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}
          >
            {item.icon}

            <Typography sx={{ fontSize: "17px", fontWeight: 600, mt: 2, mb: 1 }}>
              {item.title}
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "#4b5563" }}>
              {item.text}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
