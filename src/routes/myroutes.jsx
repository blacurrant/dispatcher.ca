import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Analytics from "../pages/privatePages/Analytics";
import Home from "../pages/privatePages/Dashboard";
import LoginForm from "../pages/publicPages/Login";
import StartBoarding from "../pages/privatePages/Onboarding/startBoard";
import Campaign from "../pages/privatePages/Campaign";
import UserProfileForm from "../pages/privatePages/Onboarding/boardTwo";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm  />} />
      <Route path="/" element={<Layout />}>
        {/* <Route path="/trips" element={<CreateTrip />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/boarding" element={<UserProfileForm />} />
        <Route path="/campaign" element={<Campaign />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
