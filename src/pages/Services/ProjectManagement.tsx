import React from "react";
import { Box } from "@mui/material";

// Import your components
import PMHero from "../../components/Services/ProjectManagement/PMHero";
import PMReliableSolutions from "../../components/Services/ProjectManagement/PMReliableSolutions";
import PMResultsFromTeams from "../../components/Services/ProjectManagement/PMResultsFromTeams";
import PMToolsSection from "../../components/Services/ProjectManagement/PMToolSection";
import PMCallToActionSection from "../../components/Services/ProjectManagement/PMCallToActionSection";

const ProjectManagement: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
     <PMHero />
        <PMReliableSolutions />
        <PMResultsFromTeams />
        <PMToolsSection />
        <PMCallToActionSection />
    </Box>
  );
};

  export default ProjectManagement;
