import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

interface UnderConstructionProps {
  title: string;
  subtitle?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 520,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2.5,
        }}
      >
        <Box
          sx={{
            background: "#EFF6FF",
            width: 90,
            height: 90,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ConstructionOutlinedIcon
            sx={{ fontSize: 42, color: "#2563EB" }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: 22, md: 28 },
            fontWeight: 700,
            color: "#0F172A",
          }}
        >
          {title} is Under Construction 🚧
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          {subtitle ||
            "We’re building something amazing behind the scenes. This page will be live very soon with content worth the wait."}
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 1,
            background: "#2563EB",
            textTransform: "none",
            borderRadius: "10px",
            px: 3,
            py: 1,
            fontSize: 14,
            "&:hover": {
              background: "#1D4ED8",
            },
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default UnderConstruction;
