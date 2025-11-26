import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Card,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const services = [
  "Functional Testing",
  "Security Testing",
  "Automation Testing",
  "Mobile App Testing",
  "UAT Support",
  "Performance Testing",
  "Manual Testing",
  "Process Setup",
  "API Testing",
  "Others",
];

const BookConsultation = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <Box sx={{ background: "#F8FAFC", minHeight: "100vh", pb: 6 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", py: { xs: 4, md: 6 }, px: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 28 }}>
          Book Your Free Consultation
        </Typography>
        <Typography sx={{ color: "#64748B", maxWidth: 700, mx: "auto", mt: 1 }}>
          Let's discuss how we can help you deliver exceptional software quality.
          Fill out the form below and our team will get back to you within 24 hours.
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          px: { xs: 2, md: 6 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* FORM SECTION */}
        <Card
          sx={{
            flex: 2.2,
            p: { xs: 2.5, md: 3 },
            borderRadius: "16px",
            boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
          }}
        >
          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
            Tell Us About Your Project
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#64748B", mb: 3 }}>
            We'll use this information to understand your needs and prepare for our conversation
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <TextField fullWidth label="First Name" required />
            <TextField fullWidth label="Last Name" required />
            <TextField fullWidth label="Corporate Email" required />
            <TextField fullWidth label="Contact Number" required />
            <TextField fullWidth label="Company Website" />
          </Box>

          <TextField
            select
            fullWidth
            label="Estimated Project Duration"
            sx={{ mt: 2 }}
            defaultValue="3-6 Months"
          >
            <MenuItem value="1-3 Months">1-3 Months</MenuItem>
            <MenuItem value="3-6 Months">3-6 Months</MenuItem>
            <MenuItem value="6+ Months">6+ Months</MenuItem>
          </TextField>

          <Typography sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
            Services Interested In
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#64748B", mb: 2 }}>
            Select all that apply
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {services.map((service) => (
              <Box key={service} sx={{ width: { xs: "100%", md: "50%" } }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                  }
                  label={service}
                />
              </Box>
            ))}
          </Box>

<Button
  fullWidth
  variant="contained"
  href="https://calendly.com/judom-2011/testify-consultation-call"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    mt: 3,
    background: "#2563EB",
    borderRadius: "10px",
    py: 1.2,
    fontSize: 14,
    textTransform: "none",
    "&:hover": { background: "#1D4ED8" },
  }}
>
  Submit Consultation Request
</Button>


          <Typography sx={{ mt: 1, fontSize: 12, textAlign: "center", color: "#64748B" }}>
            We'll respond within 24 hours
          </Typography>
        </Card>

        {/* SIDEBAR SECTION */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Get In Touch */}
          <Card sx={{ p: 2.5, borderRadius: "16px" }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Get In Touch</Typography>
            <Typography sx={{ fontSize: 13, color: "#64748B", mb: 2 }}>
              Prefer to reach out directly? Contact us anytime.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <EmailOutlinedIcon fontSize="small" color="primary" />
                <Typography fontSize={13}>hello@testify.com</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <PhoneOutlinedIcon fontSize="small" color="primary" />
                <Typography fontSize={13}>+1 (234) 567-890</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <LocationOnOutlinedIcon fontSize="small" color="primary" />
                <Typography fontSize={13}>Global Team, Remote First</Typography>
              </Box>
            </Box>
          </Card>

          {/* What To Expect */}
          <Card
            sx={{
              p: 2.5,
              borderRadius: "16px",
              background: "#EFF6FF",
            }}
          >
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              What to Expect
            </Typography>

            {[
              "24-hour Response",
              "Discovery Call",
              "Tailored Proposal",
              "No Obligation",
            ].map((item) => (
              <Box
                key={item}
                sx={{ display: "flex", gap: 1.2, mb: 1.5 }}
              >
                <CheckCircleOutlineIcon color="primary" />
                <Typography sx={{ fontSize: 13 }}>{item}</Typography>
              </Box>
            ))}
          </Card>

          {/* Stats */}
          <Card sx={{ p: 2.5, borderRadius: "16px", textAlign: "center" }}>
            {[
              { value: "30+", label: "Trusted Clients" },
              { value: "72+", label: "Successful Launches" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <Box key={stat.label} sx={{ mb: 1.5 }}>
                <Typography sx={{ fontWeight: 700, color: "#2563EB" }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default BookConsultation;
