import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function HowWeWork() {
  const items = [
    {
      title: "Understanding Needs",
      text: "We gather clear project requirements and goals to ensure we're solving the right problems.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Team Alignment",
      text: "We ensure every stakeholder is aligned from start to finish for seamless execution.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Insights Discovery",
      text: "We identify improvement areas and opportunities to add significant value to your product.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Solution Implementation",
      text: "We execute, optimize, and deliver improvements using state-of-the-art testing methodologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Execution Alignment",
      text: "We review progress continuously and adjust as needed to stay on track with your goals.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Project Handover",
      text: "Final handover with comprehensive documentation and ongoing support when required.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 15 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            How We Work to Ensure Optimal Results
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    backgroundColor: "white",
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 160,
                    width: "100%",
                    backgroundImage: `url(${(item as any).image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mb: 3,
                  }}
                />

                <Box sx={{ px: 4, pb: 4 }}>
                  <CheckCircleOutlineOutlinedIcon
                    sx={{ fontSize: 32, color: "primary.main", mb: 2 }}
                  />

                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
