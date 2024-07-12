import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navheader from "./components/Navigation/Navheader";
import Home from "./components/Home";
import About from "./components/Pages/About";

import Projects from "./components/Pages/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services/Services";
import ServicesDetails from "./components/Pages/Services/ServicesDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Navheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-details" element={<ServicesDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
