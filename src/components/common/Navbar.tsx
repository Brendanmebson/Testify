import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #F1F5F9",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LOGO */}
        <Typography
          fontWeight={700}
          fontSize={20}
          color="#2563EB"
          letterSpacing={1}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          TESTIFY
        </Typography>

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* HOME */}
          <Typography
            component={Link}
            to="/"
            sx={{
              fontSize: 14,
              textDecoration: "none",
              cursor: "pointer",
              color: "#0F172A",
              "&:hover": { color: "#2563EB" },
            }}
          >
            Home
          </Typography>

          {/* SERVICES WITH DROPDOWN */}
          <Box
            onClick={handleOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              color: "#0F172A",
              "&:hover": { color: "#2563EB" },
            }}
          >
            <Typography fontSize={14}>Services</Typography>
            <KeyboardArrowDownIcon fontSize="small" />
          </Box>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/services/softwaretesting");
              }}
            >
              Software Testing
            </MenuItem>

            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/services/projectmanagement");
              }}
            >
              Project Management
            </MenuItem>
           <MenuItem
              onClick={() => {
                handleClose();
                navigate("/services/processsta");
              }}
            >
              Process Setup & Team Augmentation
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/services/processsta");
              }}
            >
QA Coaching & Corporate Training
            </MenuItem>
          </Menu>

          {/* CASE STUDIES */}
          <Typography
            component={Link}
            to="/casestudies"
            sx={{
              fontSize: 14,
              textDecoration: "none",
              color: "#0F172A",
              cursor: "pointer",
              "&:hover": { color: "#2563EB" },
            }}
          >
            Case Studies
          </Typography>

          {/* ABOUT US */}
          <Typography
            component={Link}
            to="/aboutus"
            sx={{
              fontSize: 14,
              textDecoration: "none",
              color: "#0F172A",
              cursor: "pointer",
              "&:hover": { color: "#2563EB" },
            }}
          >
            About Us
          </Typography>

          {/* BLOG */}
          <Typography
            component={Link}
            to="/blog"
            sx={{
              fontSize: 14,
              textDecoration: "none",
              color: "#0F172A",
              cursor: "pointer",
              "&:hover": { color: "#2563EB" },
            }}
          >
            Blog/Resources
          </Typography>

          {/* CTA BUTTON */}
          <Button
            component={Link}
            to="/bookconsultation"
            sx={{
              background: "#bec6e4ff",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
            }}
          >
            Book Consultation
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
