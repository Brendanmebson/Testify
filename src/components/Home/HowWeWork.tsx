import { Box, Container, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function HowWeWork() {
  const items = [
    {
      title: "Understanding Needs",
      text: "We gather clear project requirements and goals.",
    },
    {
      title: "Team Alignment",
      text: "We ensure every stakeholder is aligned from start to finish.",
    },
    {
      title: "Insights Discovery",
      text: "We identify improvement areas and opportunities.",
    },
    {
      title: "Solution Implementation",
      text: "We execute, optimize, and deliver improvements.",
    },
    {
      title: "Execution Alignment",
      text: "We review progress continuously and adjust as needed.",
    },
    {
      title: "Project Handover",
      text: "Final handover + ongoing support when required.",
    },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "#f3f7ff", py: "60px" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            mb: 5,
          }}
        >
          How We Work to Ensure Optimal Results
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px 80px",
          }}
        >
          {items.map((item, i) => (
            <Box key={i} sx={{ width: "260px", textAlign: "left" }}>
              <CheckCircleOutlineOutlinedIcon
                sx={{ fontSize: 30, color: "#4f7df3", mb: 1 }}
              />

              <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                {item.title}
              </Typography>

              <Typography sx={{ color: "#4b5563", fontSize: 14 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
