import React from "react";
import { Box } from "@mui/material";

// Import your components
import QAHero from "../../components/Services/QACoaching/QAHero";
import QAReliableSolutions from "../../components/Services/QACoaching/QAReliableSolutions";
import QAResultsFromTeams from "../../components/Services/QACoaching/QAResultsFromTeams";
import QAToolsSection from "../../components/Services/QACoaching/QAToolSection";
import QACallToActionSection from "../../components/Services/QACoaching/QACallToActionSection";

const QACoaching: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
     <QAHero />
        <QAReliableSolutions />
        <QAResultsFromTeams />
        <QAToolsSection />
        <QACallToActionSection />
    </Box>
  );
};

  export default QACoaching;
