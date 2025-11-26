import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Outlet /> {/* React Router renders pages here */}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
