import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Case Studies", path: "/casestudies" },
    { label: "About Us", path: "/aboutus" },
    { label: "Blog", path: "/blog" },
  ];

  const servicesLinks = [
    { label: "Software Testing", path: "/services/softwaretesting" },
    { label: "Project Management", path: "/services/projectmanagement" },
    { label: "Process Setup & Team Augmentation", path: "/services/processsta" },
    { label: "QA Coaching & Corporate Training", path: "/services/processsta" },
  ];

  const drawer = (
    <Box sx={{ width: 280, p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography fontWeight={700} fontSize={20} color="primary" letterSpacing={1}>
          TESTIFY
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => { navigate("/"); handleDrawerToggle(); }}>
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
        
        <Typography sx={{ px: 2, mt: 2, mb: 1, fontSize: 12, fontWeight: 700, color: "text.secondary", textTransform: "uppercase" }}>
          Services
        </Typography>
        {servicesLinks.map((service) => (
          <ListItem key={service.label} disablePadding>
            <ListItemButton onClick={() => { navigate(service.path); handleDrawerToggle(); }}>
              <ListItemText primary={service.label} primaryTypographyProps={{ fontSize: 14 }} />
            </ListItemButton>
          </ListItem>
        ))}

        <Typography sx={{ px: 2, mt: 2, mb: 1, fontSize: 12, fontWeight: 700, color: "text.secondary", textTransform: "uppercase" }}>
          Company
        </Typography>
        {navLinks.filter(link => link.label !== "Home").map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton onClick={() => { navigate(link.path); handleDrawerToggle(); }}>
              <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 4 }}
        onClick={() => { navigate("/bookconsultation"); handleDrawerToggle(); }}
      >
        Book Consultation
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
        {/* LOGO */}
        <Typography
          fontWeight={800}
          fontSize={22}
          color="primary"
          letterSpacing={1}
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          TESTIFY
        </Typography>

        {/* DESKTOP NAV LINKS */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Home
            </Typography>

            <Box
              onClick={handleOpen}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <Typography fontSize={14} fontWeight={600}>Services</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {servicesLinks.map((service) => (
                <MenuItem
                  key={service.label}
                  onClick={() => { handleClose(); navigate(service.path); }}
                  sx={{ fontSize: 14 }}
                >
                  {service.label}
                </MenuItem>
              ))}
            </Menu>

            {navLinks.filter(link => link.label !== "Home").map((link) => (
              <Typography
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.label}
              </Typography>
            ))}

            <Button
              variant="contained"
              size="small"
              onClick={() => navigate("/bookconsultation")}
              sx={{ boxShadow: "none", ml: 2 }}
            >
              Book Consultation
            </Button>
          </Box>
        )}

        {/* MOBILE MENU ICON */}
        {isMobile && (
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: { width: 280 } }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
