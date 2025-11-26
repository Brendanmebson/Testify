import { Box, Typography, Button, Card } from "@mui/material";
import TrackChangesOutlined from "@mui/icons-material/TrackChangesOutlined";

export default function PSTAHero() {
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
Process Setup & Team Augmentation                 
 </Typography>

        <Typography
          mt={1}
          fontSize="15px"
          lineHeight="24px"
          color="text.secondary"
          maxWidth="620px"
        >
Improve your operations with simple process changes
        </Typography>
        <Typography
          mt={2}
          fontSize="15px"
          lineHeight="24px"
          color="text.secondary"
          maxWidth="680px"
        >
We help you set up or refine internal processes so your business runs smoother. From workflows to collaboration systems, we design structures that are scalable, efficient, and aligned with your business goals.
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
