import React from "react";
import { Route, Routes } from "react-router-dom";

// doctor pages
import DocLogin from "../pages/doctor/docLogin";
import DocHome from "../pages/doctor/DocHome";

function DoctorRoutes() {
  return (
    <Routes>
      <Route path="/doctor/Login" element={<DocLogin />} />
      <Route path="/doctor/Home" element={<DocHome />} />
    </Routes>
  );
}

export default DoctorRoutes;
