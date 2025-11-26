import React from "react";
import { Box } from "@mui/material";

// Import your components
import STSoftwareTestingHero from "../../components/Services/SoftwareTesting/STHero";
import STReliableSolutions from "../../components/Services/SoftwareTesting/STReliableSolutions";
import STResultsFromTeams from "../../components/Services/SoftwareTesting/STResultsFromTeams";
import STToolsSection from "../../components/Services/SoftwareTesting/STToolSection";
import STCallToActionSection from "../../components/Services/SoftwareTesting/STCallToActionSection";

const SoftwareTesting: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
     <STSoftwareTestingHero />
        <STReliableSolutions />
        <STResultsFromTeams />
        <STToolsSection />
        <STCallToActionSection />
    </Box>
  );
};

  export default SoftwareTesting;
