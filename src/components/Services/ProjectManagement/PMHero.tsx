import { Box, Typography, Button, Card } from "@mui/material";
import TrackChangesOutlined from "@mui/icons-material/TrackChangesOutlined";

export default function PMHero() {
  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(180deg, #F6FAFF 0%, white 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box maxWidth="lg" width="100%">
        <TrackChangesOutlined sx={{ fontSize: 42, color: "#3A7AFE" }} />

        <Typography variant="h5" fontWeight={700} mt={2}>
          Project Management
                  </Typography>

        <Typography
          mt={1}
          fontSize="15px"
          lineHeight="24px"
          color="text.secondary"
          maxWidth="620px"
        >
          Ensure smooth project execution with expert management

        <Typography
          mt={2}
          fontSize="15px"
          lineHeight="24px"
          color="text.secondary"
          maxWidth="680px"
        >
          We deliver projects on time, within budget, and aligned with your business goals. From planning to execution, we coordinate people, timelines, resources, and communication; so your team stays focused and your project moves without delays.        </Typography>

        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            borderRadius: "8px",
            px: 3,
            py: 1.2,
            textTransform: "none",
          }}
        >
          Book a Free Consultation →
        </Button>

        <Card
          variant="outlined"
          sx={{
            mt: 4,
            px: 4,
            py: 3,
            borderRadius: "14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={500}>
            Need clarity before making a decision?
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              px: 2.5,
              py: 0.8,
              textTransform: "none",
            }}
          >
            Send us a quick message →
          </Button>
        </Card>
      </Box>
    </Box>
  );
}
