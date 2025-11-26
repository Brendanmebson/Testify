import React from "react";
import { Box } from "@mui/material";

// Import your components
import PSTAHero from "../../components/Services/ProcessSTA/PSTAHero";
import PSTAReliableSolutions from "../../components/Services/ProcessSTA/PSTAReliableSolutions";
import PSTAResultsFromTeams from "../../components/Services/ProcessSTA/PSTAResultsFromTeams";
import PSTACallToActionSection from "../../components/Services/ProcessSTA/PSTACallToActionSection";
import PSTAToolSection from "../../components/Services/ProcessSTA/PSTAToolSection";

const ProcessSTA: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
     <PSTAHero />
        <PSTAReliableSolutions />
        <PSTAResultsFromTeams />
        <PSTAToolSection />
        <PSTACallToActionSection />
    </Box>
  );
};

  export default ProcessSTA;
