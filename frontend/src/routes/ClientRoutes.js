import React from "react";
import { Route, Routes } from "react-router-dom";

// Client Pages
import LandingPage from "../pages/client/landingPage";
import Doctors from "../pages/client/Doctors";
import Departments from "../pages/client/Departments";
import Signup from "../pages/client/Signup";
import Login from "../pages/client/Login";
import Verify from "../pages/client/Verify";

function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
}

export default ClientRoutes;
