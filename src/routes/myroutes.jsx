import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/privatePages/Dashboard";
import CreateTrip from "../pages/privatePages/CreateTrip";
import Layout from "../layout/layout";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/trips" element={<CreateTrip />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
