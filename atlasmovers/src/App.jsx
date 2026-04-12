import { BrowserRouter, Routes , Route, useLocation } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Locations from "./pages/Locations";
import CallNow from "./pages/CallNow";
import StrengthsSection from "./pages/StrengthsSection";
import NoPageFound from "./pages/NoPageFound";
// import TopBar from "./navbar/TopBar";
import CopyRight from "./pages/CopyRight";

function Layout() {
  const location = useLocation();

  // Allowed pages for bottom components
  const allowedPaths = ["/", "/contact", "/services", "/feature"];

  const showBottom = allowedPaths.includes(location.pathname);

  return (
    <>
    {/* <TopBar/> */}
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feature" element={<Features />} />

        {/* 404 */}
        <Route path="*" element={<NoPageFound />} />
      </Routes>

      {showBottom && (
        <>
          <StrengthsSection />
          <hr />
          <Locations />
          <CallNow />
          <CopyRight/>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
