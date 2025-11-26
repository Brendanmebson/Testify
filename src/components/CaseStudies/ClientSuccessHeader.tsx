import { Box, Typography, Card } from "@mui/material";

export const ClientSuccessHeader = () => {
  const stats = [
    { value: "72+", label: "Successful Launches" },
    { value: "87%", label: "Average Bug Reduction" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, #F7FAFF 0%, #FFFFFF 100%)",
        padding: { xs: "32px 16px", md: "64px 40px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, md: 4 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 22, md: 30 },
          fontWeight: 700,
          color: "#0F172A",
        }}
      >
        Client Success Stories
      </Typography>

      <Typography
        sx={{
          maxWidth: 720,
          textAlign: "center",
          fontSize: { xs: 14, md: 16 },
          color: "#64748B",
        }}
      >
        Discover how we've helped FinTech, Telecom, and Government
        organizations deliver exceptional software quality and achieve
        measurable business outcomes.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          width: "100%",
          maxWidth: 900,
          justifyContent: "center",
        }}
      >
        {stats.map((item, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              padding: "16px 20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ fontSize: 22, fontWeight: 700, color: "#2563EB" }}
            >
              {item.value}
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#475569" }}>
              {item.label}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
