import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../hooks/admin/useAuthContext";

// admin pages

import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddDoctor from "../pages/admin/AddDoctor";
import AddDepartment from "../pages/admin/AddDepartment";
import ClientView from "../pages/admin/ClientView";
import DoctorView from "../pages/admin/DoctorView";
import DepartmentView from "../pages/admin/DepartmentView";

function AdminRoutes() {
    const {admin} =useAuthContext()
  return (

    <Routes>
      <Route path="/admin/dashboard" element={admin ? <AdminDashboard /> : <Navigate to={'/admin'}/>} />
      <Route path="/admin" element={!admin ? <AdminLogin /> : <Navigate to={'/admin/dashboard'} />} />
      <Route path="/admin/addDoctor" element={admin ? <AddDoctor /> : <Navigate to ={'/admin'}/>} />
      <Route path="/admin/addDepartment" element={admin ? <AddDepartment /> : <Navigate to ={'/admin'}/>} />
      <Route path="/admin/clientView" element={admin ? <ClientView /> : <Navigate to ={'/admin'}/>} />
      <Route path="/admin/doctorView" element={admin ? <DoctorView /> : <Navigate to ={'/admin'}/>} />
      <Route path="/admin/departmentView" element={admin ? <DepartmentView /> : <Navigate to ={'/admin'}/>} />
    </Routes>
  );
}

export default AdminRoutes;
