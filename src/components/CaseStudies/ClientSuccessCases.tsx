import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  Chip,
  TextField,
  Button,
} from "@mui/material";

type CaseStudy = {
  industry: "FinTech" | "Telecom" | "Government";
  duration: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  services: string[];
};

const filters = ["All", "FinTech", "Telecom", "Government"];

const caseStudies: CaseStudy[] = [
  {
    industry: "FinTech",
    duration: "8 months",
    title: "Enterprise Banking Platform Transformation",
    description:
      "A leading digital banking platform was experiencing critical production bugs impacting customer trust and transaction reliability.",
    metrics: [
      { value: "↓ 87%", label: "Production Bugs" },
      { value: "↑ 60%", label: "Release Cycle Time" },
    ],
    services: ["Functional Testing", "Security Testing", "Automation Testing"],
  },
  {
    industry: "Telecom",
    duration: "6 months",
    title: "5G Network Management System Testing",
    description:
      "Launching a new 5G network management system handling millions of concurrent users with real-time monitoring capabilities.",
    metrics: [
      { value: "99.99%", label: "System Uptime" },
      { value: "↑ 300%", label: "Load Capacity" },
    ],
    services: ["Performance Testing", "API Testing", "Process Setup"],
  },
  {
    industry: "Government",
    duration: "12 months",
    title: "Government Citizen Services Portal",
    description:
      "Digital transformation initiative to launch a citizen-facing portal serving millions nationwide.",
    metrics: [
      { value: "100% AA", label: "WCAG Compliance" },
      { value: "98%", label: "UAT Defects Resolved" },
    ],
    services: ["Manual Testing", "Accessibility Testing", "UAT Support"],
  },
  {
    industry: "FinTech",
    duration: "4 months",
    title: "Real-Time Payment Gateway Testing",
    description:
      "Startup building real-time payment gateway required PCI-DSS compliance and ultra-fast processing times.",
    metrics: [
      { value: "PCI-DSS", label: "Compliance" },
      { value: "12k/sec", label: "Transaction Processing" },
    ],
    services: ["Security Testing", "Performance Testing", "Automation"],
  },
  {
    industry: "Telecom",
    duration: "6 months",
    title: "Mobile Customer Experience App",
    description:
      "Redesigned mobile app for 0.8M customers with new features and enhanced user journey stability.",
    metrics: [
      { value: "4.7/5", label: "App Store Rating" },
      { value: "↓ 92%", label: "Crash Rates" },
    ],
    services: ["Mobile App Testing", "QA Coaching", "Automation Testing"],
  },
  {
    industry: "Government",
    duration: "18 months",
    title: "Healthcare Eligibility System Modernization",
    description:
      "Modernizing legacy healthcare eligibility system processing over 2M records daily.",
    metrics: [
      { value: "↑ 75%", label: "Processing Time" },
      { value: "↓ 94%", label: "Application Errors" },
    ],
    services: ["Functional Testing", "Process Setup", "Team Augmentation"],
  },
];

export const ClientSuccessCases = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCases = useMemo(() => {
    return caseStudies.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.industry === activeFilter;

      const matchesSearch = item.services.some((service) =>
        service.toLowerCase().includes(search.toLowerCase())
      );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <Box sx={{ width: "100%", padding: { xs: 2, md: 4 } }}>
      {/* Filter + Search */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {filters.map((filter) => (
            <Chip
              key={filter}
              label={filter}
              onClick={() => setActiveFilter(filter)}
              sx={{
                cursor: "pointer",
                background:
                  activeFilter === filter ? "#2563EB" : "#F1F5F9",
                color: activeFilter === filter ? "#fff" : "#0F172A",
                fontSize: 13,
                fontWeight: 500,
              }}
            />
          ))}
        </Box>

        <TextField
          size="small"
          placeholder="Search by service"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            minWidth: 240,
            background: "#fff",
            borderRadius: "10px",
          }}
        />
      </Box>

      <Typography sx={{ fontSize: 13, color: "#64748B", mb: 2 }}>
        Showing {filteredCases.length} case studies
      </Typography>

      {/* Cards */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {filteredCases.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", md: "calc(33.333% - 16px)" },
              borderRadius: "16px",
              padding: "18px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              transition: "0.25s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip size="small" label={item.industry} />
              <Chip size="small" label={item.duration} variant="outlined" />
            </Box>

            <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
              {item.title}
            </Typography>

            <Typography sx={{ fontSize: 13, color: "#64748B" }}>
              {item.description}
            </Typography>

            <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
              {item.metrics.map((metric, i) => (
                <Box key={i}>
                  <Typography sx={{ color: "#2563EB", fontWeight: 700 }}>
                    {metric.value}
                  </Typography>
                  <Typography sx={{ fontSize: 11 }}>
                    {metric.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {item.services.map((service, i) => (
                <Chip key={i} size="small" label={service} />
              ))}
            </Box>

            <Button
              sx={{
                alignSelf: "flex-start",
                color: "#2563EB",
                textTransform: "none",
                fontSize: 13,
                fontWeight: 500,
                mt: 1,
              }}
            >
              Read Full Case Study →
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
