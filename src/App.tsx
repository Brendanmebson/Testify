import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import SoftwareTesting from "./pages/Services/SoftwareTesting";
import ProjectManagement from "./pages/Services/ProjectManagement";
import ProcessSTA from "./pages/Services/ProcessSTA";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BookConsultation from "./pages/BookConsultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout as wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* SERVICES ROUTES */}
          <Route path="/services/softwaretesting" element={<SoftwareTesting />} />
          <Route path="/services/projectmanagement" element={<ProjectManagement />} />
          <Route path="/services/processsta" element={<ProcessSTA />} />

          {/* CASE STUDIES ROUTE */}
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bookconsultation" element={<BookConsultation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
