import { Box, Container, Typography, Paper, Button, Grid } from "@mui/material";

export default function CaseStudies() {
  const cases = [
    {
      tag: "FinTech",
      title: "Enterprise Banking Platform Transformation",
      subtitle: "Global FinTech Leader",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      text: "Reduced production bugs by 87% and cut release cycle time by 60% through comprehensive test automation and process refinement.",
      metrics: [
        { label: "Production Bugs", value: "-87%" },
        { label: "Cycle Time", value: "-60%" },
      ],
    },
    {
      tag: "Telecom",
      title: "5G Network Management System Testing",
      subtitle: "Major Telecom Provider",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
      text: "Achieved 99.99% uptime and validated system capacity for 5M concurrent users before nationwide rollout.",
      metrics: [
        { label: "System Uptime", value: "99.99%" },
        { label: "Concurrency", value: "5M+" },
      ],
    },
    {
      tag: "Government",
      title: "Government Citizen Services Portal",
      subtitle: "State Government Agency",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      text: "100% WCAG 2.1 AA compliance achieved with 85% citizen adoption rate within the first 6 months of launch.",
      metrics: [
        { label: "Compliance", value: "100%" },
        { label: "Adoption", value: "85%" },
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%", py: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Featured Case Studies
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Real results from product teams that trust Testify
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {cases.map((c, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
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
                <Box
                  sx={{
                    height: 180,
                    width: "100%",
                    backgroundImage: `url(${c.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                
                <Box sx={{ p: 4, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1.5,
                      py: 0.5,
                      fontSize: 10,
                      fontWeight: 800,
                      borderRadius: 1,
                      bgcolor: "primary.light",
                      color: "white",
                      mb: 2,
                      alignSelf: "flex-start",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {c.tag}
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.3 }}>
                    {c.title}
                  </Typography>

                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700, mb: 2, display: "block" }}>
                    {c.subtitle}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                    {c.text}
                  </Typography>

                  <Box sx={{ mt: "auto" }}>
                    <Grid container spacing={2}>
                      {c.metrics.map((m, i2) => (
                        <Grid item xs={6} key={i2}>
                          <Box
                            sx={{
                              pt: 2,
                              borderTop: "1px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 800, lineHeight: 1 }}>
                              {m.value}
                            </Typography>
                            <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
                              {m.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
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
            View All Case Studies
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
