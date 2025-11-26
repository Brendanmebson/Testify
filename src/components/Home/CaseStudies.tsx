import { Box, Container, Typography, Paper , Button} from "@mui/material";

export default function CaseStudies() {
  const cases = [
    {
      tag: "FinTech",
      title: "Enterprise Banking Platform Transformation",
      subtitle: "Global FinTech Leader",
      text: "Reduced production bugs by 87% and cut release cycle time by 60% through comprehensive test automation.",
      metrics: [
        { label: "Production Bugs", value: "87%" },
        { label: "Release Cycle Time", value: "60%" },
      ],
    },
    {
      tag: "Telecom",
      title: "5G Network Management System Testing",
      subtitle: "Major Telecom Provider",
      text: "Achieved 99.99% uptime and validated system capacity for 5M concurrent users before nationwide rollout.",
      metrics: [
        { label: "System Uptime", value: "99.99%" },
        { label: "Load Capacity", value: "300%" },
      ],
    },
    {
      tag: "Government",
      title: "Government Citizen Services Portal",
      subtitle: "State Government Agency",
      text: "100% WCAG 2.1 AA compliance achieved with 85% citizen adoption rate within first 6 months.",
      metrics: [
        { label: "WCAG Compliance", value: "100%" },
        { label: "Citizen Adoption", value: "85%" },
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%", py: "60px" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{ textAlign: "center", fontSize: 24, fontWeight: 700 }}
        >
          Featured Case Studies
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "500px",
            mx: "auto",
            mt: 1,
            mb: 5,
            color: "#4b5563",
            fontSize: 15,
          }}
        >
          Real results from product teams that trust Testify
        </Typography>

        <Box sx={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          {cases.map((c, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                width: "300px",
                p: 3,
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  px: 1.5,
                  py: 0.5,
                  fontSize: 12,
                  borderRadius: "8px",
                  bgcolor: "#eef2ff",
                  color: "#4f7df3",
                  mb: 2,
                }}
              >
                {c.tag}
              </Box>

              <Typography sx={{ fontWeight: 600, fontSize: 16, mb: 0.5 }}>
                {c.title}
              </Typography>

              <Typography
                sx={{ color: "#6b7280", fontSize: 14, mb: 1.5 }}
              >
                {c.subtitle}
              </Typography>

              <Typography sx={{ color: "#4b5563", fontSize: 14, mb: 2 }}>
                {c.text}
              </Typography>

              {c.metrics.map((m, i2) => (
                <Box
                  key={i2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: i2 === 0 ? "1px solid #e5e7eb" : "none",
                    pt: i2 === 0 ? 1.5 : 0.5,
                    mt: i2 === 0 ? 1.5 : 0,
                  }}
                >
                  <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
                    {m.label}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 14, color: "#4f7df3" }}
                  >
                    {m.value}
                  </Typography>
                </Box>
              ))}
            </Paper>
          ))}
        </Box>
                    <Button
              variant="outlined"
              sx={{ mt: 5, borderRadius: "8px", px: 3, py: 1 , marginLeft: 'auto', marginRight: 'auto' }}
              endIcon={<span>→</span>}
            >
              View More
            </Button>
      </Container>

    </Box>
  );
}
