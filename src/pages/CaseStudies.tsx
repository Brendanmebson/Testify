
import React from "react";
import { Box } from "@mui/material";

// Import your components
import {ClientSuccessHeader} from "../components/CaseStudies/ClientSuccessHeader";
import CSCallToActionSection from "../components/CaseStudies/CSCallToActionSection";
import {ClientSuccessCases} from "../components/CaseStudies/ClientSuccessCases";

const CaseStudies: React.FC = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
        <ClientSuccessHeader />
        <ClientSuccessCases />
        <CSCallToActionSection />  
    </Box>
  );
};

export default CaseStudies;
